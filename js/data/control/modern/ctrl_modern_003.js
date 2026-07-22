// ctrl_modern_003: 最適レギュレータ（連続時間 LQR） ★5
// Riccati 方程式を用いた最適状態フィードバック則の導出
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ctrl_modern_003',
  title: '最適レギュレータの導出',
  category: 'control_modern',
  categoryLabel: '制御工学 / 現代制御理論',
  difficulty: 5,
  language: 'proof',
  description: '【定理（連続時間最適レギュレータ）】\n線形システム\n$$\\dot{x}=Ax+Bu,\\qquad x(0)=x_0$$\nに対し、評価関数\n$$J(u)=\\int_0^\\infty\\left(x(t)^\\top Qx(t)+u(t)^\\top Ru(t)\\right)dt$$\nを最小にしたい。ただし $Q=Q^\\top\\succeq0$、$R=R^\\top\\succ0$ とし、対称行列 $P=P^\\top\\succeq0$ が代数 Riccati 方程式\n$$A^\\top P+PA-PBR^{-1}B^\\top P+Q=0$$\nを満たし、$A-BR^{-1}B^\\top P$ は Hurwitz 行列であると仮定する。このとき、状態を $0$ に収束させる入力の中で\n$$u^*(t)=-R^{-1}B^\\top Px(t)$$\nが $J$ を最小化し、最小値は $J(u^*)=x_0^\\top Px_0$ である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '候補となる値関数を $V(x)=x^\\top Px$ とおく。$P=P^\\top$ なので、軌道に沿った微分は\n$\\displaystyle \\dot{V}=x^\\top(A^\\top P+PA)x+2x^\\top PBu$\nである。',
    },
    {
      id: 1,
      code: 'Riccati 方程式から $A^\\top P+PA=-Q+PBR^{-1}B^\\top P$ であるため、\n$\\displaystyle \\dot{V}=-x^\\top Qx+x^\\top PBR^{-1}B^\\top Px+2x^\\top PBu$\nを得る。',
    },
    {
      id: 2,
      code: 'この式を整理すると、\n$\\displaystyle x^\\top Qx+u^\\top Ru=-\\dot{V}+(u+R^{-1}B^\\top Px)^\\top R(u+R^{-1}B^\\top Px)$\nとなる。',
    },
    {
      id: 3,
      code: '両辺を $0$ から $T$ まで積分すると、\n$\\displaystyle \\int_0^T(x^\\top Qx+u^\\top Ru)dt=V(x_0)-V(x(T))+\\int_0^T(u+R^{-1}B^\\top Px)^\\top R(u+R^{-1}B^\\top Px)dt$\nである。',
    },
    {
      id: 4,
      code: '許容入力では $x(T)\\to0$ であり、$V(x(T))=x(T)^\\top Px(T)\\to0$ となる。よって $T\\to\\infty$ とすると\n$\\displaystyle J(u)=x_0^\\top Px_0+\\int_0^\\infty(u+R^{-1}B^\\top Px)^\\top R(u+R^{-1}B^\\top Px)dt$\nを得る。',
    },
    {
      id: 5,
      code: '$R\\succ0$ なので、右辺の積分は常に非負である。したがって任意の許容入力について $J(u)\\geq x_0^\\top Px_0$ である。',
    },
    {
      id: 6,
      code: '等号が成り立つためには被積分関数が $0$ であればよく、\n$\\displaystyle u(t)=-R^{-1}B^\\top Px(t)$\nと選べばよい。',
    },
    {
      id: 7,
      code: 'このとき閉ループ系は\n$\\displaystyle \\dot{x}=(A-BR^{-1}B^\\top P)x$\nとなり、仮定よりこの行列は Hurwitz だから $x(t)\\to0$ である。ゆえにこの入力は許容入力である。',
    },
    {
      id: 8,
      code: '以上より $u^*(t)=-R^{-1}B^\\top Px(t)$ は最適であり、\n$\\displaystyle J(u^*)=x_0^\\top Px_0$\nである。$\\square$',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
    [5, 6], [6, 7], [5, 8], [7, 8],
  ],
  hints: [
    'まず二次形式 $V(x)=x^\\top Px$ を微分し、Riccati 方程式を代入します。',
    '入力 $u$ に関する項を $R$ を使って平方完成すると、コストと $-\\dot V$ の関係が得られます。',
    '非負な平方項が $0$ になる入力を選ぶことが、最適フィードバック則を与えます。',
  ],
  explanation: {
    summary: '最適レギュレータでは、Riccati 方程式がコストを「初期状態による項」と「非負な平方項」に分解します。その平方項を消す入力が最適状態フィードバックです。',
    points: [
      'Riccati 方程式は、状態コストと入力コストを平方完成できる形に調整する条件です。',
      '$R\\succ0$ により、平方完成後の入力に関する項は必ず非負になります。',
      '最適入力は $u^*=-R^{-1}B^\\top Px$ であり、現在の状態だけを用いる定数ゲインのフィードバックです。',
      '閉ループ行列が Hurwitz である仮定は、最適入力が実際に状態を原点へ収束させ、無限時間コストを正しく定義できることを保証します。',
    ],
    complexity: {
      time: '連続時間 LQR、代数 Riccati 方程式、二次形式の平方完成',
      space: '無限時間積分コストを、値関数と非負な平方項に分解する',
    },
    tip: 'Riccati 方程式を暗記するだけでなく、「$\\dot V$ とコストを合わせて平方完成するための条件」と捉えると導出が見通しよくなります。',
  },
});
