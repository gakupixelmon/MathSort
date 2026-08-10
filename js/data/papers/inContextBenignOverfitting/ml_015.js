// ml_015: In-Context Benign Overfitting - ノイズ補間項のトレース評価 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_015',
  title: 'ノイズ補間項と逆 Gram 行列',
  category: 'papers_incontext_benign_overfitting',
  categoryLabel: '機械学習 / 論文 / In-Context Benign Overfitting',
  difficulty: 3,
  language: 'proof',
  description: '【補題（ノイズ補間による分散）】\n行フルランクな $G\\in\\mathbb R^{N\\times D}$ を固定し、$\\epsilon\\sim\\mathcal N(0,\\sigma^2I_N)$ とする。最小ノルム補間解におけるノイズ成分を\n$$u=G^\\top(GG^\\top)^{-1}\\epsilon$$\nとおく。このとき\n$$E_\\epsilon\\lVert u\\rVert_2^2=\\sigma^2\\operatorname{tr}\\bigl((GG^\\top)^{-1}\\bigr)$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$A=G^\\top(GG^\\top)^{-1}$ とおくと、$u=A\\epsilon$ と書ける。', solutionComment: 'ノイズを補間する線形写像を一つの行列 $A$ としてまとめる。' },
    { id: 1, code: '二乗ノルムは\n$\\displaystyle \\lVert u\\rVert_2^2=\\epsilon^\\top A^\\top A\\epsilon$\nである。', solutionComment: '∵ $\\lVert A\\epsilon\\rVert_2^2=(A\\epsilon)^\\top(A\\epsilon)$。' },
    { id: 2, code: '一般に平均 $0$、共分散 $\\sigma^2I_N$ のベクトル $\\epsilon$ と行列 $B$ に対し\n$\\displaystyle E_\\epsilon[\\epsilon^\\top B\\epsilon]=\\operatorname{tr}\\bigl(BE[\\epsilon\\epsilon^\\top]\\bigr)=\\sigma^2\\operatorname{tr}(B)$\nである。', solutionComment: '∵ スカラーをトレースで書き直し、$E[\\epsilon\\epsilon^\\top]=\\sigma^2I_N$ を使う。' },
    { id: 3, code: 'ブロック 1 にブロック 2 を $B=A^\\top A$ として適用すると\n$\\displaystyle E_\\epsilon\\lVert u\\rVert_2^2=\\sigma^2\\operatorname{tr}(A^\\top A)$\nを得る。', solutionComment: 'トレースは、各ノイズ方向が増幅される量の総和を表している。' },
    { id: 4, code: '$GG^\\top$ は対称正則なので\n$\\displaystyle A^\\top A=(GG^\\top)^{-1}GG^\\top(GG^\\top)^{-1}=(GG^\\top)^{-1}$\nである。', solutionComment: '∵ $A^\\top=(GG^\\top)^{-1}G$ として掛け合わせる。' },
    { id: 5, code: 'したがって\n$\\displaystyle E_\\epsilon\\lVert u\\rVert_2^2=\\sigma^2\\operatorname{tr}\\bigl((GG^\\top)^{-1}\\bigr)$\nとなる。$\\square$', solutionComment: 'このトレースが、ml_011 に現れるノイズ補間の分散項そのものである。' },
  ],
  partialOrder: [[0, 1], [1, 3], [2, 3], [0, 4], [3, 5], [4, 5]],
  hints: [
    'まずノイズ成分を $u=A\\epsilon$ と置き、二乗ノルムを二次形式にします。',
    '二次形式の期待値は、$E[\\epsilon\\epsilon^\\top]=\\sigma^2I_N$ を使ってトレースへ変換できます。',
    '$A^\\top A$ を定義に戻して計算すると、逆 Gram 行列が残ります。',
  ],
  explanation: {
    summary: '補間解がノイズをどれだけ増幅するかは、逆 Gram 行列のトレースで正確に測れます。この量が大きいほど、訓練ノイズを合わせる代償が大きくなります。',
    points: [
      '小さい特異値を持つ $G$ では $(GG^\\top)^{-1}$ が大きくなり、ノイズを強く増幅します。',
      'Wishart 行列の逆行列の期待値を使うと、ml_011 の分散項 $\\sigma^2N/(D-N-1)$ が得られます。',
      'この補題自体はガウス性を必要とせず、平均0・共分散 $\\sigma^2I_N$ だけで成り立ちます。',
    ],
    complexity: { time: '二次形式、共分散、トレース、Gram 行列', space: 'ノイズ項の二乗ノルムを期待値でトレースに変換する' },
    tip: 'ランダムなベクトルの二次形式を見たら、$z^\\top Bz=\\operatorname{tr}(Bzz^\\top)$ と書き直すと期待値を取りやすくなります。',
  },
});
