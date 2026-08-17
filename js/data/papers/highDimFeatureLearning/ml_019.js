// ml_019: High-dimensional Asymptotics of Feature Learning - 勾配の rank-one spike ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_019',
  title: 'rank-one 勾配 spike の特異値構造',
  category: 'papers_high_dim_feature_learning',
  categoryLabel: '機械学習 / 論文 / High-dimensional Feature Learning',
  difficulty: 3,
  language: 'proof',
  description: '【補題（rank-one 勾配信号）】\n$X\\in\\mathbb R^{n\\times d}$、$y\\in\\mathbb R^n$、$a\\in\\mathbb R^N$ とし、\n$$u=\\frac1nX^\\top y,\\qquad v=\\frac1{\\sqrt N}a,\\qquad A=\\mu_1uv^\\top$$\nとおく。$\\mu_1\\ne0$ かつ $u,v\\ne0$ のとき、$A$ は rank-one で、その唯一の非零特異値は $|\\mu_1|\\lVert u\\rVert_2\\lVert v\\rVert_2$ である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$A=\\mu_1uv^\\top$ の各列は $u$ のスカラー倍である。したがって $\\operatorname{rank}(A)\\le1$ である。', solutionComment: '外積でできた行列の列空間は、左側ベクトルが張る一次元空間に含まれる。' },
    { id: 1, code: '$u,v\\ne0$ かつ $\\mu_1\\ne0$ なら $A\\ne0$ なので、$\\operatorname{rank}(A)=1$ である。', solutionComment: 'rank が高々1で行列が0でなければ、rank はちょうど1である。' },
    { id: 2, code: '転置して掛けると\n$\\displaystyle A^\\top A=\\mu_1^2vu^\\top uv^\\top=\\mu_1^2\\lVert u\\rVert_2^2vv^\\top$\nである。', solutionComment: '内側の $u^\\top u$ はスカラー $\\lVert u\\rVert_2^2$ になる。' },
    { id: 3, code: '$\\widehat v=v/\\lVert v\\rVert_2$ とおけば\n$\\displaystyle A^\\top A\\widehat v=\\mu_1^2\\lVert u\\rVert_2^2\\lVert v\\rVert_2^2\\widehat v$\nである。', solutionComment: 'したがって $\\widehat v$ は $A^\\top A$ の非零固有値に対応する固有ベクトルである。' },
    { id: 4, code: '$v$ に直交する任意の $z$ について $v^\\top z=0$ だから、$A^\\top Az=0$ である。', solutionComment: '$A^\\top A$ の残りの固有値は全て0である。' },
    { id: 5, code: '特異値は $A^\\top A$ の固有値の平方根なので、唯一の非零特異値は\n$\\displaystyle s_1(A)=|\\mu_1|\\lVert u\\rVert_2\\lVert v\\rVert_2$\nである。', solutionComment: 'rank-one 行列では、非零特異値は一つだけである。' },
    { id: 6, code: '実際、$\\widehat u=u/\\lVert u\\rVert_2$ とすれば\n$\\displaystyle A\\widehat v=\\mu_1\\lVert u\\rVert_2\\lVert v\\rVert_2\\widehat u$\nであり、左右の特異方向は $u$ と $v$ の方向である。$\\square$', solutionComment: 'Proposition 2 の $A=\\mu_1X^\\top ya^\\top/(n\\sqrt N)$ はこの形であり、勾配に一つの支配的方向が生じる理由を表す。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [5, 6]],
  hints: [
    '外積 $uv^\\top$ の全ての列は $u$ のスカラー倍です。',
    '特異値は $A^\\top A$ の固有値の平方根として求めます。',
    '$v$ に平行な方向と直交する方向に分けて考えます。',
  ],
  explanation: {
    summary: '一回目の勾配更新の主成分は外積であり、入力側の相関 $X^\\top y$ と出力層係数 $a$ を一つの特異方向として結び付けます。',
    points: [
      '$X^\\top y/n$ は入力とラベルの経験的相関で、教師の線形成分への整列の入口になります。',
      'Proposition 2 は、実際の勾配がこの rank-one 行列に作用素ノルムで近いことを示します。',
      '近い行列の主特異方向まで安定かどうかは、次の spike 整列問題で扱います。',
    ],
    complexity: { time: '外積、rank、特異値分解、作用素ノルム', space: 'rank-one 行列の唯一の特異値と左右の特異方向を求める' },
    tip: '外積行列を見たら、まず列空間と行空間がそれぞれどのベクトルで張られるかを確認します。',
  },
});
