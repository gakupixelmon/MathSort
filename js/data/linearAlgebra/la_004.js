// la_004: スペクトル分解による行列関数 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'la_004',
  title: 'スペクトル分解から行列関数を求める',
  category: 'linear_algebra',
  categoryLabel: '線形代数',
  difficulty: 3,
  language: 'proof',
  description: '【系（対角化可能行列の関数）】\n$A$ が\n$$A=\\sum_{i=1}^k\\lambda_iP_i,\qquad \\sum_iP_i=I,\qquad P_iP_j=\\delta_{ij}P_i$$\nとスペクトル分解されているとする。多項式 $p(t)$ に対して\n$$p(A)=\\sum_{i=1}^kp(\\lambda_i)P_i$$\nが成り立つ。さらに有限次元実・複素ベクトル空間上では\n$$e^A=\\sum_{i=1}^ke^{\\lambda_i}P_i$$\nである。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '射影の積の関係から\n$\\displaystyle A^2=\\sum_{i,j}\\lambda_i\\lambda_jP_iP_j=\\sum_i\\lambda_i^2P_i$\nである。', solutionComment: '異なる添字の交差項は $P_iP_j=0$ により全て消える。' },
    { id: 1, code: '$\\displaystyle A^m=\\sum_i\\lambda_i^mP_i$ と仮定すると\n$\\displaystyle A^{m+1}=A^mA=\\sum_{i,j}\\lambda_i^m\\lambda_jP_iP_j=\\sum_i\\lambda_i^{m+1}P_i$\nである。', solutionComment: '射影の相互消去性により、冪を取っても同じ固有射影だけが残る。' },
    { id: 2, code: '$A^1=\\sum_i\\lambda_iP_i$ とブロック 1 の帰納法より、全ての整数 $m\\ge1$ に対し\n$\\displaystyle A^m=\\sum_i\\lambda_i^mP_i$\nが成り立つ。', solutionComment: 'ブロック 0 は $m=2$ の具体例であり、一般形は帰納法で得られる。' },
    { id: 3, code: '$\\sum_iP_i=I$ より $A^0=I=\\sum_i\\lambda_i^0P_i$ なので、同じ式は $m=0$ にも成り立つ。', solutionComment: '定数項を扱うために、0乗の場合も確認する。' },
    { id: 4, code: '$p(t)=\\sum_{m=0}^Nc_mt^m$ と書けば\n$\\displaystyle p(A)=\\sum_{m=0}^Nc_mA^m=\\sum_{m=0}^Nc_m\\sum_i\\lambda_i^mP_i$\nである。', solutionComment: '行列多項式の定義へ、各冪のスペクトル分解を代入する。' },
    { id: 5, code: '有限和の順序を交換して\n$\\displaystyle p(A)=\\sum_i\\left(\\sum_{m=0}^Nc_m\\lambda_i^m\\right)P_i=\\sum_ip(\\lambda_i)P_i$\nを得る。', solutionComment: '各固有空間上では、行列多項式 $p(A)$ はスカラー $p(\\lambda_i)$ として作用する。' },
    { id: 6, code: '行列指数関数の絶対収束する級数へ同じ冪公式を代入すると\n$\\displaystyle e^A=\\sum_{m=0}^\\infty\\frac{A^m}{m!}=\\sum_i\\left(\\sum_{m=0}^\\infty\\frac{\\lambda_i^m}{m!}\\right)P_i=\\sum_ie^{\\lambda_i}P_i$\nとなる。$\\square$', solutionComment: '固有射影の個数は有限なので、収束級数と有限和の順序を交換できる。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [2, 4], [3, 4], [4, 5], [2, 6], [3, 6], [5, 6]],
  hints: [
    'まず $P_iP_j=\\delta_{ij}P_i$ を使って $A^2$ を計算します。',
    '$A^m$ の公式を帰納法で示し、定数項のために $m=0$ も確認します。',
    '多項式と指数級数へ冪の公式を代入します。',
  ],
  explanation: {
    summary: 'スペクトル分解が分かれば、行列の冪や指数関数は各固有値へ同じスカラー関数を作用させるだけで計算できます。',
    points: [
      '射影の相互消去性により、行列を掛け合わせても異なる固有空間の交差項は残りません。',
      '多項式汎関数計算 $p(A)$ は、各固有値を $p(\\lambda_i)$ に置き換える操作です。',
      '同じ考えは収束するべき級数で定義される行列関数にも広がります。',
    ],
    complexity: { time: '固有射影、行列の冪、行列多項式、行列指数関数', space: '作用素の計算を各固有空間上のスカラー計算へ分離する' },
    tip: '対角化可能行列の関数を計算するときは、行列そのものより先に固有値へ関数を作用させます。',
  },
});
