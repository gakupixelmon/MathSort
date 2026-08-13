// ml_theory_005: Sauer-Shelah の補題 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_theory_005',
  title: 'サウアー・シェラハの補題の証明',
  category: 'ml_theory',
  categoryLabel: '機械学習 / 学習理論',
  difficulty: 5,
  language: 'proof',
  description: '【定理（Sauer-Shelah の補題）】\n有限集合 $S=\\{1,\\ldots,m\\}$ 上の集合族 $\\mathcal A\\subseteq2^S$ が VC 次元高々 $d$ を持つとする。すなわち、$d+1$ 個の点からなる部分集合を shattered しない。このとき\n$$|\\mathcal A|\\le\\sum_{j=0}^d\\binom mj$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$B(m,d)=\\sum_{j=0}^d\\binom mj$ とおく。$d\\ge m$ なら\n$\\displaystyle |\\mathcal A|\\le2^m=\\sum_{j=0}^m\\binom mj=B(m,d)$\nである。',
      solutionComment: 'VC 次元の上界が標本サイズ以上なら、全ての部分集合の数 $2^m$ という自明な評価で十分である。',
    },
    {
      id: 1,
      code: '$d=0$ のとき、$\\mathcal A$ はどの1点集合も shattered しないので、全ての集合は各点で同じ包含関係を持つ。よって $|\\mathcal A|\\le1=B(m,0)$ である。',
      solutionComment: '∵ ある点について包含する集合としない集合が両方あれば、その1点集合を shattered してしまう。',
    },
    {
      id: 2,
      code: '以後 $1\\le d<m$ とし、$S\'=S\\setminus\\{m\\}$ とおく。$m$ を含まない集合と含む集合から得られるトレースを\n$\\displaystyle \\mathcal A_0=\\{A\\in\\mathcal A:m\\notin A\\},\\quad \\mathcal A_1=\\{A\\setminus\\{m\\}:A\\in\\mathcal A,\\ m\\in A\\}$\nと定める。',
      solutionComment: '両方とも $S\'$ 上の集合族である。最後の1点 $m$ によって集合族を二つに分ける。',
    },
    {
      id: 3,
      code: '各 $T\\subseteq S\'$ について、$T$ が $\\mathcal A_0\\cup\\mathcal A_1$ に現れるときは1通り、$\\mathcal A_0\\cap\\mathcal A_1$ にも現れるときは追加でもう1通り、$\\mathcal A$ に現れる。したがって\n$\\displaystyle |\\mathcal A|=|\\mathcal A_0\\cup\\mathcal A_1|+|\\mathcal A_0\\cap\\mathcal A_1|$\nである。',
      solutionComment: '∵ 同じトレースが両方の族にあれば、$m$ を含む版と含まない版の2集合が存在する。',
    },
    {
      id: 4,
      code: '$\\mathcal A_0\\cup\\mathcal A_1$ は $\\mathcal A$ を $S\'$ へ制限した集合族なので、VC 次元は高々 $d$ である。',
      solutionComment: '制限後の集合族が $d+1$ 点を shattered すれば、元の集合族も同じ点を shattered してしまう。',
    },
    {
      id: 5,
      code: '$\\mathcal A_0\\cap\\mathcal A_1$ が $d$ 点集合 $U\\subseteq S\'$ を shattered すると仮定する。各 $V\\subseteq U$ について、$V$ を実現するトレースが $\\mathcal A_0$ と $\\mathcal A_1$ の両方に存在する。',
      solutionComment: '交わりに属するトレースは、$m$ を含む集合と含まない集合の両方で実現できる。',
    },
    {
      id: 6,
      code: '前ブロックの二つの実現を使えば、$V$ は $m$ を含まない形で、$V\\cup\\{m\\}$ は $m$ を含む形で実現できる。よって $\\mathcal A$ は $U\\cup\\{m\\}$ を shattered してしまい矛盾する。',
      solutionComment: '∵ $U$ 上の任意のラベル付けに対し、点 $m$ のラベルを $0,1$ のどちらにも選べる。',
    },
    {
      id: 7,
      code: 'したがって $\\operatorname{VCdim}(\\mathcal A_0\\cap\\mathcal A_1)\\le d-1$ である。',
      solutionComment: 'ブロック 5--6 により、交わりが $d$ 点を shattered する可能性は否定された。',
    },
    {
      id: 8,
      code: '$m-1$ に関する帰納法の仮定をブロック 3, 4, 7 へ適用すると\n$\\displaystyle |\\mathcal A|\\le B(m-1,d)+B(m-1,d-1)$\nとなる。',
      solutionComment: '二つのトレース族はいずれも $m-1$ 点上にあり、後者だけVC次元が1下がる。',
    },
    {
      id: 9,
      code: 'Pascal の公式 $\\binom{m-1}{j}+\\binom{m-1}{j-1}=\\binom mj$ より\n$\\displaystyle B(m-1,d)+B(m-1,d-1)=\\sum_{j=0}^d\\binom mj=B(m,d)$\nである。',
      solutionComment: '添字を一つずらして足し合わせると、二項係数の Pascal の公式が各項に適用できる。',
    },
    {
      id: 10,
      code: '基底の場合と帰納ステップを合わせて\n$\\displaystyle |\\mathcal A|\\le\\sum_{j=0}^d\\binom mj$\nが成り立つ。$\\square$',
      solutionComment: '有限VC次元なら、標本上で実現できるラベル付け数は指数関数的でなく多項式的にしか増えない。',
    },
  ],
  partialOrder: [
    [0, 2], [1, 2], [2, 3], [2, 4], [2, 5], [5, 6], [6, 7],
    [3, 8], [4, 8], [7, 8], [8, 9], [9, 10],
  ],
  hints: [
    '最後の点 $m$ を含む集合と含まない集合のトレースへ分けます。',
    '両方に現れるトレースは、点 $m$ のラベルを0と1のどちらにも選べることを意味します。',
    '交わりのVC次元が1下がると示せば、帰納法と Pascal の公式で結論が出ます。',
  ],
  explanation: {
    summary: 'サウアー・シェラハの補題は、有限 VC 次元を持つ仮説クラスが有限標本上で作れるラベル付けの数を多項式的に抑える定理です。',
    points: [
      '最後の点を除いたトレースが片方にしか現れないか、両方に現れるかで数を分解します。',
      '両方に現れるトレース族では、最後の点のラベルを自由に選べるため、そのVC次元は元より1小さくなければなりません。',
      'この次元低下と Pascal の公式が、二項係数の和という形の上界を生みます。',
      'ml_theory_004 では、この補題を成長関数の上界として使い、VC 不等式の右辺を具体化しています。',
    ],
    complexity: {
      time: 'VC 次元、shattering、トレース集合族、二重帰納法、Pascal の公式',
      space: '最後の点でトレース族を分け、交わりだけVC次元が1下がることを示す',
    },
    tip: 'VC 次元の証明では、ある集合を shattered するとは「全ての部分集合を実現できる」ことです。点を1つ増やしたとき、0と1の両方のラベルを選べるかを追うと整理しやすくなります。',
  },
});
