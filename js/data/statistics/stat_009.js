// stat_009: Doob のマルチンゲール不等式 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_009',
  title: 'Doob のマルチンゲール不等式の証明',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 5,
  language: 'proof',
  description: '【定理（Doob の最大不等式）】\n$(M_k,\\mathcal F_k)_{k=0}^n$ を非負の可積分マルチンゲールとし、$\\lambda>0$ とする。$M_k^*=\\max_{0\\leq j\\leq k}M_j$ とおくと\n$$\\lambda P(M_n^*\\geq\\lambda)\\leq E\\left[M_n\\mathbf1_{\\{M_n^*\\geq\\lambda\\}}\\right]\\leq E[M_n]=E[M_0]$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$A=\\{M_n^*\\geq\\lambda\\}$ とし、最初の到達時刻を\n$\\displaystyle \\tau=\\inf\\{0\\leq k\\leq n:M_k\\geq\\lambda\\}$\nと定める。ただし $A^c$ 上では $\\tau=n$ とおく。',
      solutionComment: '最大値がしきい値へ初めて到達する時刻を使うと、最大事象を停止時刻として扱える。',
    },
    {
      id: 1,
      code: '$\\tau$ は有界停止時刻であり、$A=\\{\\tau\\leq n\\}$ 上では $M_\\tau\\geq\\lambda$ である。',
      solutionComment: '$\\{\\tau\\leq k\\}=\\{M_k^*\\geq\\lambda\\}\\in\\mathcal F_k$ なので停止時刻の条件を満たす。',
    },
    {
      id: 2,
      code: 'したがって\n$\\displaystyle \\lambda P(A)\\leq E[M_\\tau\\mathbf1_A]$\nである。',
      solutionComment: '$A$ 上の点ごとの不等式 $M_\\tau\\mathbf1_A\\geq\\lambda\\mathbf1_A$ の期待値を取る。',
    },
    {
      id: 3,
      code: '$A\\in\\mathcal F_\\tau$ である。マルチンゲールの停止後の条件付き期待値の性質より\n$\\displaystyle E[M_n\\mid\\mathcal F_\\tau]=M_\\tau$\nが成り立つ。',
      solutionComment: '有界停止時刻に対する任意停止定理の条件付き版を用いる。',
    },
    {
      id: 4,
      code: 'よって塔の公式を使うと\n$\\displaystyle E[M_\\tau\\mathbf1_A]=E\\left[\\mathbf1_AE[M_n\\mid\\mathcal F_\\tau]\\right]=E[M_n\\mathbf1_A]$\nとなる。',
      solutionComment: '$\\mathbf1_A$ は $\\mathcal F_\\tau$ 可測なので、条件付き期待値の外へ取り出せる。',
    },
    {
      id: 5,
      code: 'ブロック 2 と 4 を合わせて\n$\\displaystyle \\lambda P(M_n^*\\geq\\lambda)\\leq E\\left[M_n\\mathbf1_{\\{M_n^*\\geq\\lambda\\}}\\right]$\nを得る。',
      solutionComment: '$A=\\{M_n^*\\geq\\lambda\\}$ の定義を戻す。',
    },
    {
      id: 6,
      code: '$M_n\\geq0$ なので $M_n\\mathbf1_A\\leq M_n$ であり、\n$\\displaystyle E[M_n\\mathbf1_A]\\leq E[M_n]=E[M_0]$\nである。',
      solutionComment: '非負性で第2不等式を得て、マルチンゲールの期待値保存で最後の等式を得る。',
    },
    {
      id: 7,
      code: '以上より Doob の最大不等式が成り立つ。$\\square$',
      solutionComment: '到達時刻・停止時刻・条件付き期待値を組み合わせ、最大値の確率を終端時刻の期待値で制御した。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [1, 3], [3, 4], [2, 5], [4, 5], [5, 6], [6, 7],
  ],
  hints: [
    '最大値が初めて $\\lambda$ に達する時刻を停止時刻として考えます。',
    '到達事象は停止時刻の情報 $\\mathcal F_\\tau$ で判定できます。',
    '停止時刻から終端時刻までの条件付き期待値と塔の公式で、$M_\\tau$ を $M_n$ に置き換えます。',
  ],
  explanation: {
    summary: 'Doob の最大不等式は、マルチンゲールが途中で大きな値へ到達する確率を、終端時刻の期待値で抑える基本結果です。',
    points: [
      '最大事象を初到達時刻 $\\tau$ に変換することで、マルチンゲールの停止時刻理論を使えます。',
      '$E[M_n\\mid\\mathcal F_\\tau]=M_\\tau$ は、停止時刻から見たマルチンゲールの公平性を表します。',
      '非負性は $E[M_n\\mathbf1_A]\\leq E[M_n]$ を保証するために必要です。',
      '$L^p$ 版の Doob 不等式は、最大関数の期待値そのものを終端値の $L^p$ ノルムで抑えるより強い結果です。',
    ],
    complexity: {
      time: 'マルチンゲール、停止時刻、条件付き期待値、塔の公式',
      space: '初到達時刻で停止し、終端値の期待値へ移す',
    },
    tip: '最大値を直接扱わず、「最初にしきい値を超えた時刻」へ言い換えるのがこの証明の発想です。',
  },
});
