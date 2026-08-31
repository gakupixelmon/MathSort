// ta_008: 対称化作用素のべき等性 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_008',
  title: '対称化作用素のべき等性',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 4,
  language: 'proof',
  description: '【定理】\n体の標数が $0$ または $r$ より大きいとする。対称化作用素 $\\mathcal{S}: V^{\\otimes r} \\to V^{\\otimes r}$ がべき等であること、すなわち $\\mathcal{S}^2 = \\mathcal{S}$ を証明せよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '任意のテンソル $t \\in V^{\\otimes r}$ に対して、$\\mathcal{S}(\\mathcal{S}(t))$ を計算する。定義より、\n$\\displaystyle \\mathcal{S}(\\mathcal{S}(t)) = \\mathcal{S}\\left( \\frac{1}{r!} \\sum_{\\sigma \\in \\mathfrak{S}_r} \\sigma \\cdot t \\right)$', solutionComment: 'まずは内側の $\\mathcal{S}(t)$ を定義に従って展開する。' },
    { id: 1, code: '$\\mathcal{S}$ を再度適用して、\n$\\displaystyle \\mathcal{S}(\\mathcal{S}(t)) = \\frac{1}{r!} \\sum_{\\tau \\in \\mathfrak{S}_r} \\tau \\cdot \\left( \\frac{1}{r!} \\sum_{\\sigma \\in \\mathfrak{S}_r} \\sigma \\cdot t \\right)$\nとなる。', solutionComment: '外側の $\\mathcal{S}$ も定義に従って展開する（置換の変数は $\\tau$ とおく）。' },
    { id: 2, code: '作用の線形性より、定数と和を外に出すと、\n$\\displaystyle \\mathcal{S}^2(t) = \\frac{1}{(r!)^2} \\sum_{\\tau \\in \\mathfrak{S}_r} \\sum_{\\sigma \\in \\mathfrak{S}_r} \\tau \\cdot (\\sigma \\cdot t)$', solutionComment: '和の順序を入れ替え、定数 $1/r!$ をまとめる。' },
    { id: 3, code: '左作用の性質より $\\tau \\cdot (\\sigma \\cdot t) = (\\tau\\sigma) \\cdot t$ であり、\n$\\displaystyle \\mathcal{S}^2(t) = \\frac{1}{(r!)^2} \\sum_{\\tau \\in \\mathfrak{S}_r} \\sum_{\\sigma \\in \\mathfrak{S}_r} (\\tau\\sigma) \\cdot t$\nと書ける。', solutionComment: '群の作用の定義から、連続した作用は群の積による作用と等しい。' },
    { id: 4, code: 'ここで、$\\tau$ を固定したとき、$\\sigma$ が対称群 $\\mathfrak{S}_r$ のすべての元をわたると、積 $\\tau\\sigma$ も $\\mathfrak{S}_r$ のすべての元をちょうど1回ずつわたる。', solutionComment: '群において、任意の元 $\\tau$ を左からかける写像 $L_\\tau(\\sigma) = \\tau\\sigma$ は全単射である（並べ替え定理）。' },
    { id: 5, code: 'すなわち、内側の和は $\\tau$ に依存せず $\\sum_{\\rho \\in \\mathfrak{S}_r} \\rho \\cdot t$ となる。', solutionComment: '$\\rho = \\tau\\sigma$ とおくと、和は $\\mathfrak{S}_r$ 全体にわたる和に書き換えられる。' },
    { id: 6, code: 'したがって、\n$\\displaystyle \\mathcal{S}^2(t) = \\frac{1}{(r!)^2} \\sum_{\\tau \\in \\mathfrak{S}_r} \\left( \\sum_{\\rho \\in \\mathfrak{S}_r} \\rho \\cdot t \\right) = \\frac{1}{(r!)^2} (r!) \\sum_{\\rho \\in \\mathfrak{S}_r} \\rho \\cdot t$', solutionComment: '内側の和が $\\tau$ に依存しないため、外側の和は単に項数が $r!$ 倍されるだけになる。' },
    { id: 7, code: '式を整理すると、\n$\\displaystyle \\mathcal{S}^2(t) = \\frac{1}{r!} \\sum_{\\rho \\in \\mathfrak{S}_r} \\rho \\cdot t = \\mathcal{S}(t)$\nとなり、$\\mathcal{S}^2 = \\mathcal{S}$ が示された。 $\\blacksquare$', solutionComment: '$(r!)/(r!)^2 = 1/r!$ となり、再び元の対称化作用素の定義式と一致する。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]],
  hints: [
    'まずは $\\mathcal{S}(\\mathcal{S}(t))$ の定義式を2つの置換の変数 $\\tau, \\sigma$ を用いて書き下します。',
    '作用の性質 $\\tau \\cdot (\\sigma \\cdot t) = (\\tau\\sigma) \\cdot t$ を使い、和の順番を整理します。',
    '群の並べ替え定理（$\\tau$ を固定したとき、$\\tau\\sigma$ は群全体をわたる）を用いると、内側の和が $\\tau$ に依存しなくなります。',
  ],
  explanation: {
    summary: '対称化作用素 $\\mathcal{S}$ は、テンソルを対称テンソルに射影する演算子です。射影演算子であるため、べき等性 $\\mathcal{S}^2 = \\mathcal{S}$ を満たします。',
    points: [
      '2回の作用は対称群の2重和になります。',
      '左作用の定義 $\\tau \\cdot (\\sigma \\cdot t) = (\\tau\\sigma) \\cdot t$ が重要です。',
      '群の積に関する並べ替え定理により、2重和を分離できます。',
    ],
    complexity: { time: '群の作用、べき等性、射影演算子', space: '群の積と並べ替え' },
    tip: '交代化作用素 $\\mathcal{A}$ についても、全く同様の論法（置換の符号の乗法性 $\\mathrm{sgn}(\\tau\\sigma) = \\mathrm{sgn}(\\tau)\\mathrm{sgn}(\\sigma)$ を用いる）でべき等性が示せます。',
  },
});
