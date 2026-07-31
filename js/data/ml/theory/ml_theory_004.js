// ml_theory_004: Vapnik-Chervonenkis の定理（VC 不等式） ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_theory_004',
  title: 'Vapnik-Chervonenkis の定理の証明',
  category: 'ml_theory',
  categoryLabel: '機械学習 / 学習理論',
  difficulty: 5,
  language: 'proof',
  description: '【定理（VC 不等式）】\n二値仮説クラス $\\mathcal H\\subseteq\\{0,1\\}^{\\mathcal X}$ の成長関数を\n$$\\Pi_{\\mathcal H}(m)=\\max_{x_1,\\ldots,x_m}\\left|\\{(h(x_1),\\ldots,h(x_m)):h\\in\\mathcal H\\}\\right|$$\nとする。独立標本 $S=((X_i,Y_i))_{i=1}^n$ に対し、真のリスクと経験リスクを\n$$R(h)=P(h(X)\\neq Y),\\qquad \\widehat R_S(h)=\\frac1n\\sum_{i=1}^n\\mathbf1_{\\{h(X_i)\\neq Y_i\\}}$$\nと定める。$n\\varepsilon^2\\geq2$ なら\n$$P\\left(\\sup_{h\\in\\mathcal H}|R(h)-\\widehat R_S(h)|>\\varepsilon\\right)\\leq8\\Pi_{\\mathcal H}(2n)\\exp\\left(-\\frac{n\\varepsilon^2}{32}\\right)$$\nが成り立つ。さらに $d=\\operatorname{VCdim}(\\mathcal H)<\\infty$、$2n\\geq d$ なら $\\Pi_{\\mathcal H}(2n)\\leq(2en/d)^d$ である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$G(S)=\\sup_{h\\in\\mathcal H}|R(h)-\\widehat R_S(h)|$ とおく。$S\'$ を $S$ と独立で同じ分布に従うゴースト標本とする。',
      solutionComment: '全仮説にわたる一様偏差を $G(S)$ としてまとめ、母リスクを経験リスクへ置き換える準備をする。',
    },
    {
      id: 1,
      code: '標準的な対称化補題より、$n\\varepsilon^2\\geq2$ のもとで\n$\\displaystyle P(G(S)>\\varepsilon)\\leq2P\\left(\\sup_{h\\in\\mathcal H}|\\widehat R_{S\'}(h)-\\widehat R_S(h)|>\\frac{\\varepsilon}{2}\\right)$\nである。',
      solutionComment: 'ゴースト標本の経験リスクは真のリスクの独立な推定量であり、対称化で未知の $R(h)$ を除く。',
    },
    {
      id: 2,
      code: '結合標本 $T=(S,S\')$ の $2n$ 個の点を固定し、それらを無作為に二つの大きさ $n$ の組へ分割する見方をする。',
      solutionComment: '$(S,S\')$ の分布は、結合標本をランダムに二分する操作に対して交換可能である。',
    },
    {
      id: 3,
      code: '固定した $T$ 上で、仮説 $h$ が作る誤分類指示ベクトルは $h$ の $2n$ 点上のラベル付けで決まる。したがって異なる指示ベクトルの数は高々 $\\Pi_{\\mathcal H}(2n)$ である。',
      solutionComment: '無限の仮説クラスでも、固定標本上では有限個のラベル付けだけを区別すればよい。',
    },
    {
      id: 4,
      code: '各固定の指示ベクトルについて、無作為な二分による二つの経験平均の差に Hoeffding 型評価を適用すると\n$\\displaystyle P\\left(|\\widehat R_{S\'}(h)-\\widehat R_S(h)|>\\frac{\\varepsilon}{2}\\,\\middle|\\,T\\right)\\leq4\\exp\\left(-\\frac{n\\varepsilon^2}{32}\\right)$\nを得る。',
      solutionComment: '二分は非復元抽出だが、独立な場合と同等以上の集中評価が成り立つ。定数はしきい値 $\\varepsilon/2$ に対応する。',
    },
    {
      id: 5,
      code: '合併境界により、固定した $T$ のもとで\n$\\displaystyle P\\left(\\sup_h|\\widehat R_{S\'}(h)-\\widehat R_S(h)|>\\frac{\\varepsilon}{2}\\,\\middle|\\,T\\right)\\leq4\\Pi_{\\mathcal H}(2n)\\exp\\left(-\\frac{n\\varepsilon^2}{32}\\right)$\nとなる。',
      solutionComment: 'ブロック 3 で数えた有限個の指示ベクトルに、ブロック 4 の確率評価を足し合わせる。',
    },
    {
      id: 6,
      code: '$T$ についても期待値を取り、ブロック 1 の対称化評価と合わせると\n$\\displaystyle P(G(S)>\\varepsilon)\\leq8\\Pi_{\\mathcal H}(2n)\\exp\\left(-\\frac{n\\varepsilon^2}{32}\\right)$\nを得る。',
      solutionComment: '条件付き確率の上界は $T$ に依存しないため、そのまま平均できる。先頭の係数 $2$ は対称化から来る。',
    },
    {
      id: 7,
      code: '$d=\\operatorname{VCdim}(\\mathcal H)$ とする。$2n\\geq d$ なら Sauer の補題より\n$\\displaystyle \\Pi_{\\mathcal H}(2n)\\leq\\sum_{j=0}^d\\binom{2n}{j}\\leq\\left(\\frac{2en}{d}\\right)^d$\nである。',
      solutionComment: 'VC 次元が有限なら、標本サイズに対するラベル付け数の増加は多項式的に抑えられる。',
    },
    {
      id: 8,
      code: 'したがって\n$\\displaystyle P(G(S)>\\varepsilon)\\leq8\\left(\\frac{2en}{d}\\right)^d\\exp\\left(-\\frac{n\\varepsilon^2}{32}\\right)$\nとなり、有限 VC 次元の仮説クラスは一様収束する。$\\square$',
      solutionComment: '多項式的な成長関数と指数的な集中項の組合せにより、標本数とともに右辺は $0$ へ収束する。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [5, 6], [6, 7], [7, 8],
  ],
  hints: [
    'まず一様偏差 $G(S)$ を定義し、独立なゴースト標本を導入します。',
    '対称化によって真のリスクを二つの経験リスクの差に置き換えます。',
    '結合標本を固定すると、仮説クラスは高々 $\\Pi_{\\mathcal H}(2n)$ 個のラベル付けに還元されます。Hoeffding と合併境界の後、Sauer の補題を使います。',
  ],
  explanation: {
    summary: 'VC 不等式は、仮説クラスが標本上で作れるラベル付けの数を制御すれば、経験リスクが真のリスクへ一様に収束することを示します。これは統計的学習可能性の基本定理です。',
    points: [
      'ゴースト標本による対称化は、分布に関する未知の期待値を、二つの経験平均の差へ変換します。',
      '成長関数 $\\Pi_{\\mathcal H}(2n)$ は、固定した $2n$ 点上で実際に区別する必要がある仮説の数を表します。',
      'Hoeffding の不等式は各固定ラベル付けの偏差を抑え、合併境界が全仮説への一様評価を与えます。',
      'Sauer の補題により、有限 VC 次元なら成長関数は多項式的なので、指数的な集中が打ち勝ちます。',
    ],
    complexity: {
      time: 'VC 次元、成長関数、ゴースト標本、対称化、Hoeffding の不等式、Sauer の補題',
      space: '一様偏差をゴースト標本で対称化し、有限個の標本上ラベル付けへ還元して集中評価する',
    },
    tip: 'この証明は「無限の仮説クラスをどう扱うか」への答えです。固定標本上の振る舞いだけを数えることで、無限性を成長関数という有限の量に置き換えます。',
  },
});
