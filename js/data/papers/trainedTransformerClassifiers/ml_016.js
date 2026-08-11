// ml_016: Trained Transformer Classifiers Generalize - ラベルノイズ下の誤差分解 ★2
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_016',
  title: 'ラベル反転を含む分類誤差の分解',
  category: 'papers_trained_transformer_classifiers',
  categoryLabel: '機械学習 / 論文 / Trained Transformer Classifiers Generalize',
  difficulty: 2,
  language: 'proof',
  description: '【補題（ラベル反転下の誤差分解）】\nクリーンラベルを $\\widetilde y\\in\\{\\pm1\\}$、観測ラベルを $y=\\xi\\widetilde y$ とし、$P(\\xi=-1)=p$ とする。任意の分類スコア $f$ について\n$$P(\\operatorname{sign}f\\ne y)\\le p+P(\\operatorname{sign}f\\ne\\widetilde y)$$\nを示したい。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$A=\\{\\operatorname{sign}f\\ne y\\}$、$B=\\{\\xi=-1\\}$、$C=\\{\\operatorname{sign}f\\ne\\widetilde y\\}$ とおく。', solutionComment: '観測ラベルへの誤分類、ラベル反転、クリーンラベルへの誤分類を別々の事象にする。' },
    { id: 1, code: '$B^c$ 上では $\\xi=1$ だから、$y=\\xi\\widetilde y=\\widetilde y$ である。', solutionComment: '反転が起きていない場合、観測ラベルとクリーンラベルは同じである。' },
    { id: 2, code: 'したがって $A\\cap B^c$ 上では $\\operatorname{sign}f\\ne y=\\widetilde y$ となり、\n$\\displaystyle A\\cap B^c\\subseteq C$\nである。', solutionComment: '観測ラベルを誤ったのに反転がないなら、必ずクリーンラベルも誤っている。' },
    { id: 3, code: '任意の事象 $A,B$ に対して $A=(A\\cap B)\\cup(A\\cap B^c)$ なので、\n$\\displaystyle A\\subseteq B\\cup(A\\cap B^c)$\nである。', solutionComment: '誤り事象を「反転が起きた場合」と「起きなかった場合」に場合分けする。' },
    { id: 4, code: 'ブロック 2, 3 より\n$\\displaystyle A\\subseteq B\\cup C$\nを得る。', solutionComment: '観測ラベルへの誤りは、ラベル反転かクリーンラベルへの誤りのどちらかで説明できる。' },
    { id: 5, code: '和集合評価により\n$\\displaystyle P(A)\\le P(B)+P(C)=p+P(\\operatorname{sign}f\\ne\\widetilde y)$\nとなる。$\\square$', solutionComment: '∵ $P(B)=P(\\xi=-1)=p$。これが ml_012 の最初の誤差分解である。' },
  ],
  partialOrder: [[0, 1], [0, 2], [1, 2], [0, 3], [2, 4], [3, 4], [4, 5]],
  hints: [
    '誤り事象を、ラベルが反転した場合と反転していない場合へ分けます。',
    '反転していなければ $y=\\widetilde y$ です。',
    '最後に事象の包含関係へ和集合評価を適用します。',
  ],
  explanation: {
    summary: '観測ラベルに対する誤差には、分類器がクリーンな規則を学べていても避けられないラベル反転の寄与があります。',
    points: [
      'この評価は $f$ の作り方によらない、純粋な事象の包含関係です。',
      'クリーンラベルに全く誤らなければ、右辺は反転率 $p$ だけになります。',
      'ml_012 ではこの後、Transformer がクリーンラベルに誤らない確率をマージン評価で抑えます。',
    ],
    complexity: { time: '事象の包含関係、和集合評価、ラベルノイズ', space: '観測誤差を反転事象とクリーン誤分類事象へ分ける' },
    tip: 'ノイズ付き教師あり学習では、まず「教師ラベルが間違う確率」と「規則を取り違える確率」を分けて考えます。',
  },
});
