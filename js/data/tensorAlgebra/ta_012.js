// ta_012: 外積代数の次元 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_012',
  title: '外積代数の次元と行列式',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理】\n$\\dim V = n$ のとき、外積代数 $\\Lambda(V)$ の全体の次元が $2^n$ であることを証明せよ。また、最高次の成分 $\\Lambda^n(V)$ が1次元であることを示し、これが行列式の一意性とどう結びつくかを説明せよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$V$ の基底を $\\{e_1, \\dots, e_n\\}$ とする。$k$ 次成分 $\\Lambda^k(V)$ の元は、$k$ 個の「異なる」基底ベクトルを選んでウェッジ積をとったものの線形結合として表される。', solutionComment: 'ウェッジ積の交代性（同じベクトルを使うと0になる）から、異なるベクトルの組合せのみが意味を持つ。' },
    { id: 1, code: 'ウェッジ積の反交換性 $e_i \\wedge e_j = -e_j \\wedge e_i$ より、同じベクトルの集合から作られる元は添字の昇順のものだけで代表できる。\nしたがって、$\\Lambda^k(V)$ の基底は\n$\\displaystyle \\{ e_{i_1} \\wedge e_{i_2} \\wedge \\cdots \\wedge e_{i_k} \\mid 1 \\le i_1 < i_2 < \\cdots < i_k \\le n \\}$\nとなる。', solutionComment: '添字が昇順のものだけを代表元として選べるため、基底の個数は選び方の数と等しい。' },
    { id: 2, code: '$n$ 個から $k$ 個を選ぶ組合せの数は $\\binom{n}{k}$ であるから、$\\dim \\Lambda^k(V) = \\binom{n}{k}$ となる。', solutionComment: '選ぶベクトルの集合が重複なしかつ順序を区別しない組合せに対応する。' },
    { id: 3, code: '外積代数の全次元は各次数 $k = 0, 1, \\dots, n$ の次元の和であるから、二項定理を用いて\n$\\displaystyle \\dim \\Lambda(V) = \\sum_{k=0}^{n} \\binom{n}{k} = 2^n$\nが成り立つ。', solutionComment: '$(1+1)^n = \\sum_{k=0}^n \\binom{n}{k}$ という二項定理の特別な場合を用いる。' },
    { id: 4, code: '特に $k = n$ のとき、$n$ 個すべての基底ベクトルを使う方法は $\\binom{n}{n} = 1$ 通りのみであるから、$\\Lambda^n(V)$ の基底は $\\{e_1 \\wedge e_2 \\wedge \\cdots \\wedge e_n\\}$ のただ1つだけである。よって $\\dim \\Lambda^n(V) = 1$ となる。 $\\blacksquare$', solutionComment: 'n個全部選ぶ選び方は1通りしかない。' },
    { id: 5, code: '【行列式との関係】線形変換 $f: V \\to V$ は $\\Lambda^n(V)$ 上に自然に作用し、$f$ の作用は $\\Lambda^n(V)$ が1次元であることから「定数倍」である。この定数倍の係数がまさに $\\det f$ の定義となる。', solutionComment: '1次元空間上の線形写像はスカラー倍に限られるため、行列式がただ1つのスカラー値として一意に定まることが保証される。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
  hints: [
    'ウェッジ積の交代性から、基底はn個の中からk個を「選ぶ」組合せ $\\binom{n}{k}$ 個になります。',
    '各次数の次元 $\\binom{n}{k}$ を $k=0$ から $n$ まで足すと、二項定理から $2^n$ になります。',
    '$k=n$ では選び方が $\\binom{n}{n}=1$ 通りしかないため $\\Lambda^n(V)$ が1次元になり、これが行列式の一意性に結びつきます。',
  ],
  explanation: {
    summary: '外積代数の次元公式は二項定理の帰結であり、最高次成分の1次元性は行列式の代数的本質を与えます。「$n$次元空間の体積要素を表すものは（スカラー倍を除いて）本質的に1つしかない」という事実がここに凝縮されています。',
    points: [
      '基底の個数 $\\binom{n}{k}$ は「$n$ 個から $k$ 個を選ぶ組合せ」に対応します。',
      '二項定理 $\\sum_k \\binom{n}{k} = 2^n$ が全次元を与えます。',
      '$\\Lambda^n(V)$ が1次元 $\\Rightarrow$ 線形写像の作用はスカラー倍 $\\Rightarrow$ それが $\\det$ の定義です。',
    ],
    complexity: { time: '外積代数、組合せ論、行列式', space: '最高次成分の1次元性' },
    tip: '同様の理由で、$\\Lambda^r(V) = 0$（$r > n$ のとき）となります。これはウェッジ積で $n+1$ 個以上のベクトルをとると、$n$ 次元空間の基底ベクトルが必ず重複し、値が $0$ になるためです。',
  },
});
