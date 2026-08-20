// ml_026: Contextual RAF - 全事実再生の margin 結合 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_026',
  title: 'margin 分解から全事実再生へ',
  category: 'papers_contextual_raf',
  categoryLabel: '機械学習 / 論文 / Contextual RAF',
  difficulty: 4,
  language: 'proof',
  description: '【発展定理の中核（全事実再生）】\n$W=W^\\top\\succeq0$ が $Wu=u$ を満たし、\n$$f_W(x;\\mathcal D_M)=\\left(\\frac1M\\sum_{i=1}^M y_ix_i\\right)^\\top Wx$$\nとする。事実位置 $j\\in I_{\\rm fact}$ では $y_j=r_j$ である。$q_\\varepsilon=(1-\\varepsilon)\\sqrt{2/\\pi}$、$\\tau_1=\\operatorname{tr}(W)$、$\\tau_2=\\lVert W\\rVert_F$、$L=\\lVert W\\rVert_{\\rm op}$ とする。ある共通の高確率事象上で全ての $j\\in I_{\\rm fact}$ に対し\n$$Q_j\\ge\\tau_1-a,\\qquad |R_j|\\le b,\\qquad |C_j|\\le c$$\nが成り立ち、ここで\n$$a=C(\\tau_2\\sqrt t+Lt),\\quad b=C(\\tau_2\\sqrt{Mt}+L\\sqrt M\\,t),\\quad c=Cq_\\varepsilon M\\sqrt t$$\nとする。$\tau_1>a+b+c$ なら全事実ラベルが再生されることを示せ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '事実位置 $j$ では $y_j=r_j$ なので、再生 margin は\n$\\displaystyle \\mathcal M_j=Mr_jf_W(x_j;\\mathcal D_M)=x_j^\\top Wx_j+\\sum_{i\\ne j}y_ir_jx_i^\\top Wx_j$\nである。', solutionComment: '$i=j$ の自己項では $r_jy_j=1$ となる。' },
    { id: 1, code: '$\\displaystyle y_ix_i=q_\\varepsilon u+Z_i$、ただし $E[Z_i]=0$ と書くと、\n$\\displaystyle \\mathcal M_j=Q_j+R_j+C_j$\nと分解できる。', solutionComment: 'RAF ラベル付き入力の直交分解から、平均信号と中心化残差を分ける。' },
    { id: 2, code: '各項を\n$\\displaystyle Q_j=x_j^\\top Wx_j,\\quad R_j=\\sum_{i\\ne j}Z_i^\\top W(r_jx_j),\\quad C_j=(M-1)q_\\varepsilon r_ju^\\top Wx_j$\nと定める。', solutionComment: '$Q_j$ は自己項、$R_j$ は中心化交差項、$C_j$ は教師方向に整列した coherent 交差項である。' },
    { id: 3, code: '$W=W^\\top$ と $Wu=u$ より $u^\\top W=u^\\top$ なので、\n$\\displaystyle C_j=(M-1)q_\\varepsilon r_ju^\\top x_j$\nである。', solutionComment: '教師方向を保存する仮定により、coherent 項は一次元ガウス量へ簡約される。' },
    { id: 4, code: '仮定した共通の高確率事象上では、全ての事実位置 $j$ について\n$\\displaystyle Q_j\\ge\\tau_1-a,\\qquad R_j\\ge-b,\\qquad C_j\\ge-c$\nが成り立つ。', solutionComment: '$|R_j|\\le b$ と $|C_j|\\le c$ から、それぞれ下側評価を取り出す。' },
    { id: 5, code: 'ブロック 1 と 4 より\n$\\displaystyle \\mathcal M_j=Q_j+R_j+C_j\\ge\\tau_1-a-b-c$\nである。', solutionComment: '自己項の trace が、二種類の交差項と自己項の偏差を上回るかを比較する。' },
    { id: 6, code: '$\\tau_1>a+b+c$ だから、全ての $j\\in I_{\\rm fact}$ で $\\mathcal M_j>0$ となる。', solutionComment: '固定スペクトル定理の trace 条件は、まさにこの正の margin を確保する条件である。' },
    { id: 7, code: '$\\displaystyle \\mathcal M_j=Mr_jf_W(x_j;\\mathcal D_M)>0$ より\n$\\displaystyle \\operatorname{sign}f_W(x_j;\\mathcal D_M)=r_j$\nが全ての事実位置で成り立つ。$\\square$', solutionComment: '同じ高確率事象で全ての $j$ を扱っているため、全事実の同時再生が得られる。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [1, 5], [5, 6], [6, 7]],
  hints: [
    '最初に $i=j$ の自己項を取り出し、残りへ平均信号と中心化残差の分解を代入します。',
    '各誤差項の絶対値上界から、margin の下界を作ります。',
    'trace 条件が下界を正にするため、符号は事実ラベルと一致します。',
  ],
  explanation: {
    summary: '固定スペクトル線形 Attention の事実再生は、自己項の平均的な大きさ $\\operatorname{tr}(W)$ が、教師方向の極値的交差項と中心化雑音を同時に上回ることで成立します。',
    points: [
      '自己項 $Q_j$ は memory を支える正の量であり、その中心は trace です。',
      'coherent 項 $C_j$ は $M$ 個の事実の最悪位置を考えるため $M\\sqrt{\\log M}$ スケールになります。',
      '中心化交差項 $R_j$ は Frobenius norm と作用素ノルムで制御されます。',
      'この問題では集中不等式による各上界を仮定し、それらを margin へ結合する定理の最終部を示しています。',
    ],
    complexity: { time: 'margin 分解、ガウス二次形式、sub-Gaussian 集中、union bound', space: '自己項・coherent 項・中心化交差項を一つの下界へ結合する' },
    tip: '複数の誤差項を含む高確率証明では、各項を同時に抑える事象を先に作り、最後に決定論的な不等式として結合します。',
  },
});
