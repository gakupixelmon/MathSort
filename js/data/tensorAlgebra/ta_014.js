// ta_014: 係数体の制限による次元の積公式 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_014',
  title: '係数体の制限と次元の積公式',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理（制限による次元の積公式）】\n体 $L$ が体 $K$ の有限次拡大（$[L:K] < \\infty$）であるとし、$V$ を $L$ 上の $m$ 次元ベクトル空間とする。$V$ の係数体を $K$ に制限したとき、$K$ 上のベクトル空間としての $V$ の次元が $\\dim_K(V) = [L:K] \\cdot m$ となることを証明せよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$V$ の $L$-基底を $\\{f_1, f_2, \\dots, f_m\\}$、$L$ の $K$-基底を $\\{\\alpha_1, \\alpha_2, \\dots, \\alpha_d\\}$ とする（$d = [L:K]$）。', solutionComment: '2つの有限基底を用意する。$d$ は拡大次数の定義から $L$ を $K$ 上のベクトル空間とみたときの次元である。' },
    { id: 1, code: '$V$ の任意の元 $v \\in V$ は $L$-基底で $v = \\sum_{j=1}^{m} c_j f_j$ （$c_j \\in L$）と展開できる。', solutionComment: '$L$-基底の定義から任意の元が一意に展開できる。' },
    { id: 2, code: 'さらに各係数 $c_j \\in L$ は $K$-基底で $c_j = \\sum_{i=1}^{d} a_{ij} \\alpha_i$ （$a_{ij} \\in K$）と展開できる。', solutionComment: '$L$ の $K$-基底を使って、係数をさらに $K$ 上の要素で展開する。' },
    { id: 3, code: '代入することで、$v = \\sum_{j=1}^{m} \\left( \\sum_{i=1}^{d} a_{ij} \\alpha_i \\right) f_j = \\sum_{i=1}^{d} \\sum_{j=1}^{m} a_{ij} (\\alpha_i f_j)$ となる。$a_{ij} \\in K$ であるから、$\\{\\alpha_i f_j\\}_{1 \\le i \\le d, 1 \\le j \\le m}$ が $V$ を $K$ 上で生成する。', solutionComment: 'スカラー倍の結合性と分配性から、2重の展開を整理できる。' },
    { id: 4, code: '次に線形独立性を示す。$\\sum_{i,j} a_{ij}(\\alpha_i f_j) = 0$ （$a_{ij} \\in K$）と仮定すると、$\\sum_{j=1}^{m} \\left( \\sum_{i=1}^{d} a_{ij} \\alpha_i \\right) f_j = 0$ と書ける。', solutionComment: '零の線形結合を $L$-基底に関する展開として読み直す。' },
    { id: 5, code: '$\\{f_j\\}$ が $L$-基底であることから、各括弧の中が $0$ でなければならない。すなわち $\\sum_{i=1}^{d} a_{ij} \\alpha_i = 0$ （各 $j$）が得られる。', solutionComment: '$L$-基底の線形独立性を適用する。' },
    { id: 6, code: '$\\{\\alpha_i\\}$ が $K$-基底であることから $a_{ij} = 0$ （すべての $i, j$）が従う。よって $\\{\\alpha_i f_j\\}$ は $K$-線形独立である。$\\dim_K(V) = d \\cdot m = [L:K] \\cdot \\dim_L(V)$ が示された。 $\\blacksquare$', solutionComment: '$K$-基底の線形独立性を適用すれば、全係数の零が結論できる。' },
  ],
  partialOrder: [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [4, 5], [5, 6]],
  hints: [
    '$V$ の $L$-基底 $\\{f_j\\}$ と、$L$ の $K$-基底 $\\{\\alpha_i\\}$ の2組の基底を用意します。',
    'これらの積 $\\{\\alpha_i f_j\\}$ が $K$ 上の生成系かつ線形独立になることを示します。',
    '線形独立性の証明には、$L$-基底の独立性と $K$-基底の独立性を順番に適用します。',
  ],
  explanation: {
    summary: '係数体の制限の次元公式は「基底の基底」という構造から導かれます。$L$-基底を $K$-基底で再展開すると、$d \\times m$ 個の積 $\\{\\alpha_i f_j\\}$ が $K$-基底になります。これは例えば $\\mathbb{C}^n$ を実ベクトル空間とみると $2n$ 次元（$\\{e_k, i e_k\\}$）になることの一般化です。',
    points: [
      '積 $\\{\\alpha_i f_j\\}$ が $K$-基底になる点が証明の核心です。',
      '生成性・独立性とも「内側の $L$-基底」→「外側の $K$-基底」の順に適用します。',
      '$[\\mathbb{C}:\\mathbb{R}] = 2$ なので、$\\mathbb{C}^n$ を実空間とみると $\\dim_\\mathbb{R} = 2n$ となります。',
    ],
    complexity: { time: '係数体の制限、有限次拡大、次元の積公式', space: '積基底の構成' },
    tip: '同じ論法により、体の拡大次数について「推移公式」$[M:K] = [M:L] \\cdot [L:K]$ も証明できます（$V = M$ とおいた場合がこれに相当します）。',
  },
});
