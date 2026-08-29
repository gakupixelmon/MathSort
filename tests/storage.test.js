const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const STORAGE_PATH = path.join(__dirname, '..', 'js', 'storage.js');
const STORAGE_SOURCE = fs.readFileSync(STORAGE_PATH, 'utf8');

class MemoryStorage {
  constructor(initial = {}) {
    this.values = new Map(
      Object.entries(initial).map(([key, value]) => [key, JSON.stringify(value)])
    );
  }

  getItem(key) {
    return this.values.has(key) ? this.values.get(key) : null;
  }

  setItem(key, value) {
    this.values.set(key, value);
  }
}

function createStorage(initial, now = '2026-08-30T03:00:00+09:00') {
  const fixedTime = new Date(now).getTime();
  class FakeDate extends Date {
    constructor(...args) {
      super(...(args.length ? args : [fixedTime]));
    }

    static now() {
      return fixedTime;
    }
  }

  const context = {
    window: {},
    localStorage: new MemoryStorage(initial),
    Date: FakeDate,
    console,
  };
  vm.createContext(context);
  vm.runInContext(STORAGE_SOURCE, context, { filename: STORAGE_PATH });
  return context.window.Storage;
}

test('uses one recovery ticket to cover exactly one missed day', () => {
  const storage = createStorage({
    mathsort_last_played: '2026-08-28',
    mathsort_streak: 7,
    mathsort_max_streak: 7,
    mathsort_recovery_tickets: 1,
    mathsort_ticket_progress: 0,
    mathsort_catchup_progress: 0,
  });

  assert.equal(storage.checkStreakValidity(), 8);
  assert.deepEqual(
    {
      current: storage.getStreak().current,
      max: storage.getStreak().max,
      lastPlayed: storage.getStreak().lastPlayed,
      tickets: storage.getStreak().tickets,
    },
    { current: 8, max: 8, lastPlayed: '2026-08-29', tickets: 0 }
  );
  assert.equal(storage.getStreak().lastFreezeDate, '2026-08-29');
  assert.equal(storage.getStreak().freezeActive, true);
});

test('continues the streak when the user clears after a frozen day', () => {
  const storage = createStorage({
    mathsort_last_played: '2026-08-28',
    mathsort_streak: 7,
    mathsort_max_streak: 7,
    mathsort_recovery_tickets: 1,
    mathsort_ticket_progress: 0,
    mathsort_catchup_progress: 0,
  });

  const result = storage.recordClear('stat_001');
  const streak = storage.getStreak();

  assert.equal(result.newStreak, 9);
  assert.equal(streak.lastPlayed, '2026-08-30');
  assert.equal(streak.tickets, 0);
  assert.equal(streak.ticketProgress, 1);
  assert.equal(streak.lastFreezeDate, '2026-08-29');
  assert.equal(streak.freezeActive, true);
});

test('restores a cloud ticket after a premature local expiry', () => {
  const storage = createStorage({
    mathsort_last_played: '2026-08-28',
    mathsort_streak: 7,
    mathsort_max_streak: 7,
    mathsort_recovery_tickets: 0,
    mathsort_ticket_progress: 0,
    mathsort_catchup_progress: 0,
    mathsort_progress_updated_at: 100,
  });

  assert.equal(storage.checkStreakValidity(), 0);

  const streak = storage.syncFromFirebase({
    lastPlayed: '2026-08-28',
    currentStreak: 7,
    maxStreak: 7,
    recoveryTickets: 1,
    ticketProgress: 0,
    catchupProgress: 0,
    progressUpdatedAt: 200,
  });

  assert.equal(streak.current, 8);
  assert.equal(streak.lastPlayed, '2026-08-29');
  assert.equal(streak.tickets, 0);
  assert.equal(streak.lastFreezeDate, '2026-08-29');
  assert.equal(streak.freezeActive, true);
  assert.ok(streak.progressUpdatedAt > 200);
});

test('does not freeze two consecutive missed days with one ticket', () => {
  const storage = createStorage({
    mathsort_last_played: '2026-08-27',
    mathsort_streak: 7,
    mathsort_max_streak: 7,
    mathsort_recovery_tickets: 1,
    mathsort_ticket_progress: 0,
    mathsort_catchup_progress: 0,
  });

  assert.equal(storage.checkStreakValidity(), 0);
  assert.equal(storage.getStreak().tickets, 0);
  assert.equal(storage.getStreak().freezeActive, false);
});

test('stops highlighting a freeze after the following day', () => {
  const storage = createStorage({
    mathsort_last_played: '2026-08-29',
    mathsort_streak: 8,
    mathsort_max_streak: 8,
    mathsort_recovery_tickets: 0,
    mathsort_last_freeze_date: '2026-08-28',
  });

  assert.equal(storage.getStreak().freezeActive, false);
});
