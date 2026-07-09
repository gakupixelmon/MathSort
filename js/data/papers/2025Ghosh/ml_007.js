// ml_007: DLNにおける特異ベクトル整列と特異値ダイナミクスへの簡約 ★4
// 出典: Ghosh et al. "Learning Dynamics of Deep Linear Networks Beyond the Edge of Stability" (2025)
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_007',
  title: 'DLNにおける特異ベクトル整列と特異値ダイナミクスへの簡約',
  category: 'papers_2025Ghosh',
  categoryLabel: '論文 / 2025Ghosh',
  difficulty: 4,
  language: 'proof',
  description: '【Proposition 1 (Singular Vector Stationary Set) の直感的な証明】\nGhosh et al. (2025) は、deep linear network (DLN) による deep matrix factorization\n$$f(\\Theta)=\\frac{1}{2}\\|W_LW_{L-1}\\cdots W_1-M^\\star\\|_F^2$$\nを解析し、EOS後の振動を特異値のダイナミクスとして記述する。\n\n各層を $W_\\ell=U_\\ell\\Sigma_\\ell V_\\ell^\\top$、ターゲットを $M^\\star=U^\\star\\Sigma^\\star V^{\\star\\top}$ とSVD分解する。\n特異ベクトルが stationary になると、以後のダイナミクスは特異値だけに閉じる、という主張の流れを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '各層の重みを $W_\\ell(t)=U_\\ell(t)\\Sigma_\\ell(t)V_\\ell(t)^\\top$ とSVDで表し、時間変化を $\\dot U_\\ell, \\dot\\Sigma_\\ell, \\dot V_\\ell$ に分解する。',
    },
    {
      id: 1,
      code: '特異ベクトルが stationary、すなわち $\\dot U_\\ell(t)=\\dot V_\\ell(t)=0$ であると仮定する。',
    },
    {
      id: 2,
      code: 'この仮定のもとでは、特異ベクトル方向の勾配成分が消え、$U_\\ell(t)^\\top\\nabla_{W_\\ell}f(\\Theta(t))V_\\ell(t)$ は対角行列でなければならない。',
    },
    {
      id: 3,
      code: '一方で、DLNの損失に対する勾配は\n$\\nabla_{W_\\ell}f(\\Theta)=W_{L:\\ell+1}^\\top(W_{L:1}-M^\\star)W_{\\ell-1:1}^\\top$\nと書ける。',
    },
    {
      id: 4,
      code: '勾配を特異ベクトル基底で見たときに非対角成分が消えるためには、各層の左右特異ベクトルがターゲット $M^\\star$ の特異ベクトルと中間直交行列を介して整列している必要がある。',
    },
    {
      id: 5,
      code: 'したがって stationary set は\n$(U_L,V_L)=(U^\\star,Q_L)$、$(U_\\ell,V_\\ell)=(Q_{\\ell+1},Q_\\ell)$、$(U_1,V_1)=(Q_2,V^\\star)$\nという形で特徴づけられる。',
    },
    {
      id: 6,
      code: 'この集合に入ると特異ベクトルは固定され、$W_{L:1}$ の変化は各特異方向の特異値積 $\\sigma_i(\\Sigma_{L:1})$ の変化だけで記述できる。',
    },
    {
      id: 7,
      code: 'よって損失は\n$\\frac{1}{2}\\|\\Sigma_{L:1}-\\Sigma^\\star\\|_F^2=\\frac{1}{2}\\sum_i(\\sigma_i(\\Sigma_{L:1})-\\sigma_i^\\star)^2$\nに簡約され、EOS後の振動解析を特異値の問題として扱える。$\\square$',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2],
    [0, 3], [3, 4],
    [2, 4], [4, 5],
    [5, 6], [6, 7],
  ],
  hints: [
    'まず各層のSVDを時間微分し、特異ベクトルが動かないという条件を置きます。',
    '$\\dot U_\\ell=\\dot V_\\ell=0$ なら、特異ベクトル基底で見た勾配の非対角成分が消える必要があります。',
    '勾配の具体形と対角性を合わせることで、各層の特異ベクトルがターゲットの特異ベクトルと整列する形が得られます。',
    '特異ベクトルが固定されれば、残る自由度は特異値だけです。',
  ],
  explanation: {
    summary: 'この命題は、DLNの高次元な行列ダイナミクスを、特異値だけの低次元ダイナミクスへ落とすための土台です。',
    points: [
      '特異ベクトル stationary set では、特異ベクトル方向の勾配が消えるため、更新は特異値方向に閉じます。',
      '整列構造は、ターゲット行列 $M^\\star$ の左右特異ベクトルと、層間をつなぐ直交行列 $Q_\\ell$ で表されます。',
      'この簡約により、EOS後の振動を「どの特異値が振動するか」という問題として扱えます。',
      '以後の Proposition 2 や Theorem 1 は、この特異値ダイナミクスへの簡約を前提にしていると読めます。',
    ],
    complexity: {
      time: '行列微分、SVD、deep linear network の勾配計算',
      space: '特異ベクトル stationary 条件から $\\|\\Sigma_{L:1}-\\Sigma^\\star\\|_F^2/2$ への簡約を理解する',
    },
    tip: 'この論文では、EOSの複雑な振動現象を直接パラメータ空間全体で追うのではなく、まず特異ベクトルを固定し、特異値の力学系として解析可能にしている点が重要です。',
  },
});
