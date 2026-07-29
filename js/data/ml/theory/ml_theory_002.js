// ml_theory_002: マクディアミッドの不等式 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_theory_002',
  title: 'マクディアミッドの不等式の証明',
  category: 'ml_theory',
  categoryLabel: '機械学習 / 学習理論',
  difficulty: 5,
  language: 'proof',
  description: '【定理（マクディアミッドの不等式）】\n独立な確率変数 $X_1,\\ldots,X_n$ と関数 $f$ が、有界差分条件\n$$|f(x_1,\\ldots,x_i,\\ldots,x_n)-f(x_1,\\ldots,x_i\',\\ldots,x_n)|\\leq c_i$$\nを全ての $i$ と任意の引数に対して満たすとする。このとき任意の $t>0$ について\n$$P\\left(f(X_1,\\ldots,X_n)-E[f(X_1,\\ldots,X_n)]\\geq t\\right)\\leq\\exp\\left(-\\frac{2t^2}{\\sum_{i=1}^n c_i^2}\\right)$$\nが成り立つ。ここではホフディングの補題を用いてよい。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$\\mathcal F_i=\\sigma(X_1,\\ldots,X_i)$ とし、Doob マルチンゲール\n$\\displaystyle M_i=E[f(X_1,\\ldots,X_n)\\mid\\mathcal F_i]$\nを定める。',
      solutionComment: '独立変数を1つずつ観測したときの条件付き期待値を並べる。',
    },
    {
      id: 1,
      code: '$M_0=E[f(X_1,\\ldots,X_n)]$、$M_n=f(X_1,\\ldots,X_n)$ なので\n$\\displaystyle f(X_1,\\ldots,X_n)-E[f(X_1,\\ldots,X_n)]=\\sum_{i=1}^n(M_i-M_{i-1})$\nである。',
      solutionComment: 'Doob マルチンゲールの増分の和は、期待値から実現値までの差になる。',
    },
    {
      id: 2,
      code: '有界差分条件より、$X_1,\\ldots,X_{i-1}$ を固定したとき $M_i$ は $X_i$ の値によって幅高々 $c_i$ の区間内を動く。',
      solutionComment: '残りの変数について期待値を取っても、$X_i$ の置換による $f$ の変化量 $c_i$ は増えない。',
    },
    {
      id: 3,
      code: 'したがって $D_i=M_i-M_{i-1}$ は $\\mathcal F_{i-1}$ のもとで条件付き平均 $0$ かつ値域の幅高々 $c_i$ を持つ。',
      solutionComment: '$M_i$ はマルチンゲールなので $E[D_i\\mid\\mathcal F_{i-1}]=0$。',
    },
    {
      id: 4,
      code: '条件付きホフディングの補題から任意の $\\lambda>0$ について\n$\\displaystyle E[e^{\\lambda D_i}\\mid\\mathcal F_{i-1}]\\leq\\exp\\left(\\frac{\\lambda^2c_i^2}{8}\\right)$\nを得る。',
      solutionComment: '平均 $0$・値域幅 $c_i$ の条件付き確率変数にホフディングの補題を適用する。',
    },
    {
      id: 5,
      code: '条件付き期待値を $i=n,n-1,\\ldots,1$ の順に繰り返し取ると\n$\\displaystyle E\\left[e^{\\lambda\\sum_{i=1}^nD_i}\\right]\\leq\\exp\\left(\\frac{\\lambda^2}{8}\\sum_{i=1}^nc_i^2\\right)$\nとなる。',
      solutionComment: '各増分についての条件付き積率母関数評価を、塔の公式で順に掛け合わせる。',
    },
    {
      id: 6,
      code: '$V=\\sum_{i=1}^nc_i^2$ とおく。指数型 Markov の不等式より\n$\\displaystyle P\\left(\\sum_iD_i\\geq t\\right)\\leq\\exp\\left(-\\lambda t+\\frac{\\lambda^2V}{8}\\right)$\nである。',
      solutionComment: '$e^{\\lambda\\sum_iD_i}$ に Markov の不等式を適用し、直前の積率母関数評価を代入する。',
    },
    {
      id: 7,
      code: '右辺の指数は $\\lambda=4t/V$ で最小となるため、\n$\\displaystyle P\\left(\\sum_iD_i\\geq t\\right)\\leq\\exp\\left(-\\frac{2t^2}{V}\\right)$\nを得る。',
      solutionComment: '$-\\lambda t+\\lambda^2V/8$ を $\\lambda$ について微分して最適化する。',
    },
    {
      id: 8,
      code: 'ブロック 1 の等式と $V=\\sum_i c_i^2$ を戻せば、定理の結論が得られる。$\\square$',
      solutionComment: 'Doob マルチンゲールの望遠和を、元の関数の期待値からの偏差へ戻す。',
    },
  ],
  partialOrder: [
    [0, 1], [0, 2], [2, 3], [3, 4], [4, 5], [1, 6], [5, 6], [6, 7], [7, 8],
  ],
  hints: [
    '関数値を直接扱わず、$M_i=E[f\\mid X_1,\\ldots,X_i]$ という Doob マルチンゲールを導入します。',
    '有界差分条件から、各マルチンゲール増分の条件付き値域幅が $c_i$ 以下であることを示します。',
    'ホフディングの補題で積率母関数を評価し、指数型 Markov 不等式と $\\lambda$ の最適化で結論します。',
  ],
  explanation: {
    summary: 'マクディアミッドの不等式は、独立な入力のどれか1つを変えても関数値が大きく変わらないなら、その関数値が期待値の近くへ集中することを示します。',
    points: [
      'Doob マルチンゲールは、入力を1つずつ公開したときの予測値の変化を分解します。',
      '有界差分条件 $c_i$ は、各増分に対するホフディング型の集中評価を与えます。',
      '独立性により、条件付き期待値を順に取って増分の積率母関数を制御できます。',
      'この不等式は、経験リスクやラデマッハ複雑度に基づく汎化境界の高確率化に使われます。',
    ],
    complexity: {
      time: 'Doob マルチンゲール、条件付き期待値、ホフディングの補題、指数型 Markov 不等式',
      space: '関数の偏差をマルチンゲール増分へ分解し、各増分の積率母関数を評価する',
    },
    tip: '有界差分条件は、入力データ1点の変更に対する学習手法の安定性として読めます。一般化誤差の集中を示すときの基本的な橋渡しです。',
  },
});
