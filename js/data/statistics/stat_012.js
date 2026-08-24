// stat_012: スーパーマルチンゲール収束定理 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_012',
  title: 'スーパーマルチンゲール収束定理',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 5,
  language: 'proof',
  description: '【定理（マルチンゲール収束定理）】\n$(X_n,\\mathcal F_n)_{n\\ge0}$ をスーパーマルチンゲールとし、\n$$\\sup_{n\\ge0}E[X_n^-]<\\infty$$\nを仮定する。このとき、ある有限値確率変数 $X_\\infty$ が存在して\n$$X_n\\longrightarrow X_\\infty\\qquad\\text{a.s.}$$\nが成り立つ。上向き横断不等式を用いた以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$C=\\sup_nE[X_n^-]<\\infty$ とおく。任意の有理数 $a<b$ に対し\n$\\displaystyle (X_n-a)^-\\le X_n^-+|a|$\nなので、上向き横断不等式から\n$\\displaystyle (b-a)E[U_n[a,b]]\\le C+|a|$\nである。', solutionComment: '負部分の一様有界性により、各有理区間の横断回数の期待値を時刻によらず抑えられる。' },
    { id: 1, code: '$U_n[a,b]$ は $n$ について単調非減少なので、$U_\\infty[a,b]=\\lim_nU_n[a,b]$ とおける。単調収束定理より\n$\\displaystyle E[U_\\infty[a,b]]\\le\\frac{C+|a|}{b-a}<\\infty$\nである。', solutionComment: '有限期待値を持つ非負確率変数は、ほとんど確実に有限値である。' },
    { id: 2, code: '従って固定した有理数 $a<b$ について\n$\\displaystyle U_\\infty[a,b]<\\infty\\qquad\\text{a.s.}$\nである。', solutionComment: '無限回横断する事象に正の確率があれば、期待値は無限大になってしまう。' },
    { id: 3, code: '有理数対 $(a,b)$ は可算個しかないため、確率1の一つの事象上で全ての有理数 $a<b$ に対して $U_\\infty[a,b]<\\infty$ が同時に成り立つ。', solutionComment: '可算個の確率1事象の共通部分も確率1である。' },
    { id: 4, code: 'その事象上で $\\liminf_nX_n<\\limsup_nX_n$ なら、その間に有理数 $a<b$ を選べる。すると標本路は $a$ より下と $b$ より上を無限回行き来し、$[a,b]$ を無限回上向き横断する。', solutionComment: '有理数の稠密性により、収束しない振動をどれか一つの有理区間で検出できる。' },
    { id: 5, code: 'これはブロック 3 に矛盾する。従って\n$\\displaystyle \\liminf_nX_n=\\limsup_nX_n$\nであり、$X_n$ はある拡張実数値 $X_\\infty$ へほとんど確実に収束する。', solutionComment: '全ての有理区間の横断回数が有限なら、標本路は永続的に振動できない。' },
    { id: 6, code: 'スーパーマルチンゲール性より $E[X_n]\\le E[X_0]$ であり、\n$\\displaystyle E[X_n^+]=E[X_n]+E[X_n^-]\\le E[X_0]+C$\nだから、正部分の期待値も一様有界である。', solutionComment: '$X_n=X_n^+-X_n^-$ を使い、上側への発散も期待値で制御する。' },
    { id: 7, code: 'もし $P(X_\\infty=-\\infty)>0$ なら、その事象上で $X_n^-\\to\\infty$ となる。Fatou の補題は\n$\\displaystyle E[\\liminf_nX_n^-]\\le\\liminf_nE[X_n^-]\\le C$\nに矛盾する。', solutionComment: '左辺は正の確率で無限大となるため、期待値も無限大になる。' },
    { id: 8, code: '同様に $P(X_\\infty=+\\infty)>0$ なら $X_n^+\\to\\infty$ となり、ブロック 6 と Fatou の補題に矛盾する。', solutionComment: '正部分の一様期待値評価が $+\\infty$ への発散を排除する。' },
    { id: 9, code: '従って $X_\\infty$ はほとんど確実に有限であり、$X_n\\to X_\\infty$ a.s. が成り立つ。$\\square$', solutionComment: '横断不等式が極限の存在を、正負部分の一様評価が極限の有限性を保証する。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [0, 6], [5, 7], [0, 7], [5, 8], [6, 8], [7, 9], [8, 9]],
  hints: [
    '各有理区間 $[a,b]$ の上向き横断回数の期待値を一様に抑えます。',
    '収束しない標本路は、ある有理区間を無限回横断します。',
    '最後に Fatou の補題を正部分・負部分へ適用し、極限が有限であることを示します。',
  ],
  explanation: {
    summary: 'マルチンゲール収束定理は、横断回数の制御で無限振動を排除し、正負部分の期待値評価で無限大への発散を排除します。',
    points: [
      '有理区間だけ調べれば十分なのは、有理数が実数に稠密で、しかも可算だからです。',
      '概収束の証明だけでは極限が $\\pm\\infty$ の可能性が残るため、Fatou の補題による追加評価が必要です。',
      'この仮定だけでは一般に $L^1$ 収束までは従いません。',
    ],
    complexity: { time: '上向き横断不等式、単調収束定理、Fatou の補題、可算性', space: '無限振動と無限大への発散を別々に排除する' },
    tip: '確率過程の収束証明では、「極限が存在すること」と「極限が有限であること」を分けて確認します。',
  },
});
