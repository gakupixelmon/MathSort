// ml_002: Nesterovモメンタムの安定性閾値（Theorem 1） ★4
// 出典: Cohen et al. "Gradient Descent on Neural Networks Typically Occurs at the Edge of Stability" (ICLR 2022)
// Theorem 1: Nesterov momentum の最大安定シャープネス（MSS）の導出
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_002',
  title: 'Nesterovモメンタムの発散条件（Theorem 1）',
  category: 'papers_2021Cohen',
  categoryLabel: '論文 / 2021Cohen',
  difficulty: 4,
  language: 'proof',
  description: '【Theorem 1（Cohen et al., 2021 — Edge of Stability）】\n二次目的関数 $f(x) = \\frac{1}{2}x^T Ax + b^T x + c$ に対し，ステップ幅 $\\eta > 0$，モメンタム係数 $0 \\leq \\beta < 1$ の Nesterov モメンタム法\n$$v_{t+1} = \\beta v_t - \\eta \\nabla f(x_t + \\beta v_t), \\quad x_{t+1} = x_t + v_{t+1}$$\nを任意の初期点から実行する（$v_0 = 0$）。\n$(q, a)$ を $A$ の固有ベクトル・固有値ペアとするとき，\n$$a > \\frac{1}{\\eta}\\left(\\frac{2 + 2\\beta}{1 + 2\\beta}\\right)$$\nならば，数列 $\\{q^T x_t\\}$ は発散する。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$v_t = x_t - x_{t-1}$ と書けることを用いて，Nesterov の更新則を $x_t$ のみの漸化式に書き直す。',
    },
    {
      id: 1,
      code: '$x_{t+1} = x_t + \\beta(I-\\eta A)(x_t - x_{t-1}) - \\eta b - \\eta A x_t$',
    },
    {
      id: 2,
      code: '$= (1+\\beta)(I - \\eta A)x_t - \\beta(I - \\eta A)x_{t-1} - \\eta b$',
    },
    {
      id: 3,
      code: '両辺に左から $q^T$ をかけ，$q^T A = a q^T$ を用いる: $q^T x_{t+1} = (1+\\beta)(1-\\eta a)q^T x_t - \\beta(1-\\eta a)q^T x_{t-1} - \\eta q^T b$',
    },
    {
      id: 4,
      code: '$\\tilde{x}_t := q^T x_t + \\frac{1}{a}q^T b$ とおくと，$\\{q^T x_t\\}$ 発散 $\\Leftrightarrow$ $\\{\\tilde{x}_t\\}$ 発散であり，$\\tilde{x}$ は次の2階線形差分方程式を満たす: $\\tilde{x}_{t+1} = (1+\\beta)(1-\\eta a)\\tilde{x}_t - \\beta(1-\\eta a)\\tilde{x}_{t-1}$',
    },
    {
      id: 5,
      code: '特性方程式は $\\lambda^2 - (1+\\beta)(1-\\eta a)\\lambda + \\beta(1-\\eta a) = 0$。',
    },
    {
      id: 6,
      code: 'Elaydi (2005) の Theorem 2.37 より，$\\eta > 0$，$\\beta < 1$ のとき $a > \\frac{1}{\\eta}\\left(\\frac{2+2\\beta}{1+2\\beta}\\right)$ ならばこの差分方程式は発散する。$\\square$',
    },
  ],
  // 制約:
  // 0（速度変数の消去）→ 1 → 2（整理）→ 3（射影）→ 4（変数変換と2階差分方程式の確立）
  // 4 → 5（特性方程式）→ 6（発散条件の適用・結論）
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [4, 5], [5, 6],
  ],
  hints: [
    '$v_t = x_t - x_{t-1}$ を利用して速度変数 $v_t$ を消去し，$x_t$ のみの漸化式を作ります',
    '$(I - \\eta A)x_t$ の形を保つように整理すると，$x_{t+1}$ が $x_t$ と $x_{t-1}$ の線形結合で書けます',
    '固有方向 $q$ への射影と変数変換 $\\tilde{x}_t = q^T x_t + \\frac{1}{a}q^T b$ で2階線形同次差分方程式に帰着します',
    '2階差分方程式の発散条件は Elaydi の定理（特性根の絶対値が1より大きい）を用います',
  ],
  explanation: {
    summary: 'Nesterov モメンタムの最大安定シャープネス（MSS）は $\\mathrm{MSS}_{\\text{Nesterov}}(\\eta, \\beta) = \\frac{1}{\\eta}\\cdot\\frac{2+2\\beta}{1+2\\beta}$ です。$\\beta = 0$ で vanilla GD の閾値 $2/\\eta$ に一致し，$\\beta \\to 1$ では $\\frac{2}{\\eta}$に近づきます（モメンタム増加でMSSは $2/\\eta$ から $2/(2\\eta)=1/\\eta$ に減少）。',
    idea: 'vanilla GDの安定性閾値が確定した後、実用上で広く使われるモメンタム手法が安定性にどう影響するかを調べるのは自然な流れです。発想の鍵は、速度変数 $v_t$ を消去して $x_t$ と $x_{t-1}$ のみの漸化式にし、それを固有方向に射影することで「2階の線形差分方程式」に帰着させた点です。これにより、特性方程式の根の配置（Elaydiの定理）という確立された数学的ツールを用いて、発散条件を機械的に導き出せるようになります。',
    points: [
      '$v_t = x_t - x_{t-1}$ の代入で1階ベクトル漸化式を2階スカラー漸化式に変換する',
      '固有方向への射影により，高次元問題が1次元の差分方程式に帰着する',
      '2階線形同次差分方程式 $\\tilde{x}_{t+1} = c_1 \\tilde{x}_t + c_2 \\tilde{x}_{t-1}$ の安定性は特性根の絶対値で決まる',
      'モメンタムは収束を加速するが，同時に不安定化しやすくなる（MSSが低下する）',
    ],
    complexity: { time: '線形代数（固有値），2階線形差分方程式論', space: '2階差分方程式への帰着と特性方程式の根の絶対値による発散条件（Elaydiの定理）' },
    tip: '$\\beta=0$ の場合は Proposition 1（ml_001）に一致します。Polyak モメンタムの MSS は $\\frac{2+2\\beta}{\\eta}$（ml_003）であり，Nesterov より常に大きいため，Nesterov の方が不安定化しやすいことがわかります。',
  },
});
