// ta_011: 対称代数の普遍性 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_011',
  title: '対称代数の普遍性',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 4,
  language: 'proof',
  description: '【定理（対称代数の普遍性）】\n$V$ を体 $K$ 上のベクトル空間とし、$S(V)$ を $V$ 上の対称代数とする。$\\iota: V \\to S(V)$ を自然な包含写像とする。\n任意の可換な結合代数 $A$ と任意の線形写像 $f: V \\to A$ に対して、$\\tilde{f} \\circ \\iota = f$ を満たす一意な代数準同型 $\\tilde{f}: S(V) \\to A$ が存在することを証明せよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: 'まずテンソル代数 $T(V)$ の普遍性を用いる。線形写像 $f: V \\to A$ に対して、$T(V)$ は「最も自由な結合代数」であるから、$\\hat{f} \\circ \\iota_T = f$ を満たす一意な代数準同型 $\\hat{f}: T(V) \\to A$ が存在する。', solutionComment: 'まずテンソル代数の普遍性（より大きな代数の性質）を適用してから、対称代数へと降りる戦略をとる。' },
    { id: 1, code: '対称代数 $S(V)$ を定義するイデアル $I$ は $\\{v \\otimes w - w \\otimes v \\mid v, w \\in V\\}$ で生成される。', solutionComment: '対称代数がテンソル代数を何で割ったものかを明示する。' },
    { id: 2, code: '$A$ が可換代数であるから、任意の $v, w \\in V$ に対して $f(v)f(w) = f(w)f(v)$ が成り立つ。', solutionComment: '商を取るために、イデアルの生成元が核に含まれることを示す必要がある。' },
    { id: 3, code: '代数準同型 $\\hat{f}$ の像に対してこれを適用すると、\n$\\hat{f}(v \\otimes w - w \\otimes v) = f(v)f(w) - f(w)f(v) = 0$\nとなる。したがって、イデアル $I$ の生成元は $\\hat{f}$ の核 $\\ker\\hat{f}$ に含まれる。', solutionComment: '代数準同型として $\\hat{f}$ は積を保つから、生成元の像が $0$ であれば $I \\subseteq \\ker\\hat{f}$ が従う。' },
    { id: 4, code: '$I \\subseteq \\ker\\hat{f}$ であることから、準同型定理（商代数の普遍性）により、$\\hat{f}$ は商代数 $S(V) = T(V)/I$ への代数準同型 $\\tilde{f}: S(V) \\to A$ に一意に降りる（factor through）。', solutionComment: '準同型 $\\hat{f}$ がイデアル $I$ を核に含むとき、一意な商準同型が存在することが環論の基本定理である。' },
    { id: 5, code: 'この $\\tilde{f}$ は構成から $\\tilde{f} \\circ \\iota = f$ を満たし、一意性も $\\hat{f}$ の一意性と準同型定理の一意性から従う。 $\\blacksquare$', solutionComment: 'テンソル代数の普遍性と準同型定理を組み合わせることで、存在と一意性が両方示された。' },
  ],
  partialOrder: [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [4, 5]],
  hints: [
    'まずテンソル代数 $T(V)$ の普遍性を用いて、$f$ を代数準同型 $\\hat{f}: T(V) \\to A$ へ持ち上げます。',
    '$A$ が可換であることを使い、対称代数のイデアル $I$ が $\\ker\\hat{f}$ に含まれることを示します。',
    '準同型定理（$I \\subseteq \\ker\\hat{f}$ ならば $\\hat{f}$ は商代数上の準同型に降りる）を適用します。',
  ],
  explanation: {
    summary: '普遍性の証明は「存在」と「一意性」の2要素からなります。対称代数の普遍性は、「テンソル代数の普遍性（大きな空間への持ち上げ）」→「可換性によるイデアルの消去」→「準同型定理による降りる」という3段階の構造で証明されます。',
    points: [
      'テンソル代数は「可換性なし」で最も自由な代数です。',
      '対称代数はさらに「可換性」の制約を加えた代数です。',
      '制約（イデアル）が $\\ker\\hat{f}$ に含まれるかどうかを確認することが核心です。',
    ],
    complexity: { time: 'テンソル代数の普遍性、準同型定理、商代数', space: '可換性とイデアルの関係' },
    tip: '外積代数（グラスマン代数）の普遍性も全く同様の構造で証明できます。その場合は $A$ が「可換代数」ではなく「$v^2 = 0$ を満たす代数」となります。',
  },
});
