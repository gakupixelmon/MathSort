// ml_001: 二次関数上の勾配降下法の発散条件（Proposition 1） ★3
// 出典: Cohen et al. "Gradient Descent on Neural Networks Typically Occurs at the Edge of Stability" (ICLR 2022)
// Proposition 1: 固有値 a > 2/η のとき GD は発散する
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_001',
  title: '二次関数上の勾配降下法の発散条件（Proposition 1）',
  category: 'papers_2021Cohen',
  categoryLabel: '論文 / 2021Cohen',
  difficulty: 3,
  language: 'proof',
  description: '【Proposition 1（Cohen et al., 2021 — Edge of Stability）】\n対称正定値行列 $A \\in \\mathbb{R}^{d \\times d}$，ベクトル $b \\in \\mathbb{R}^d$，スカラー $c \\in \\mathbb{R}$ による二次目的関数\n$$f(x) = \\frac{1}{2} x^T A x + b^T x + c$$\nに対し，ステップ幅 $\\eta > 0$ の勾配降下法\n$$x_{t+1} = x_t - \\eta \\nabla f(x_t)$$\nを任意の初期点 $x_0$ から実行する。\n$(q, a)$ を $A$ の固有ベクトル・固有値ペアとする。\n$$a > \\frac{2}{\\eta}$$\nならば，数列 $\\{q^T x_t\\}$ は発散する。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$\\nabla f(x) = Ax + b$ より，更新則は $x_{t+1} = x_t - \\eta(Ax_t + b) = (I - \\eta A)x_t - \\eta b$',
    },
    {
      id: 1,
      code: '両辺に左から $q^T$ をかける: $q^T x_{t+1} = q^T(I - \\eta A)x_t - \\eta q^T b = (1 - \\eta a) q^T x_t - \\eta q^T b$',
    },
    {
      id: 2,
      code: '$\\tilde{x}_t := q^T x_t + \\frac{1}{a} q^T b$ と定義すると，$\\{q^T x_t\\}$ が発散 $\\Leftrightarrow$ $\\{\\tilde{x}_t\\}$ が発散。',
    },
    {
      id: 3,
      code: '$\\tilde{x}_{t+1} = q^T x_{t+1} + \\frac{1}{a} q^T b = (1-\\eta a)q^T x_t - \\eta q^T b + \\frac{1}{a} q^T b$',
    },
    {
      id: 4,
      code: '$= (1 - \\eta a)\\left(q^T x_t + \\frac{1}{a} q^T b\\right) = (1-\\eta a)\\tilde{x}_t$',
    },
    {
      id: 5,
      code: 'よって $\\tilde{x}_t = (1 - \\eta a)^t \\tilde{x}_0$。',
    },
    {
      id: 6,
      code: '$\\eta > 0$ かつ $a > 2/\\eta$ より $1 - \\eta a < -1$，したがって $|1 - \\eta a| > 1$。',
    },
    {
      id: 7,
      code: '$(1-\\eta a)^t \\to \\infty$（符号は振動）なので，$\\tilde{x}_0 \\neq 0$ のとき $\\{\\tilde{x}_t\\}$ は発散。$\\square$',
    },
  ],
  // 制約:
  // 0（更新則の導出）→ 1（q^T をかける）→ 2（変数変換の定義）
  // 2 → 3 → 4（変換後の漸化式の整理）
  // 4 → 5（等比数列の解）
  // 5 → 6（発散条件の確認）→ 7（結論）
  partialOrder: [
    [0, 1], [1, 2],
    [2, 3], [3, 4],
    [4, 5],
    [5, 6], [6, 7],
  ],
  hints: [
    '勾配 $\\nabla f(x) = Ax + b$ を代入して，更新則を行列形式で書いてください',
    '固有ベクトル $q$ に射影することで，スカラーの漸化式に帰着します（$q^T A = a q^T$）',
    '$\\tilde{x}_t = q^T x_t + \\frac{1}{a}q^T b$ という変数変換を行うと等比数列になります',
    '$a > 2/\\eta$ のとき $|1 - \\eta a| > 1$ となることを確認してください',
  ],
  explanation: {
    summary: 'ステップ幅 $\\eta$ の勾配降下法が二次関数上で発散する必要十分条件は，ヘッセ行列の最大固有値（シャープネス）が $2/\\eta$ を超えることです。この命題は "Edge of Stability" 論文の基礎となる安定性解析の核心です。',
    idea: 'ニューラルネットワークの学習で「シャープネスが $2/\\eta$ を超えても学習が進む」という直観に反する現象（Edge of Stability）を浮き彫りにするためには、まず「純粋な二次関数の場合は $2/\\eta$ で完全に発散する」ことを数学的に確定させる必要がありました。行列の更新式を各固有ベクトル方向に射影し、独立した等比数列に分解するというアプローチは、線形システムの安定性解析における最も標準的で強力な発想です。',
    points: [
      '更新則 $x_{t+1} = (I-\\eta A)x_t - \\eta b$ は各固有ベクトル方向に独立に作用する',
      '固有方向 $q$ への射影 $q^T x_t$ は公比 $(1-\\eta a)$ の等比数列になる',
      '発散条件 $|1 - \\eta a| > 1$ は $a > 2/\\eta$ と等価（$\eta > 0$, $a > 0$ の場合）',
      'シャープネス（最大固有値）が $2/\\eta$ を超えると GD が不安定化するという直観を数学的に正当化する',
    ],
    complexity: { time: '線形代数（固有値・固有ベクトル），差分方程式論', space: '固有方向への射影による1次元化と $|1-\\eta a|>1$ という発散条件の導出' },
    tip: 'この命題はニューラルネットワークの訓練目標に対して直接成り立つわけではありませんが，二次テイラー近似を通じて局所的な安定性を議論する出発点となります。Edge of Stability 現象とは，GD が不安定になりうるにもかかわらず，訓練損失が長期的に減少し続けるという経験的観測です。',
  },
});
