// ml_024: Contextual RAF - ラベル付き入力の直交分解 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_024',
  title: 'RAF ラベル付き入力の直交分解',
  category: 'papers_contextual_raf',
  categoryLabel: '機械学習 / 論文 / Contextual RAF',
  difficulty: 4,
  language: 'proof',
  description: '【発展補題（ラベル付き入力の分解）】\n$u\\in\\mathbb S^{d-1}$、$x\\sim\\mathcal N(0,I_d)$ とし、$T=u^\\top x$、$V=x-Tu$ とおく。規則ラベルを $g=\\operatorname{sign}(T)$、RAF ラベルを\n$$y=\\begin{cases}g,&s=0,\\\\ r,&s=1,\\end{cases}\\qquad s\\sim\\operatorname{Ber}(\\varepsilon),\\quad r\\sim\\operatorname{Rad}(1/2)$$\nとする。全ての変数は必要な範囲で独立とする。このとき、ある $A$ と $G\\sim\\mathcal N(0,I_d-uu^\\top)$ が存在して\n$$yx=Au+G,\\qquad E[A]=(1-\\varepsilon)\\sqrt{\\frac2\\pi}=:q_\\varepsilon$$\nとなり、$A$ と $G$ は独立である。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$\\displaystyle x=Tu+V,\\qquad T\\sim\\mathcal N(0,1),\\qquad V\\sim\\mathcal N(0,I_d-uu^\\top)$\nであり、$T$ と $V$ は独立である。', solutionComment: '標準ガウスベクトルを $u$ 方向とその直交補空間へ直交分解する。' },
    { id: 1, code: '$s=0$ の規則標本では $y=\\operatorname{sign}(T)$ だから\n$\\displaystyle yx=|T|u+\\operatorname{sign}(T)V$\nである。', solutionComment: '教師ラベルを掛けると、$u$ 方向の係数が半正規変数 $|T|$ になる。' },
    { id: 2, code: '$|T|$ と $\\operatorname{sign}(T)$ は独立であり、$V$ は中心対称ガウスである。よって $\\operatorname{sign}(T)V\\sim\\mathcal N(0,I_d-uu^\\top)$ であり、$|T|$ と独立である。', solutionComment: '符号で掛けても中心対称なガウスベクトルの分布は変わらない。' },
    { id: 3, code: '$s=1$ の事実標本では $y=r$ だから\n$\\displaystyle yx=rTu+rV$\nである。', solutionComment: '事実ラベル $r$ は入力 $x$ と独立な Rademacher 変数である。' },
    { id: 4, code: '独立性とガウス分布の対称性より $(rT,rV)$ は $(T,V)$ と同じ分布を持つ。したがって $rV\\sim\\mathcal N(0,I_d-uu^\\top)$ であり、$rT$ と独立である。', solutionComment: '同じ符号を $T,V$ の両方へ掛けても、同時中心ガウス分布は不変である。' },
    { id: 5, code: '$\\displaystyle A=\\begin{cases}|T|,&s=0,\\\\ rT,&s=1\\end{cases}$ とし、規則標本では $G=\\operatorname{sign}(T)V$、事実標本では $G=rV$ とおくと、常に $yx=Au+G$ である。', solutionComment: '規則・事実の二つの場合を一つの直交分解へまとめる。' },
    { id: 6, code: 'ブロック 2, 4 より、各場合で $G\\sim\\mathcal N(0,I_d-uu^\\top)$ かつ $A$ と独立である。$s$ は独立なので、混合した後もこの性質が保たれる。', solutionComment: '条件付き分布がどちらの場合も同じガウス分布であることが重要である。' },
    { id: 7, code: 'したがって\n$\\displaystyle E[A]=(1-\\varepsilon)E[|T|]+\\varepsilon E[rT]=(1-\\varepsilon)\\sqrt{\\frac2\\pi}=q_\\varepsilon$\nである。$\\square$', solutionComment: '∵ $E[|T|]=\\sqrt{2/\\pi}$、$r$ は平均0で $T$ と独立なので $E[rT]=0$。' },
  ],
  partialOrder: [[0, 1], [1, 2], [0, 3], [3, 4], [2, 5], [4, 5], [5, 6], [6, 7]],
  hints: [
    'まず入力を教師方向 $u$ と直交補空間へ分けます。',
    '規則標本と事実標本で $yx$ を別々に計算します。',
    'ガウス分布の符号反転に対する対称性を使い、両方のケースを同じ形へまとめます。',
  ],
  explanation: {
    summary: '発展ノートの固定スペクトル定理は、RAF ラベル付き入力が教師方向の平均信号 $q_\\varepsilon u$ と直交ガウス雑音へ分かれることから始まります。',
    points: [
      '規則標本は $u$ 方向に正の平均信号 $E|T|$ を与えます。',
      '事実標本は平均信号を持ちませんが、直交ガウス雑音の分布を変えません。',
      'この分解により、文脈平均の信号と雑音を別々に集中評価できます。',
    ],
    complexity: { time: 'ガウス直交分解、対称性、Rademacher 変数、混合分布', space: 'RAF ラベル付き入力を教師方向の信号と直交雑音に分ける' },
    tip: 'ガウス入力に独立な符号を掛ける場面では、分布の対称性と独立性を分けて確認すると整理しやすくなります。',
  },
});
