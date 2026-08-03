// ml_010: In-Context Benign Overfitting - LGP のモーメント整合 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_010',
  title: 'LGPへのモーメント整合還元',
  category: 'papers_incontext_benign_overfitting',
  categoryLabel: '機械学習 / 論文 / In-Context Benign Overfitting',
  difficulty: 4,
  language: 'proof',
  description: '【命題（線形ガウス等価問題のモーメント整合）】\n中心化された特徴 $h\\in\\mathbb R^D$ とラベル $y$ を考え、$\\Sigma=E[hh^\\top]$ が正則とする。\n$$\\theta_\\star=\\Sigma^{-1}E[hy],\\qquad\\epsilon=y-h^\\top\\theta_\\star,\\qquad\\sigma_\\epsilon^2=E[\\epsilon^2]$$\nと定める。$g\\sim\\mathcal N(0,I_D)$、$\\epsilon_G\\sim\\mathcal N(0,\\sigma_\\epsilon^2)$ を独立に取り、\n$$h_G=\\Sigma^{1/2}g,\\qquad y_G=g^\\top\\Sigma^{1/2}\\theta_\\star+\\epsilon_G$$\nとする。このとき $(h_G,y_G)$ は $(h,y)$ と同じ特徴共分散、特徴とラベルの相互モーメント、残差分散を持つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$\\theta_\\star=\\Sigma^{-1}E[hy]$ より\n$\\displaystyle \\Sigma\\theta_\\star=E[hy]$\nである。',
      solutionComment: '有効な線形係数は、特徴とラベルの相互モーメントを再現するように定められている。',
    },
    {
      id: 1,
      code: '$\\epsilon=y-h^\\top\\theta_\\star$ とおくと\n$\\displaystyle E[h\\epsilon]=E[hy]-E[hh^\\top]\\theta_\\star=E[hy]-\\Sigma\\theta_\\star=0$\nである。',
      solutionComment: '残差は特徴と直交する。これは最小二乗射影の正規方程式に対応する。',
    },
    {
      id: 2,
      code: '$g$ の共分散が $I_D$ なので\n$\\displaystyle E[h_Gh_G^\\top]=\\Sigma^{1/2}E[gg^\\top]\\Sigma^{1/2}=\\Sigma$\nである。',
      solutionComment: '白色ガウスベクトルを $\\Sigma^{1/2}$ で線形変換すると、所望の共分散が得られる。',
    },
    {
      id: 3,
      code: '$\\epsilon_G$ は $g$ と独立で平均 $0$ だから\n$\\displaystyle E[h_Gy_G]=E[\\Sigma^{1/2}g(g^\\top\\Sigma^{1/2}\\theta_\\star+\\epsilon_G)]=\\Sigma\\theta_\\star$\nである。',
      solutionComment: 'ノイズとの交差項は独立性と平均0により消える。',
    },
    {
      id: 4,
      code: 'ブロック 0 より $E[h_Gy_G]=\\Sigma\\theta_\\star=E[hy]$ となり、特徴とラベルの相互モーメントも一致する。',
      solutionComment: '元問題で保存したい一次の相関構造が、ガウス等価問題でも再現される。',
    },
    {
      id: 5,
      code: 'ガウス等価問題の残差は\n$\\displaystyle y_G-h_G^\\top\\theta_\\star=\\epsilon_G$\nなので、その分散は $\\operatorname{Var}(\\epsilon_G)=\\sigma_\\epsilon^2=E[\\epsilon^2]$ である。',
      solutionComment: 'ノイズ分散は元問題の線形射影残差の分散に合わせて選んでいる。',
    },
    {
      id: 6,
      code: 'したがって $(h_G,y_G)$ は特徴共分散 $E[hh^\\top]$、相互モーメント $E[hy]$、残差分散を保存する線形ガウス等価問題である。$\\square$',
      solutionComment: '論文では、この整合したLGPを解析して高次元リスクの予測に用いる。',
    },
  ],
  partialOrder: [
    [0, 1], [0, 4], [2, 6], [3, 4], [4, 6], [5, 6],
  ],
  hints: [
    '$\\theta_\\star$ の定義から、まず正規方程式 $\\Sigma\\theta_\\star=E[hy]$ を書きます。',
    'ガウス特徴の共分散は $E[gg^\\top]=I_D$ を使って計算します。',
    '相互モーメントと残差分散をそれぞれ確認すれば、モーメント整合が示せます。',
  ],
  explanation: {
    summary: '論文のLGPは、元のICL特徴がガウスではなくラベルとも依存する難しさを、重要な一次・二次統計量を保つガウス線形回帰へ置き換える解析上の道具です。',
    points: [
      '有効係数 $\\theta_\\star$ は、元の特徴とラベルの最良線形予測子です。',
      '残差が特徴と直交することにより、信号とノイズの役割を分けられます。',
      'この問題はLGPのモーメント整合を示すものであり、元の特徴選択モデルとの完全な漸近的等価性そのものを主張するものではありません。',
    ],
    complexity: {
      time: '線形射影、共分散、ガウスベクトル、残差直交性',
      space: '特徴共分散・相互モーメント・残差分散の3つを一致させる',
    },
    tip: '複雑なモデルを解析可能な等価問題へ置き換えるときは、何の統計量を保存し、何を近似として捨てているかを分けて考えるのが大切です。',
  },
});
