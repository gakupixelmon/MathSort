// ml_012: Trained Transformer Classifiers Generalize - Theorem 4.1 の汎化保証 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_012',
  title: 'Transformer 分類器の汎化誤差分解',
  category: 'papers_trained_transformer_classifiers',
  categoryLabel: '機械学習 / 論文 / Trained Transformer Classifiers Generalize',
  difficulty: 5,
  language: 'proof',
  description: '【定理 4.1 の証明骨格】\nクリーンラベルを $\\widetilde y\\in\\{\\pm1\\}$、観測ラベルを $y=\\xi\\widetilde y$ とし、独立な反転変数 $\\xi$ は $P(\\xi=-1)=p<1/2$ を満たす。最小ノルム補間で訓練した Transformer のスコアを $f(E;W_{\\rm MM})$ とする。ある良い事象 $\\mathcal G$ 上で、論文の KKT 条件と集中評価から\n$$\\widetilde y f(E;W_{\\rm MM})\\ge a>0$$\nが導かれ、さらに $P(\\mathcal G^c)\\le\\delta$ とする。このとき観測ラベルに対するテスト誤差は $R(W_{\\rm MM})\\le p+\\delta$ である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$\\{\\operatorname{sign}f(E;W_{\\rm MM})\\ne y\\}$ は、ラベル反転事象 $\\{\\xi=-1\\}$ と、反転していないのに誤る事象の和集合に含まれる。',
      solutionComment: '観測ラベルの誤りを、不可避なラベルノイズとクリーン分類の失敗に分ける。',
    },
    {
      id: 1,
      code: 'したがって和集合評価より\n$\\displaystyle R(W_{\\rm MM})\\le P(\\xi=-1)+P\\bigl(\\widetilde y f(E;W_{\\rm MM})\\le0\\bigr)=p+P\\bigl(\\widetilde y f(E;W_{\\rm MM})\\le0\\bigr)$\nである。',
      solutionComment: '∵ $\\xi=1$ なら $y=\\widetilde y$ なので、後者はクリーンラベルに対する誤分類事象である。',
    },
    {
      id: 2,
      code: '良い事象 $\\mathcal G$ 上では、ラベル反転率の集中、二次形式の集中、および KKT 条件から得た重みの評価により\n$\\displaystyle \\widetilde y f(E;W_{\\rm MM})\\ge a>0$\nが成り立つ。',
      solutionComment: '∵ 論文では正の信号項を、経験的反転率のずれ・文脈特徴の交差項・重み行列の誤差項より優勢にしている。',
    },
    {
      id: 3,
      code: 'ゆえに $\\mathcal G$ 上では $\\widetilde y f(E;W_{\\rm MM})\\le0$ は起こらず、\n$\\displaystyle \\{\\widetilde y f(E;W_{\\rm MM})\\le0\\}\\subseteq\\mathcal G^c$\nである。',
      solutionComment: '正のマージンがあれば、クリーンラベルに対する符号誤りは排除される。',
    },
    {
      id: 4,
      code: 'したがって\n$\\displaystyle P\\bigl(\\widetilde y f(E;W_{\\rm MM})\\le0\\bigr)\\le P(\\mathcal G^c)\\le\\delta$\nを得る。',
      solutionComment: '∵ 失敗確率は、必要な集中評価が同時に成立しない確率だけで上から抑えられる。',
    },
    {
      id: 5,
      code: 'これをブロック 1 の誤差分解へ代入して\n$\\displaystyle R(W_{\\rm MM})\\le p+\\delta$\nとなる。$\\square$',
      solutionComment: '観測ラベルに対する誤差は、情報理論的に避けられない反転率 $p$ に集中評価の失敗確率だけを加えたものになる。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 5], [2, 3], [3, 4], [4, 5],
  ],
  hints: [
    'まず観測ラベルの誤りを、ラベル反転とクリーンラベルへの誤分類に分けます。',
    '良い事象では正のマージンがあるので、クリーンラベルへの誤分類は起きません。',
    '最後に、良い事象が失敗する確率を誤差分解へ代入します。',
  ],
  explanation: {
    summary: 'Theorem 4.1 の本質は、最小ノルム補間解が複雑な文脈構造を扱っても、クリーンラベルには正のマージンを持つことを示し、観測誤差をラベルノイズ率まで落とす点にあります。',
    points: [
      '誤差 $p$ は観測ラベル自身が反転していることによるため、観測ラベルを正解とするリスクでは原理的に残ります。',
      '論文中の $\\delta$ は、経験的反転率・高次元二次形式・最小ノルム補間解の行列評価を同時に成立させるための指数小確率の和です。',
      'この問題では定理の最終的な誤差分解を示しています。正のマージンを導く詳細な行列評価は、仮定した良い事象 $\\mathcal G$ に集約しています。',
    ],
    complexity: {
      time: 'ラベルノイズ、マージン、集中不等式、KKT 条件',
      space: '観測誤差をノイズ率とクリーン誤分類確率に分け、後者を良い事象で消す',
    },
    tip: 'ノイズ付き分類の定理を読むときは、「どのラベルに対するリスクか」と「残るノイズ率が統計的限界か」を最初に確認すると見通しが良くなります。',
  },
});
