// ta_007: (1,1)型テンソル空間と自己準同型環の同型 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_007',
  title: '(1,1)型テンソル空間と自己準同型環の同型',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理】\n有限次元ベクトル空間 $V$ において、$(1,1)$型テンソル空間 $T^1_1(V) = V \\otimes V^*$ が、自己準同型写像の空間 $\\mathrm{Hom}(V, V)$ と自然に同型であることを証明せよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '自然な写像 $\\Phi: V \\otimes V^* \\to \\mathrm{Hom}(V, V)$ を、任意の $v \\in V$, $f \\in V^*$ および $x \\in V$ に対して\n$\\displaystyle \\Phi(v \\otimes f)(x) = f(x)v$\nと定義する。', solutionComment: 'テンソル積からの写像を構成するため、まずは直積 $V \\times V^*$ 上の双線形写像として定義する。' },
    { id: 1, code: 'この写像は $v$ と $f$ に関して双線形であるため、テンソル積の普遍性により線形写像として well-defined である。', solutionComment: '普遍性により $V \\otimes V^*$ 上の線形写像へと一意に拡張できる。' },
    { id: 2, code: '$V$ の基底を $\\{e_1, \\dots, e_n\\}$ とし、その双対基底を $\\{e^1, \\dots, e^n\\}$ とする。このとき、$\\{e_i \\otimes e^j\\}_{1 \\le i, j \\le n}$ は $V \\otimes V^*$ の基底となる。', solutionComment: '同型であることを示すため、基底がどのように移るかを調べる。' },
    { id: 3, code: '$\\Phi(e_i \\otimes e^j)$ を基底ベクトル $e_k$ に作用させると、\n$\\displaystyle \\Phi(e_i \\otimes e^j)(e_k) = e^j(e_k)e_i = \\delta^j_k e_i$\nとなる。', solutionComment: '双対基底の性質 $e^j(e_k) = \\delta^j_k$ を適用する。' },
    { id: 4, code: 'これは、行列単位 $E_{ij}$（$(i, j)$ 成分のみが1で他が0の行列）に対応する線形写像そのものである。', solutionComment: 'すなわち基底ベクトル $e_j$ を $e_i$ に写し、他の基底ベクトルは $0$ に写す写像である。' },
    { id: 5, code: '$\\{E_{ij}\\}_{1 \\le i, j \\le n}$ は $\\mathrm{Hom}(V, V)$ の基底をなすため、$\\Phi$ は基底を基底に写す。したがって、$\\Phi$ は同型写像である。 $\\blacksquare$', solutionComment: '次元が等しい空間の間で基底を基底に写す線形写像は同型写像となる。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
  hints: [
    'まずは $\\Phi(v \\otimes f)(x) = f(x)v$ のように写像を定義し、それが well-defined な線形写像であることを述べます。',
    '次に、基底 $\{e_i \\otimes e^j\}$ が $\\mathrm{Hom}(V, V)$ のどの元に移るかを確認します。',
    '基底が基底（行列単位 $E_{ij}$）に移ることから、同型であることが結論づけられます。',
  ],
  explanation: {
    summary: '$(1,1)$型テンソル空間 $V \\otimes V^*$ と $\\mathrm{Hom}(V, V)$ の同型は、微分幾何学においてテンソル場を線形変換として解釈する際の基礎となります。',
    points: [
      '$\\Phi(v \\otimes f)(x) = f(x)v$ によって自然な線形写像が定まります。',
      '基底 $\{e_i \\otimes e^j\}$ は行列単位 $E_{ij}$ に対応します。',
      '基底を基底に写すことから全単射性（同型）が従います。',
    ],
    complexity: { time: 'テンソル積の普遍性、双対基底', space: '基底の対応関係' },
    tip: '物理や幾何では、テンソル $T^i_j$ を行列とみなすことがよくありますが、それはこの同型 $\\Phi$ を通じた同一視に他なりません。',
  },
});
