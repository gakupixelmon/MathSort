// ml_018: High-dimensional Asymptotics of Feature Learning - 教師の直交分解 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_018',
  title: 'ガウス教師の定数・線形・残差分解',
  category: 'papers_high_dim_feature_learning',
  categoryLabel: '機械学習 / 論文 / High-dimensional Feature Learning',
  difficulty: 3,
  language: 'proof',
  description: '【補題（ガウス $L^2$ 空間での一次射影）】\n$X\\sim\\mathcal N(0,I_d)$、$f^\\ast(X)\\in L^2$ とする。$\\mu_0=E[f^\\ast(X)]$、$v=E[Xf^\\ast(X)]$、\n$$r(X)=f^\\ast(X)-\\mu_0-v^\\top X$$\nとおく。このとき $r$ は定数関数と全ての線形関数に直交し、\n$$E[f^\\ast(X)^2]=\\mu_0^2+\\lVert v\\rVert_2^2+E[r(X)^2]$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$X\\sim\\mathcal N(0,I_d)$ より\n$\\displaystyle E[X]=0,\\qquad E[XX^\\top]=I_d$\nである。', solutionComment: '標準ガウスベクトルの平均と共分散を使う。' },
    { id: 1, code: '残差の定義へ期待値を取ると\n$\\displaystyle E[r(X)]=E[f^\\ast(X)]-\\mu_0-v^\\top E[X]=0$\nとなる。', solutionComment: '∵ $\\mu_0=E[f^\\ast(X)]$ とブロック 0 を使う。' },
    { id: 2, code: 'さらに\n$\\displaystyle E[Xr(X)]=E[Xf^\\ast(X)]-\\mu_0E[X]-E[XX^\\top]v=v-v=0$\nである。', solutionComment: '∵ $v=E[Xf^\\ast(X)]$、$E[XX^\\top]=I_d$。' },
    { id: 3, code: '任意の $a\\in\\mathbb R$、$b\\in\\mathbb R^d$ に対し\n$\\displaystyle E[r(X)(a+b^\\top X)]=aE[r(X)]+b^\\top E[Xr(X)]=0$\nである。', solutionComment: 'ブロック 1, 2 により、残差は定数関数と線形関数の全体に直交する。' },
    { id: 4, code: '$q(X)=\\mu_0+v^\\top X$ とおけば、定義から $f^\\ast(X)=q(X)+r(X)$ であり、ブロック 3 より $E[q(X)r(X)]=0$ である。', solutionComment: '$q$ は定数・線形部分空間への直交射影である。' },
    { id: 5, code: 'よって Pythagoras の恒等式から\n$\\displaystyle E[f^\\ast(X)^2]=E[q(X)^2]+E[r(X)^2]$\nとなる。', solutionComment: '∵ 二乗を展開したときの交差項 $2E[qr]$ は0になる。' },
    { id: 6, code: 'ブロック 0 より\n$\\displaystyle E[q(X)^2]=E[(\\mu_0+v^\\top X)^2]=\\mu_0^2+v^\\top E[XX^\\top]v=\\mu_0^2+\\lVert v\\rVert_2^2$\nである。', solutionComment: '線形項の平均は0であり、二次項は共分散行列で評価する。' },
    { id: 7, code: 'ブロック 5, 6 を合わせて\n$\\displaystyle E[f^\\ast(X)^2]=\\mu_0^2+\\lVert v\\rVert_2^2+E[r(X)^2]$\nを得る。$\\square$', solutionComment: '論文の $P_{>1}f^\\ast$ は、この $r$ に対応する定数・線形成分に直交な部分である。' },
  ],
  partialOrder: [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [4, 5], [0, 6], [5, 7], [6, 7]],
  hints: [
    'まず標準ガウスの $E[X]=0$ と $E[XX^\\top]=I_d$ を使います。',
    '残差の平均と、$X$ を掛けた残差の平均をそれぞれ計算します。',
    '残差が定数・線形部分と直交すると分かれば、二乗ノルムを直交和として分解できます。',
  ],
  explanation: {
    summary: '論文の特徴学習は、一般の教師関数のうちまず線形成分 $v^\\top x$ と整列します。この補題は、その「線形成分」と残差を厳密に分ける基礎です。',
    points: [
      '$v=E[Xf^\\ast(X)]$ は、ガウス入力のもとで教師と各入力方向が持つ相関を集めたベクトルです。',
      '$r=P_{>1}f^\\ast$ は線形予測では説明できない成分であり、固定カーネルの比較下界に現れます。',
      'これは有限次元の線形代数における直交射影を、関数空間 $L^2$ で使ったものです。',
    ],
    complexity: { time: 'ガウス分布、共分散、直交射影、$L^2$ 分解', space: '教師を定数・線形・直交残差へ分解する' },
    tip: '確率変数の最良線形近似を調べるときは、残差が説明変数と直交することをまず確認します。',
  },
});
