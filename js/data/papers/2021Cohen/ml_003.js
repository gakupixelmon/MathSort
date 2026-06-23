// ml_003: Polyakモメンタムの安定性閾値（Theorem 2） ★4
// 出典: Cohen et al. "Gradient Descent on Neural Networks Typically Occurs at the Edge of Stability" (ICLR 2022)
// Theorem 2: Polyak (Heavy Ball) momentum の最大安定シャープネス（MSS）の導出
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_003',
  title: 'Polyak（Heavy Ball）モメンタムの発散条件（Theorem 2）',
  category: 'papers_2021Cohen',
  categoryLabel: '論文 / 2021Cohen',
  difficulty: 4,
  language: 'proof',
  description: '【Theorem 2（Cohen et al., 2021 — Edge of Stability）】\n二次目的関数 $f(x) = \\frac{1}{2}x^T Ax + b^T x + c$ に対し，ステップ幅 $\\eta > 0$，モメンタム係数 $0 \\leq \\beta < 1$ の Polyak（Heavy Ball）モメンタム法\n$$v_{t+1} = \\beta v_t - \\eta \\nabla f(x_t), \\quad x_{t+1} = x_t + v_{t+1}$$\nを任意の初期点から実行する。\n$(q, a)$ を $A$ の固有ベクトル・固有値ペアとするとき，\n$$a > \\frac{1}{\\eta}(2 + 2\\beta)$$\nならば，数列 $\\{q^T x_t\\}$ は発散する。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$v_t = x_t - x_{t-1}$ と書けることを用いて，Polyak の更新則を $x_t$ のみの漸化式に書き直す: $x_{t+1} = (1+\\beta)x_t - \\beta x_{t-1} - \\eta \\nabla f(x_t)$',
    },
    {
      id: 1,
      code: '二次関数 $f$ では $\\nabla f(x_t) = Ax_t + b$ なので: $x_{t+1} = (1+\\beta-\\eta A)x_t - \\beta x_{t-1} - \\eta b$',
    },
    {
      id: 2,
      code: '両辺に左から $q^T$ をかけ，$q^T A = aq^T$ を用いる: $q^T x_{t+1} = (1+\\beta-\\eta a)q^T x_t - \\beta q^T x_{t-1} - \\eta q^T b$',
    },
    {
      id: 3,
      code: '$\\tilde{x}_t := q^T x_t + \\frac{1}{a} q^T b$ とおくと，$\\{q^T x_t\\}$ 発散 $\\Leftrightarrow$ $\\{\\tilde{x}_t\\}$ 発散。',
    },
    {
      id: 4,
      code: '$\\tilde{x}_{t+1} = (1+\\beta-\\eta a)\\tilde{x}_t - \\beta \\tilde{x}_{t-1}$（2階線形同次差分方程式）',
    },
    {
      id: 5,
      code: 'Elaydi (2005) の Theorem 2.37 より，$\\eta > 0$，$\\beta < 1$ のとき $a > \\frac{2+2\\beta}{\\eta}$ ならばこの差分方程式は発散する。$\\square$',
    },
  ],
  // 制約:
  // 0（速度変数消去）→ 1（二次関数の勾配代入）→ 2（q^T 射影）
  // 2 → 3（変数変換の定義）→ 4（2階差分方程式の確立）→ 5（発散条件と結論）
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  ],
  hints: [
    '$v_t = x_t - x_{t-1}$ の代入でまず速度変数を消去します',
    '勾配 $\\nabla f(x_t) = Ax_t + b$ を代入して行列形式に整理します',
    '固有方向 $q$ への射影で高次元問題をスカラーの差分方程式に帰着させます',
    '変数変換 $\\tilde{x}_t = q^T x_t + \\frac{1}{a}q^T b$ で定数項を消去し，同次形にします',
  ],
  explanation: {
    summary: 'Polyak（Heavy Ball）モメンタムの最大安定シャープネスは $\\mathrm{MSS}_{\\text{Polyak}}(\\eta,\\beta) = \\frac{2+2\\beta}{\\eta}$ です。$\\beta = 0$ で vanilla GD の閾値 $2/\\eta$ に一致し，$\\beta$ が大きいほど MSS が増加します。Nesterov モメンタムの MSS より常に大きいため，Polyak の方が安定です。',
    idea: 'Nesterovモメンタムと同様に、Polyakモメンタムの安定性も2階差分方程式の特性根を調べることで解析できます。この2つのモメンタム法の違いは「勾配をどの点で評価するか」だけですが、特性方程式に落とし込むことで、その僅かな違いが最大安定シャープネス（MSS）に明確な数式の差として現れることをエレガントに示しています。',
    points: [
      '$v_t = x_t - x_{t-1}$ の代入で1階ベクトル漸化式を2階スカラー漸化式に変換する点は Theorem 1 と同様',
      'Nesterov との違い: 勾配を評価する点が $x_t + \\beta v_t$（Nesterov）か $x_t$（Polyak）かで異なる',
      '2階差分方程式の係数が $c_1 = 1+\\beta-\\eta a$，$c_2 = -\\beta$ となり，発散条件は $a > \\frac{2+2\\beta}{\\eta}$',
      'Polyak は Nesterov よりMSSが大きい（安定しやすい）が，一般に収束速度は Nesterov の方が速い',
    ],
    complexity: { time: '線形代数・差分方程式論', space: '最適化アルゴリズムの基礎知識' },
    tip: '論文では式 (1) として $\\mathrm{MSS}_{\\text{Polyak}} = \\frac{2+2\\beta}{\\eta}$，$\\mathrm{MSS}_{\\text{Nesterov}} = \\frac{1}{\\eta}\\cdot\\frac{2+2\\beta}{1+2\\beta}$ がまとめられています。これらは "Edge of Stability" 現象の理論的基盤となり，ニューラルネットワーク訓練においてシャープネスが $2/\\eta$ 付近に留まる理由を解釈する鍵となります。',
  },
});
