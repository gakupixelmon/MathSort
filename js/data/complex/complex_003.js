// complex_003: 留数定理 ★4
// 孤立特異点を囲む閉曲線上の積分を留数の和で表す
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'complex_003',
  title: '留数定理',
  category: 'complex',
  categoryLabel: '複素関数',
  difficulty: 4,
  language: 'proof',
  description: '【定理（留数定理）】\n$f$ は正向き単純閉曲線 $\\gamma$ の内部と周上で、有限個の孤立特異点 $a_1,\\ldots,a_m$ を除いて正則であるとする。\nまた $a_1,\\ldots,a_m$ はすべて $\\gamma$ の内部にあるとする。\nこのとき\n$$\\int_\\gamma f(z)\\,dz = 2\\pi i \\sum_{k=1}^{m}\\operatorname{Res}(f,a_k)$$\nが成り立つ。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '各特異点 $a_k$ のまわりに、互いに交わらず $\\gamma$ の内部に含まれる十分小さい正向き円 $C_k$ を取る。',
    },
    {
      id: 1,
      code: '$\\gamma$ の内部から円板の内部を取り除いた領域では $f$ は正則であり、その境界は向きを考えると $\\gamma - C_1 - \\cdots - C_m$ である。',
    },
    {
      id: 2,
      code: 'Cauchy の積分定理より\n$\\int_\\gamma f(z)\\,dz - \\sum_{k=1}^{m}\\int_{C_k} f(z)\\,dz = 0$、したがって\n$\\int_\\gamma f(z)\\,dz = \\sum_{k=1}^{m}\\int_{C_k} f(z)\\,dz$',
    },
    {
      id: 3,
      code: '各 $a_k$ の近くで Laurent 展開\n$f(z)=\\sum_{n=-\\infty}^{\\infty} c_n^{(k)}(z-a_k)^n$\nを考える。このとき $\\operatorname{Res}(f,a_k)=c_{-1}^{(k)}$ である。',
    },
    {
      id: 4,
      code: '$C_k$ 上で項別積分すると、\n$\\int_{C_k}(z-a_k)^n\\,dz=0 \\ (n\\neq -1)$、かつ $\\int_{C_k}(z-a_k)^{-1}\\,dz=2\\pi i$',
    },
    {
      id: 5,
      code: 'したがって各 $k$ について\n$\\int_{C_k} f(z)\\,dz = 2\\pi i\\,\\operatorname{Res}(f,a_k)$',
    },
    {
      id: 6,
      code: 'これを小円上の積分の和に代入して\n$\\int_\\gamma f(z)\\,dz = 2\\pi i\\sum_{k=1}^{m}\\operatorname{Res}(f,a_k)$\nを得る。$\\square$',
    },
  ],
  // 制約:
  // id:0 → id:1 → id:2 は穴あき領域への Cauchy 積分定理の適用
  // id:3 → id:4 → id:5 は小円上の積分を留数で評価
  // id:6 は id:2, id:5 の両方に依存
  partialOrder: [
    [0, 1], [1, 2],
    [0, 3], [3, 4], [4, 5],
    [2, 6], [5, 6],
  ],
  hints: [
    '特異点を小さな円でくり抜くと、残った領域では $f$ が正則になります。境界の向きに注意してください',
    'くり抜いた領域に Cauchy の積分定理を適用すると、外側の積分は小円上の積分の和に等しくなります',
    '小円上では Laurent 展開を項別積分します。積分に寄与するのは $(z-a_k)^{-1}$ の項だけです',
  ],
  explanation: {
    summary: '留数定理は、複素積分を特異点の局所データである留数の和に還元する定理です。実積分の計算にも強力に応用されます。',
    points: [
      '特異点を小円で取り除くと、残った穴あき領域では Cauchy の積分定理が使えます',
      '内側の円は境界としては負向きに現れるため、式では $\\gamma-C_1-\\cdots-C_m$ となります',
      'Laurent 展開のうち、閉曲線積分に寄与するのは $c_{-1}(z-a)^{-1}$ の項だけです',
      '$\\int_C (z-a)^{-1}\\,dz=2\\pi i$ が留数定理の $2\\pi i$ の由来です',
      '複数の特異点がある場合は、それぞれの小円上の寄与を足し合わせます',
    ],
    complexity: {
      time: 'Cauchy の積分定理、Laurent 展開、孤立特異点',
      space: '穴あき領域の境界積分を小円上の Laurent 係数 $c_{-1}$ の和に変換する',
    },
    tip: '留数定理は「グローバルな積分が、特異点まわりの $1/(z-a)$ 係数だけで決まる」という見方をすると覚えやすいです。',
  },
});
