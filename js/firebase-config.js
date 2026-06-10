/**
 * firebase-config.js - Firebase 初期化設定
 *
 * !! セットアップ方法 !!
 * 1. https://console.firebase.google.com/ で Firebase プロジェクトを作成
 * 2. Authentication → GitHub プロバイダーを有効化
 * 3. Firestore Database を作成（リージョン: asia-northeast1 推奨）
 * 4. プロジェクト設定 → ウェブアプリ追加 → 下記の設定値を貼り付け
 *
 * !! Firestore セキュリティルール !!
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     match /problemStats/{problemId} {
 *       allow read: if true;
 *       allow write: if request.auth != null;
 *     }
 *     match /userStats/{uid} {
 *       allow read, write: if request.auth != null && request.auth.uid == uid;
 *     }
 *   }
 * }
 */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBFYfa49MCoXh93NaYi94FRDm2Rt0EYNV8",
  authDomain: "mathsort-507d3.firebaseapp.com",
  projectId: "mathsort-507d3",
  storageBucket: "mathsort-507d3.firebasestorage.app",
  messagingSenderId: "303352342405",
  appId: "1:303352342405:web:de12acebaed2e8b29906ec",
  measurementId: "G-1XV5BGCB34"
};
// ▲ ここまで

// Firebase が設定済みか判定
window.FIREBASE_ENABLED = FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY';

window.db = null;
window.firebaseAuth = null;

if (window.FIREBASE_ENABLED) {
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    window.db = firebase.firestore();
    window.firebaseAuth = firebase.auth();
    console.info('[MathSort] Firebase initialized.');
  } catch (e) {
    console.warn('[MathSort] Firebase initialization failed:', e);
    window.FIREBASE_ENABLED = false;
  }
} else {
  console.info('[MathSort] Firebase not configured – community features disabled.');
}
