// complex_002: Liouville の定理 ★3
// 有界な整関数は定数である
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'complex_002',
  title: 'Liouville の定理',
  category: 'complex',
  categoryLabel: '複素関数',
  difficulty: 3,
  language: 'proof',
  description: '【定理（Liouville の定理）】\n$f$ を整関数、すなわち複素平面全体で正則な関数とする。\nさらにある定数 $M>0$ が存在して、すべての $z \\in \\mathbb{C}$ について $|f(z)| \\leq M$ が成り立つとする。\nこのとき $f$ は定数関数である。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '任意に $a \\in \\mathbb{C}$ を固定する。$f$ は整関数なので、任意の $R>0$ について円 $|\\zeta-a|=R$ の内側と周上で正則である。',
    },
    {
      id: 1,
      code: 'Cauchy の積分公式を導関数に適用すると、\n$f^{\\prime}(a)=\\dfrac{1}{2\\pi i}\\int_{|\\zeta-a|=R}\\dfrac{f(\\zeta)}{(\\zeta-a)^2}\\,d\\zeta$',
    },
    {
      id: 2,
      code: '$|f(\\zeta)|\\leq M$ と $|\\zeta-a|=R$ より、積分路の長さは $2\\pi R$、被積分関数の絶対値は高々 $M/R^2$ である。',
    },
    {
      id: 3,
      code: 'したがって\n$|f^{\\prime}(a)| \\leq \\dfrac{1}{2\\pi}\\cdot 2\\pi R \\cdot \\dfrac{M}{R^2}=\\dfrac{M}{R}$',
    },
    {
      id: 4,
      code: '$R>0$ は任意に大きく取れるので、$R\\to\\infty$ として $|f^{\\prime}(a)|=0$、すなわち $f^{\\prime}(a)=0$ を得る。',
    },
    {
      id: 5,
      code: '$a$ は任意だったから、複素平面全体で $f^{\\prime}\\equiv 0$ である。',
    },
    {
      id: 6,
      code: '任意の $z,w\\in\\mathbb{C}$ に対して線分上で積分すると、\n$f(z)-f(w)=\\int_w^z f^{\\prime}(\\zeta)\\,d\\zeta=0$',
    },
    {
      id: 7,
      code: 'よって $f(z)=f(w)$ が任意の $z,w$ で成り立つ。したがって $f$ は定数関数である。$\\square$',
    },
  ],
  // 制約:
  // id:0 → id:1 で Cauchy の積分公式を使う
  // id:2 は評価の準備で id:1 の後
  // id:3 → id:4 で R→∞
  // id:5 → id:6 → id:7 で定数性を結論
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [4, 5], [5, 6], [6, 7],
  ],
  hints: [
    '整関数なので、中心 $a$、半径 $R$ のどんな大きな円にも Cauchy の積分公式を適用できます',
    '導関数の Cauchy 積分公式を使い、$|f(\\zeta)|\\leq M$ から $|f^{\\prime}(a)|\\leq M/R$ を示します',
    '$R$ を無限大に飛ばすと $f^{\\prime}(a)=0$ になります。任意の点で導関数が 0 なら関数は定数です',
  ],
  explanation: {
    summary: 'Liouville の定理は「全平面で正則かつ有界な関数は定数しかない」という、実解析とは大きく異なる複素解析の剛性を表す定理です。',
    points: [
      '整関数であるため、任意に大きな円に対して Cauchy の積分公式を使えます',
      '導関数の積分公式を使うことで、関数の有界性から導関数の上界 $M/R$ が得られます',
      '$R$ を大きくすると上界が 0 に近づくため、導関数は 0 でなければなりません',
      '導関数が全平面で 0 なら、任意の2点を結ぶ線分上の積分により関数値が等しいことがわかります',
      '代数学の基本定理の標準的な証明にも Liouville の定理が使われます',
    ],
    complexity: {
      time: 'Cauchy の積分公式と積分評価',
      space: '導関数評価 $|f^{\\prime}(a)|\\leq M/R$ から $f^{\\prime}\\equiv 0$ を導く',
    },
    tip: 'ポイントは「半径 $R$ を任意に大きくできる」ことです。局所的な正則性だけではなく、全平面で正則という仮定がここで効いています。',
  },
});
