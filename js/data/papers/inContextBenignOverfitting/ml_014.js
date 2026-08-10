// ml_014: In-Context Benign Overfitting - 最小ノルム補間解の基本 ★3
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_014',
  title: '最小ノルム補間解の射影構造',
  category: 'papers_incontext_benign_overfitting',
  categoryLabel: '機械学習 / 論文 / In-Context Benign Overfitting',
  difficulty: 3,
  language: 'proof',
  description: '【補題（最小ノルム補間解）】\n$G\\in\\mathbb R^{N\\times D}$ は行フルランクで $N<D$ とする。任意の $y\\in\\mathbb R^N$ に対して\n$$\\widehat\\theta=G^\\top(GG^\\top)^{-1}y$$\nとおく。このとき $G\\theta=y$ を満たす全ての $\\theta\\in\\mathbb R^D$ のうち、$\\widehat\\theta$ はユークリッドノルムを最小にする。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$G$ は行フルランクなので、$GG^\\top\\in\\mathbb R^{N\\times N}$ は正則である。', solutionComment: '∵ $u\\ne0$ なら $u^\\top GG^\\top u=\\lVert G^\\top u\\rVert_2^2>0$。' },
    { id: 1, code: '定義した $\\widehat\\theta$ に $G$ を掛けると\n$\\displaystyle G\\widehat\\theta=GG^\\top(GG^\\top)^{-1}y=y$\nである。', solutionComment: 'まず候補が補間条件を満たすことを確認する。' },
    { id: 2, code: '$G\\theta=y$ を満たす任意の $\\theta$ について、$v=\\theta-\\widehat\\theta$ とおく。', solutionComment: '任意の補間解を、候補からのずれとして表す。' },
    { id: 3, code: 'ブロック 1 と $G\\theta=y$ から\n$\\displaystyle Gv=G\\theta-G\\widehat\\theta=0$\nとなる。よって $v\\in\\ker G$ である。', solutionComment: '二つの補間解の差は、訓練データ上では見えない零空間の方向にある。' },
    { id: 4, code: '$\\widehat\\theta=G^\\top w$、ただし $w=(GG^\\top)^{-1}y$ と書ける。したがって\n$\\displaystyle \\widehat\\theta^\\top v=w^\\top Gv=0$\nであり、$\\widehat\\theta$ と $v$ は直交する。', solutionComment: '∵ 行空間 $\\operatorname{row}(G)$ は零空間 $\\ker G$ の直交補空間である。' },
    { id: 5, code: 'ゆえに\n$\\displaystyle \\lVert\\theta\\rVert_2^2=\\lVert\\widehat\\theta+v\\rVert_2^2=\\lVert\\widehat\\theta\\rVert_2^2+\\lVert v\\rVert_2^2\\ge\\lVert\\widehat\\theta\\rVert_2^2$\nとなる。', solutionComment: '∵ 直交する2成分には Pythagoras の定理を使える。' },
    { id: 6, code: 'したがって $\\widehat\\theta=G^\\top(GG^\\top)^{-1}y$ は補間解の中で最小ノルムである。$\\square$', solutionComment: '論文の最小ノルム補間解は、この射影構造を利用して解析される。' },
  ],
  partialOrder: [[0, 1], [1, 3], [2, 3], [3, 4], [4, 5], [5, 6]],
  hints: [
    '最初に $G\\widehat\\theta=y$ を計算し、候補が補間解であることを示します。',
    '別の補間解との差 $v$ は $Gv=0$、すなわち零空間に入ります。',
    '$\\widehat\\theta$ は行空間にあり、行空間と零空間は直交します。',
  ],
  explanation: {
    summary: '過剰パラメータ化された線形回帰では補間解が無数にありますが、最小ノルム解は行空間にだけ成分を持つ一意の補間解です。',
    points: [
      '$G\\theta=y$ を保ったまま動かせる方向は $\\ker G$ です。',
      '最小ノルム解は、その見えない零空間成分を全く持ちません。',
      'この補題が、ml_011 の $P=G^\\top(GG^\\top)^{-1}G$ を直交射影とみなす基礎になります。',
    ],
    complexity: { time: '行空間、零空間、直交射影、最小ノルム解', space: '任意の補間解を最小ノルム解と零空間成分に分ける' },
    tip: '擬似逆行列の公式を見たら、補間できるかと他の解との差がどこにあるかを分けて確認すると理解しやすくなります。',
  },
});
