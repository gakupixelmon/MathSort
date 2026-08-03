// ml_011: In-Context Benign Overfitting - 最小ノルム補間のリスク ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_011',
  title: '最小ノルム補間解のリスク分解',
  category: 'papers_incontext_benign_overfitting',
  categoryLabel: '機械学習 / 論文 / In-Context Benign Overfitting',
  difficulty: 5,
  language: 'proof',
  description: '【定理（等方LGPにおける最小ノルム補間のリスク）】\n$G\\in\\mathbb R^{N\\times D}$ の各行を独立な $\\mathcal N(0,I_D)$ とし、$D>N+1$ とする。\n$$y=G\\theta_\\star+\\epsilon,\\qquad\\epsilon\\sim\\mathcal N(0,\\sigma^2I_N)$$\nに対する最小ノルム補間解 $\\widehat\\theta=G^\\top(GG^\\top)^{-1}y$ を考える。新しい $x\\sim\\mathcal N(0,I_D)$ に対するノイズを除く予測リスクは\n$$E\\left[(x^\\top(\\widehat\\theta-\\theta_\\star))^2\\right]=\\left(1-\\frac ND\\right)\\lVert\\theta_\\star\\rVert_2^2+\\sigma^2\\frac{N}{D-N-1}$$\nである。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$P=G^\\top(GG^\\top)^{-1}G$ とおく。$P$ は $G$ の行空間への直交射影である。',
      solutionComment: '$D>N$ かつガウス設計なら $G$ はほとんど確実に行フルランクであり、この射影が定義できる。',
    },
    {
      id: 1,
      code: '$y=G\\theta_\\star+\\epsilon$ を補間解に代入すると\n$\\displaystyle \\widehat\\theta=P\\theta_\\star+G^\\top(GG^\\top)^{-1}\\epsilon$\nである。',
      solutionComment: '最小ノルム補間解を、真の信号の射影成分とノイズを補間した成分へ分解する。',
    },
    {
      id: 2,
      code: 'したがって\n$\\displaystyle \\widehat\\theta-\\theta_\\star=-(I-P)\\theta_\\star+G^\\top(GG^\\top)^{-1}\\epsilon$\nとなる。',
      solutionComment: '行空間に入らない信号成分がバイアス、ノイズを逆行列で補間する成分が分散となる。',
    },
    {
      id: 3,
      code: '$x\\sim\\mathcal N(0,I_D)$ は独立なので、任意のベクトル $v$ に対し $E_x[(x^\\top v)^2]=\\lVert v\\rVert_2^2$ である。よって予測リスクは $E\\lVert\\widehat\\theta-\\theta_\\star\\rVert_2^2$ に等しい。',
      solutionComment: '等方ガウス入力では、パラメータ誤差の二乗ノルムがそのまま新しい点での平均二乗予測誤差になる。',
    },
    {
      id: 4,
      code: '条件付きで $\\epsilon$ について期待値を取ると交差項は $0$ であり、\n$\\displaystyle E_\\epsilon\\lVert\\widehat\\theta-\\theta_\\star\\rVert_2^2=\\lVert(I-P)\\theta_\\star\\rVert_2^2+\\sigma^2\\operatorname{tr}((GG^\\top)^{-1})$\nを得る。',
      solutionComment: 'ノイズの平均が0で交差項は消え、$E[\\epsilon\\epsilon^\\top]=\\sigma^2I_N$ からトレース項が現れる。',
    },
    {
      id: 5,
      code: 'ガウス設計の行空間は一様な $N$ 次元部分空間なので $E_G[P]=(N/D)I_D$ である。したがって\n$\\displaystyle E_G\\lVert(I-P)\\theta_\\star\\rVert_2^2=\\left(1-\\frac ND\\right)\\lVert\\theta_\\star\\rVert_2^2$\nとなる。',
      solutionComment: '回転不変性により平均射影は恒等行列のスカラー倍であり、トレースから係数 $N/D$ が決まる。',
    },
    {
      id: 6,
      code: '$GG^\\top$ は自由度 $D$ の Wishart 行列である。$D>N+1$ のとき\n$\\displaystyle E_G[(GG^\\top)^{-1}]=\\frac{1}{D-N-1}I_N$\nゆえに $\\displaystyle E_G\\operatorname{tr}((GG^\\top)^{-1})=\\frac{N}{D-N-1}$ である。',
      solutionComment: 'Wishart逆行列の期待値が、補間閾値 $D=N$ 付近で分散が発散する原因を与える。',
    },
    {
      id: 7,
      code: 'ブロック 3--6 を合わせれば\n$\\displaystyle E[(x^\\top(\\widehat\\theta-\\theta_\\star))^2]=\\left(1-\\frac ND\\right)\\lVert\\theta_\\star\\rVert_2^2+\\sigma^2\\frac{N}{D-N-1}$\nとなる。$\\square$',
      solutionComment: 'バイアス項とノイズ補間による分散項の和が、過剰パラメータ領域のリスクを与える。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [3, 7], [5, 7], [6, 7],
  ],
  hints: [
    '最小ノルム補間解を、行空間への射影 $P$ とノイズ項に分解します。',
    '新しい入力が等方ガウスなら、予測誤差はパラメータ誤差の二乗ノルムに等しくなります。',
    'バイアス項にはランダム部分空間の平均射影、分散項にはWishart逆行列の期待値を使います。',
  ],
  explanation: {
    summary: 'このリスク分解は、論文の過剰パラメータ領域における良性過学習解析の基本形です。補間しても、十分大きい特徴次元ではノイズを補間する分散が下がり得ます。',
    points: [
      '$(I-P)\\theta_\\star$ は訓練データの行空間から見えない信号成分で、バイアスを表します。',
      '$(GG^\\top)^{-1}$ のトレースはノイズを補間する分散で、$D=N+1$ へ近づくと発散します。',
      '補間閾値を越えて $D$ を増やすと分散項は下がり、二重降下の右側を説明します。',
      '論文の実際のLGPは文脈・タスク多様性・特徴選択を含むため、この等方モデルはその解析機構を抽出した簡約版です。',
    ],
    complexity: {
      time: '最小ノルム補間、直交射影、Wishart 行列、バイアス・分散分解',
      space: '補間解を信号射影とノイズ補間に分け、それぞれの期待二乗ノルムを評価する',
    },
    tip: '良性過学習のポイントは「補間するかどうか」だけではなく、補間したノイズがどれほど多くの高次元方向へ分散するかです。',
  },
});
