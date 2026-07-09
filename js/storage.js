/**
 * storage.js - localStorage管理モジュール
 * ストリーク・クリア状況・ユーザーデータを管理
 */

const Storage = (() => {
  const KEYS = {
    STREAK: 'algosort_streak',
    LAST_PLAYED: 'algosort_last_played',
    MAX_STREAK: 'algosort_max_streak',
    CLEARED: 'algosort_cleared',
    TOTAL_SOLVED: 'algosort_total_solved',
    RECOVERY_TICKETS: 'algosort_recovery_tickets',
    TICKET_PROGRESS: 'algosort_ticket_progress',
    CATCHUP_PROGRESS: 'algosort_catchup_progress',
  };

  function load(key, defaultValue) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  function save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('localStorage save failed:', e);
    }
  }

  // 今日の日付を YYYY-MM-DD 形式で返す
  function todayStr() {
    const d = new Date();
    return formatLocalDate(d);
  }

  function formatLocalDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function parseLocalDate(dateStr) {
    const [y, m, day] = dateStr.split('-').map(Number);
    return new Date(y, m - 1, day);
  }

  function daysBetween(fromDateStr, toDateStr) {
    if (!fromDateStr || !toDateStr) return null;
    const from = parseLocalDate(fromDateStr);
    const to = parseLocalDate(toDateStr);
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((to - from) / msPerDay);
  }

  // ストリーク情報を取得
  function getStreak() {
    return {
      current: load(KEYS.STREAK, 0),
      max: load(KEYS.MAX_STREAK, 0),
      lastPlayed: load(KEYS.LAST_PLAYED, null),
      tickets: load(KEYS.RECOVERY_TICKETS, 0),
      ticketProgress: load(KEYS.TICKET_PROGRESS, 0),
      catchupProgress: load(KEYS.CATCHUP_PROGRESS, 0),
    };
  }

  // 問題クリア時にストリーク更新
  function recordClear(problemId) {
    const today = todayStr();
    const lastPlayed = load(KEYS.LAST_PLAYED, null);
    let streak = load(KEYS.STREAK, 0);
    let maxStreak = load(KEYS.MAX_STREAK, 0);
    let tickets = Math.min(load(KEYS.RECOVERY_TICKETS, 0), 1);
    let ticketProgress = load(KEYS.TICKET_PROGRESS, 0);
    let catchupProgress = load(KEYS.CATCHUP_PROGRESS, 0);
    let streakAdvance = 0;
    const dayGap = lastPlayed ? daysBetween(lastPlayed, today) : null;

    if (lastPlayed === today) {
      // 今日すでにプレイ済み → ストリークはそのまま
    } else if (!lastPlayed || dayGap === null || dayGap <= 0) {
      // 初回
      streak = 1;
      streakAdvance = 1;
    } else if (dayGap === 1) {
      // 昨日もプレイ → 連続継続
      streak += 1;
      streakAdvance = 1;
    } else if (dayGap === 2 && tickets > 0) {
      // 1日だけ忘れた場合は復帰チケットを消費してストリークを維持
      tickets = 0;
      streak += 2;
      streakAdvance = 2;
    } else {
      // 途切れた
      streak = 1;
      ticketProgress = 0;
      catchupProgress = 0;
      streakAdvance = 1;
    }

    if (streakAdvance > 0) {
      // 復帰チケットを持っていない状態で実際に完了した日だけ進捗を進める。
      if (tickets === 0) {
        ticketProgress += 1;
        if (ticketProgress >= 7) {
          tickets = 1;
          ticketProgress = 0;
        }
      } else {
        ticketProgress = 0;
      }

      // 過去最高に届いていないユーザーだけ、15日分の進行ごとに追加+1を判定する。
      if (streak < maxStreak) {
        catchupProgress += streakAdvance;
        while (catchupProgress >= 15) {
          catchupProgress -= 15;
          if (streak < maxStreak) {
            streak += 1;
          }
        }
      } else {
        catchupProgress = 0;
      }
    }

    save(KEYS.LAST_PLAYED, today);
    save(KEYS.STREAK, streak);
    save(KEYS.RECOVERY_TICKETS, tickets);
    save(KEYS.TICKET_PROGRESS, ticketProgress);
    save(KEYS.CATCHUP_PROGRESS, catchupProgress);

    if (streak > maxStreak) save(KEYS.MAX_STREAK, streak);

    // クリア済み問題リストに追加
    const cleared = load(KEYS.CLEARED, {});
    cleared[problemId] = { clearedAt: today };
    save(KEYS.CLEARED, cleared);

    // 総解答数
    const total = load(KEYS.TOTAL_SOLVED, 0);
    save(KEYS.TOTAL_SOLVED, total + 1);

    return streak;
  }

  function getPrevDay(dateStr) {
    const d = parseLocalDate(dateStr);
    d.setDate(d.getDate() - 1);
    return formatLocalDate(d);
  }

  function hasPlayedToday() {
    return load(KEYS.LAST_PLAYED, null) === todayStr();
  }

  function isClear(problemId) {
    const cleared = load(KEYS.CLEARED, {});
    return !!cleared[problemId];
  }

  function getTotalSolved() {
    return load(KEYS.TOTAL_SOLVED, 0);
  }

  // ストリークが今日有効かチェック（日付が変わっていたらリセット）
  function checkStreakValidity() {
    const today = todayStr();
    const lastPlayed = load(KEYS.LAST_PLAYED, null);
    const streak = load(KEYS.STREAK, 0);
    const tickets = load(KEYS.RECOVERY_TICKETS, 0);
    const dayGap = lastPlayed ? daysBetween(lastPlayed, today) : null;

    if (!lastPlayed) return 0;
    if (lastPlayed === today) return streak;
    if (lastPlayed === getPrevDay(today)) return streak; // 昨日までは有効
    if (dayGap === 2 && tickets > 0) return streak; // 復帰チケットで維持可能
    // それ以上前ならストリークリセット
    save(KEYS.STREAK, 0);
    save(KEYS.TICKET_PROGRESS, 0);
    save(KEYS.CATCHUP_PROGRESS, 0);
    return 0;
  }

  // Firebaseから取得したデータでローカルストレージを同期
  function syncFromFirebase(data) {
    if (data.currentStreak !== undefined) save(KEYS.STREAK, data.currentStreak);
    if (data.maxStreak !== undefined) save(KEYS.MAX_STREAK, data.maxStreak);
    if (data.lastPlayed !== undefined) save(KEYS.LAST_PLAYED, data.lastPlayed);
    if (data.totalClears !== undefined) save(KEYS.TOTAL_SOLVED, data.totalClears);
    if (data.recoveryTickets !== undefined) save(KEYS.RECOVERY_TICKETS, Math.min(data.recoveryTickets, 1));
    if (data.ticketProgress !== undefined) save(KEYS.TICKET_PROGRESS, data.ticketProgress);
    if (data.catchupProgress !== undefined) save(KEYS.CATCHUP_PROGRESS, data.catchupProgress);
    if (data.clearedIds && Array.isArray(data.clearedIds)) {
      const cleared = load(KEYS.CLEARED, {});
      data.clearedIds.forEach(id => { cleared[id] = cleared[id] || { clearedAt: todayStr() } });
      save(KEYS.CLEARED, cleared);
    }
  }

  return { getStreak, recordClear, isClear, getTotalSolved, checkStreakValidity, syncFromFirebase, hasPlayedToday };
})();
