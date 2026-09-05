// ta_013: 係数体の拡大による次元の保存 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_013',
  title: '係数体の拡大と次元の保存',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理】\n体 $K$ 上の $n$ 次元ベクトル空間 $V$ と、$K$ の拡大体 $L$ に対して、係数体の拡大 $V_L = L \\otimes_K V$ を考える。このとき、$L$ 上のベクトル空間としての $V_L$ の次元が元の次元 $n$ に等しい、すなわち $\\dim_L(V_L) = n$ を証明せよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$V$ の $K$-基底を $\\{e_1, e_2, \\dots, e_n\\}$ とする。', solutionComment: '有限次元であるという仮定から、基底を選ぶことができる。' },
    { id: 1, code: '$V_L = L \\otimes_K V$ の元はテンソル積の定義から $\\sum_k c_k \\otimes e_k$ （$c_k \\in L$）という形で表せる。したがって、$\\{1 \\otimes e_1, 1 \\otimes e_2, \\dots, 1 \\otimes e_n\\}$ が $V_L$ を $L$ 上の線形結合で張ることが分かる。', solutionComment: 'テンソル積の普遍性と基底の展開から、生成系を明示する。' },
    { id: 2, code: '次に、$\\{1 \\otimes e_1, \\dots, 1 \\otimes e_n\\}$ が $L$ 上で線形独立であることを示す。$\\sum_{k=1}^{n} c_k (1 \\otimes e_k) = 0$ （$c_k \\in L$）と仮定する。', solutionComment: '生成系が基底であることを示すには、線形独立性（零和条件 $\Rightarrow$ 全係数が零）を確認する必要がある。' },
    { id: 3, code: 'テンソル積の性質により $c_k (1 \\otimes e_k) = c_k \\otimes e_k$ であるから、$\\sum_{k=1}^{n} c_k \\otimes e_k = 0$ となる。', solutionComment: 'スカラー倍の定義 $\\alpha(c \\otimes v) = (\\alpha c) \\otimes v$ を用いる。' },
    { id: 4, code: 'テンソル積 $L \\otimes_K V$ においてテンソルが $0$ になるのは、その表示が関係式（双線形性）からの帰結による場合のみである。$\\{e_k\\}$ が $K$-基底であることとテンソル積の普遍性から、$c_k = 0$ （$k = 1, \\dots, n$）でなければならない。', solutionComment: '$L \\otimes_K V \\cong L^n$ という自然な同型（$c_k \\otimes e_k$ の組が $L^n$ の成分と対応）からも直接わかる。' },
    { id: 5, code: 'したがって $\\{1 \\otimes e_1, \\dots, 1 \\otimes e_n\\}$ は $L$ 上で線形独立かつ生成系をなす。よって、$\\{1 \\otimes e_k\\}$ は $V_L$ の $L$-基底であり、$\\dim_L(V_L) = n$ が成り立つ。 $\\blacksquare$', solutionComment: '基底の個数が次元に等しいという定義から結論を導く。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
  hints: [
    '$V$ の $K$-基底 $\\{e_1, \\dots, e_n\\}$ を選び、$V_L$ の候補となる $L$-基底 $\\{1 \\otimes e_1, \\dots, 1 \\otimes e_n\\}$ を考えます。',
    'これらが生成系をなすことは、テンソル積の定義から直接わかります。',
    '線形独立性は、零線形結合 $\\sum c_k \\otimes e_k = 0$ から $\\{e_k\\}$ が $K$-基底であることを用いて各 $c_k = 0$ を導きます。',
  ],
  explanation: {
    summary: '係数体を大きくすると「扱える数が増える」ためむしろ表現が豊かになりそうですが、次元は変わりません。元の基底 $\\{e_k\\}$ がそのまま新しい体上の基底として機能するためです。これは係数体の制限の場合（次元が $[L:K]$ 倍になる）と対照的な結果です。',
    points: [
      '$V$ の $K$-基底 $\\{e_k\\}$ は $V_L$ の $L$-基底 $\\{1 \\otimes e_k\\}$ へと自然に対応します。',
      '次元は $\\dim_L(V_L) = \\dim_K(V) = n$ と保存されます。',
      '制限の場合は $\\dim_K(V) = [L:K] \\cdot \\dim_L(V)$ と次元が拡大次数倍になる点が対照的です。',
    ],
    complexity: { time: '係数体の拡大、テンソル積、次元公式', space: '基底の持ち上げ' },
    tip: '$L = \\mathbb{C}$, $K = \\mathbb{R}$, $V = \\mathbb{R}^n$ の場合、$V_\\mathbb{C} = \\mathbb{C} \\otimes_\\mathbb{R} \\mathbb{R}^n \\cong \\mathbb{C}^n$ となり、$\\mathbb{C}$ 上の次元はやはり $n$ のままです。',
  },
});
