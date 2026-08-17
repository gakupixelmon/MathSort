// ml_022: High-dimensional Asymptotics of Feature Learning - 平滑化特徴と条件付き期待値 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_022',
  title: '平滑化 single-index 特徴の最良予測',
  category: 'papers_high_dim_feature_learning',
  categoryLabel: '機械学習 / 論文 / High-dimensional Feature Learning',
  difficulty: 3,
  language: 'proof',
  description: '【補題（条件付き期待値は最良二乗予測子）】\n$\\xi_1,\\xi_2\\sim\\mathcal N(0,1)$ を独立とし、$\\sigma$ は二乗可積分とする。$\\kappa\\in\\mathbb R$ に対して\n$$V_\\kappa=\\sigma(\\kappa\\xi_1+\\xi_2),\\qquad g_\\kappa(\\xi_1)=E[V_\\kappa\\mid\\xi_1]$$\nとおく。任意の二乗可積分な関数 $q(\\xi_1)$ について\n$$E[(V_\\kappa-q(\\xi_1))^2]=E[(V_\\kappa-g_\\kappa(\\xi_1))^2]+E[(g_\\kappa(\\xi_1)-q(\\xi_1))^2]$$\nを示せ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$\\displaystyle V_\\kappa-q(\\xi_1)=\\bigl(V_\\kappa-g_\\kappa(\\xi_1)\\bigr)+\\bigl(g_\\kappa(\\xi_1)-q(\\xi_1)\\bigr)$\nと分解する。', solutionComment: '条件付き期待値を足して引くことで、残差と $\\xi_1$ だけの関数との差に分ける。' },
    { id: 1, code: '両辺を二乗して期待値を取ると、右辺は二つの二乗項と\n$\\displaystyle 2E[(V_\\kappa-g_\\kappa(\\xi_1))(g_\\kappa(\\xi_1)-q(\\xi_1))]$\nからなる。', solutionComment: 'Pythagoras 型恒等式を示すには、この交差項が0であることを確認すればよい。' },
    { id: 2, code: '$g_\\kappa(\\xi_1)-q(\\xi_1)$ は $\\xi_1$ 可測なので、塔の公式より交差項の期待値は\n$\\displaystyle E\\left[(g_\\kappa-q)E[V_\\kappa-g_\\kappa\\mid\\xi_1]\\right]$\nに等しい。', solutionComment: '∵ $\\xi_1$ だけの関数は、条件付き期待値の外へ取り出せる。' },
    { id: 3, code: '$\\displaystyle E[V_\\kappa-g_\\kappa(\\xi_1)\\mid\\xi_1]=E[V_\\kappa\\mid\\xi_1]-g_\\kappa(\\xi_1)=0$\nである。', solutionComment: '条件付き期待値からの残差は、条件付けた情報に直交する。' },
    { id: 4, code: 'したがってブロック 2 の交差項は0であり、ブロック 1 の等式は\n$\\displaystyle E[(V_\\kappa-q)^2]=E[(V_\\kappa-g_\\kappa)^2]+E[(g_\\kappa-q)^2]$\nとなる。$\\square$', solutionComment: 'これは条件付き期待値が $\\xi_1$ の関数全体への $L^2$ 直交射影であることを示す。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4]],
  hints: [
    '$V_\\kappa-q$ に $g_\\kappa$ を足して引きます。',
    '交差項は、$\\xi_1$ で条件付けた期待値に書き換えます。',
    '条件付き期待値からの残差の条件付き平均は0です。',
  ],
  explanation: {
    summary: '大きい学習率の解析では、更新後ニューロンの平均的な振る舞いが $g_\\kappa(t)=E[\\sigma(\\kappa t+\\xi_2)]$ という平滑化 single-index 関数で表れます。',
    points: [
      'この補題は、$g_\\kappa$ がノイジーな特徴 $V_\\kappa$ から $\\xi_1$ の情報だけを使って得られる最良二乗予測子であることを示します。',
      'Theorem 11 の $\\tau^\\ast$ は、教師 $\\sigma^\\ast(\\xi_1)$ がこの平滑化関数族でどこまで近似できるかを測る量です。',
      '条件付き期待値と塔の公式は、確率論・統計学の学部レベルの道具ですが、高次元特徴学習の近似構成にも現れます。',
    ],
    complexity: { time: '条件付き期待値、塔の公式、$L^2$ 直交射影', space: 'ノイジー特徴を条件付き平均と直交残差に分ける' },
    tip: '二乗誤差の最小化で条件付き期待値が出たら、残差の条件付き平均が0になることを使って直交分解を書きます。',
  },
});
