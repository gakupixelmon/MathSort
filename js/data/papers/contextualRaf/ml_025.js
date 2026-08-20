// ml_025: Contextual RAF - 規則汎化の必要十分条件 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_025',
  title: '規則汎化の必要十分条件',
  category: 'papers_contextual_raf',
  categoryLabel: '機械学習 / 論文 / Contextual RAF',
  difficulty: 5,
  language: 'proof',
  description: '【発展定理（規則汎化の必要十分条件）】\n$d=r+D$、$u\\in U\\cap\\mathbb S^{d-1}$ とし、\n$$W_\\lambda=P_U+\\lambda P_{U^\\perp},\\qquad 0\\le\\lambda\\le1$$\nを考える。文脈平均から得られる法線が\n$$W_\\lambda\\widehat v=(q_\\varepsilon+\\overline\\xi)u+H_\\lambda$$\nと分解され、$H_\\lambda\\perp u$、\n$$\\lVert H_\\lambda\\rVert_2^2\\overset d=\\frac1M\\left(\\chi^2_{r-1}+\\lambda^2\\chi^2_D\\right),\\qquad \\overline\\xi\\xrightarrow{\\mathbb P}0$$\nを満たすとする。このとき規則誤差が $0$ へ確率収束するための必要十分条件は\n$$\\eta_M=\\frac{r-1+\\lambda^2D}{M}\\longrightarrow0$$\nである。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$q_\\varepsilon+\\overline\\xi>0$ の事象上で、等方ガウス入力における半空間分類器の角度公式から\n$\\displaystyle \\mathcal E_{\\rm rule}(\\lambda)=\\frac1\\pi\\arctan\\left(\\frac{\\lVert H_\\lambda\\rVert_2}{q_\\varepsilon+\\overline\\xi}\\right)$\nである。', solutionComment: '法線の直交成分と教師方向成分の比が、二つの半空間のなす角の tangent になる。' },
    { id: 1, code: '$\\displaystyle X_M=\\lVert H_\\lambda\\rVert_2^2$ とおくと、カイ二乗表示から\n$\\displaystyle E[X_M]=\\frac{r-1+\\lambda^2D}{M}=\\eta_M$\nである。', solutionComment: '各独立カイ二乗変数の期待値は自由度に等しい。' },
    { id: 2, code: '$\\eta_M\\to0$ なら、Markov の不等式より $X_M\\xrightarrow{\\mathbb P}0$、従って $\\lVert H_\\lambda\\rVert_2\\xrightarrow{\\mathbb P}0$ である。', solutionComment: '非負確率変数の期待値が0へ行けば、その確率変数も確率収束で0へ行く。' },
    { id: 3, code: '$\\overline\\xi\\xrightarrow{\\mathbb P}0$ と $q_\\varepsilon>0$ をブロック 0 に代入すると、規則誤差は $\\mathcal E_{\\rm rule}(\\lambda)\\xrightarrow{\\mathbb P}0$ となる。', solutionComment: '分子は0へ、分母は正の定数 $q_\\varepsilon$ へ収束する。これで十分性が示された。' },
    { id: 4, code: '逆に、ある部分列上で $\\eta_M\\ge c>0$ と仮定する。重み付きカイ二乗変数の二次モーメントを計算すると\n$\\displaystyle E[X_M^2]\\le3\\{E[X_M]\\}^2=3\\eta_M^2$\nである。', solutionComment: '独立カイ二乗の分散を足すと、二次モーメントは平均の二乗の定数倍で抑えられる。' },
    { id: 5, code: 'Paley--Zygmund の不等式を $X_M$ と係数 $1/2$ に適用して\n$\\displaystyle P\\left(X_M\\ge\\frac12\\eta_M\\right)\\ge\\frac1{12}$\nを得る。', solutionComment: '∵ $P(X\\ge\\theta EX)\\ge(1-\\theta)^2(EX)^2/E[X^2]$。' },
    { id: 6, code: '$P(|\\overline\\xi|\\le q_\\varepsilon/2)\\to1$ なので、ブロック 5 の事象と合わせれば正の定数確率で\n$\\displaystyle \\lVert H_\\lambda\\rVert_2\\ge\\sqrt{c/2},\\qquad 0<q_\\varepsilon+\\overline\\xi\\le3q_\\varepsilon/2$\nが同時に成り立つ。', solutionComment: '分子を下から、分母を上から抑えて角度誤差の正の下界を作る。' },
    { id: 7, code: 'ブロック 0 より同じ正の定数確率で\n$\\displaystyle \\mathcal E_{\\rm rule}(\\lambda)\\ge\\frac1\\pi\\arctan\\left(\\frac{\\sqrt{c/2}}{3q_\\varepsilon/2}\\right)>0$\nとなる。', solutionComment: '規則誤差が任意に小さくなることを、正の確率で阻む下界である。' },
    { id: 8, code: 'よって $\\eta_M$ が0へ収束しないなら規則誤差も0へ確率収束しない。ブロック 2--3 と合わせて必要十分性が示された。$\\square$', solutionComment: 'この定理は、共有部分空間の次元と ambient 固有値の二乗和が規則汎化を決めることを示す。' },
  ],
  partialOrder: [[0, 3], [1, 2], [2, 3], [4, 5], [5, 6], [0, 7], [6, 7], [7, 8], [3, 8]],
  hints: [
    '十分性では、直交雑音ノルムの二乗の期待値を計算して Markov の不等式を使います。',
    '必要性では、二次モーメント評価と Paley--Zygmund の不等式で雑音が消えない確率を下から抑えます。',
    '最後に半空間分類器の角度公式へ戻ります。',
  ],
  explanation: {
    summary: '発展定理は、規則汎化に必要なのは trace ではなく、教師方向に直交する有効雑音次元 $(r-1+\\lambda^2D)/M$ が消えることだと正確に示します。',
    points: [
      '十分性は二次モーメントだけで足りますが、必要性には Paley--Zygmund による反集中評価が必要です。',
      'ambient 固有値は規則汎化には二乗で効くため、小さく取ることで高次元の雑音を抑えられます。',
      'この条件は全事実再生に必要な trace 条件とは異なり、両者の差が二成分スペクトル設計を生みます。',
    ],
    complexity: { time: 'カイ二乗分布、Markov・Paley--Zygmund の不等式、半空間分類の角度公式', space: '規則誤差を教師直交雑音のノルムへ還元する' },
    tip: '必要十分条件を証明するときは、十分性では集中、不十分な場合の必要性では反集中を使う対称性を意識すると見通しが良くなります。',
  },
});
