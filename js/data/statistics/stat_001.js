// stat_001: 不偏分散の不偏性の証明 ★3
// 統計学の古典的定理: E[S^2] = σ^2（S^2 は分母 n-1 の不偏分散）
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_001',
  title: '不偏分散の不偏性の証明',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 3,
  language: 'proof',
  description: '【定理（不偏分散の不偏性）】\n$X_1, X_2, \\ldots, X_n$ を母平均 $\\mu$, 母分散 $\\sigma^2$ の母集団からの無作為標本とする。\n標本平均を $\\bar{X} = \\frac{1}{n}\\sum_{i=1}^{n}X_i$ とし、\n不偏分散を $S^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(X_i - \\bar{X})^2$ と定義するとき、\n$$E[S^2] = \\sigma^2$$\nが成り立つ。すなわち $S^2$ は $\\sigma^2$ の不偏推定量である。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: 'まず $\\sum_{i=1}^{n}(X_i - \\bar{X})^2$ を展開する。',
    },
    {
      id: 1,
      code: '$\\sum_{i=1}^{n}(X_i - \\bar{X})^2 = \\sum_{i=1}^{n}(X_i^2 - 2X_i\\bar{X} + \\bar{X}^2)$',
    },
    {
      id: 2,
      code: '$= \\sum_{i=1}^{n}X_i^2 - 2\\bar{X}\\sum_{i=1}^{n}X_i + n\\bar{X}^2$',
    },
    {
      id: 3,
      code: '$\\sum_{i=1}^{n}X_i = n\\bar{X}$ より、$= \\sum_{i=1}^{n}X_i^2 - n\\bar{X}^2$ ……①',
    },
    {
      id: 4,
      code: '次に①の各項の期待値を求める。$E[X_i^2] = \\mathrm{Var}(X_i) + (E[X_i])^2 = \\sigma^2 + \\mu^2$',
    },
    {
      id: 5,
      code: '$E[\\bar{X}^2] = \\mathrm{Var}(\\bar{X}) + (E[\\bar{X}])^2 = \\frac{\\sigma^2}{n} + \\mu^2$',
    },
    {
      id: 6,
      code: '①の期待値: $E\\left[\\sum_{i=1}^{n}X_i^2 - n\\bar{X}^2\\right] = n(\\sigma^2 + \\mu^2) - n\\left(\\frac{\\sigma^2}{n} + \\mu^2\\right)$',
    },
    {
      id: 7,
      code: '$= n\\sigma^2 + n\\mu^2 - \\sigma^2 - n\\mu^2 = (n-1)\\sigma^2$',
    },
    {
      id: 8,
      code: 'したがって $E[S^2] = \\frac{1}{n-1} \\cdot (n-1)\\sigma^2 = \\sigma^2$ $\\square$',
    },
  ],
  // 制約:
  // id:0（展開開始）は最初
  // id:1→2→3 は展開の計算で連続
  // id:4（E[X_i^2]の計算）と id:5（E[X̄^2]の計算）は独立で順序不問
  // id:6 は id:3, id:4, id:5 の全てに依存（①の期待値を代入）
  // id:7→8 は連続
  partialOrder: [
    [0, 1], [1, 2], [2, 3],       // 展開ステップは順序固定
    [3, 4], [3, 5],               // ①を得てから各期待値を計算（4と5はどちらが先でもOK）
    [4, 6], [5, 6],               // 両方の期待値を得てから①の期待値を計算
    [6, 7], [7, 8],               // 計算の整理→結論
  ],
  hints: [
    'まず $(X_i - \\bar{X})^2$ の二乗を展開して $\\sum X_i = n\\bar{X}$ を使って簡約化しましょう',
    '$E[X_i^2]$ と $E[\\bar{X}^2]$ はそれぞれ $\\mathrm{Var}(\\cdot) + (E[\\cdot])^2$ で計算できます。この2つの計算は独立です',
    '①の期待値に $E[X_i^2]$ と $E[\\bar{X}^2]$ を代入すると $(n-1)\\sigma^2$ が得られます',
  ],
  explanation: {
    summary: '$S^2 = \\frac{1}{n-1}\\sum(X_i - \\bar{X})^2$ が $\\sigma^2$ の不偏推定量であること、すなわち分母が $n$ ではなく $n-1$（ベッセルの補正）であるべき理由を示す古典的な証明です。',
    points: [
      '$(X_i - \\bar{X})^2$ の展開では $\\sum X_i = n\\bar{X}$ を使って $\\sum X_i^2 - n\\bar{X}^2$ に帰着させます',
      '$E[X_i^2] = \\sigma^2 + \\mu^2$ は公式 $\\mathrm{Var}(X) = E[X^2] - (E[X])^2$ の変形です',
      '$\\mathrm{Var}(\\bar{X}) = \\sigma^2/n$ は独立同分布の性質: $\\mathrm{Var}\\left(\\frac{1}{n}\\sum X_i\\right) = \\frac{1}{n^2} \\cdot n\\sigma^2$ から従います',
      '$E[X_i^2]$ と $E[\\bar{X}^2]$ の計算は独立に行えるため、順序を入れ替えても証明は成立します',
      '分母を $n$ にすると $E[\\tilde{S}^2] = \\frac{n-1}{n}\\sigma^2 \\neq \\sigma^2$ となり、バイアスが生じます。これが「ベッセルの補正」$(n-1)$ の由来です',
    ],
    complexity: { time: '帰納的な計算', space: '基礎的な確率論の知識' },
    tip: '不偏推定量は「推定量の期待値がパラメータに一致する」性質です。ただし不偏性は推定量の「良さ」の一指標に過ぎず、一致性や有効性も重要です。特に正規母集団では分散の一様最小分散不偏推定量（UMVUE）は $S^2$ そのものです。',
  },
});
