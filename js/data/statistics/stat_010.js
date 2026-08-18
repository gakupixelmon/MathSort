// stat_010: Jensen の不等式 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_010',
  title: 'Jensen の不等式の証明',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 3,
  language: 'proof',
  description: '【定理（Jensen の不等式）】\n$\\varphi:\\mathbb R\\to\\mathbb R$ を微分可能な凸関数、$X$ を可積分確率変数で $\\varphi(X)$ も可積分とする。このとき\n$$\\varphi(E[X])\\le E[\\varphi(X)]$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$m=E[X]$ とおく。',
      solutionComment: '比較する接線の接点を、確率変数 $X$ の平均 $m$ に選ぶ。',
    },
    {
      id: 1,
      code: '$\\varphi$ は微分可能な凸関数なので、導関数 $\\varphi\'$ は単調非減少である。',
      solutionComment: '∵ 微分可能な凸関数では、右側の割線の傾きが左側の割線の傾きより小さくならない。',
    },
    {
      id: 2,
      code: '$y\\ge m$ とする。平均値の定理よりある $c\\in[m,y]$ が存在して\n$\\displaystyle \\varphi(y)-\\varphi(m)=\\varphi\'(c)(y-m)$\nとなる。',
      solutionComment: '区間 $[m,y]$ に平均値の定理を適用する。',
    },
    {
      id: 3,
      code: 'ブロック 1 より $\\varphi\'(c)\\ge\\varphi\'(m)$、かつ $y-m\\ge0$ なので\n$\\displaystyle \\varphi(y)\\ge\\varphi(m)+\\varphi\'(m)(y-m)$\nである。',
      solutionComment: '不等式の両辺へ非負の $y-m$ を掛けてよい。',
    },
    {
      id: 4,
      code: '$y<m$ のときも、平均値の定理で得る $c\\in[y,m]$ に対し $\\varphi\'(c)\\le\\varphi\'(m)$ かつ $y-m<0$ であるため、同じ不等式\n$\\displaystyle \\varphi(y)\\ge\\varphi(m)+\\varphi\'(m)(y-m)$\nが成り立つ。',
      solutionComment: '負の $y-m$ を掛けると不等号の向きが反転する点に注意する。',
    },
    {
      id: 5,
      code: 'したがって任意の $y\\in\\mathbb R$ について\n$\\displaystyle \\varphi(y)\\ge\\varphi(m)+\\varphi\'(m)(y-m)$\nが成り立つ。これは接点 $m$ における接線が凸関数のグラフの下にあることを表す。',
      solutionComment: 'ブロック 3 と 4 を合わせ、接線評価を全ての $y$ へ拡張する。',
    },
    {
      id: 6,
      code: 'ブロック 5 で $y=X$ とおけば、ほとんど確実に\n$\\displaystyle \\varphi(X)\\ge\\varphi(m)+\\varphi\'(m)(X-m)$\nである。',
      solutionComment: '確率変数の各実現値に、決定論的な接線評価を適用する。',
    },
    {
      id: 7,
      code: '期待値の単調性と線形性から\n$\\displaystyle E[\\varphi(X)]\\ge\\varphi(m)+\\varphi\'(m)E[X-m]=\\varphi(m)$\nである。',
      solutionComment: '∵ $m=E[X]$ より $E[X-m]=0$。接線の線形項は平均を取ると消える。',
    },
    {
      id: 8,
      code: '$m=E[X]$ を戻して\n$\\displaystyle \\varphi(E[X])\\le E[\\varphi(X)]$\nを得る。$\\square$',
      solutionComment: '凸関数では「平均してから関数を作用させる」値は、「関数を作用させてから平均する」値を超えない。',
    },
  ],
  partialOrder: [
    [0, 2], [0, 3], [0, 4], [0, 7], [1, 3], [1, 4],
    [2, 3], [3, 5], [4, 5], [5, 6], [6, 7], [7, 8],
  ],
  hints: [
    '平均 $m=E[X]$ での接線と、凸関数のグラフを比較します。',
    '導関数の単調性と平均値の定理を、$y\\ge m$ と $y<m$ に分けて使います。',
    '最後に $y=X$ として期待値を取り、$E[X-E[X]]=0$ を使います。',
  ],
  explanation: {
    summary: 'Jensen の不等式は、凸関数が任意の接線より上にあるという幾何学的事実を、確率変数へ適用したものです。',
    points: [
      '証明の核心は $\\varphi(y)\\ge\\varphi(m)+\\varphi\'(m)(y-m)$ という接線評価です。',
      '接点を平均 $m=E[X]$ に選ぶため、期待値を取ると線形項 $\\varphi\'(m)(X-m)$ が消えます。',
      '凹関数では不等号が逆向きになります。例えば $\\varphi(x)=\\log x$ に適用すると $E[\\log X]\\le\\log E[X]$ が得られます。',
      '有限個の重み付き平均に対する Jensen の不等式は、$X$ を離散確率変数とみなした特別な場合です。',
    ],
    complexity: {
      time: '凸関数、平均値の定理、期待値の単調性・線形性',
      space: '接線評価を確率変数に適用し、線形項の平均が消えることを使う',
    },
    tip: '不等式の向きを迷ったら、凸関数ではグラフが弦や接線より上にあることを思い出すと整理できます。',
  },
});
