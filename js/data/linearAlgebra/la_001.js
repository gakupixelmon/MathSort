// la_001: 相異なる固有空間の直和性 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'la_001',
  title: '相異なる固有空間の直和性',
  category: 'linear_algebra',
  categoryLabel: '線形代数',
  difficulty: 3,
  language: 'proof',
  description: '【定理（相異なる固有空間の直和性）】\n$V$ を体 $\\mathbb F$ 上の有限次元ベクトル空間、$A:V\\to V$ を線形写像とする。$\\lambda_1,\\ldots,\\lambda_k$ を相異なる固有値とし、\n$$W_{\\lambda_i}=\\ker(A-\\lambda_iI)$$\nとおく。このとき $W_{\\lambda_1}+\\cdots+W_{\\lambda_k}$ は直和である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$v_i\\in W_{\\lambda_i}$ が\n$\\displaystyle v_1+\\cdots+v_k=0$\nを満たすと仮定し、$r\\in\\{1,\\ldots,k\\}$ を一つ固定する。', solutionComment: '直和性を示すには、零ベクトルの表示が自明なものだけであることを示せばよい。' },
    { id: 1, code: '$\\displaystyle q_r(t)=\\prod_{j\\ne r}(t-\\lambda_j)$ とおき、線形写像\n$\\displaystyle q_r(A)=\\prod_{j\\ne r}(A-\\lambda_jI)$\nを考える。', solutionComment: '固定した固有空間以外を消す多項式を作る。各因子は $A$ の多項式なので互いに可換である。' },
    { id: 2, code: 'ブロック 0 の等式へ $q_r(A)$ を作用させると\n$\\displaystyle \\sum_{i=1}^k q_r(A)v_i=0$\nとなる。', solutionComment: '線形写像はベクトルの和へ項別に作用する。' },
    { id: 3, code: '$i\\ne r$ なら積 $q_r(A)$ に因子 $A-\\lambda_iI$ が含まれ、$v_i\\in\\ker(A-\\lambda_iI)$ だから\n$\\displaystyle q_r(A)v_i=0$\nである。', solutionComment: 'この多項式は、$r$ 番目以外の固有空間を全て消去する。' },
    { id: 4, code: '$Av_r=\\lambda_rv_r$ より\n$\\displaystyle q_r(A)v_r=q_r(\\lambda_r)v_r=\\left(\\prod_{j\\ne r}(\\lambda_r-\\lambda_j)\\right)v_r$\nである。', solutionComment: '固有ベクトルへ $A$ の多項式を作用させると、固有値を代入したスカラー倍になる。' },
    { id: 5, code: 'ブロック 2--4 から\n$\\displaystyle \\left(\\prod_{j\\ne r}(\\lambda_r-\\lambda_j)\\right)v_r=0$\nを得る。', solutionComment: '$r$ 番目以外の項が全て0となり、$v_r$ の項だけが残る。' },
    { id: 6, code: '固有値は相異なるため係数 $\\prod_{j\\ne r}(\\lambda_r-\\lambda_j)$ は0でない。したがって $v_r=0$ である。', solutionComment: '体の非零元は逆元を持つため、非零スカラー倍が0ならベクトル自身が0である。' },
    { id: 7, code: '$r$ は任意だったので全ての $i$ について $v_i=0$ である。よって $W_{\\lambda_1}+\\cdots+W_{\\lambda_k}$ は直和である。$\\square$', solutionComment: '二つずつの共通部分だけでなく、任意個の固有空間の和に対する一意性が示された。' },
  ],
  partialOrder: [[0, 1], [0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [5, 6], [6, 7]],
  hints: [
    '一つの添字 $r$ を固定し、$r$ 以外の固有空間を消す多項式を考えます。',
    '$v_i$ へ $A$ の多項式を作用させると、固有値 $\\lambda_i$ を代入できます。',
    '相異なる固有値の差は全て非零です。',
  ],
  explanation: {
    summary: '相異なる固有値に対応する固有空間は、互いの成分を混同しない直和を作ります。証明では Lagrange 補間に似た多項式で一つの固有空間だけを抽出します。',
    points: [
      '$q_r(A)$ は $W_{\\lambda_r}$ 以外の固有空間を全て0へ送ります。',
      '三つ以上の部分空間では二つずつの共通部分が0というだけでは直和性は従いませんが、固有空間にはこの強い消去法が使えます。',
      'この直和性が、対角化可能性と固有空間分解を結ぶ基礎になります。',
    ],
    complexity: { time: '固有空間、直和、線形写像の多項式', space: '固有値ごとの消去多項式で各成分を取り出す' },
    tip: '複数の固有値を分離したいときは、特定の固有値以外で0になる多項式を作ると見通しが良くなります。',
  },
});
