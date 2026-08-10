// ml_013: Trained Transformer Classifiers Generalize - Theorem 4.2 の文脈内記憶 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_013',
  title: '文脈内のノイズラベルを記憶する機構',
  category: 'papers_trained_transformer_classifiers',
  categoryLabel: '機械学習 / 論文 / Trained Transformer Classifiers Generalize',
  difficulty: 5,
  language: 'proof',
  description: '【定理 4.2 の記憶保証】\n等方的な高次元設定で、文脈中の $k$ 番目の例をクエリとして再入力したときの学習済み Transformer のスコアが\n$$f(E(x_k);W_{\\rm MM})=y_k\\lVert x_k\\rVert_2^2+r_k$$\nと書けるとする。集中評価が同時に成り立つ良い事象 $\\mathcal H$ 上で $|r_k|<\\lVert x_k\\rVert_2^2$ がすべての $k=1,\\ldots,M$ について成立し、$P(\\mathcal H^c)\\le q$ とする。示すべき結論は\n$$P\\left(\\forall k,\\ \\operatorname{sign}f(E(x_k);W_{\\rm MM})=y_k\\right)\\ge1-q$$\nである。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$\\mathcal H$ 上で各 $k$ について $|r_k|<\\lVert x_k\\rVert_2^2$ なので、\n$\\displaystyle y_k f(E(x_k);W_{\\rm MM})=\\lVert x_k\\rVert_2^2+y_kr_k\\ge\\lVert x_k\\rVert_2^2-|r_k|>0$\nである。',
      solutionComment: '∵ $y_k\\in\\{\\pm1\\}$ より $y_kr_k\\ge-|r_k|$。自己相関項 $\\lVert x_k\\rVert_2^2$ が残差を上回る。',
    },
    {
      id: 1,
      code: 'よって $\\mathcal H$ 上では、すべての $k=1,\\ldots,M$ で\n$\\displaystyle \\operatorname{sign}f(E(x_k);W_{\\rm MM})=y_k$\nが同時に成り立つ。',
      solutionComment: 'スコアに $y_k$ を掛けた値が正なので、スコアの符号は観測ラベル $y_k$ と一致する。',
    },
    {
      id: 2,
      code: '$\\mathcal M=\\{\\forall k,\\ \\operatorname{sign}f(E(x_k);W_{\\rm MM})=y_k\\}$ とおくと、ブロック 1 より $\\mathcal H\\subseteq\\mathcal M$ である。',
      solutionComment: '良い事象の成立は、文脈内の全例を記憶する事象の十分条件になっている。',
    },
    {
      id: 3,
      code: '補集合を取れば $\\mathcal M^c\\subseteq\\mathcal H^c$ であり、\n$\\displaystyle P(\\mathcal M^c)\\le P(\\mathcal H^c)\\le q$\nとなる。',
      solutionComment: '∵ すべての $k$ に対する集中評価を $\\mathcal H$ に含めている。個別評価から構成する際には、ここで $M$ 個の失敗事象に和集合評価を使う。',
    },
    {
      id: 4,
      code: 'したがって\n$\\displaystyle P(\\mathcal M)=1-P(\\mathcal M^c)\\ge1-q$\nである。$\\square$',
      solutionComment: '論文では $q$ を $4M\\exp(-c\\rho\\sqrt d/M)+8M\\exp(-c\\rho d/(M(\\widetilde R^2\\vee\\widetilde R)))$ と評価している。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4],
  ],
  hints: [
    'まずスコアへ $y_k$ を掛け、自己相関項と残差を比較します。',
    '良い事象が起きれば全ての文脈例を記憶することを、事象の包含関係として書きます。',
    '失敗確率の評価は補集合を取るとすぐ得られます。',
  ],
  explanation: {
    summary: 'Theorem 4.2 は、同じ例を文脈とクエリの両方に置くと自己相関 $\\lVert x_k\\rVert_2^2$ が現れ、観測されたノイズラベルまで再現できることを示します。',
    points: [
      '高次元では自己相関項は大きく、異なる文脈例との交差項は相対的に小さいため、$r_k$ に吸収できます。',
      'この記憶は未知のクエリに同じ自己相関項が現れないことと両立し、論文の in-context benign overfitting の中心的な現象です。',
      '論文の失敗確率は各文脈例への集中評価を和集合評価した形であり、文脈長 $M$ が前因子に現れます。',
    ],
    complexity: {
      time: '高次元集中、自己相関、和集合評価、in-context learning',
      space: '文脈例を再入力したスコアを自己項と残差へ分け、全例で自己項が優勢と示す',
    },
    tip: '汎化と記憶を区別するには、クエリが文脈中に既に現れているかを確認します。自己相関項の有無が両者を分ける鍵になります。',
  },
});
