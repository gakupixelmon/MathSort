// ta_009: ウェッジ積の反交換性 ★2
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_009',
  title: 'ウェッジ積の反交換性',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 2,
  language: 'proof',
  description: '【定理】\n交代テンソル空間（外積代数）において、任意のベクトル $v$ に対して $v \\wedge v = 0$ が成り立つとする。このとき、任意のベクトル $v, w$ に対して $v \\wedge w = -w \\wedge v$ が成り立つことを証明せよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '任意のベクトル $v, w$ に対して、その和 $v+w$ を考える。', solutionComment: '線形性（分配則）を利用するために、2つのベクトルの和についての性質を考える。' },
    { id: 1, code: '仮定より、任意のベクトルについて同じベクトル同士のウェッジ積は $0$ になるため、$(v+w) \\wedge (v+w) = 0$ である。', solutionComment: '定理の仮定「任意のベクトルに対して自身との積は0」を $v+w$ に対して適用する。' },
    { id: 2, code: '左辺を展開すると、\n$(v+w) \\wedge (v+w) = (v \\wedge v) + (v \\wedge w) + (w \\wedge v) + (w \\wedge w)$\nとなる。', solutionComment: 'ウェッジ積の双線形性（分配法則）を用いて展開する。' },
    { id: 3, code: '再び仮定より $v \\wedge v = 0$ かつ $w \\wedge w = 0$ である。', solutionComment: '展開された項のうち、同じベクトル同士の積の部分を特定する。' },
    { id: 4, code: 'したがって、式は\n$0 + (v \\wedge w) + (w \\wedge v) + 0 = 0$\nと簡略化される。', solutionComment: '仮定を適用して項を消去する。' },
    { id: 5, code: 'これを移項すると、$v \\wedge w = -w \\wedge v$ が得られる。 $\\blacksquare$', solutionComment: '残った項を整理することで、目的の反交換性が導かれる。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
  hints: [
    '和 $v+w$ に対して仮定 $(v+w) \\wedge (v+w) = 0$ を適用します。',
    '左辺を分配法則に従って展開します。',
    '展開した式に対して、再度 $v \\wedge v = 0$ などの仮定を適用し、不要な項を消去します。',
  ],
  explanation: {
    summary: '「同じものを掛けると0になる」という性質から、「入れ替えると符号が反転する（反交換性）」という性質が導かれることを示す、外積代数における最も基本かつ重要な証明です。',
    points: [
      '和のベクトル $v+w$ を用いて展開するのが典型的な手法（極極化（polarization）の手法）です。',
      '体の標数が2でない場合は、逆に反交換性から $v \\wedge v = 0$ も導けます。',
    ],
    complexity: { time: '分配法則、交代性', space: '和の展開による交差項の抽出' },
    tip: '標数2の体においては $1 = -1$ となるため、「反交換性」は単なる「交換法則」と同じになってしまいます。そのため、外積代数においては $v \\wedge w = -w \\wedge v$ よりも $v \\wedge v = 0$ を基本的な公理として採用するのが一般的です。',
  },
});
