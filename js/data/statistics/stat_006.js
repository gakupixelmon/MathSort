// stat_006: ホフディングの不等式 ★5
// Hoeffding の補題と Chernoff bound による導出
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_006',
  title: 'ホフディングの不等式の証明',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 5,
  language: 'proof',
  description: '【定理（ホフディングの不等式）】\n独立な確率変数 $X_1,\\ldots,X_n$ が、ほとんど確実に $a_i\\leq X_i\\leq b_i$ を満たすとする。$S_n=\\sum_{i=1}^nX_i$ とおくと、任意の $t>0$ に対して\n$$P(S_n-E[S_n]\\geq t)\\leq\\exp\\!\\left(-\\frac{2t^2}{\\sum_{i=1}^n(b_i-a_i)^2}\\right)$$\nが成り立つ。したがって\n$$P(|S_n-E[S_n]|\\geq t)\\leq2\\exp\\!\\left(-\\frac{2t^2}{\\sum_{i=1}^n(b_i-a_i)^2}\\right)$$\nである。ここでは、$a\\leq X\\leq b$ かつ $E[X]=0$ なら\n$$E[e^{\\lambda X}]\\leq\\exp\\!\\left(\\frac{\\lambda^2(b-a)^2}{8}\\right)\\qquad(\\lambda\\in\\mathbb{R})$$\nが成り立つというホフディングの補題を用いて証明する。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$Y_i=X_i-E[X_i]$ とおくと、$E[Y_i]=0$ かつ $Y_i$ の値域の幅は $b_i-a_i$ である。また $S_n-E[S_n]=\\sum_{i=1}^nY_i$ である。',
    },
    {
      id: 1,
      code: '$\\lambda>0$ とする。指数関数の単調性と Markov の不等式より、\n$\\displaystyle P\\left(\\sum_{i=1}^nY_i\\geq t\\right)=P\\left(e^{\\lambda\\sum_iY_i}\\geq e^{\\lambda t}\\right)\\leq e^{-\\lambda t}E\\left[e^{\\lambda\\sum_iY_i}\\right]$\nである。',
    },
    {
      id: 2,
      code: '$Y_i$ は独立なので、指数関数の期待値は積に分解される：\n$\\displaystyle E\\left[e^{\\lambda\\sum_iY_i}\\right]=\\prod_{i=1}^nE[e^{\\lambda Y_i}]$。',
    },
    {
      id: 3,
      code: '各 $Y_i$ にホフディングの補題を適用すると、\n$\\displaystyle E[e^{\\lambda Y_i}]\\leq\\exp\\!\\left(\\frac{\\lambda^2(b_i-a_i)^2}{8}\\right)$\nである。',
    },
    {
      id: 4,
      code: '$V=\\sum_{i=1}^n(b_i-a_i)^2$ とおく。以上を合わせると、任意の $\\lambda>0$ について\n$\\displaystyle P(S_n-E[S_n]\\geq t)\\leq\\exp\\!\\left(-\\lambda t+\\frac{\\lambda^2V}{8}\\right)$\nを得る。',
    },
    {
      id: 5,
      code: '右辺の指数 $-\\lambda t+\\lambda^2V/8$ は、$\\lambda=4t/V$ のとき最小になる。',
    },
    {
      id: 6,
      code: 'この $\\lambda$ を代入して、\n$\\displaystyle P(S_n-E[S_n]\\geq t)\\leq\\exp\\!\\left(-\\frac{2t^2}{V}\\right)$\nを得る。',
    },
    {
      id: 7,
      code: '$-Y_i$ も独立で値域の幅は同じだから、同じ議論を $-Y_i$ に適用して\n$\\displaystyle P(S_n-E[S_n]\\leq-t)\\leq\\exp\\!\\left(-\\frac{2t^2}{V}\\right)$\nを得る。',
    },
    {
      id: 8,
      code: '事象 $\\{|S_n-E[S_n]|\\geq t\\}$ は二つの片側事象の和集合なので、和の法則より\n$\\displaystyle P(|S_n-E[S_n]|\\geq t)\\leq2\\exp\\!\\left(-\\frac{2t^2}{V}\\right)$\nとなる。$\\square$',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [1, 4], [3, 4], [4, 5], [5, 6], [6, 7], [6, 8], [7, 8],
  ],
  hints: [
    'まず中心化した変数 $Y_i=X_i-E[X_i]$ に置き換えると、ホフディングの補題をそのまま使えます。',
    '確率の上界は $e^{\\lambda\\sum_iY_i}$ に Markov の不等式を適用して作ります。',
    '独立性で積率母関数を積に分け、最後に $\\lambda$ を最適化します。',
  ],
  explanation: {
    summary: 'ホフディングの不等式は、独立で有界な確率変数の和が平均から大きく外れる確率が、偏差の二乗に対して指数的に小さくなることを示します。',
    points: [
      '中心化により、各変数の平均を $0$ にしてホフディングの補題を適用します。',
      '指数型 Markov 不等式は、確率の評価を積率母関数の評価へ移す標準的な手法です。',
      '独立性があるため、和の指数関数の期待値を各変数の期待値の積へ分解できます。',
      '値域の幅 $b_i-a_i$ だけが上界に現れ、分布の詳細には依存しません。',
      '両側評価は、下側の偏差にも同じ片側評価を適用し、和の法則を使って得られます。',
    ],
    complexity: {
      time: 'Markov の不等式、積率母関数、独立性、ホフディングの補題',
      space: '指数型上界を作り、パラメータ $\\lambda$ を最適化して集中評価を得る',
    },
    tip: 'この不等式では分散ではなく値域の幅だけを使います。各試行の結果が必ず一定区間に収まる状況で、特に扱いやすい集中不等式です。',
  },
});
