// ml_017: Trained Transformer Classifiers Generalize - 自己相関と和集合評価 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_017',
  title: '自己相関優勢から全例記憶へ',
  category: 'papers_trained_transformer_classifiers',
  categoryLabel: '機械学習 / 論文 / Trained Transformer Classifiers Generalize',
  difficulty: 3,
  language: 'proof',
  description: '【補題（自己相関による同時記憶）】\n$y_k\\in\\{\\pm1\\}$ とし、各文脈例を再入力したときのスコアが\n$$s_k=y_k a_k+r_k,\\qquad a_k>0$$\nと書けるとする。$H_k=\\{|r_k|<a_k\\}$ とおき、$P(H_k^c)\\le q_k$ が各 $k=1,\\ldots,M$ で成り立つとする。このとき\n$$P\\bigl(\\forall k,\\ \\operatorname{sign}(s_k)=y_k\\bigr)\\ge1-\\sum_{k=1}^M q_k$$\nを示せ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$H=\\bigcap_{k=1}^M H_k$ とおく。$H$ は全ての文脈例で、残差が自己相関項より小さい事象である。', solutionComment: 'ml_013 では $a_k=\\lVert x_k\\rVert_2^2$、$r_k$ は他の文脈例からの寄与などをまとめた残差である。' },
    { id: 1, code: '$H$ 上では各 $k$ に対し $|r_k|<a_k$ が成り立つ。', solutionComment: '共通の良い事象 $H$ を置くことで、全ての $k$ を同時に扱える。' },
    { id: 2, code: '$y_k\\in\\{\\pm1\\}$ より $y_kr_k\\ge-|r_k|$ なので、\n$\\displaystyle y_ks_k=a_k+y_kr_k\\ge a_k-|r_k|>0$\nである。', solutionComment: '∵ スコアに正解ラベルを掛けて正になることを示せば、符号の一致が分かる。' },
    { id: 3, code: 'ゆえに $H$ 上では各 $k$ で $\\operatorname{sign}(s_k)=y_k$ となる。', solutionComment: '自己相関項が残差を上回る限り、文脈例の観測ラベルは再現される。' },
    { id: 4, code: '$M_0=\\{\\forall k,\\ \\operatorname{sign}(s_k)=y_k\\}$ とおくと、ブロック 3 より\n$\\displaystyle H\\subseteq M_0$\nである。', solutionComment: '全例を記憶する事象の十分条件が $H$ である。' },
    { id: 5, code: 'De Morgan の法則より\n$\\displaystyle H^c=\\bigcup_{k=1}^M H_k^c$\nである。', solutionComment: '全ての良い事象が起きることの失敗は、少なくとも一つの個別評価が失敗することである。' },
    { id: 6, code: '和集合評価から\n$\\displaystyle P(H^c)\\le\\sum_{k=1}^M P(H_k^c)\\le\\sum_{k=1}^M q_k$\nとなる。', solutionComment: '個別の高確率評価を、全例について同時に成立する評価へ持ち上げる。' },
    { id: 7, code: '$H\\subseteq M_0$ より $M_0^c\\subseteq H^c$ である。したがって\n$\\displaystyle P(M_0)=1-P(M_0^c)\\ge1-P(H^c)\\ge1-\\sum_{k=1}^M q_k$\nとなる。$\\square$', solutionComment: 'この和集合評価が、定理 4.2 の失敗確率に文脈長 $M$ が現れる理由である。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [4, 7], [6, 7]],
  hints: [
    '全ての $H_k$ が同時に起きる事象 $H$ を作ります。',
    'スコアに $y_k$ を掛け、$y_kr_k\\ge-|r_k|$ を使います。',
    '最後に $H^c$ を個別の失敗事象の和集合として評価します。',
  ],
  explanation: {
    summary: '自己相関項が残差より大きいという各例ごとの評価を、和集合評価で「文脈中の全例を記憶する」という結論へ変換する補題です。',
    points: [
      '自己相関項 $a_k$ は、同じ例が文脈とクエリの両方に現れることで生じます。',
      '個別の失敗確率が一様に $q$ なら、同時記憶の失敗確率は高々 $Mq$ です。',
      'ml_013 はこの補題に、論文が導く具体的な残差評価と指数小の $q_k$ を代入した形です。',
    ],
    complexity: { time: 'マージン、自己相関、De Morgan の法則、和集合評価', space: '各例での符号一致から、全例での同時記憶へ進む' },
    tip: '高確率の主張を複数同時に使うときは、最初に全ての良い事象の共通部分を置くと論理が整理されます。',
  },
});
