// ml_027: Contextual RAF - 二成分スペクトルの両立レジーム ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_027',
  title: '二成分スペクトルで規則と事実を両立する構成',
  category: 'papers_contextual_raf',
  categoryLabel: '機械学習 / 論文 / Contextual RAF',
  difficulty: 5,
  language: 'proof',
  description: '【発展定理の十分性（両立レジーム）】\n$D=d-r$、$q_\\varepsilon=(1-\\varepsilon)\\sqrt{2/\\pi}>0$ とする。二成分スペクトル\n$$W_\\lambda=P_U+\\lambda P_{U^\\perp}$$\nについて、規則汎化の必要十分条件を\n$$\\eta_M=\\frac{r-1+\\lambda^2D}{M}\\to0$$\nとし、全事実再生の鋭い閾値を\n$$\\rho_M=\\frac{r+\\lambda D}{q_\\varepsilon M\\sqrt{2\\log(\\varepsilon M)}}>1\\ \\text{in the limit}$$\nとする。$r=o(M)$、$M\\log M=o(D)$ のとき、固定した $\\gamma>0$ に対し\n$$\\lambda_M=(1+\\gamma)\\frac{q_\\varepsilon M\\sqrt{2\\log(\\varepsilon M)}}{D}$$\nを選べば、規則汎化と全事実再生が同時に成立することを示せ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$\\displaystyle a_M=q_\\varepsilon M\\sqrt{2\\log(\\varepsilon M)}$ とおく。仮定 $M\\log M=o(D)$ より\n$\\displaystyle \\lambda_M=(1+\\gamma)\\frac{a_M}{D}\\longrightarrow0$\nであり、十分大きい $M$ で $0<\\lambda_M\\le1$ である。', solutionComment: '二成分スペクトルの admissible な固有値範囲に、臨界スケールの $\\lambda_M$ が入ることを確認する。' },
    { id: 1, code: '規則雑音の大きさは\n$\\displaystyle \\eta_M=\\frac{r-1}{M}+\\frac{\\lambda_M^2D}{M}$\nと分解できる。', solutionComment: '共有部分空間の次元と ambient tail の二乗和が、規則汎化に効く。' },
    { id: 2, code: '$r=o(M)$ より第1項は $0$ へ収束する。また\n$\\displaystyle \\frac{\\lambda_M^2D}{M}=(1+\\gamma)^2\\frac{2q_\\varepsilon^2M\\log(\\varepsilon M)}{D}\\longrightarrow0$\nである。', solutionComment: '∵ $M\\log M=o(D)$ と $\\log(\\varepsilon M)\\sim\\log M$ を使う。' },
    { id: 3, code: 'したがって $\\eta_M\\to0$ であり、規則汎化の必要十分条件から\n$\\displaystyle \\mathcal E_{\\rm rule}(\\lambda_M)\\xrightarrow{\\mathbb P}0$\nとなる。', solutionComment: 'ambient 固有値は二乗で規則雑音へ寄与するため、この大きさでも汎化を壊さない。' },
    { id: 4, code: '一方、memory の trace は\n$\\displaystyle r+\\lambda_MD=r+(1+\\gamma)a_M$\nである。', solutionComment: 'ambient 固有値は trace には一次で寄与するため、memory を支える。' },
    { id: 5, code: '$r=o(M)$ と $a_M\\asymp M\\sqrt{\\log M}$ より $r/a_M\\to0$ である。従って\n$\\displaystyle \\rho_M=\\frac{r+\\lambda_MD}{a_M}\\longrightarrow1+\\gamma>1$\nとなる。', solutionComment: '共有部分空間の trace は臨界 memory スケールでは低次の寄与になる。' },
    { id: 6, code: '全事実再生の 0--1 閾値より $\\rho_M\\to1+\\gamma>1$ なら\n$\\displaystyle P(\\mathsf{Mem}_M)\\to1$\nである。ブロック 3 と合わせ、規則汎化と全事実再生が同時に成立する。$\\square$', solutionComment: 'これが $r\\ll M\\ll D/\\log M$ という非空の両立レジームを与える。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6], [3, 6]],
  hints: [
    '$\\lambda_M$ を臨界 trace $a_M$ を ambient 次元 $D$ で割ったものとして置きます。',
    '規則汎化では $\\lambda_M$ は二乗で、memory では一次で現れる点を比べます。',
    '規則条件と memory 閾値へ、それぞれ得た極限を代入します。',
  ],
  explanation: {
    summary: '二成分スペクトルでは、小さい ambient 固有値が規則汎化には二乗でしか効かない一方、事実再生の自己項には一次で寄与します。この差が両立を可能にします。',
    points: [
      '$r=o(M)$ は共有部分空間だけで規則雑音が大きくならない条件です。',
      '$M\\log M=o(D)$ は、必要な memory trace を広い ambient 次元へ薄く配りながら、二乗雑音を消す条件です。',
      '$\\lambda_M$ は全事実再生の閾値をわずかに上回る最小級の ambient 固有値であり、ノートの $\\lambda_{\\rm crit}$ に対応します。',
    ],
    complexity: { time: '漸近解析、必要十分条件、極値閾値、スペクトル設計', space: '規則雑音と memory trace に対する固有値の異なる寄与を比較する' },
    tip: '同じパラメータが一方の性能指標には二乗、別の指標には一次で入るときは、小さな値を多数の方向へ配る設計が有効になり得ます。',
  },
});
