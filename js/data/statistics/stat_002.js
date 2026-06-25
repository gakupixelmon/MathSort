// stat_002: 弱大数の法則の証明（チェビシェフの不等式経由）★3
// 統計学の基礎定理: X̄ →^P μ（標本平均が確率収束する）
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_002',
  title: '弱大数の法則の証明',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 3,
  language: 'proof',
  description: '【定理（弱大数の法則）】\n$X_1, X_2, \\ldots, X_n$ を互いに独立で同一の分布に従う確率変数列とし、\n共通の平均 $\\mu = E[X_i]$、分散 $\\sigma^2 = \\mathrm{Var}(X_i) < \\infty$ をもつとする。\n標本平均を $\\bar{X}_n = \\frac{1}{n}\\sum_{i=1}^{n}X_i$ と定義するとき、\n任意の $\\varepsilon > 0$ に対して\n$$P\\left(|\\bar{X}_n - \\mu| \\geq \\varepsilon\\right) \\to 0 \\quad (n \\to \\infty)$$\nが成り立つ。すなわち $\\bar{X}_n$ は $\\mu$ に確率収束する。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$\\bar{X}_n$ の期待値と分散を求める。独立性と同分布性より、$E[\\bar{X}_n] = \\mu$',
    },
    {
      id: 1,
      code: '$\\mathrm{Var}(\\bar{X}_n) = \\mathrm{Var}\\!\\left(\\frac{1}{n}\\sum_{i=1}^{n}X_i\\right) = \\frac{1}{n^2}\\sum_{i=1}^{n}\\mathrm{Var}(X_i) = \\frac{\\sigma^2}{n}$',
    },
    {
      id: 2,
      code: '【チェビシェフの不等式の適用】任意の確率変数 $Y$ と $\\varepsilon > 0$ に対して $P(|Y - E[Y]| \\geq \\varepsilon) \\leq \\dfrac{\\mathrm{Var}(Y)}{\\varepsilon^2}$',
    },
    {
      id: 3,
      code: '$Y = \\bar{X}_n$ として適用する: $P\\left(|\\bar{X}_n - \\mu| \\geq \\varepsilon\\right) \\leq \\dfrac{\\mathrm{Var}(\\bar{X}_n)}{\\varepsilon^2}$',
    },
    {
      id: 4,
      code: '$\\mathrm{Var}(\\bar{X}_n) = \\dfrac{\\sigma^2}{n}$ を代入する: $P\\left(|\\bar{X}_n - \\mu| \\geq \\varepsilon\\right) \\leq \\dfrac{\\sigma^2}{n\\varepsilon^2}$',
    },
    {
      id: 5,
      code: '$\\sigma^2 < \\infty$, $\\varepsilon > 0$ は固定されているので、$n \\to \\infty$ のとき $\\dfrac{\\sigma^2}{n\\varepsilon^2} \\to 0$',
    },
    {
      id: 6,
      code: '確率は非負なので $0 \\leq P\\left(|\\bar{X}_n - \\mu| \\geq \\varepsilon\\right) \\leq \\dfrac{\\sigma^2}{n\\varepsilon^2} \\to 0$',
    },
    {
      id: 7,
      code: 'はさみうちの原理より $P\\left(|\\bar{X}_n - \\mu| \\geq \\varepsilon\\right) \\to 0$ $(n \\to \\infty)$。すなわち $\\bar{X}_n \\xrightarrow{P} \\mu$ $\\square$',
    },
  ],
  // 制約:
  // id:0（期待値）→ id:1（分散）は順序固定
  // id:2（チェビシェフの不等式の記述）は id:1 より前でも可だが、
  //   適用（id:3）は id:1, id:2 両方に依存
  // id:3 → id:4 → id:5 → id:6 → id:7 は順序固定
  partialOrder: [
    [0, 1],           // 期待値を求めてから分散を求める
    [1, 3],           // 分散を求めてからチェビシェフを適用
    [2, 3],           // チェビシェフの不等式を述べてから適用
    [3, 4],           // 適用してから代入
    [4, 5],           // 代入してから極限を評価
    [5, 6],           // 極限の評価→はさみうちの準備
    [6, 7],           // はさみうちで結論
  ],
  hints: [
    'まず $\\bar{X}_n$ の期待値と分散を $\\mu$, $\\sigma^2$, $n$ で表してみましょう。独立性が分散の計算に使えます',
    'チェビシェフの不等式 $P(|Y - E[Y]| \\geq \\varepsilon) \\leq \\mathrm{Var}(Y)/\\varepsilon^2$ を $Y = \\bar{X}_n$ として適用してください',
    '上界 $\\sigma^2/(n\\varepsilon^2)$ は $n \\to \\infty$ で 0 に収束します。確率の非負性とはさみうちの原理で結論が出ます',
  ],
  explanation: {
    summary: '弱大数の法則は「標本平均が母平均に確率収束する」という統計推定の根拠となる基本定理です。チェビシェフの不等式を使う証明は、正規分布などの仮定なしに有限分散のみで示せる点が重要です。',
    points: [
      '独立確率変数の和の分散は $\\mathrm{Var}\\!\\left(\\sum X_i\\right) = \\sum \\mathrm{Var}(X_i)$ で計算できます（共分散項が消える）',
      'チェビシェフの不等式は $E[Y]$, $\\mathrm{Var}(Y)$ が存在すれば任意の分布に適用可能な汎用的な不等式です',
      '上界 $\\sigma^2/(n\\varepsilon^2)$ が $n \\to \\infty$ で 0 に収束することが確率収束の核心です',
      'はさみうちの原理（スクイーズ定理）: $0 \\leq a_n \\leq b_n \\to 0 \\Rightarrow a_n \\to 0$',
      '強大数の法則（概収束）は弱大数の法則（確率収束）より強い主張です。本証明は弱い方を示しています',
    ],
    complexity: { time: '確率論の基礎（期待値・分散・確率収束の定義）', space: 'チェビシェフの不等式による確率の上界 $\\sigma^2/(n\\varepsilon^2)\\to 0$ とはさみうちの原理' },
    tip: '弱大数の法則が「推定量の一致性」の数学的根拠です。標本サイズ $n$ を大きくすれば標本平均は母平均に近づく、という直感をチェビシェフの不等式で厳密化しています。',
  },
});
