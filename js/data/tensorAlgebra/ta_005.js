// ta_005: 多重テンソル積の基底と次元 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_005',
  title: '多重テンソル積の基底と次元',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理（多重テンソル積の基底）】\n有限次元ベクトル空間 $V_r$ の基底を $\\mathcal E_r=(e^{(r)}_1,\\ldots,e^{(r)}_{n_r})$ とする。このとき\n$$\\{e^{(1)}_{i_1}\\otimes\\cdots\\otimes e^{(k)}_{i_k}\\mid1\\le i_r\\le n_r\\}$$\nは $V_1\\otimes\\cdots\\otimes V_k$ の基底であり、\n$$\\dim(V_1\\otimes\\cdots\\otimes V_k)=\\prod_{r=1}^k\\dim V_r$$\nである。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$k$ に関する数学的帰納法で示す。$k=2$ のとき、\n$\\displaystyle \\{e^{(1)}_{i_1}\\otimes e^{(2)}_{i_2}\\}$\nが $V_1\\otimes V_2$ の基底であることは、二空間のテンソル積の基底定理から従う。', solutionComment: '帰納法の基底は ta_001 で証明した二因子の場合である。' },
    { id: 1, code: '$k-1$ 個の場合に\n$\\displaystyle \\mathcal B_{k-1}=\\{e^{(1)}_{i_1}\\otimes\\cdots\\otimes e^{(k-1)}_{i_{k-1}}\\}$\nが $V_1\\otimes\\cdots\\otimes V_{k-1}$ の基底であると仮定する。', solutionComment: '帰納法の仮定として、最初の $k-1$ 因子の基底を得ているとする。' },
    { id: 2, code: '$U=V_1\\otimes\\cdots\\otimes V_{k-1}$ とおく。二空間 $U,V_k$ に基底定理を適用すると、\n$\\displaystyle \\{b\\otimes e^{(k)}_{i_k}\\mid b\\in\\mathcal B_{k-1},\\ 1\\le i_k\\le n_k\\}$\nは $U\\otimes V_k$ の基底である。', solutionComment: '多重テンソル積を、前の $k-1$ 因子と最後の一因子との二項テンソル積として見る。' },
    { id: 3, code: 'テンソル積の標準的な結合則で括弧を省略すれば、この基底はちょうど\n$\\displaystyle \\{e^{(1)}_{i_1}\\otimes\\cdots\\otimes e^{(k)}_{i_k}\\}$\nである。', solutionComment: 'ta_004 の結合則により、反復テンソル積の括弧の位置は基底の記法に影響しない。' },
    { id: 4, code: '従って帰納法により、主張した集合は任意の $k\\ge2$ について $V_1\\otimes\\cdots\\otimes V_k$ の基底である。', solutionComment: '基底・帰納段階がそろったため、多重テンソル積の基底定理が従う。' },
    { id: 5, code: '各添字 $i_r$ には $n_r$ 通りの選択があり、選択は互いに独立なので、基底要素の個数は\n$\\displaystyle n_1n_2\\cdots n_k=\\prod_{r=1}^kn_r$\nである。', solutionComment: '積の法則により、添字の組 $(i_1,\\ldots,i_k)$ の総数を数える。' },
    { id: 6, code: '$n_r=\\dim V_r$ であり、有限次元空間の次元は基底要素数に等しい。よって\n$\\displaystyle \\dim(V_1\\otimes\\cdots\\otimes V_k)=\\prod_{r=1}^k\\dim V_r.$\n$\\square$', solutionComment: '基底の濃度を次元へ読み替えると、次元の積公式が得られる。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6]],
  hints: [
    '$k=2$ の基底定理を帰納法の出発点にします。',
    '最初の $k-1$ 因子を一つの空間 $U$ とみなし、$U\\otimes V_k$ に二因子の定理を使います。',
    '次元は各添字の選び方の総数です。',
  ],
  explanation: {
    summary: '二因子の基底定理を繰り返し適用すると、多重テンソル積の基底と次元の積公式が帰納的に得られます。',
    points: [
      '帰納段階では最初の $k-1$ 因子を一つのベクトル空間として扱います。',
      '結合則の標準同型により、基底テンソルの括弧を省略できます。',
      '基底要素は各因子から基底ベクトルを一つずつ選ぶ全ての組です。',
    ],
    complexity: { time: '多重テンソル積、基底、数学的帰納法、次元', space: '二因子の基底定理を因子数について反復する' },
    tip: '多重テンソル積の証明では、最後の一因子だけを切り出すと二因子の場合へ帰着できます。',
  },
});
