// la_003: 固有射影によるスペクトル分解 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'la_003',
  title: '固有射影によるスペクトル分解',
  category: 'linear_algebra',
  categoryLabel: '線形代数',
  difficulty: 4,
  language: 'proof',
  description: '【定理（固有射影によるスペクトル分解）】\n$A:V\\to V$ が対角化可能であり、相異なる固有値を $\\lambda_1,\\ldots,\\lambda_k$ とする。\n$$V=\\bigoplus_{i=1}^kW_{\\lambda_i}$$\nのとき、値域が $W_{\\lambda_i}$ である線形射影 $P_i$ が存在し、\n$$\\sum_{i=1}^kP_i=I,\\qquad P_iP_j=\\delta_{ij}P_i,\\qquad A=\\sum_{i=1}^k\\lambda_iP_i$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '直和分解より任意の $x\\in V$ はただ一通り\n$\\displaystyle x=v_1+\\cdots+v_k,\\qquad v_i\\in W_{\\lambda_i}$\nと書ける。', solutionComment: '存在だけでなく一意性があることが、各成分を写像として定義できる理由になる。' },
    { id: 1, code: '$\\displaystyle P_i x=v_i$ と定める。すなわち $P_i$ は $x$ の $W_{\\lambda_i}$ 成分だけを取り出す。', solutionComment: '直和分解に付随する標準的な成分射影である。' },
    { id: 2, code: 'ベクトルの和とスカラー倍では各固有空間成分も同じように和・スカラー倍される。分解の一意性より $P_i$ は線形である。', solutionComment: '例えば $x=\\sum v_j$、$y=\\sum w_j$ なら、$x+y=\\sum(v_j+w_j)$ が直和成分表示になる。' },
    { id: 3, code: '任意の $x=\\sum_iv_i$ に対して\n$\\displaystyle \\left(\\sum_{i=1}^kP_i\\right)x=\\sum_{i=1}^kv_i=x$\nなので、$\\sum_iP_i=I$ である。', solutionComment: '全ての固有空間成分を足し戻すと元のベクトルになる。' },
    { id: 4, code: '$P_jx=v_j\\in W_{\\lambda_j}$ は第 $j$ 成分だけを持つ。したがって\n$\\displaystyle P_iP_jx=\\begin{cases}P_ix,&i=j,\\\\0,&i\\ne j,\n\\end{cases}$\nである。', solutionComment: '異なる固有空間への射影は互いを消し、同じ射影を二度作用させても変化しない。' },
    { id: 5, code: 'ブロック 4 は全ての $x$ について成り立つので\n$\\displaystyle P_iP_j=\\delta_{ij}P_i$\nである。特に $P_i^2=P_i$ である。', solutionComment: 'この関係が固有射影の相互消去性と冪等性を表す。' },
    { id: 6, code: '$v_i\\in W_{\\lambda_i}$ より $Av_i=\\lambda_iv_i$ なので\n$\\displaystyle Ax=A\\left(\\sum_i v_i\\right)=\\sum_i\\lambda_iv_i$\nである。', solutionComment: '各固有空間上では $A$ は固有値によるスカラー倍として作用する。' },
    { id: 7, code: '$v_i=P_ix$ をブロック 6 に代入すると\n$\\displaystyle Ax=\\left(\\sum_{i=1}^k\\lambda_iP_i\\right)x$\nとなる。', solutionComment: '固有空間成分を射影作用素で表し直す。' },
    { id: 8, code: 'これは任意の $x\\in V$ で成り立つため\n$\\displaystyle A=\\sum_{i=1}^k\\lambda_iP_i$\nである。以上で全ての式が示された。$\\square$', solutionComment: '一般の対角化可能行列では $P_i$ は直交射影とは限らず、直和に沿った射影である。' },
  ],
  partialOrder: [[0, 1], [1, 2], [1, 3], [1, 4], [4, 5], [0, 6], [6, 7], [1, 7], [7, 8], [3, 8], [5, 8]],
  hints: [
    '直和分解における第 $i$ 成分を取り出す写像として $P_i$ を定義します。',
    '$P_jx$ が一つの固有空間成分しか持たないことから、射影同士の積を計算します。',
    '$A$ を各成分 $v_i$ に作用させ、$v_i=P_ix$ と戻します。',
  ],
  explanation: {
    summary: '対角化可能な写像は、各固有空間を選び出す射影の重み付き和として表せます。これは対角行列表示を基底に依存しない作用素の式へ直したものです。',
    points: [
      '$P_i$ は固有空間 $W_{\\lambda_i}$ の成分だけを抽出します。',
      '$P_iP_j=0$ は異なるモードが干渉しないこと、$P_i^2=P_i$ は射影の冪等性を表します。',
      '実対称行列ではこれらは直交射影になりますが、一般の対角化可能行列では斜交射影の場合があります。',
    ],
    complexity: { time: '直和分解、射影作用素、スペクトル分解', space: 'ベクトルの固有空間成分を作用素として抽出する' },
    tip: '基底表示の対角行列を、固有空間への射影の和として書き直すと、基底を選ばない議論ができます。',
  },
});
