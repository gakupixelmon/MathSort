// ml_theory_003: Talagrand の収縮補題 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_theory_003',
  title: "Talagrand's Contraction Lemma の証明",
  category: 'ml_theory',
  categoryLabel: '機械学習 / 学習理論',
  difficulty: 5,
  language: 'proof',
  description: '【定理（Talagrand の収縮補題）】\n有限集合 $T\\subset\\mathbb R^n$ と、$\\psi_i(0)=0$ かつ\n$$|\\psi_i(u)-\\psi_i(v)|\\leq L|u-v|\\qquad(i=1,\\ldots,n)$$\nを満たす関数 $\\psi_i:\\mathbb R\\to\\mathbb R$ を考える。独立な Rademacher 変数 $\\sigma_1,\\ldots,\\sigma_n$ に対し\n$$E_\\sigma\\left[\\sup_{t\\in T}\\sum_{i=1}^n\\sigma_i\\psi_i(t_i)\\right]\\leq L\,E_\\sigma\\left[\\sup_{t\\in T}\\sum_{i=1}^n\\sigma_i t_i\\right]$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '各 $k=0,1,\\ldots,n$ に対して\n$\\displaystyle A_k=E_\\sigma\\left[\\sup_{t\\in T}\\left(\\sum_{i=1}^k\\sigma_i\\psi_i(t_i)+L\\sum_{i=k+1}^n\\sigma_i t_i\\right)\\right]$\nとおく。',
      solutionComment: '最初の $k$ 座標だけを収縮後の関数 $\\psi_i$ に置き換えた中間量を導入する。',
    },
    {
      id: 1,
      code: 'このとき\n$\\displaystyle A_0=L\,E_\\sigma\\left[\\sup_{t\\in T}\\sum_{i=1}^n\\sigma_i t_i\\right]$、\n$\\displaystyle A_n=E_\\sigma\\left[\\sup_{t\\in T}\\sum_{i=1}^n\\sigma_i\\psi_i(t_i)\\right]$\nである。',
      solutionComment: '$k=0$ では全座標が元の値、$k=n$ では全座標が収縮後の値になる。',
    },
    {
      id: 2,
      code: '補題：任意の実数族 $(a_t,b_t)_{t\\in T}$ と $L$-Lipschitz 関数 $\\psi$ に対し、$\\varepsilon$ を Rademacher 変数とすると\n$\\displaystyle E_\\varepsilon\\left[\\sup_{t\\in T}(a_t+\\varepsilon\\psi(b_t))\\right]\\leq E_\\varepsilon\\left[\\sup_{t\\in T}(a_t+\\varepsilon Lb_t)\\right]$\nが成り立つ。',
      solutionComment: 'これは1座標だけを収縮させる比較不等式で、Talagrand の収縮補題の核心となる。',
    },
    {
      id: 3,
      code: '実際、左辺で $\\varepsilon=1,-1$ のときにそれぞれ supremum をほぼ達成する $s,t\\in T$ を取る。$|\\psi(b_s)-\\psi(b_t)|\\leq L|b_s-b_t|$ を用いて2つの値を比較し、右辺の $\\varepsilon=1,-1$ の supremum の和で上から抑えれば補題を得る。',
      solutionComment: 'Lipschitz 性は、2つの候補点の差を $L$ 倍以下に抑えるために使われる。',
    },
    {
      id: 4,
      code: '$k=1,\\ldots,n$ を固定し、$\\sigma_i$（$i\\neq k$）を固定する。補題に\n$\\displaystyle a_t=\\sum_{i<k}\\sigma_i\\psi_i(t_i)+L\\sum_{i>k}\\sigma_i t_i,\\qquad b_t=t_k,\\qquad\\psi=\\psi_k$\nを代入する。',
      solutionComment: '$\\sigma_k$ だけを残して条件付きに見ると、補題の形にちょうど一致する。',
    },
    {
      id: 5,
      code: '$\\sigma_k$ について期待値を取ると、$k$ 番目の $\\psi_k(t_k)$ を $Lt_k$ に置き換えても期待 supremum は増加しない。残りの符号についても期待値を取れば\n$\\displaystyle A_k\\leq A_{k-1}$\nを得る。',
      solutionComment: '1座標の比較を、他の符号で平均することで中間量どうしの不等式にする。',
    },
    {
      id: 6,
      code: 'これを $k=1,\\ldots,n$ で繰り返すと\n$\\displaystyle A_n\\leq A_{n-1}\\leq\\cdots\\leq A_0$\nとなる。',
      solutionComment: '座標を1つずつ元の Rademacher 過程へ戻していく。',
    },
    {
      id: 7,
      code: 'ブロック 1 の $A_0,A_n$ の表示を代入すれば\n$\\displaystyle E_\\sigma\\left[\\sup_{t\\in T}\\sum_{i=1}^n\\sigma_i\\psi_i(t_i)\\right]\\leq L\,E_\\sigma\\left[\\sup_{t\\in T}\\sum_{i=1}^n\\sigma_i t_i\\right]$\nとなる。$\\square$',
      solutionComment: '中間量の単調性を、定理の両辺の量へ戻して結論する。',
    },
  ],
  partialOrder: [
    [0, 1], [2, 3], [3, 4], [0, 4], [4, 5], [5, 6], [1, 7], [6, 7],
  ],
  hints: [
    '座標を1つずつ $\\psi_i(t_i)$ から $Lt_i$ に置き換えるための中間量 $A_k$ を作ります。',
    '核心は Rademacher 符号が1つだけの場合です。他の符号を固定すると、1座標の比較不等式を適用できます。',
    '$A_n\\leq\\cdots\\leq A_0$ を得たら、両端がそれぞれ定理の左辺・右辺であることを確認します。',
  ],
  explanation: {
    summary: 'Talagrand の収縮補題は、Lipschitz な変換を通してもラデマッハ複雑度が高々 Lipschitz 定数倍にしか増えないことを示します。損失関数を合成したクラスの複雑さを評価する基本工具です。',
    points: [
      '中間量 $A_k$ は、座標ごとに収縮前・収縮後を入れ替えるための補間です。',
      '1座標比較では、Rademacher 符号が $+1$ と $-1$ を等確率で取ることと Lipschitz 性を使います。',
      '座標ごとの比較を連鎖させると、全座標についての収縮不等式になります。',
      '学習理論では、Lipschitz 損失 $\\ell\\circ f$ のラデマッハ複雑度を元の仮説クラス $\\mathcal F$ の複雑度で抑えるために使われます。',
    ],
    complexity: {
      time: 'Rademacher 過程、Lipschitz 写像、期待 supremum、座標ごとの比較',
      space: '中間量 $A_k$ を用いて、座標ごとの収縮比較を反復する',
    },
    tip: '補題の本質は、非線形な損失関数を扱っても、Lipschitz 性さえあればランダム符号への適合度を元の関数クラスで制御できる点にあります。',
  },
});
