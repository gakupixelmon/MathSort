// ta_010: 四元数の乗法逆元 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_010',
  title: '四元数の乗法逆元',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理】\n実数体 $\\mathbb{R}$ 上の四元数体 $\\mathbb{H}$ において、$0$ でない任意の元 $q = a + bi + cj + dk$ ($a, b, c, d \\in \\mathbb{R}$) が乗法逆元を持つことを証明せよ。（必要に応じて四元数の基本関係式 $i^2=j^2=k^2=ijk=-1$ などを利用してよい）',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '四元数 $q = a + bi + cj + dk$ に対し、共役四元数を $\\bar{q} = a - bi - cj - dk$ と定義する。', solutionComment: '複素数の共役と同様に、虚数部分の符号を反転させたものを考える。' },
    { id: 1, code: '$q$ と $\\bar{q}$ の積を計算すると、\n$q\\bar{q} = (a + bi + cj + dk)(a - bi - cj - dk)$\nとなる。', solutionComment: '定義に従って積を展開する準備をする。' },
    { id: 2, code: '展開して $i^2=j^2=k^2=-1$ や $ij=-ji$ などの関係式を用いると、交差項（$i, j, k$ の一次の項）はすべて打ち消し合う。', solutionComment: '四元数の非可換性（反交換性）により、虚数単位の交差項が相殺されることがポイント。' },
    { id: 3, code: '結果として、$q\\bar{q} = a^2 + b^2 + c^2 + d^2$ という実数（スカラー）になる。これをノルムの2乗 $N(q)$ とおく。', solutionComment: '積の結果が非負の実数になることが保証される。' },
    { id: 4, code: '$q \\neq 0$ であるため、係数 $a, b, c, d$ の少なくとも1つは $0$ ではなく、$N(q) > 0$ となる。', solutionComment: 'スカラー $N(q)$ が $0$ でない実数であるため、これで割ることが可能になる。' },
    { id: 5, code: 'したがって、関係式 $q\\bar{q} = N(q)$ の両辺を $N(q)$ で割ることができ、$q \\left( \\frac{\\bar{q}}{N(q)} \\right) = 1$ を得る。', solutionComment: '逆元の定義 $qx = 1$ を満たす元 $x$ を構成する。' },
    { id: 6, code: 'これにより、$\\frac{\\bar{q}}{N(q)}$ が $q$ の右逆元であることがわかる。（同様に $\\bar{q}q = N(q)$ も示せるため、これが乗法逆元となる。） $\\blacksquare$', solutionComment: '左右の逆元が一致し、一意な逆元が存在することが示された。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
  hints: [
    '複素数の逆元を求めるときと同様に、共役四元数 $\\bar{q} = a - bi - cj - dk$ を利用します。',
    '$q\\bar{q}$ を計算し、交差項が打ち消し合って実数 $a^2+b^2+c^2+d^2$ になることを確認します。',
    '$q \\neq 0$ であればこの値が $0$ にならないため、割り算をして逆元を構成できます。',
  ],
  explanation: {
    summary: '四元数全体が「多元体（Division Algebra）」であることを示す上で最も重要な、非ゼロ元が逆元を持つことの証明です。',
    points: [
      '共役四元数 $\\bar{q}$ との積がスカラー（実数）になる性質を利用します。',
      '四元数の積は非可換ですが、共役との積は可換（$q\\bar{q} = \\bar{q}q$）となります。',
      '構成された逆元 $q^{-1} = \\bar{q} / N(q)$ は、3Dグラフィックス等で四元数による回転の逆変換を計算する際にも直接用いられます。',
    ],
    complexity: { time: '四元数の乗法規則、共役、ノルム', space: '共役を用いた実数化' },
    tip: 'フロベニウスの定理により、実数体上の有限次元の多元体は、実数 $\\mathbb{R}$、複素数 $\\mathbb{C}$、四元数 $\\mathbb{H}$ の3つしか存在しないことが知られています。',
  },
});
