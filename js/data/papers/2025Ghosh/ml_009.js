// ml_009: rank-p 2周期部分空間振動 ★5
// 出典: Ghosh et al. "Learning Dynamics of Deep Linear Networks Beyond the Edge of Stability" (2025)
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_009',
  title: 'DLN beyond EOS における rank-p 2周期部分空間振動',
  category: 'papers_2025Ghosh',
  categoryLabel: '論文 / 2025Ghosh',
  difficulty: 5,
  language: 'proof',
  description: '【Theorem 1 (Rank-p Periodic Subspace Oscillations) の直感的な証明】\nGhosh et al. (2025) は、deep matrix factorization の balanced minimum の近くで、GD beyond EOS の振動が全方向で起こるのではなく、学習率で決まる上位 $p$ 個の特異方向だけで起こることを示した。\n\n$M^\\star=U^\\star\\Sigma^\\star V^{\\star\\top}$、$S_i=L(\\sigma_i^\\star)^{2-2/L}$ とする。適切な範囲の学習率 $\\eta=2/K$ に対し、上位 $p$ 特異値だけが2周期軌道で振動する、という議論の流れを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '特異ベクトル整列と balancing の結果により、EOSの定常状態では balanced minimum 近傍の特異値ダイナミクスだけを解析すればよい。',
    },
    {
      id: 1,
      code: 'balanced minimum におけるヘッセ行列の主要な非零固有値は $S_i=L(\\sigma_i^\\star)^{2-2/L}$ であり、最大固有値 $S_1$ が sharpness を与える。',
    },
    {
      id: 2,
      code: '学習率を $\\eta=2/K$ とし、$K_p^\\prime< K < S_p$ を満たすように選ぶと、上位 $p$ 個の特異方向では安定閾値を越えるが、それより下位の方向では閾値を越えない。',
    },
    {
      id: 3,
      code: 'balanced な $i$ 番目の特異値を $\\rho_i(t)$ と書くと、GD更新は\n$\\rho_i(t+1)=\\rho_i(t)+\\eta L(\\sigma_i^\\star-\\rho_i(t)^L)\\rho_i(t)^{L-1}$\nとなる。',
    },
    {
      id: 4,
      code: '2周期軌道を仮定し、$\\rho_i(t+2)=\\rho_i(t)$ とおく。さらに\n$z=1+\eta L(\\sigma_i^\\star-\\rho_i^L)\\rho_i^{L-2}$\nと定義して2ステップ更新を整理する。',
    },
    {
      id: 5,
      code: '整理すると、2周期軌道の振幅 $\\rho_i$ は\n$g(\\rho_i)=\\rho_i^L\\dfrac{1+z^{2L-1}}{1+z^{L-1}}-\\sigma_i^\\star=0$\nを満たす必要がある。',
    },
    {
      id: 6,
      code: '中間値の定理により、EOS範囲では $\\rho_{i,1}\\in(0,(\\sigma_i^\\star)^{1/L})$ と $\\rho_{i,2}\\in((\\sigma_i^\\star)^{1/L},(2\\sigma_i^\\star)^{1/L})$ の2つの実根が存在する。',
    },
    {
      id: 7,
      code: 'したがって $i\\leq p$ の上位特異方向では、end-to-end の特異値成分が $\\rho_{i,1}^L$ と $\\rho_{i,2}^L$ の間を交互に振動する。',
    },
    {
      id: 8,
      code: '一方で $k>p$ の特異方向では、選んだ学習率がその方向の振動閾値を越えないため、成分は $\\sigma_k^\\star$ に留まる。',
    },
    {
      id: 9,
      code: 'ゆえに\n$W_{L:1}=\\sum_{i=1}^{p}\\rho_{i,j}^{L}u_i^\\star v_i^{\\star\\top}+\\sum_{k=p+1}^{d}\\sigma_k^\\star u_k^\\star v_k^{\\star\\top}$、$j\\in\\{1,2\\}$\nとなり、振動は学習率で決まる rank-$p$ 部分空間に限定される。$\\square$',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2],
    [2, 3], [3, 4], [4, 5], [5, 6],
    [6, 7], [2, 8],
    [7, 9], [8, 9],
  ],
  hints: [
    'まず balanced minimum 近傍のヘッセ固有値 $S_i$ が、どの方向で安定閾値を越えるかを決めます。',
    '上位 $p$ 方向だけが閾値を越えるように $\\eta=2/K$ を選びます。',
    '振動する方向では、1ステップ更新式に $\\rho(t+2)=\\rho(t)$ を課して2周期軌道の方程式を作ります。',
    '2つの根が balanced minimum の下側と上側に存在するため、特異値はその2点を交互に移動します。',
  ],
  explanation: {
    summary: 'Theorem 1 は、DLNのEOS後の振動が「すべての方向で起きる発散」ではなく、学習率により選択された上位特異方向だけの2周期振動であることを明示する結果です。',
    points: [
      '$S_i=L(\\sigma_i^\\star)^{2-2/L}$ は、balanced minimum での主要な曲率スケールです。',
      '学習率が大きいほど、より多くの上位特異方向が安定閾値を越え、振動部分空間のrankが増えます。',
      '2周期軌道の2点は、balanced minimum の下側と上側にある多項式 $g(\\rho_i)=0$ の根として特徴づけられます。',
      '下位の特異方向は閾値を越えないため stationary subspace として残ります。',
      'この結果は、実験的に観察される「振動はトップ特徴・トップ固有方向で起こる」という現象の理論的説明を与えます。',
    ],
    complexity: {
      time: 'ヘッセ行列の固有値解析、離散力学系、2周期軌道の存在証明',
      space: '学習率範囲から振動部分空間のrankを決め、2周期軌道の根で振幅を特徴づける',
    },
    tip: 'この定理では、学習率は単なる安定・不安定のスカラーではなく、「どの特異方向を振動させるか」を選ぶパラメータとして働きます。',
  },
});
