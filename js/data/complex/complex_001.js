// complex_001: Cauchy-Riemann 方程式の必要性 ★2
// 複素関数論の基本: 複素微分可能性から Cauchy-Riemann 方程式を導く
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'complex_001',
  title: 'Cauchy-Riemann 方程式の必要性',
  category: 'complex',
  categoryLabel: '複素関数',
  difficulty: 2,
  language: 'proof',
  description: '【定理（Cauchy-Riemann 方程式の必要性）】\n$f(z) = u(x,y) + iv(x,y)$ が $z_0 = x_0 + iy_0$ で複素微分可能であるとする。\nこのとき、$z_0$ において\n$$u_x = v_y, \\qquad u_y = -v_x$$\nが成り立つ。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$h \\in \\mathbb{R}$ として実軸方向から近づけると、\n$f^{\\prime}(z_0) = \\lim_{h \\to 0}\\dfrac{f(z_0+h)-f(z_0)}{h} = u_x(x_0,y_0) + i v_x(x_0,y_0)$',
    },
    {
      id: 1,
      code: '$k \\in \\mathbb{R}$ として虚軸方向、すなわち増分 $ik$ で近づける。',
    },
    {
      id: 2,
      code: '$f^{\\prime}(z_0) = \\lim_{k \\to 0}\\dfrac{f(z_0+ik)-f(z_0)}{ik} = v_y(x_0,y_0) - i u_y(x_0,y_0)$',
    },
    {
      id: 3,
      code: '複素微分係数は近づき方によらず同じ値なので、\n$u_x(x_0,y_0) + i v_x(x_0,y_0) = v_y(x_0,y_0) - i u_y(x_0,y_0)$',
    },
    {
      id: 4,
      code: '実部と虚部を比較して $u_x(x_0,y_0)=v_y(x_0,y_0)$、$v_x(x_0,y_0)=-u_y(x_0,y_0)$ を得る。',
    },
    {
      id: 5,
      code: 'したがって $u_x=v_y$、$u_y=-v_x$ が $z_0$ で成り立つ。$\\square$',
    },
  ],
  // 制約:
  // 実軸方向の計算 id:0 と虚軸方向の導入 id:1 は独立
  // id:1 → id:2 は虚軸方向の計算
  // id:3 は実軸・虚軸の両計算に依存
  // id:4 → id:5 で結論
  partialOrder: [
    [1, 2],
    [0, 3], [2, 3],
    [3, 4], [4, 5],
  ],
  hints: [
    '複素微分可能性では、差商の極限が近づき方によらず同じになります。まず実軸方向の増分 $h$ を考えましょう',
    '虚軸方向では増分を $ik$ とおきます。$(A+iB)/(ik)=B/k-iA/k$ となる点に注意してください',
    '実軸方向と虚軸方向で得た $f^{\\prime}(z_0)$ を等置し、実部と虚部を比較します',
  ],
  explanation: {
    summary: 'Cauchy-Riemann 方程式は、複素微分可能性が実2変数の通常の微分可能性よりはるかに強い条件であることを示す基本関係式です。',
    points: [
      '実軸方向の差商から $u_x+i v_x$ が得られます',
      '虚軸方向の差商では分母が $ik$ になるため、$v_y-i u_y$ が現れます',
      '複素微分係数は方向に依存しないため、この2つは一致しなければなりません',
      '複素数の等式は実部どうし、虚部どうしの等式に分解できます',
      'Cauchy-Riemann 方程式は必要条件ですが、正則性を得るには偏導関数の連続性など追加条件が必要になる場合があります',
    ],
    complexity: {
      time: '複素微分の定義と偏微分の基礎',
      space: '実軸方向・虚軸方向の差商を比較して $u_x=v_y$, $u_y=-v_x$ を得る',
    },
    tip: '「複素微分はどの方向から近づいても同じ極限」という一点が本質です。ここから2本の実変数方向の情報が強く結びつきます。',
  },
});
