// stat_008: マルコフの不等式 ★2
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'stat_008',
  title: 'マルコフの不等式の証明',
  category: 'statistics',
  categoryLabel: '統計学',
  difficulty: 2,
  language: 'proof',
  description: '【定理（マルコフの不等式）】\n$X$ を非負の可積分確率変数とし、$a>0$ とする。このとき\n$$P(X\\geq a)\\leq\\frac{E[X]}{a}$$\nが成り立つ。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '$A=\\{X\\geq a\\}$ とおき、その指示関数を $\\mathbf{1}_A$ とする。',
      solutionComment: '大きな値を取る事象を $A$ として取り出す。',
    },
    {
      id: 1,
      code: '$A$ 上では $X\\geq a$ であり、$A^c$ 上では $\\mathbf{1}_A=0$ かつ $X\\geq0$ である。したがって、ほとんど確実に\n$\\displaystyle X\\geq a\\mathbf{1}_A$\nが成り立つ。',
      solutionComment: '$X$ の非負性により、事象 $A$ の外側でも不等式が保たれる。',
    },
    {
      id: 2,
      code: '期待値の単調性より\n$\\displaystyle E[X]\\geq E[a\\mathbf{1}_A]$\nである。',
      solutionComment: '$U\\geq V$ a.s. なら $E[U]\\geq E[V]$ という期待値の単調性を使う。',
    },
    {
      id: 3,
      code: '期待値の線形性と指示関数の性質から\n$\\displaystyle E[a\\mathbf{1}_A]=aE[\\mathbf{1}_A]=aP(A)$\nである。',
      solutionComment: '$E[\\mathbf{1}_A]=P(A)$ は指示関数の基本公式。',
    },
    {
      id: 4,
      code: 'よって $E[X]\\geq aP(A)=aP(X\\geq a)$ を得る。',
      solutionComment: '$A=\\{X\\geq a\\}$ の定義を戻す。',
    },
    {
      id: 5,
      code: '$a>0$ なので両辺を $a$ で割れば、\n$\\displaystyle P(X\\geq a)\\leq\\frac{E[X]}{a}$\nとなる。$\\square$',
      solutionComment: '正の数で割るため、不等号の向きは変わらない。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  ],
  hints: [
    '事象 $A=\\{X\\geq a\\}$ の指示関数 $\\mathbf{1}_A$ を導入します。',
    '$X$ と $a\\mathbf{1}_A$ を点ごとに比較し、期待値の単調性を使いましょう。',
    '最後に $E[\\mathbf{1}_A]=P(A)$ を用いて確率へ戻します。',
  ],
  explanation: {
    summary: 'マルコフの不等式は、非負確率変数が大きな値を取る確率を、その期待値だけから上から抑える基本的な集中不等式です。',
    points: [
      '指示関数を使うと、事象 $\\{X\\geq a\\}$ を確率変数として扱えます。',
      '$X\\geq a\\mathbf{1}_{\\{X\\geq a\\}}$ という点ごとの比較が証明の核心です。',
      '期待値の単調性と $E[\\mathbf{1}_A]=P(A)$ により、点ごとの比較が確率の評価へ変換されます。',
      'チェビシェフの不等式や指数型 Markov 不等式は、この不等式を適切な非負確率変数に適用して得られます。',
    ],
    complexity: {
      time: '期待値、指示関数、期待値の単調性',
      space: '点ごとの比較 $X\\geq a\\mathbf{1}_{\\{X\\geq a\\}}$ を期待値に移す',
    },
    tip: '上界が $1$ を超える場合は自明な評価になりますが、期待値に比べて大きいしきい値 $a$ を選ぶと意味のある確率上界になります。',
  },
});
