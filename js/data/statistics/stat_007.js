// stat_007: 条件付き期待値の塔の公式 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_007',
  title: '条件付き期待値の塔の公式',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 4,
  language: 'proof',
  description: '【定理（条件付き期待値の塔の公式）】\n$X$ を可積分確率変数とし、$\\mathcal{G}\\subseteq\\mathcal{H}\\subseteq\\mathcal{F}$ を部分 $\\sigma$-代数とする。このとき\n$$E[\\,E[X\\mid\\mathcal{H}]\\mid\\mathcal{G}]=E[X\\mid\\mathcal{G}]\\qquad\\text{a.s.}$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$Z=E[X\\mid\\mathcal{H}]$、$Y=E[Z\\mid\\mathcal{G}]$ とおく。',
      solutionComment: 'まず中間の条件付き期待値を $Z$、示したい左辺を $Y$ と記号化する。',
    },
    {
      id: 1,
      code: '$Y$ は $\\mathcal{G}$-可測である。',
      solutionComment: '条件付き期待値 $E[Z\\mid\\mathcal{G}]$ の定義に含まれる可測性。',
    },
    {
      id: 2,
      code: '任意の $A\\in\\mathcal{G}$ を取る。$\\mathcal{G}\\subseteq\\mathcal{H}$ より、$A\\in\\mathcal{H}$ でもある。',
      solutionComment: '部分 $\\sigma$-代数の包含関係により、$\\mathcal{G}$ の事象は $\\mathcal{H}$ の事象としても使える。',
    },
    {
      id: 3,
      code: '$Y=E[Z\\mid\\mathcal{G}]$ の定義から\n$\\displaystyle \\int_A Y\\,dP=\\int_A Z\\,dP$\nが成り立つ。',
      solutionComment: '条件付き期待値は、任意の $\\mathcal{G}$-可測事象 $A$ 上で元の変数と積分が一致する。',
    },
    {
      id: 4,
      code: '$A\\in\\mathcal{H}$ かつ $Z=E[X\\mid\\mathcal{H}]$ なので\n$\\displaystyle \\int_A Z\\,dP=\\int_A X\\,dP$\nが成り立つ。',
      solutionComment: '同じ条件付き期待値の特徴づけを、より大きい $\\sigma$-代数 $\\mathcal{H}$ に対して用いる。',
    },
    {
      id: 5,
      code: 'したがって任意の $A\\in\\mathcal{G}$ について\n$\\displaystyle \\int_A Y\\,dP=\\int_A X\\,dP$\nとなる。',
      solutionComment: '前2式を等号でつなぐ。',
    },
    {
      id: 6,
      code: '$Y$ は $\\mathcal{G}$-可測であり、さらに上の積分等式をすべての $A\\in\\mathcal{G}$ で満たす。よって条件付き期待値の一意性より $Y=E[X\\mid\\mathcal{G}]$ a.s. である。',
      solutionComment: '条件付き期待値の特徴づけにより、可測性と全事象上の積分一致があればその条件付き期待値に一致する。',
    },
    {
      id: 7,
      code: 'すなわち\n$\\displaystyle E[\\,E[X\\mid\\mathcal{H}]\\mid\\mathcal{G}]=E[X\\mid\\mathcal{G}]\\quad\\text{a.s.}$\nが成り立つ。$\\square$',
      solutionComment: '$Y$ と $Z$ の定義を戻して結論を得る。',
    },
  ],
  partialOrder: [
    [0, 1], [0, 2], [2, 3], [2, 4], [3, 5], [4, 5], [1, 6], [5, 6], [6, 7],
  ],
  hints: [
    '左辺を $Y=E[E[X\\mid\\mathcal{H}]\\mid\\mathcal{G}]$ とおき、$Y$ が $E[X\\mid\\mathcal{G}]$ の定義を満たすことを示します。',
    '任意の $A\\in\\mathcal{G}$ に対する積分を考えます。$\\mathcal{G}\\subseteq\\mathcal{H}$ なので、$A$ は $\\mathcal{H}$ の事象でもあります。',
    '条件付き期待値は「可測性」と「すべての可測事象上での積分一致」により特徴づけられます。',
  ],
  explanation: {
    summary: '塔の公式は、細かい情報 $\\mathcal{H}$ で一度条件付き期待値を取ったあと、より粗い情報 $\\mathcal{G}$ で再び平均を取ると、最初から $\\mathcal{G}$ で平均を取るのと同じだと述べます。',
    points: [
      '$\\mathcal{G}\\subseteq\\mathcal{H}$ は、$\\mathcal{H}$ の方が $\\mathcal{G}$ より多くの情報を持つことを表します。',
      '証明は左辺が $E[X\\mid\\mathcal{G}]$ の定義を満たすことを確認するだけです。',
      '$\\mathcal{G}$ の事象は $\\mathcal{H}$ の事象でもあるため、二段階の積分一致を連結できます。',
      '特に $\\mathcal{G}=\\{\\varnothing,\\Omega\\}$ とすると、$E[E[X\\mid\\mathcal{H}]]=E[X]$ という通常の塔性質が得られます。',
    ],
    complexity: {
      time: '条件付き期待値、部分 $\\sigma$-代数、可測性、積分による特徴づけ',
      space: '条件付き期待値の定義を2回適用して、任意の $A\\in\\mathcal{G}$ 上の積分を一致させる',
    },
    tip: '「情報を一度細かく見ても、最後に粗い情報だけを残すなら、最初から粗い情報で平均すればよい」と読むと公式の意味をつかみやすくなります。',
  },
});
