// ctrl_modern_001: 2次線形システムの漸近安定条件 ★3
// 出典: Obsidian ローカル/応用数学/制御工学/現代制御/第3章 システムの特性/1. 安定性.md
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ctrl_modern_001',
  title: '2次線形システムの漸近安定条件',
  category: 'control_modern',
  categoryLabel: '制御工学 / 現代制御理論',
  difficulty: 3,
  language: 'proof',
  description: '【定理（2次連続時間線形システムの安定判別）】\n連続時間線形システム $\\dot{x}=Ax$ を考える。ただし\n$$A=\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}$$\nとする。\nこのとき、システムが漸近安定であるための必要十分条件は\n$$\\operatorname{tr}(A)<0,\\qquad \\det(A)>0$$\nである。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '連続時間線形システム $\\dot{x}=Ax$ が漸近安定であることは、$A$ のすべての固有値の実部が負であることと同値である。',
    },
    {
      id: 1,
      code: '$2\\times2$ 行列 $A$ の特性方程式は\n$\\det(\\lambda I-A)=\\lambda^2-\\operatorname{tr}(A)\\lambda+\\det(A)=0$\nである。',
    },
    {
      id: 2,
      code: 'この2次方程式の2つの根を $\\lambda_1,\\lambda_2$ とすると、Vieta の公式より\n$\\lambda_1+\\lambda_2=\\operatorname{tr}(A)$、$\\lambda_1\\lambda_2=\\det(A)$\nが成り立つ。',
    },
    {
      id: 3,
      code: 'まず $A$ が漸近安定なら、$\\operatorname{Re}\\lambda_1<0$、$\\operatorname{Re}\\lambda_2<0$ である。',
    },
    {
      id: 4,
      code: '固有値が実数2つの場合は和が負、積が正であり、複素共役対の場合も和は $2\\operatorname{Re}\\lambda_1<0$、積は $|\\lambda_1|^2>0$ である。',
    },
    {
      id: 5,
      code: 'したがって漸近安定なら $\\operatorname{tr}(A)<0$ かつ $\\det(A)>0$ が必要である。',
    },
    {
      id: 6,
      code: '逆に $\\operatorname{tr}(A)<0$、$\\det(A)>0$ と仮定する。',
    },
    {
      id: 7,
      code: '固有値が実数2つなら、積が正なので同符号であり、和が負なので両方とも負である。',
    },
    {
      id: 8,
      code: '固有値が複素共役対なら、$\\lambda_{1,2}=\\alpha\\pm i\\beta$ と書け、和 $2\\alpha=\\operatorname{tr}(A)<0$ より実部 $\\alpha<0$ である。',
    },
    {
      id: 9,
      code: 'いずれの場合もすべての固有値の実部は負である。よってシステムは漸近安定である。$\\square$',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2],
    [2, 3], [3, 4], [4, 5],
    [2, 6], [6, 7], [6, 8],
    [7, 9], [8, 9],
  ],
  hints: [
    '漸近安定性は、連続時間では固有値の実部がすべて負であることです。',
    '$2\\times2$ 行列では特性方程式が trace と determinant だけで書けます。',
    '必要性は「安定なら trace<0, determinant>0」、十分性は「trace<0, determinant>0 なら固有値実部が負」の2方向に分けます。',
  ],
  explanation: {
    summary: '2次連続時間線形システムでは、固有値を直接解かなくても trace と determinant だけで漸近安定性を判定できます。',
    points: [
      '連続時間システムの漸近安定条件は、すべての極が左半平面にあることです。',
      '2次特性方程式では、根の和が trace、根の積が determinant になります。',
      '実根の場合と複素共役根の場合を分けると、$\\operatorname{tr}(A)<0$ と $\\det(A)>0$ が必要十分であることがわかります。',
      'これは2次の場合のラウス・フルビッツ安定判別法と同じ内容です。',
    ],
    complexity: {
      time: '線形代数、固有値、2次方程式',
      space: '特性方程式の根と trace/determinant の関係から安定性を判定する',
    },
    tip: '2次系では「trace は固有値の和」「determinant は固有値の積」と覚えると、安定条件の意味が直接見えます。',
  },
});
