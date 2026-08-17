// ml_021: High-dimensional Asymptotics of Feature Learning - Gaussian equivalent の下界 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_021',
  title: 'Gaussian equivalent 特徴の線形下界',
  category: 'papers_high_dim_feature_learning',
  categoryLabel: '機械学習 / 論文 / High-dimensional Feature Learning',
  difficulty: 4,
  language: 'proof',
  description: '【補題（ノイジー線形特徴で越えられない残差）】\n$X\\sim\\mathcal N(0,I_d)$、$Z\\sim\\mathcal N(0,I_N)$ を独立とし、\n$$f^\\ast(X)=\\mu_0+v^\\top X+r(X),\\qquad E[r(X)]=0,\\quad E[Xr(X)]=0$$\nとする。$W,b,c$ を $X,Z$ と独立に固定し、Gaussian equivalent 特徴\n$$\\phi_{\\rm GE}(X,Z)=\\frac1{\\sqrt N}\\bigl(\\mu_1W^\\top X+\\mu_2Z\\bigr)$$\nから作る予測器 $g(X,Z)=c+b^\\top\\phi_{\\rm GE}(X,Z)$ を考える。このとき\n$$E_{X,Z}\\bigl[(f^\\ast(X)-g(X,Z))^2\\bigr]\\ge E[r(X)^2]$$\nを示せ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$\\displaystyle w_b=\\frac{\\mu_1}{\\sqrt N}Wb,\\qquad \\zeta_b=\\frac{\\mu_2}{\\sqrt N}b^\\top Z$ とおくと、\n$\\displaystyle g(X,Z)=c+w_b^\\top X+\\zeta_b$\nと書ける。', solutionComment: 'Gaussian equivalent の線形読出しは、入力 $X$ の線形関数と独立ガウス雑音の和になる。' },
    { id: 1, code: 'したがって予測誤差は\n$\\displaystyle f^\\ast(X)-g(X,Z)=r(X)+(\\mu_0-c)+(v-w_b)^\\top X-\\zeta_b$\nである。', solutionComment: '教師の定数・線形・直交残差分解を代入して項を整理する。' },
    { id: 2, code: '$r$ の直交性より、$r(X)$ は $(\\mu_0-c)+(v-w_b)^\\top X$ と直交する。', solutionComment: '∵ $E[r(X)]=0$ と $E[Xr(X)]=0$ を、定数項と線形項へそれぞれ使う。' },
    { id: 3, code: '$\\zeta_b$ は $X$ と独立で平均0なので、$r(X)$ および $(\\mu_0-c)+(v-w_b)^\\top X$ のどちらとも直交する。', solutionComment: '∵ $Z$ は $X$ と独立で $E[Z]=0$。$W,b,c$ はテスト入力と独立に固定している。' },
    { id: 4, code: 'よって二乗を展開して交差項を消すと\n$\\displaystyle E[(f^\\ast-g)^2]=E[r(X)^2]+E[((\\mu_0-c)+(v-w_b)^\\top X)^2]+E[\\zeta_b^2]$\nとなる。', solutionComment: '三つの項は $L^2$ で互いに直交している。' },
    { id: 5, code: '右辺の第2項と第3項は非負なので\n$\\displaystyle E_{X,Z}[(f^\\ast(X)-g(X,Z))^2]\\ge E[r(X)^2]$\nである。$\\square$', solutionComment: 'Theorem 5 と Fact 6 は、学習済み特徴が小さい学習率ではこのノイジー線形モデルと同じリスクを持つことを示す。' },
  ],
  partialOrder: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5]],
  hints: [
    'まず $b^\\top\\phi_{\\rm GE}$ を、$X$ の線形関数と $Z$ の線形関数に分けます。',
    '残差 $r$ は定数・線形関数に直交し、$Z$ から来る項は $X$ と独立です。',
    '二乗を展開したときの交差項が全て消えることを確認します。',
  ],
  explanation: {
    summary: 'Gaussian equivalent 特徴を線形に読み出す限り、テスト時の予測器は入力の線形関数に独立雑音を加えた形です。そのため教師の非線形残差は消せません。',
    points: [
      'この問題は Fact 6 の下界を支える直交分解の機構を抽出しています。',
      '実際の Theorem 5 は、更新後の非線形 CK 特徴のリスクをこの Gaussian equivalent のリスクへ近づける高次元結果です。',
      '訓練によって選ばれた $b$ でも、独立なテスト入力に対して条件付きで同じ議論を使えます。',
    ],
    complexity: { time: '直交分解、独立性、Gaussian equivalent、二乗誤差', space: '予測誤差を残差・線形誤差・独立雑音へ分ける' },
    tip: '汎化誤差の下界では、予測器が表現できる関数空間と、教師の直交残差を分けると本質が見えます。',
  },
});
