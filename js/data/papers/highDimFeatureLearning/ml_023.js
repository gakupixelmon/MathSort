// ml_023: High-dimensional Asymptotics of Feature Learning - Theorem 11 による下界突破 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_023',
  title: '大きい学習率で固定カーネル下界を越える条件',
  category: 'papers_high_dim_feature_learning',
  categoryLabel: '機械学習 / 論文 / High-dimensional Feature Learning',
  difficulty: 5,
  language: 'proof',
  description: '【Theorem 11 の帰結】\n固定特徴・指定クラスのカーネル推定器の比較下界を $L=\\lVert P_{>1}f^\\ast\\rVert_{L^2}^2$ とする。大きい学習率で一回更新した特徴に対し、Theorem 11 が\n$$R_1(\\lambda)\\le10\\tau^\\ast+C\\left(\\sqrt{\\frac{\\tau^\\ast}{\\psi_1}}+\\frac1{\\psi_1}\\right),\\qquad \\psi_1=\\frac nd$$\nを与えるとする。$L>10\\tau^\\ast$ なら、十分大きい標本比 $\\psi_1$ で $R_1(\\lambda)<L$ となることを示せ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$\\displaystyle \\Delta=L-10\\tau^\\ast$ とおく。仮定より $\\Delta>0$ である。', solutionComment: '固定カーネル下界と大きい学習率の主項の間に正の余裕を取る。' },
    { id: 1, code: '$\\displaystyle \\psi_1\\ge\\frac{16C^2\\tau^\\ast}{\\Delta^2}$ と選べば\n$\\displaystyle C\\sqrt{\\frac{\\tau^\\ast}{\\psi_1}}\\le\\frac\\Delta4$\nである。', solutionComment: '両辺を二乗して、平方根を含む誤差項を $\\Delta/4$ 以下に抑える。' },
    { id: 2, code: '$\\displaystyle \\psi_1\\ge\\frac{4C}{\\Delta}$ とも選べば\n$\\displaystyle \\frac C{\\psi_1}\\le\\frac\\Delta4$\nである。', solutionComment: 'もう一つの有限標本補正項も同じ余裕の中へ入れる。' },
    { id: 3, code: 'したがって\n$\\displaystyle \\psi_1\\ge\\max\\left\\{\\frac{16C^2\\tau^\\ast}{\\Delta^2},\\frac{4C}{\\Delta}\\right\\}$\nなら、二つの補正項の和は高々 $\\Delta/2$ である。', solutionComment: '二つの十分条件を同時に満たすため、下限の最大値を取る。' },
    { id: 4, code: 'Theorem 11 の上界とブロック 3 より\n$\\displaystyle R_1(\\lambda)\\le10\\tau^\\ast+\\frac\\Delta2=L-\\frac\\Delta2<L$\nとなる。$\\square$', solutionComment: '特徴学習後のリッジ推定器が、比較対象の固定カーネル下界より小さいリスクを持つことが分かる。' },
  ],
  partialOrder: [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]],
  hints: [
    '下界と主項の差を正の量 $\\Delta$ と置きます。',
    '平方根を含む項と $1/\\psi_1$ の項を、それぞれ $\\Delta/4$ 以下にします。',
    '最後に Theorem 11 の上界へ代入します。',
  ],
  explanation: {
    summary: 'Theorem 11 の上界で重要なのは、近似誤差 $\\tau^\\ast$ が固定カーネルの非線形残差 $L$ より十分小さければ、標本比を大きくして比較下界を厳密に越えられる点です。',
    points: [
      'これは exact asymptotics ではなく、oracle 的な係数構成とリッジ最適性から得る上界を使った分離結果です。',
      '大きい学習率で得られる平滑化 single-index 特徴が、教師をどれほど近似できるかが $\\tau^\\ast$ に集約されます。',
      '論文の主張は指定された教師・活性化・スケーリングのもとでの比較であり、任意の大きい学習率が常に有利という意味ではありません。',
    ],
    complexity: { time: '漸近評価、誤差上界、近似誤差、標本比', space: '正の余裕を取り、有限標本補正をその余裕以下へ抑える' },
    tip: '上界から性能分離を示すときは、比較したい下界との差を先に正の余裕として定義し、各誤差項をその一部以下に割り当てます。',
  },
});
