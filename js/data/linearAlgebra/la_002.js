// la_002: 対角化可能性と固有空間分解 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'la_002',
  title: '対角化可能性と固有空間分解',
  category: 'linear_algebra',
  categoryLabel: '線形代数',
  difficulty: 4,
  language: 'proof',
  description: '【定理（対角化可能性の同値条件）】\n$V$ を $n$ 次元ベクトル空間、$A:V\\to V$ の相異なる固有値の全てを $\\lambda_1,\\ldots,\\lambda_k$ とする。次は同値である。\n\n1. $A$ は $\\mathbb F$ 上で対角化可能である。\n2. $V=\\bigoplus_{i=1}^kW_{\\lambda_i}$ である。\n3. $\\sum_{i=1}^k\\dim W_{\\lambda_i}=n$ である。\n\n以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: 'まず 1 を仮定する。対角化可能性より、$V$ には $A$ の固有ベクトルだけからなる基底 $\\mathcal B$ が存在する。', solutionComment: '対角化可能であることは、固有ベクトル基底が存在することと同値である。' },
    { id: 1, code: '$\\mathcal B$ を固有値ごとにまとめると、その全てのベクトルは $W_{\\lambda_1}+\\cdots+W_{\\lambda_k}$ に属する。$\\mathcal B$ は $V$ を生成するので\n$\\displaystyle V=W_{\\lambda_1}+\\cdots+W_{\\lambda_k}$\nである。', solutionComment: '固有値の一覧は全てを含むため、固有ベクトル基底の各元はいずれかの固有空間に入る。' },
    { id: 2, code: '相異なる固有空間の和は直和なので\n$\\displaystyle V=\\bigoplus_{i=1}^kW_{\\lambda_i}$\nとなる。よって 1 から 2 が従う。', solutionComment: 'la_001 の直和性を使い、単なる和を直和へ強める。' },
    { id: 3, code: '次に 2 を仮定し、各固有空間 $W_{\\lambda_i}$ の基底 $\\mathcal B_i$ を選ぶ。', solutionComment: '各部分空間内の基底は全て固有値 $\\lambda_i$ の固有ベクトルからなる。' },
    { id: 4, code: '直和性より $\\bigcup_i\\mathcal B_i$ は一次独立であり、$V=\\sum_iW_{\\lambda_i}$ より $V$ を生成する。したがってこれは $V$ の基底である。', solutionComment: '直和では各成分表示が一意なので、異なる部分空間の基底を合わせても一次独立性が保たれる。' },
    { id: 5, code: '$\\bigcup_i\\mathcal B_i$ は固有ベクトルだけからなる基底だから、この基底に関する $A$ の表現行列は対角行列である。よって 2 から 1 が従う。', solutionComment: '各基底ベクトルに対して $A$ は対応する固有値を掛けるだけである。' },
    { id: 6, code: '一方、固有空間の和は常に直和なので\n$\\displaystyle \\dim\\left(\\bigoplus_{i=1}^kW_{\\lambda_i}\\right)=\\sum_{i=1}^k\\dim W_{\\lambda_i}$\nである。', solutionComment: '有限個の部分空間の直和では、次元は各部分空間の次元の和になる。' },
    { id: 7, code: '$\\bigoplus_iW_{\\lambda_i}$ は $V$ の部分空間である。有限次元空間の部分空間が $V$ 全体に等しいことと、その次元が $n=\\dim V$ であることは同値である。', solutionComment: '同じ有限次元を持つ部分空間は元の空間全体に一致する。' },
    { id: 8, code: 'ブロック 6, 7 より条件 2 と 3 は同値である。以上から 1, 2, 3 は全て同値である。$\\square$', solutionComment: '対角化可能性を、固有空間の幾何と次元の双方で判定できる。' },
  ],
  partialOrder: [[0, 1], [1, 2], [3, 4], [4, 5], [2, 8], [5, 8], [6, 7], [7, 8]],
  hints: [
    '対角化可能なら固有ベクトル基底を固有値ごとに分けます。',
    '逆向きでは各固有空間の基底を合わせます。',
    '直和の次元公式を使うと、空間全体との一致を次元だけで判定できます。',
  ],
  explanation: {
    summary: '対角化可能性とは、空間全体を固有空間という独立な成分へ完全に分解できることです。固有空間の次元の合計が $n$ に届くかでも判定できます。',
    points: [
      '対角化可能なら、固有ベクトル基底が各固有空間を通じて $V$ 全体を生成します。',
      '固有空間が $V$ を直和分解すれば、それぞれの基底を合わせて固有ベクトル基底が得られます。',
      '固有空間の次元が不足する場合、一般化固有空間を用いる Jordan 分解が必要になります。',
    ],
    complexity: { time: '対角化、固有ベクトル基底、直和、次元公式', space: '固有ベクトル基底と固有空間の直和分解を往復する' },
    tip: '対角化の問題では、固有値の個数だけでなく、各固有空間の次元の合計を確認します。',
  },
});
