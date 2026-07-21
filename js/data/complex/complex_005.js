// complex_005: 主値積分による関数の復元 ★5
// 上半平面の輪郭積分から得られる Sokhotski-Plemelj 型の公式
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'complex_005',
  title: '主値積分と元の関数の一致',
  category: 'complex',
  categoryLabel: '複素関数',
  difficulty: 5,
  language: 'proof',
  description: '【定理（主値積分による復元公式）】\n$f$ は閉上半平面で正則であり、上半平面内で $|z|\\to\\infty$ のとき $f(z)=O(|z|^{-1-\\delta})$（ある $\\delta>0$）を満たすとする。$x\\in\\mathbb{R}$ に対して\n$$\\operatorname{PV}\\int_{-\\infty}^{\\infty}\\frac{f(t)}{t-x}\\,dt\\n=\\lim_{\\varepsilon\\to0+}\\left(\\int_{-\\infty}^{x-\\varepsilon}\\frac{f(t)}{t-x}\\,dt+\\int_{x+\\varepsilon}^{\\infty}\\frac{f(t)}{t-x}\\,dt\\right)$$\nと定める。このとき\n$$f(x)=\\frac{1}{\\pi i}\\operatorname{PV}\\int_{-\\infty}^{\\infty}\\frac{f(t)}{t-x}\\,dt$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$R>|x|+1$、$0<\\varepsilon<1$ を取る。実軸の区間 $[-R,R]$ から $(x-\\varepsilon,x+\\varepsilon)$ を除き、その穴を上半平面内の半円 $C_\\varepsilon$ で避け、さらに上半円 $C_R$ で閉じた輪郭 $\\Gamma_{R,\\varepsilon}$ を考える。',
    },
    {
      id: 1,
      code: '$f(z)/(z-x)$ は $\\Gamma_{R,\\varepsilon}$ の内部と上で正則である。したがって Cauchy の積分定理から\n$\\displaystyle \\int_{\\Gamma_{R,\\varepsilon}}\\frac{f(z)}{z-x}\\,dz=0$ である。',
    },
    {
      id: 2,
      code: '輪郭を各部分に分けると、\n$\\displaystyle 0=\\int_{[-R,x-\\varepsilon]\\cup[x+\\varepsilon,R]}\\frac{f(t)}{t-x}\\,dt+\\int_{C_\\varepsilon}\\frac{f(z)}{z-x}\\,dz+\\int_{C_R}\\frac{f(z)}{z-x}\\,dz$\nとなる。',
    },
    {
      id: 3,
      code: '減衰条件 $f(z)=O(|z|^{-1-\\delta})$ より、大半円上では $|f(z)/(z-x)|=O(R^{-2-\\delta})$ である。$C_R$ の長さは $\\pi R$ なので、$R\\to\\infty$ で $\\displaystyle\\int_{C_R}\\frac{f(z)}{z-x}\\,dz\\to0$ となる。',
    },
    {
      id: 4,
      code: '小半円は実軸の穴を上側から時計回りに回るので、$z=x+\\varepsilon e^{i\\theta}$（$\\pi\\geq\\theta\\geq0$）とおくと\n$\\displaystyle \\int_{C_\\varepsilon}\\frac{f(z)}{z-x}\\,dz=\\int_{\\pi}^{0} f(x+\\varepsilon e^{i\\theta})\\,i\\,d\\theta$\nである。',
    },
    {
      id: 5,
      code: '$f$ の連続性から $\\varepsilon\\to0+$ で上の積分は\n$\\displaystyle \\int_{\\pi}^{0}f(x)i\\,d\\theta=-\\pi i f(x)$\nに収束する。',
    },
    {
      id: 6,
      code: '一方、実軸上の二つの積分について先に $R\\to\\infty$、次に $\\varepsilon\\to0+$ とすると、その極限は $\\displaystyle\\operatorname{PV}\\int_{-\\infty}^{\\infty}\\frac{f(t)}{t-x}\\,dt$ である。',
    },
    {
      id: 7,
      code: 'よって分解した等式の極限から\n$\\displaystyle 0=\\operatorname{PV}\\int_{-\\infty}^{\\infty}\\frac{f(t)}{t-x}\\,dt-\\pi i f(x)$\nを得る。',
    },
    {
      id: 8,
      code: '両辺を整理して\n$\\displaystyle f(x)=\\frac{1}{\\pi i}\\operatorname{PV}\\int_{-\\infty}^{\\infty}\\frac{f(t)}{t-x}\\,dt$\nとなる。$\\square$',
    },
  ],
  // 制約:
  // id:0→1→2 で輪郭を設定して積分定理を適用する
  // id:3, id:4→5, id:6 は各輪郭部分の極限評価
  // id:7 はそれら三つの極限を統合する
  partialOrder: [
    [0, 1], [1, 2],
    [2, 3], [2, 4], [4, 5], [2, 6],
    [3, 7], [5, 7], [6, 7], [7, 8],
  ],
  hints: [
    '実軸上の特異点 $z=x$ を、上半平面の小半円で避けた輪郭を考えます。',
    '小半円は時計回りです。パラメータ $z=x+\\varepsilon e^{i\\theta}$ の積分範囲が $\\pi$ から $0$ になる点に注意しましょう。',
    '輪郭の3部分の極限は、実軸部分が主値積分、大半円が $0$、小半円が $-\\pi i f(x)$ です。',
  ],
  explanation: {
    summary: '実軸上の極を小半円で避けると、その小半円の寄与が $-\\pi i f(x)$ となります。これが主値積分から境界値 $f(x)$ を復元できる理由です。',
    points: [
      '主値積分は特異点の左右を対称に除いて極限を取ることで定義されます。',
      '特異点を上側から避けるため、小半円は時計回りとなり、符号は $-\\pi i$ になります。',
      '無限遠での減衰条件は、大半円の積分を消すために使われます。',
      '下半平面で閉じる場合や極の避け方を変える場合は、小半円の向きに応じて符号が変わります。',
    ],
    complexity: {
      time: 'Cauchy の積分定理、主値積分、半円輪郭での積分評価',
      space: '実軸の特異点を小半円で除いた輪郭を用いる',
    },
    tip: 'この公式では、主値積分の値そのものよりも「避けた小半円が何を残すか」を追うと証明の流れをつかめます。',
  },
});
