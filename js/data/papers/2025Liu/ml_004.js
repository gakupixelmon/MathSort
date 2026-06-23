// ml_004: Edge of Stability のミニマリストモデルにおける損失関数の導出とヘッセ行列の性質 ★4
// 出典: Liu et al. "A Minimalist Example of Edge-of-Stability and Progressive Sharpening" (2025)
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_004',
  title: 'Edge of Stability のミニマリストモデルにおける損失関数の導出とヘッセ行列の性質',
  category: 'papers_2025Liu',
  categoryLabel: '論文 / 2025Liu',
  difficulty: 4,
  language: 'proof',
  description: '【A Minimalist Example of Edge-of-Stability (Liu et al., 2025)】\nEdge of Stability (EoS) 現象は、真の予測には無関係だが「大きなスケールを持つ特徴」（例：画像分類における背景色など）によって引き起こされることが示唆されている。\nこれを数学的に解析するため、Liuらは2次元入力を持つ2層線形ネットワークモデルを提案した。\n\n入力 $x = (x_1, x_2)^T \\sim \\mathcal{N}(0, \\text{diag}(\\lambda_1, \\lambda_2))$ （ただし $\\lambda_1 \\gg \\lambda_2$）、出力 $y = f^*(x) = x_2$ とする。\nここで $x_1$ はスケールが大きいが無関係な特徴（ノイズ）、$x_2$ はスケールが小さいが目的変数に完全に従う特徴である。\nモデルを $f(x; \\theta) = \\alpha \\beta_1 x_1 + \\alpha \\beta_2 x_2$、パラメータを $\\theta = (\\alpha, \\beta_1, \\beta_2)$ とする。\n\n母集団の平均二乗誤差損失 $L(\\theta) = \\frac{1}{2} \\mathbb{E}_{x,y}[(y - f(x; \\theta))^2]$ を計算し、そのヘッセ行列 $H(\\theta)$ の対角成分から、各パラメータ方向のシャープネス（曲率）の大小関係を導出する過程を正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '予測誤差は $y - f(x; \\theta) = x_2 - (\\alpha \\beta_1 x_1 + \\alpha \\beta_2 x_2) = -\\alpha \\beta_1 x_1 + (1 - \\alpha \\beta_2) x_2$ と表される。',
    },
    {
      id: 1,
      code: '$x_1, x_2$ は独立で平均0、分散 $\\lambda_1, \\lambda_2$ であるため、損失関数は $L(\\theta) = \\frac{1}{2} \\mathbb{E}[(-\\alpha \\beta_1 x_1)^2 + ((1 - \\alpha \\beta_2) x_2)^2]$ となる。',
    },
    {
      id: 2,
      code: '期待値を計算すると、$L(\\theta) = \\frac{1}{2} \\lambda_1 (\\alpha \\beta_1)^2 + \\frac{1}{2} \\lambda_2 (\\alpha \\beta_2 - 1)^2$ となる。',
    },
    {
      id: 3,
      code: 'シャープネスを解析するため、各パラメータに関する二階偏微分を計算する。まず $\\frac{\\partial L}{\\partial \\beta_1} = \\lambda_1 \\alpha^2 \\beta_1, \\quad \\frac{\\partial L}{\\partial \\beta_2} = -\\lambda_2 \\alpha (1 - \\alpha \\beta_2)$ である。',
    },
    {
      id: 4,
      code: 'したがって、対角成分は $\\frac{\\partial^2 L}{\\partial \\beta_1^2} = \\lambda_1 \\alpha^2, \\quad \\frac{\\partial^2 L}{\\partial \\beta_2^2} = \\lambda_2 \\alpha^2$ となる。',
    },
    {
      id: 5,
      code: '設定より $\\lambda_1 \\gg \\lambda_2$ であるため、$\\frac{\\partial^2 L}{\\partial \\beta_1^2} \\gg \\frac{\\partial^2 L}{\\partial \\beta_2^2}$ が成り立つ。',
    },
    {
      id: 6,
      code: 'これは、無関係な特徴に対応する $\\beta_1$ 方向の曲率が極めて大きく、この方向への更新が GD ダイナミクスにおける EoS の振動不安定性を引き起こす主因であることを示している。$\\square$',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
  ],
  hints: [
    'まずモデルの出力 $f(x; \\theta)$ を用いて、予測誤差 $y - f(x; \\theta)$ を書き下します',
    '$x_1$ と $x_2$ が無相関であることを利用して、期待値を展開します',
    '得られた $L(\\theta)$ を $\\beta_1$ と $\\beta_2$ でそれぞれ2回偏微分し、対角成分（曲率）を求めます',
    '$\\lambda_1 \\gg \\lambda_2$ という前提から、どちらの方向がより不安定か（曲率が大きいか）を結論付けます',
  ],
  explanation: {
    summary: 'Edge of Stability における振動が「データの無関係だがスケールの大きい特徴」によって引き起こされるという仮説を、非常にシンプルな2次元モデルで数学的に表現した問題です。',
    points: [
      '入力の特徴間にスケールの差（$\\lambda_1 \\gg \\lambda_2$）を設けることで、実データの性質（CIFAR-10の背景色など）を模倣しています。',
      'このスケールの差が、ヘッセ行列の対角成分（$\\beta_1$ 方向と $\\beta_2$ 方向の曲率）に直結します。',
      '$\\beta_1$ 方向の曲率 $\\lambda_1 \\alpha^2$ がシャープネス全体を支配するため、学習率が大きい場合、この無関係な特徴の学習方向で激しい振動（不安定性）が生じます。',
      '対照的に、真に重要な特徴の方向（$\\beta_2$）は曲率が小さく安定しているため、長期的にはゆっくりと最適解へ向かいます。',
      '【発想の理由】Rosenfeld & Risteski (2023) などの研究により、実用的な画像分類タスクにおける EoS の振動は、ラベルとは無相関だが値のスケールが大きい「背景色」のような特徴によって駆動されていることが観察されました。この複雑な実世界の現象のメカニズムを厳密に解析するため、著者らは「真の予測に関わるスケールの小さい特徴」と「予測には無関係だがスケールの大きい特徴」の2次元のみを持つミニマリストモデルを構築しました。この極限まで単純化された設定により、一般的な仮定に依存することなく、損失の非単調な減少やプログレッシブ・シャーペニングの全軌跡を数学的に証明することを可能にしたのが、このモデルの革新的な発想です。',
    ],
    complexity: { time: '微積分・統計学', space: '機械学習の最適化理論の知識' },
    tip: '無関係な特徴（背景など）が損失関数の曲率を支配し、学習のダイナミクスを振動させるという直感は、深層学習における最適化を理解する上で非常に重要です。',
  },
});
