// stat_013: 一様可積分マルチンゲールの収束 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_013',
  title: '一様可積分マルチンゲールの収束',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 5,
  language: 'proof',
  description: '【定理（一様可積分マルチンゲール収束定理）】\nマルチンゲール $(X_n,\\mathcal F_n)_{n\\ge0}$ が一様可積分、すなわち\n$$\\lim_{K\\to\\infty}\\sup_nE[|X_n|\\mathbf1_{\\{|X_n|>K\\}}]=0$$\nを満たすとする。このとき、ある $X_\\infty\\in L^1$ が存在して\n$$X_n\\to X_\\infty\\quad\\text{a.s. かつ }L^1,$$\nさらに\n$$X_n=E[X_\\infty\\mid\\mathcal F_n]$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '一様可積分性より、ある $K>0$ について\n$\\displaystyle \\sup_nE[|X_n|\\mathbf1_{\\{|X_n|>K\\}}]\\le1$\nとできる。従って\n$\\displaystyle \\sup_nE|X_n|\\le K+1<\\infty$\nである。', solutionComment: '$|X_n|\\le K$ の部分の期待値は高々 $K$、tail の期待値は高々1である。' },
    { id: 1, code: '特に $\\sup_nE[X_n^-]<\\infty$ である。またマルチンゲールはスーパーマルチンゲールでもあるので、マルチンゲール収束定理から有限な $X_\\infty$ が存在して\n$\\displaystyle X_n\\to X_\\infty\\quad\\text{a.s.}$\nとなる。', solutionComment: 'stat_012 を適用し、まず標本路ごとの収束を得る。' },
    { id: 2, code: '概収束は確率収束を含む。一様可積分な列に対する Vitali の収束定理より、$X_\\infty\\in L^1$ かつ\n$\\displaystyle E|X_n-X_\\infty|\\to0$\nである。', solutionComment: '一様可積分性が、確率収束を $L^1$ 収束へ強める。これが概収束だけでは不足する追加条件である。' },
    { id: 3, code: '$n$ を固定する。$m\\ge n$ ならマルチンゲール性と塔の公式から\n$\\displaystyle E[X_m\\mid\\mathcal F_n]=X_n$\nである。', solutionComment: '将来時刻 $m$ の値を現在の情報で条件付けると、現在値 $X_n$ に戻る。' },
    { id: 4, code: '条件付き期待値は $L^1$ 縮小写像なので\n$\\displaystyle \\left\\lVert E[X_m-X_\\infty\\mid\\mathcal F_n]\\right\\rVert_1\\le\\lVert X_m-X_\\infty\\rVert_1\\longrightarrow0$\nである。', solutionComment: '∵ Jensen の不等式から $|E[Y\\mid\\mathcal F_n]|\\le E[|Y|\\mid\\mathcal F_n]$。' },
    { id: 5, code: '従って\n$\\displaystyle E[X_m\\mid\\mathcal F_n]\\longrightarrow E[X_\\infty\\mid\\mathcal F_n]$\nが $L^1$ で成り立つ。', solutionComment: '条件付き期待値は $L^1$ 極限と交換できることを、ブロック 4 が直接示している。' },
    { id: 6, code: 'ブロック 3 の左辺は全て $X_n$ に等しいので、その $L^1$ 極限も $X_n$ である。よって\n$\\displaystyle X_n=E[X_\\infty\\mid\\mathcal F_n]$\nを得る。', solutionComment: '固定した $n$ に対して定数列 $X_n$ の極限と、条件付き期待値の極限を同一視する。' },
    { id: 7, code: '$n$ は任意だったので、この表現は全ての $n$ で成り立つ。以上より $X_n\\to X_\\infty$ a.s. かつ $L^1$、および終端値表示が示された。$\\square$', solutionComment: '一様可積分マルチンゲールは、可積分な終端値を順次条件付けた閉じたマルチンゲールである。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [3, 6], [5, 6], [6, 7]],
  hints: [
    '一様可積分性からまず $L^1$ ノルムの一様有界性を示します。',
    '概収束定理の後、Vitali の収束定理で $L^1$ 収束へ強めます。',
    '$m\\ge n$ に対する $X_n=E[X_m\\mid\\mathcal F_n]$ で $m\\to\\infty$ とします。',
  ],
  explanation: {
    summary: '一様可積分性は、概収束したマルチンゲールの質量が無限遠へ逃げることを防ぎ、$L^1$ 収束と終端値による条件付き期待値表示を保証します。',
    points: [
      '概収束だけでは期待値と極限を交換できません。Vitali の収束定理には一様可積分性が必要です。',
      '条件付き期待値の $L^1$ 縮小性により、$X_m\\to X_\\infty$ の極限を条件付き期待値の内側へ移せます。',
      '$X_n=E[X_\\infty\\mid\\mathcal F_n]$ は、各時刻の値が終端値の現在情報による最良予測であることを表します。',
    ],
    complexity: { time: '一様可積分性、Vitali の収束定理、条件付き期待値の $L^1$ 縮小性', space: '概収束を $L^1$ 収束へ強め、終端値表示を得る' },
    tip: '確率変数列の極限と期待値を交換したいときは、概収束だけでなく一様可積分性または支配収束の仮定を確認します。',
  },
});
