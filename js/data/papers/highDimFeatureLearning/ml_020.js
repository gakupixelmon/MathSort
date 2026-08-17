// ml_020: High-dimensional Asymptotics of Feature Learning - spike の整列 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_020',
  title: '十分強い spike による主方向の整列',
  category: 'papers_high_dim_feature_learning',
  categoryLabel: '機械学習 / 論文 / High-dimensional Feature Learning',
  difficulty: 4,
  language: 'proof',
  description: '【補題（rank-one spike の安定性）】\n$\\lVert u\\rVert_2=1$、$\\theta>0$、$E=E^\\top$、$\\lVert E\\rVert_{\\rm op}\\le\\varepsilon<\\theta/2$ とする。\n$$M=\\theta uu^\\top+E$$\nの最大固有値に対応する単位固有ベクトルを $\\widehat u$ とする。このとき\n$$|\\langle\\widehat u,u\\rangle|^2\\ge1-\\frac{2\\varepsilon}{\\theta}$$\nであり、さらに $\\lambda_1(M)-\\lambda_2(M)\\ge\\theta-2\\varepsilon>0$ である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: 'Rayleigh 商の変分原理より\n$\\displaystyle \\lambda_1(M)\\ge u^\\top Mu=\\theta+u^\\top Eu\\ge\\theta-\\varepsilon$\nである。', solutionComment: '∵ $\\lVert u\\rVert_2=1$ と $|u^\\top Eu|\\le\\lVert E\\rVert_{\\rm op}$ を使う。' },
    { id: 1, code: '$\\widehat u$ が最大固有ベクトルなので\n$\\displaystyle \\lambda_1(M)=\\widehat u^\\top M\\widehat u=\\theta|\\langle\\widehat u,u\\rangle|^2+\\widehat u^\\top E\\widehat u$\nである。', solutionComment: 'rank-one 部分の二次形式は $\\theta(\\widehat u^\\top u)^2$ になる。' },
    { id: 2, code: '$\\displaystyle \\widehat u^\\top E\\widehat u\\le\\lVert E\\rVert_{\\rm op}\\le\\varepsilon$ より\n$\\displaystyle \\lambda_1(M)\\le\\theta|\\langle\\widehat u,u\\rangle|^2+\\varepsilon$\nを得る。', solutionComment: '作用素ノルムは単位ベクトル上の二次形式を上から抑える。' },
    { id: 3, code: 'ブロック 0 と 2 を比較すると\n$\\displaystyle \\theta-\\varepsilon\\le\\theta|\\langle\\widehat u,u\\rangle|^2+\\varepsilon$\nである。', solutionComment: '最大固有値への下界と上界を同じ量に対して並べる。' },
    { id: 4, code: '整理して\n$\\displaystyle |\\langle\\widehat u,u\\rangle|^2\\ge1-\\frac{2\\varepsilon}{\\theta}$\nを得る。', solutionComment: 'spike の強さ $\\theta$ が摂動の2倍より大きいと、主方向は $u$ から大きくはずれない。' },
    { id: 5, code: '$x\\perp u$、$\\lVert x\\rVert_2=1$ なら $x^\\top Mx=x^\\top Ex\\le\\varepsilon$ である。したがって Courant--Fischer の原理より $\\lambda_2(M)\\le\\varepsilon$ となる。', solutionComment: 'spike は $u$ 方向にしか寄与しないため、直交補空間では摂動 $E$ だけが残る。' },
    { id: 6, code: 'ブロック 0 と 5 から\n$\\displaystyle \\lambda_1(M)-\\lambda_2(M)\\ge(\\theta-\\varepsilon)-\\varepsilon=\\theta-2\\varepsilon>0$\nとなる。$\\square$', solutionComment: '固有値ギャップが正なので、主固有方向は一意に定まり安定である。Theorem 3 の BBP 型整列は高次元ランダム摂動に対するより精密な版である。' },
  ],
  partialOrder: [[0, 3], [1, 2], [2, 3], [3, 4], [0, 6], [5, 6]],
  hints: [
    '最大固有値を、まず $u$ を Rayleigh 商へ代入して下から抑えます。',
    '次に最大固有ベクトル $\\widehat u$ で同じ固有値を書き、摂動を作用素ノルムで上から抑えます。',
    '第2固有値は $u$ に直交する部分空間上で Courant--Fischer の原理を使います。',
  ],
  explanation: {
    summary: 'この補題は、rank-one 信号が作用素ノルムで小さい摂動を上回れば、主方向が信号方向と整列することを示す有限次元版の spike 現象です。',
    points: [
      'Theorem 3 は非対称な重み行列と比例高次元ランダム行列に対し、BBP 閾値を含む鋭い整列公式を与えます。',
      'ここでは厳密な漸近公式の前に、信号対雑音比が主方向を決める基本機構を確認しています。',
      '作用素ノルムでの誤差評価が重要なのは、最大特異値・主特異方向の安定性を直接制御するためです。',
    ],
    complexity: { time: 'Rayleigh 商、作用素ノルム、Courant--Fischer、固有ベクトル摂動', space: 'spike 方向と直交補空間で二次形式を比較する' },
    tip: '固有ベクトルの向きを評価したいときは、同じ最大固有値に「信号方向からの下界」と「推定方向からの上界」を与えるのが有効です。',
  },
});
