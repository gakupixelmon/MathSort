// stat_003: 中心極限定理の証明（特性関数による方針）★4
// 統計学の最重要定理: (X̄ - μ) / (σ/√n) →^d N(0,1)
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_003',
  title: '中心極限定理の証明',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 4,
  language: 'proof',
  description: '【定理（中心極限定理）】\n$X_1, X_2, \\ldots, X_n$ を互いに独立で同一の分布に従う確率変数列とし、\n$E[X_i] = \\mu$、$\\mathrm{Var}(X_i) = \\sigma^2 \\in (0, \\infty)$ とする。\n標準化した標本平均を\n$$Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma / \\sqrt{n}} = \\frac{1}{\\sqrt{n}} \\sum_{i=1}^{n} \\frac{X_i - \\mu}{\\sigma}$$\nと定義するとき、任意の $z \\in \\mathbb{R}$ に対して\n$$P(Z_n \\leq z) \\to \\Phi(z) \\quad (n \\to \\infty)$$\nが成り立つ。ここで $\\Phi$ は標準正規分布の累積分布関数である。\n\n以下の証明ステップ（特性関数による方針）を正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$Y_i = \\dfrac{X_i - \\mu}{\\sigma}$ とおくと、$E[Y_i] = 0$、$E[Y_i^2] = 1$ が成り立つ。',
    },
    {
      id: 1,
      code: '$Z_n = \\dfrac{1}{\\sqrt{n}} \\sum_{i=1}^{n} Y_i$ と表せる。$Z_n$ の特性関数を $\\varphi_{Z_n}(t)$ とおく。',
    },
    {
      id: 2,
      code: '$Y_i$ の特性関数を $\\varphi(t) = E[e^{itY_i}]$ とおく。$Y_i$ の独立同分布性より\n$\\varphi_{Z_n}(t) = \\left[\\varphi\\!\\left(\\dfrac{t}{\\sqrt{n}}\\right)\\right]^n$',
    },
    {
      id: 3,
      code: '$E[Y_i] = 0$、$E[Y_i^2] = 1$ を使って $\\varphi(t)$ を $t = 0$ まわりでテイラー展開する:\n$\\varphi(t) = 1 + it \\cdot E[Y_i] - \\dfrac{t^2}{2} E[Y_i^2] + o(t^2) = 1 - \\dfrac{t^2}{2} + o(t^2)$',
    },
    {
      id: 4,
      code: '$t$ を $\\dfrac{t}{\\sqrt{n}}$ に置き換えると:\n$\\varphi\\!\\left(\\dfrac{t}{\\sqrt{n}}\\right) = 1 - \\dfrac{t^2}{2n} + o\\!\\left(\\dfrac{1}{n}\\right)$',
    },
    {
      id: 5,
      code: 'したがって $n \\to \\infty$ のとき:\n$\\varphi_{Z_n}(t) = \\left[1 - \\dfrac{t^2}{2n} + o\\!\\left(\\dfrac{1}{n}\\right)\\right]^n \\to e^{-t^2/2}$',
    },
    {
      id: 6,
      code: '$e^{-t^2/2}$ は標準正規分布 $N(0,1)$ の特性関数である。',
    },
    {
      id: 7,
      code: 'Lévy の連続性定理より、特性関数が $e^{-t^2/2}$ に各点収束することは $Z_n \\xrightarrow{d} N(0,1)$ と同値である。$\\square$',
    },
  ],
  // 制約:
  // id:0（Y_i の定義）は最初
  // id:0 → id:1（Z_n の表示）→ id:2（特性関数の積）→ id:3（テイラー展開）→ id:4（代入）→ id:5（極限）は順序固定
  // id:6（N(0,1) の特性関数）は id:5 より前でも可だが、id:7（Lévy）は id:5, id:6 両方に依存
  partialOrder: [
    [0, 1],  // Y_i を定義してから Z_n を表示
    [1, 2],  // Z_n を表示してから特性関数の積に変形
    [2, 3],  // 特性関数の積を得てからテイラー展開
    [3, 4],  // テイラー展開してから t/√n を代入
    [4, 5],  // 代入してから n→∞ の極限を取る
    [5, 7],  // 極限を得てから Lévy の定理で結論
    [6, 7],  // N(0,1) の特性関数を確認してから Lévy の定理で結論
  ],
  hints: [
    '$X_i$ を標準化して $Y_i = (X_i - \\mu)/\\sigma$ とおくと、$E[Y_i] = 0$、$\\mathrm{Var}(Y_i) = 1$ が成り立ちます。これを使って $Z_n$ を $Y_i$ の和で表しましょう',
    '特性関数 $\\varphi(t) = E[e^{itY}]$ を $t=0$ のまわりでテイラー展開すると $\\varphi(t) \\approx 1 - t^2/2$ が得られます（$E[Y_i]=0$, $E[Y_i^2]=1$ を使います）',
    '$\\left[1 - \\frac{t^2}{2n} + o(1/n)\\right]^n \\to e^{-t^2/2}$ は $(1 + a/n)^n \\to e^a$ の応用です。あとは Lévy の連続性定理で分布収束が結論付けられます',
  ],
  explanation: {
    summary: '中心極限定理は「母分布によらず、$n$ が十分大きければ標本平均の分布は正規分布に近似できる」という統計推測の基盤となる定理です。ここでは特性関数（フーリエ変換）を使った証明を扱います。',
    points: [
      '$Y_i = (X_i - \\mu)/\\sigma$ による標準化で $E[Y_i]=0$, $E[Y_i^2]=1$ を確保するのが出発点です',
      '独立確率変数の和の特性関数は積になります: $\\varphi_{\\sum Y_i}(t) = [\\varphi(t)]^n$',
      'テイラー展開 $\\varphi(t) = 1 - t^2/2 + o(t^2)$ は $E[Y_i]=0$（1次の係数が消える）と $E[Y_i^2]=1$（2次の係数が $-1/2$）から導かれます',
      '$(1 + x/n)^n \\to e^x \\ (n\\to\\infty)$ という初等的な極限が核心の一歩です',
      'Lévy の連続性定理: 特性関数が各点収束 $\\Rightarrow$ 分布弱収束（逆も成立）。これにより特性関数の世界での計算が分布の世界の結果に翻訳されます',
    ],
    complexity: {
      time: '確率論（特性関数・テイラー展開・弱収束の理論）',
      space: '特性関数 $[\\varphi(t/\\sqrt{n})]^n \\to e^{-t^2/2}$ を示し、Lévy の連続性定理で $Z_n \\xrightarrow{d} N(0,1)$ を結論付ける',
    },
    tip: '中心極限定理は統計的推測（信頼区間・仮説検定）の数学的正当性を与える定理です。有限分散の仮定 $\\sigma^2 < \\infty$ が本質的で、これが成り立たない場合（例: コーシー分布）は成立しません。',
  },
});
