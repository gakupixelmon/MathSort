// ml_theory_006: Moore-Aronszajn の定理 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_theory_006',
  title: 'Moore-Aronszajn の定理の証明',
  category: 'ml_theory',
  categoryLabel: '機械学習 / 学習理論',
  difficulty: 5,
  language: 'proof',
  description: '【定理（Moore-Aronszajn）】\n$\\mathcal X$ 上の実数値対称カーネル $K:\\mathcal X\\times\\mathcal X\\to\\mathbb R$ が正定値、すなわち任意の有限列 $x_1,\\ldots,x_m\\in\\mathcal X$ と係数 $c_1,\\ldots,c_m\\in\\mathbb R$ に対して\n$$\\sum_{i,j=1}^m c_ic_jK(x_i,x_j)\\ge0$$\nを満たすとする。このとき $K$ を再生核とする RKHS $\\mathcal H_K$ が存在し、標準的な同一視の下で一意である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '各 $x\\in\\mathcal X$ に対し $K_x(\\cdot)=K(\\cdot,x)$ とおき、\n$\\displaystyle \\mathcal H_0=\\operatorname{span}\\{K_x:x\\in\\mathcal X\\}$\nと定める。',
      solutionComment: '再生核の候補となる核断面 $K_x$ の有限線形結合から出発する。',
    },
    {
      id: 1,
      code: '$\\displaystyle f=\\sum_{i=1}^m a_iK_{x_i},\\quad g=\\sum_{j=1}^\\ell b_jK_{y_j}$ に対し\n$\\displaystyle \\langle f,g\\rangle_0=\\sum_{i=1}^m\\sum_{j=1}^\\ell a_ib_jK(x_i,y_j)$\nと定める。',
      solutionComment: '核の値を Gram 行列として使い、有限線形結合上の内積候補を定める。',
    },
    {
      id: 2,
      code: '正定値性より\n$\\displaystyle \\langle f,f\\rangle_0=\\sum_{i,j=1}^m a_ia_jK(x_i,x_j)\\ge0$\nである。したがって $\\langle\\cdot,\\cdot\\rangle_0$ は半内積を与える。',
      solutionComment: '正定値カーネルの定義そのものが、二乗ノルムの非負性を保証する。',
    },
    {
      id: 3,
      code: '$\\mathcal N=\\{f\\in\\mathcal H_0:\\langle f,f\\rangle_0=0\\}$ とおく。半内積版 Cauchy--Schwarz より $f\\in\\mathcal N$ なら任意の $g\\in\\mathcal H_0$ に対し $\\langle f,g\\rangle_0=0$ である。',
      solutionComment: '∵ $|\\langle f,g\\rangle_0|^2\\le\\langle f,f\\rangle_0\\langle g,g\\rangle_0=0$。これにより零ノルム表現を商で消せる。',
    },
    {
      id: 4,
      code: '商空間 $\\widetilde{\\mathcal H}_0=\\mathcal H_0/\\mathcal N$ 上で\n$\\displaystyle \\langle[f],[g]\\rangle=\\langle f,g\\rangle_0$\nと定めると、ブロック 3 によりこれは代表元によらず定まり、正定値な内積となる。',
      solutionComment: '零ノルムの元を同一視したことで、半内積は真の内積になる。',
    },
    {
      id: 5,
      code: '$\\widetilde{\\mathcal H}_0$ をこの内積のノルムで完備化し、その Hilbert 空間を $\\mathcal H_K$ とおく。',
      solutionComment: '有限線形結合だけでは極限を含まないため、完備化して Hilbert 空間を得る。',
    },
    {
      id: 6,
      code: '$f=\\sum_{i=1}^m a_iK_{x_i}\\in\\mathcal H_0$ と $x\\in\\mathcal X$ に対し\n$\\displaystyle \\langle f,K_x\\rangle_0=\\sum_{i=1}^m a_iK(x_i,x)=f(x)$\nである。',
      solutionComment: '核の対称性により、内積の右辺は有限線形結合を点 $x$ で評価した値に一致する。',
    },
    {
      id: 7,
      code: 'Cauchy--Schwarz とブロック 6 より\n$\\displaystyle |f(x)|=|\\langle f,K_x\\rangle_0|\\le\\lVert f\\rVert_0\\lVert K_x\\rVert_0=\\lVert f\\rVert_0\\sqrt{K(x,x)}$\nである。',
      solutionComment: '∵ $\\lVert K_x\\rVert_0^2=\\langle K_x,K_x\\rangle_0=K(x,x)$。評価写像は有界線形汎関数になる。',
    },
    {
      id: 8,
      code: 'ブロック 7 より各点評価 $f\\mapsto f(x)$ は $\\widetilde{\\mathcal H}_0$ 上で連続なので、完備化 $\\mathcal H_K$ へ一意に延長される。ブロック 6 の再生性も極限で\n$\\displaystyle f(x)=\\langle f,K_x\\rangle_{\\mathcal H_K}$\nとして保たれる。',
      solutionComment: '連続な線形写像は完備化へ延長できる。したがって $\\mathcal H_K$ は再生性を持つ。',
    },
    {
      id: 9,
      code: '特に $x,y\\in\\mathcal X$ に対し\n$\\displaystyle \\langle K_y,K_x\\rangle_{\\mathcal H_K}=K_y(x)=K(x,y)$\nである。ゆえに $K$ は $\\mathcal H_K$ の再生核である。',
      solutionComment: '再生性を核断面 $K_y$ 自身に適用すると、内積がカーネル値を再現する。',
    },
    {
      id: 10,
      code: '$\\mathcal G$ も再生核 $K$ を持つ RKHS とする。核断面の有限線形結合に対し\n$\\displaystyle U\\left(\\sum_i a_iK_{x_i}\\right)=\\sum_i a_iK_{x_i}\\in\\mathcal G$\nと定める。',
      solutionComment: '左右の $K_{x_i}$ は同じ関数だが、それぞれ構成した空間と別のRKHSの元として見ている。',
    },
    {
      id: 11,
      code: '両空間で核断面の内積は $\\langle K_x,K_y\\rangle=K(x,y)$ なので、$U$ は有限線形結合上の等長写像である。核断面の span は両空間で稠密だから、$U$ は完備化へ一意に延長される全射等長写像となる。',
      solutionComment: 'RKHS では核断面の span の直交補は再生性により0であり、したがってその span は稠密である。',
    },
    {
      id: 12,
      code: 'よって $\\mathcal G$ と $\\mathcal H_K$ は $K_x$ を保つ標準的な等長同型で一致する。したがって $K$ を再生核とする RKHS は存在し、この同一視の下で一意である。$\\square$',
      solutionComment: '厳密には一意性は「集合として同一」ではなく、核断面を対応させる canonical isometric isomorphism までの一意性である。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [1, 6], [2, 7], [6, 7], [5, 8], [6, 8], [7, 8], [8, 9],
    [9, 10], [10, 11], [11, 12],
  ],
  hints: [
    'まず核断面 $K_x=K(\\cdot,x)$ の有限線形結合を考え、Gram 行列で半内積を定めます。',
    '零ノルムの元を商空間で同一視してから完備化します。',
    '再生性は $\\langle\\sum_i a_iK_{x_i},K_x\\rangle=\\sum_i a_iK(x_i,x)$ を計算して示します。',
    '一意性では、別のRKHSとの間で核断面を対応させる等長写像を作ります。',
  ],
  explanation: {
    summary: 'Moore-Aronszajn の定理は、正定値カーネルと RKHS が対応することを保証します。カーネル法で「カーネルを選べば関数空間が決まる」と言える根拠です。',
    points: [
      '正定値性は、核断面の有限線形結合に非負の二乗ノルムを与えるために必要です。',
      '商空間と完備化は、半内積の退化を除き、極限を含む Hilbert 空間へ進むための標準的な二段階です。',
      '評価写像の有界性 $|f(x)|\\le\\lVert f\\rVert\\sqrt{K(x,x)}$ が、完備化後にも関数として評価できることを保証します。',
      '一意性は、二つのRKHSが核断面上で同じ内積を持つため、完備化まで同じ Hilbert 空間構造を持つことから従います。',
    ],
    complexity: {
      time: '正定値カーネル、Gram 行列、商空間、Hilbert 空間の完備化、再生性',
      space: '核断面の span に半内積を入れ、零ノルムを商で除いて完備化する',
    },
    tip: 'RKHS の構成で迷ったら、「核断面をベクトルとみなし、その内積をカーネル値にする」という出発点に戻ると整理できます。',
  },
});
