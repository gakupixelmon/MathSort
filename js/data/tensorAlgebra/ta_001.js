// ta_001: テンソル積の基底と次元 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_001',
  title: 'テンソル積の基底と次元',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 4,
  language: 'proof',
  description: '【定理（テンソル積の基底）】\n$V,W$ を有限次元ベクトル空間とし、$\\{e_1,\\ldots,e_n\\}$、$\\{f_1,\\ldots,f_m\\}$ をそれぞれの基底とする。このとき\n$$\\{e_i\\otimes f_j\\mid1\\le i\\le n,\\ 1\\le j\\le m\\}$$\nは $V\\otimes W$ の基底である。従って\n$$\\dim(V\\otimes W)=(\\dim V)(\\dim W)=nm$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '任意の $v\\in V$、$w\\in W$ を\n$\\displaystyle v=\\sum_{i=1}^na_ie_i,\\qquad w=\\sum_{j=1}^mb_jf_j$\nと表す。', solutionComment: '各ベクトルを選んだ基底で展開する。' },
    { id: 1, code: 'テンソル積の双線形性より\n$\\displaystyle v\\otimes w=\\sum_{i=1}^n\\sum_{j=1}^ma_ib_j(e_i\\otimes f_j)$\nである。', solutionComment: '左変数と右変数について順に分配法則を適用する。' },
    { id: 2, code: '一般のテンソルは単純テンソルの有限和なので、ブロック 1 より $e_i\\otimes f_j$ たちは $V\\otimes W$ を生成する。', solutionComment: '単純テンソル全体がテンソル積空間を生成するという定義を使う。' },
    { id: 3, code: '$\\{e^1,\\ldots,e^n\\}$、$\\{f^1,\\ldots,f^m\\}$ を双対基底とする。各 $(p,q)$ に対し\n$\\displaystyle B_{pq}(v,w)=e^p(v)f^q(w)$\nと定めると、$B_{pq}:V\\times W\\to\\mathbb F$ は双線形である。', solutionComment: '特定の基底テンソルの係数だけを取り出す双線形形式を作る。' },
    { id: 4, code: 'テンソル積の普遍性により、一意な線形写像\n$\\displaystyle \\widetilde B_{pq}:V\\otimes W\\to\\mathbb F$\nが存在し、$\\widetilde B_{pq}(v\\otimes w)=B_{pq}(v,w)$ を満たす。', solutionComment: '双線形形式をテンソル積上の線形汎関数へ線形化する。' },
    { id: 5, code: '$\\displaystyle \\sum_{i,j}c_{ij}e_i\\otimes f_j=0$ と仮定し、$\\widetilde B_{pq}$ を作用させると\n$\\displaystyle 0=\\sum_{i,j}c_{ij}e^p(e_i)f^q(f_j)=c_{pq}$\nとなる。', solutionComment: '双対基底の関係 $e^p(e_i)=\\delta_{pi}$、$f^q(f_j)=\\delta_{qj}$ により一つの係数だけが残る。' },
    { id: 6, code: '$(p,q)$ は任意なので全ての $c_{ij}=0$ である。従って $e_i\\otimes f_j$ たちは一次独立である。', solutionComment: '係数を一つずつ抽出できるため、非自明な一次関係は存在しない。' },
    { id: 7, code: 'ブロック 2, 6 より $\\{e_i\\otimes f_j\\}$ は基底である。その要素数は $nm$ なので\n$\\displaystyle \\dim(V\\otimes W)=nm$\nとなる。$\\square$', solutionComment: 'テンソル積では次元が加法ではなく乗法で増える。' },
  ],
  partialOrder: [[0, 1], [1, 2], [3, 4], [4, 5], [5, 6], [2, 7], [6, 7]],
  hints: [
    '生成性は、単純テンソルの両方のベクトルを基底展開して示します。',
    '一次独立性には双対基底を使い、各係数を取り出す双線形形式を作ります。',
    '双線形形式をテンソル積上の線形汎関数へ移すには普遍性を使います。',
  ],
  explanation: {
    summary: 'テンソル積の基底は、二つの基底ベクトルの全ての組合せからなります。一次独立性は双対基底で各成分を読み取ることで示せます。',
    points: [
      '双線形性が、任意の単純テンソルを基底テンソルの線形結合へ展開します。',
      '普遍性により、係数抽出用の双線形形式を線形汎関数としてテンソル全体へ作用させられます。',
      '基底要素が $nm$ 個あることから次元公式が従います。',
    ],
    complexity: { time: 'テンソル積、双線形性、双対基底、普遍性', space: '生成性と一次独立性を別々に示す' },
    tip: 'テンソルの係数を取り出すときは、元の空間の双対基底を各因子へ作用させます。',
  },
});
