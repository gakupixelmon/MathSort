// ta_006: 重一次写像と線形写像の対応 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_006',
  title: '重一次写像の線形化',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 4,
  language: 'proof',
  description: '【定理（重一次写像と線形写像の対応）】\n$\\operatorname{Mult}_{\\mathbb F}(V_1,\\ldots,V_k;U)$ を $V_1\\times\\cdots\\times V_k$ から $U$ への $k$ 重一次写像全体とする。このとき標準的な線形同型\n$$\\operatorname{Mult}_{\\mathbb F}(V_1,\\ldots,V_k;U)\\cong\\operatorname{Hom}_{\\mathbb F}(V_1\\otimes\\cdots\\otimes V_k,U)$$\nが存在する。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '標準的な重一次写像を\n$\\displaystyle \\tau:V_1\\times\\cdots\\times V_k\\to V_1\\otimes\\cdots\\otimes V_k,\\qquad \\tau(v_1,\\ldots,v_k)=v_1\\otimes\\cdots\\otimes v_k$\nとする。', solutionComment: '$k$ 重テンソル積に付随する標準写像であり、各変数について線形である。' },
    { id: 1, code: '$F\\in\\operatorname{Mult}_{\\mathbb F}(V_1,\\ldots,V_k;U)$ を取る。テンソル積の普遍性により、一意な線形写像\n$\\displaystyle \\widetilde F:V_1\\otimes\\cdots\\otimes V_k\\to U$\nが存在し、$\\widetilde F\\circ\\tau=F$ を満たす。', solutionComment: '普遍性は、任意の重一次写像がテンソル積を一意に経由することを述べている。' },
    { id: 2, code: '従って\n$\\displaystyle \\Phi(F)=\\widetilde F$\nと定めることにより、写像\n$\\displaystyle \\Phi:\\operatorname{Mult}_{\\mathbb F}(V_1,\\ldots,V_k;U)\\to\\operatorname{Hom}_{\\mathbb F}(V_1\\otimes\\cdots\\otimes V_k,U)$\nを得る。', solutionComment: '普遍性の一意性があるため、$F$ に対応する $\\widetilde F$ は曖昧なく定まる。' },
    { id: 3, code: '逆に、線形写像 $L:V_1\\otimes\\cdots\\otimes V_k\\to U$ に対し\n$\\displaystyle F_L=L\\circ\\tau,\\qquad F_L(v_1,\\ldots,v_k)=L(v_1\\otimes\\cdots\\otimes v_k)$\nと定める。', solutionComment: '線形写像を標準写像 $\\tau$ と合成して、元の直積上の写像へ戻す。' },
    { id: 4, code: '$\\tau$ は重一次で $L$ は線形だから、$F_L$ は各変数について線形、すなわち重一次写像である。よって $\\Psi(L)=F_L$ とおける。', solutionComment: '他の変数を固定すると $\\tau$ は残る一変数について線形であり、その後に線形写像 $L$ を合成しても線形性は保たれる。' },
    { id: 5, code: '任意の重一次写像 $F$ に対し\n$\\displaystyle (\\Psi\\circ\\Phi)(F)=F_{\\widetilde F}=\\widetilde F\\circ\\tau=F$\nである。', solutionComment: '$\\widetilde F$ を定めた普遍性の可換条件 $\\widetilde F\\circ\\tau=F$ をそのまま使う。' },
    { id: 6, code: '任意の線形写像 $L$ に対し、$\\Phi(\\Psi(L))=\\widetilde{F_L}$ は\n$\\displaystyle \\widetilde{F_L}\\circ\\tau=F_L=L\\circ\\tau$\nを満たす。普遍性の一意性から $\\widetilde{F_L}=L$ である。', solutionComment: '$L$ 自身も $F_L$ を線形化する写像なので、その一意性により普遍性から得た写像と一致する。' },
    { id: 7, code: '従って $\\Phi$ と $\\Psi$ は互いに逆な全単射である。また普遍性の一意性から\n$\\displaystyle \\widetilde{aF+bG}=a\\widetilde F+b\\widetilde G$\nなので $\\Phi$ は線形である。', solutionComment: '右辺は $(aF+bG)$ を線形化する線形写像であるため、一意性により左辺と等しい。' },
    { id: 8, code: '以上より $\\Phi$ は標準的な線形同型であり、\n$\\displaystyle \\operatorname{Mult}_{\\mathbb F}(V_1,\\ldots,V_k;U)\\cong\\operatorname{Hom}_{\\mathbb F}(V_1\\otimes\\cdots\\otimes V_k,U)$\nを得る。$\\square$', solutionComment: '構成には基底を一切選んでいないため、この対応は標準的である。' },
  ],
  partialOrder: [[0, 1], [1, 2], [0, 3], [3, 4], [2, 5], [4, 5], [2, 6], [4, 6], [5, 7], [6, 7], [7, 8]],
  hints: [
    '重一次写像 $F$ は、普遍性によってテンソル積上の線形写像 $\\widetilde F$ になります。',
    '逆対応は、線形写像 $L$ と標準的な重一次写像 $\\tau$ の合成です。',
    '二つの対応が互いに逆であることと、和・スカラー倍を保つことを確認します。',
  ],
  explanation: {
    summary: 'テンソル積は重一次写像を通常の線形写像へ一意に変換する空間であり、その普遍性そのものが二つの写像空間の標準同型を与えます。',
    points: [
      '$F\\mapsto\\widetilde F$ は普遍性による線形化です。',
      '$L\\mapsto L\\circ\\tau$ は線形写像から重一次写像への逆対応です。',
      '互いに逆であることと線形性はいずれも普遍性の一意性から従います。',
    ],
    complexity: { time: '重一次写像、テンソル積の普遍性、線形同型', space: '線形化と標準写像との合成が逆対応であることを示す' },
    tip: '普遍性の証明では「存在」だけでなく「一意性」が、逆対応や線形性の確認にも使われます。',
  },
});
