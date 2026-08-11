# MathSort - 数学証明並び替えゲーム プロジェクトノート

## 概要

数学証明問題の模範解答をいくつかのブロック（行/チャンク）に分割し、 プレイヤーが正しい順序に並び替えるパズルゲーム。 英語入試の整序英作文問題に近いスタイル。

## プロジェクトパス

`/Users/sotogakuryou/Documents/my_apps/MathSort`

## ターゲットプラットフォーム

1. **ブラウザ（優先）** - PC・スマホ両対応のレスポンシブWebアプリ
2. **Android** - 後からCapacitor等でラップ予定

---

## ゲームモード

### ランダムモード

- 「ランダムに挑戦」→ **難易度選択画面**（★1〜★5）→ その難易度からランダム出題
- 問題がない難易度はComing Soonで薄表示（ロック）

### カテゴリモード

- 分野ごとに問題が整理されている
- 各問題に難易度★表示（★1〜★5）
- 分野ごとに進捗管理

---

## 証明の粗さ方針

- 基本的には数学科的な純粋数学のようにきっちりした論理

---

## 問題表示仕様

- **正解提出後に答え全文を表示**
    - スコアバッジ（S/A/B/C）を同時表示
    - 「結果を見る」ボタンで結果画面へ遷移
- 解説も表示

---

## 問題文の表示

- ゲームヘッダーとは**別カードとして独立表示**
- 紫のアクセントボーダー付きで目立つデザイン
- フォントサイズ15px・行間1.7で読みやすく

---

## 分野一覧（実装予定）
- 最優先で統計学
- 代数学(テンソル代数)
- 幾何学
- 解析学

---

## 難易度システム

- ★1：入門
- ★2：初級
- ★3：中級
- ★4：上級
- ★5：エキスパート

---

## ステージ構成（カテゴリモード）

- 各カテゴリ内に複数のステージ
- 正解率・ヒント使用数でS/A/B/Cランク評価
    - S: ヒント0回
    - A: ヒント1回
    - B: ヒント2回
    - C: ヒント3回以上

---

## ユーザーデータ

- **連続継続日数（ストリーク）** - ホーム画面に表示
- **今日のプレイ状況** - 今日すでにプレイ済みかをホーム画面に表示
- **復帰チケット** - 7日連続完了で1枚付与、最大1枚まで保持。1日だけ完了し忘れた場合に自動消費してストリークを維持
- **キャッチアップボーナス** - 過去最高ストリーク未満のユーザーは、15日分ストリークが進むごとに追加で currentStreak +1
- **端末間同期** - 同じ GitHub アカウントでログインすると、ストリーク・チケット・クリア履歴を Firestore 経由で同期。ログイン時のマージとリアルタイム購読で反映する
- 総解答数
- 最高ストリーク記録

---

## 現在の問題一覧

- **統計学**
  - `stat_001.js` (不偏分散の不偏性の証明)
  - `stat_002.js` (弱大数の法則の証明)
  - `stat_003.js` (中心極限定理の証明 ★4, 特性関数による方針)
  - `stat_004.js` (マルチンゲールの期待値保存 ★3)
  - `stat_005.js` (任意停止定理：有界停止時刻の場合 ★5)
  - `stat_006.js` (ホフディングの不等式の証明 ★5)
  - `stat_007.js` (条件付き期待値の塔の公式 ★4)
  - `stat_008.js` (マルコフの不等式の証明 ★2)
  - `stat_009.js` (Doob のマルチンゲール不等式 ★5)
- **複素関数**
  - `complex_001.js` (Cauchy-Riemann 方程式の必要性 ★2)
  - `complex_002.js` (Liouville の定理 ★3)
  - `complex_003.js` (留数定理 ★4)
  - `complex_004.js` (べき級数の収束半径の公式 ★4)
  - `complex_005.js` (主値積分と元の関数の一致 ★5)
- **制御工学**
  - `modern/ctrl_modern_001.js` (2次線形システムの漸近安定条件 ★3)
  - `modern/ctrl_modern_002.js` (可制御性・可観測性のランク条件 ★4)
  - `modern/ctrl_modern_003.js` (最適レギュレータの導出 ★5)
- **機械学習 (論文)**
  - `2021Cohen/ml_001.js` (二次関数上の勾配降下法の発散条件)
  - `2021Cohen/ml_002.js` (勾配降下法が Edge of Stability で安定化するメカニズム)
  - `2021Cohen/ml_003.js` (Edge of Stability における損失関数の非単調減少)
  - `2025Liu/ml_004.js` (Edge of Stability のミニマリストモデルにおける損失関数の導出とヘッセ行列の性質 - 参考: [[A Minimalist Example]])
  - `2025Liu/ml_005.js` (EoSにおける不安定化と自己安定化のサイクル)
  - `2025Liu/ml_006.js` (Edge of Stability における損失の線形減衰とスパイク現象)
  - `2025Ghosh/ml_007.js` (DLNにおける特異ベクトル整列と特異値ダイナミクスへの簡約)
  - `2025Ghosh/ml_008.js` (EOS後の balancing gap の単調減少)
  - `2025Ghosh/ml_009.js` (DLN beyond EOS における rank-p 2周期部分空間振動 ★5)
- **機械学習 (論文 / In-Context Benign Overfitting)**
  - `inContextBenignOverfitting/ml_010.js` (LGPへのモーメント整合還元 ★4)
  - `inContextBenignOverfitting/ml_011.js` (最小ノルム補間解のリスク分解 ★5)
  - `inContextBenignOverfitting/ml_014.js` (最小ノルム補間解の射影構造 ★3)
  - `inContextBenignOverfitting/ml_015.js` (ノイズ補間項と逆 Gram 行列 ★3)
- **機械学習 (論文 / Trained Transformer Classifiers Generalize)**
  - `trainedTransformerClassifiers/ml_012.js` (Transformer 分類器の汎化誤差分解 ★5)
  - `trainedTransformerClassifiers/ml_013.js` (文脈内のノイズラベルを記憶する機構 ★5)
  - `trainedTransformerClassifiers/ml_016.js` (ラベル反転を含む分類誤差の分解 ★2)
  - `trainedTransformerClassifiers/ml_017.js` (自己相関優勢から全例記憶へ ★3)
- **機械学習 (学習理論)**
  - `theory/ml_theory_001.js` (ラデマッハ複雑度に基づく汎化境界 ★5)
  - `theory/ml_theory_002.js` (マクディアミッドの不等式 ★5)
  - `theory/ml_theory_003.js` (Talagrand の収縮補題 ★5)
  - `theory/ml_theory_004.js` (Vapnik-Chervonenkis の定理 ★5)

---

## フォルダ構成（現在）

（今後実装に伴い更新）

---

## 問題データ形式（JSON）

（今後実装に伴い更新）

---

## 実装メモ

- ドラッグ＆ドロップ：touch対応（スマホ）+ mouse対応（PC）
- ヒント機能：一問ずつヒントを開示、使用回数でランク決定
- 正解チェック：手動チェックボタン + 全ブロック整列時の自動チェック
- **正解判定方式**: 
    - 論理的に等価な並び替えを 完全カバー

---

## Android化計画

- Capacitorを使用してWebアプリをAndroidアプリ化
- `npx cap add android` で追加予定
- プッシュ通知でストリーク維持リマインド

---

## 将来的な機能

- オンラインランキング
- 問題投稿機能（ユーザー作成問題）
- AI難易度自動分類
- タイマーモード（制限時間あり）
- 問題にコメント・解説を追加

---

## 更新履歴

- 2021Cohenの問題（Edge of Stabilityの基礎）に「なぜその発想が思いつくのか」の解説（idea）を追加。
- 2025Liuの問題（Edge of Stabilityのミニマリストモデル）の追加と解説の充実化。
- `stat_003.js`（中心極限定理の証明、特性関数による方針、★4）を追加。
- `stat_004.js`（マルチンゲールの期待値保存、★3）と `stat_005.js`（有界停止時刻に対する任意停止定理、★5）を追加。
- `stat_006.js`（ホフディングの補題を用いたホフディングの不等式の証明、★5）を追加。
- `stat_007.js`（条件付き期待値の塔の公式、★4）を追加。
- `stat_008.js`（マルコフの不等式の証明、★2）を追加。
- 機械学習の「学習理論」サブカテゴリを追加し、ラデマッハ複雑度に基づく汎化境界とマクディアミッドの不等式の証明問題を追加。
- `ml_theory_003.js`（Talagrand の収縮補題、★5）を追加。
- `ml_theory_004.js`（VC 不等式と Sauer の補題による Vapnik-Chervonenkis の定理、★5）を追加。
- `stat_009.js`（Doob のマルチンゲール不等式、★5）を追加。
- `In-Context Benign Overfitting` の論文問題を2問追加（LGPへのモーメント整合還元、最小ノルム補間解のリスク分解）。
- 正解の証明画面で、問題ブロックの `solutionComment` を各該当行の末尾に `∵` 注釈として表示できるようにし、`stat_006.js` に式変形・使用定理の補足を追加。
- 複素関数の証明問題を3問追加（Cauchy-Riemann 方程式の必要性、Liouville の定理、留数定理）。
- `complex_004.js`（べき級数の収束半径の公式、Cauchy-Hadamard の公式、★4）を追加。
- `complex_005.js`（主値積分による関数の復元公式、★5）を追加。
- `Learning Dynamics of Deep Linear Networks Beyond the Edge of Stability` (Ghosh et al., 2025) から論文問題を3問追加。
- ストリークに今日のプレイ状況、復帰チケット、チケット進捗、キャッチアップボーナスを追加。
- カテゴリ選択を階層化（複素関数・統計学・機械学習・制御工学 → 論文/制御理論サブカテゴリ）し、現代制御理論の証明問題を2問追加。
- `ctrl_modern_003.js`（連続時間 LQR における最適レギュレータの導出、★5）を追加。
- ストリーク同期を修正（Firestore ルールの追加、初回ログイン同期、保存キー修正、他端末更新のリアルタイム反映）。
- スマホ側の自動失効判定でクラウド進捗を上書きしないよう、クラウドの `lastPlayed` が新しい場合は更新時刻より優先して同期するよう修正。

---

## GitHub / Vercel

- GitHub: [https://github.com/gakupixelmon/MathSort](https://github.com/gakupixelmon/MathSort)
- Vercel: GitHubリポジトリをVercelに接続するだけで自動デプロイ
    - vercel.jsonで静的サイトとして設定済み
    - ブランチ: main
