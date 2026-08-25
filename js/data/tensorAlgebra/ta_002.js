// ta_002: 一次写像空間の基底と次元 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_002',
  title: '一次写像空間の基底と次元',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理（$\\operatorname{Hom}(V,W)$ の基底）】\n$\\dim V=n$、$\\dim W=m$ とし、基底を $\\mathcal E=(e_1,\\ldots,e_n)$、$\\mathcal F=(f_1,\\ldots,f_m)$ とする。\n$$E_{ij}(e_k)=\\delta_{jk}f_i$$\nで定めた線形写像 $E_{ij}:V\\to W$ は $\\operatorname{Hom}(V,W)$ の基底をなし、\n$$\\dim\\operatorname{Hom}(V,W)=mn$$\nである。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$T\\in\\operatorname{Hom}(V,W)$ を任意に取る。各 $j$ について一意に\n$\\displaystyle T(e_j)=\\sum_{i=1}^ma_{ij}f_i$\nと書ける。', solutionComment: '線形写像は基底ベクトルの像で決まり、その像を $W$ の基底で展開する。' },
    { id: 1, code: '$\\displaystyle S=\\sum_{i=1}^m\\sum_{j=1}^na_{ij}E_{ij}$ とおくと、各 $e_k$ に対し\n$\\displaystyle S(e_k)=\\sum_{i=1}^ma_{ik}f_i=T(e_k)$\nである。', solutionComment: '$E_{ij}$ は第 $j$ 基底ベクトルの第 $i$ 成分だけを作る基本写像である。' },
    { id: 2, code: '二つの線形写像は基底上で一致すれば全空間で一致するので、$S=T$ である。従って $E_{ij}$ たちは $\\operatorname{Hom}(V,W)$ を生成する。', solutionComment: '任意の線形写像を基本写像の線形結合として表せた。' },
    { id: 3, code: '次に\n$\\displaystyle \\sum_{i,j}c_{ij}E_{ij}=0$\nと仮定する。両辺を $e_k$ に作用させると\n$\\displaystyle \\sum_{i=1}^mc_{ik}f_i=0$\nとなる。', solutionComment: '一次独立性を調べるため、基本写像の線形関係を各入力基底ベクトルで評価する。' },
    { id: 4, code: '$f_1,\ldots,f_m$ は一次独立なので、固定した $k$ に対して全ての $i$ で $c_{ik}=0$ である。', solutionComment: '出力基底に関する座標表示の一意性を使う。' },
    { id: 5, code: '$k$ は任意だから全ての $c_{ij}=0$ である。従って $E_{ij}$ たちは一次独立である。', solutionComment: '全ての列に対応する係数が0となる。' },
    { id: 6, code: '生成性と一次独立性より $\\{E_{ij}\\}$ は基底である。要素数は $mn$ なので\n$\\displaystyle \\dim\\operatorname{Hom}(V,W)=mn$\nとなる。$\\square$', solutionComment: '表現行列の $mn$ 個の成分が、線形写像空間の自由度に対応する。' },
  ],
  partialOrder: [[0, 1], [1, 2], [3, 4], [4, 5], [2, 6], [5, 6]],
  hints: [
    '任意の線形写像について、各入力基底ベクトルの像を出力基底で展開します。',
    '一次独立性は、基本写像の線形結合を各 $e_k$ に作用させて調べます。',
    '基底要素は入力の添字と出力の添字の組だけ存在します。',
  ],
  explanation: {
    summary: '一次写像空間の基本写像 $E_{ij}$ は、行列単位と同じ役割を持ちます。入力方向と出力方向の全ての組が一つの自由度になります。',
    points: [
      '線形写像は基底の像だけで一意に決まります。',
      '$E_{ij}$ は表現行列で成分 $(i,j)$ だけが1の行列に対応します。',
      '次元公式 $mn$ は、後の $W\\otimes V^*$ との同型の次元とも一致します。',
    ],
    complexity: { time: '線形写像、基底、表現行列、次元', space: '任意の写像を基本写像 $E_{ij}$ で展開する' },
    tip: '線形写像空間の問題では、入力基底の各元をどの出力基底へ送るかで自由度を数えます。',
  },
});
