// ml_theory_001: ラデマッハ複雑度に基づく汎化境界 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_theory_001',
  title: 'ラデマッハ複雑度に基づく汎化境界',
  category: 'ml_theory',
  categoryLabel: '機械学習 / 学習理論',
  difficulty: 5,
  language: 'proof',
  description: '【定理（ラデマッハ複雑度による汎化境界）】\n$Z_1,\\ldots,Z_n$ を分布 $P$ からの独立標本、$\\mathcal F$ を $[0,1]$ 値関数のクラスとする。期待ラデマッハ複雑度を\n$$\\mathfrak R_n(\\mathcal F)=E_{S,\\sigma}\\left[\\sup_{f\\in\\mathcal F}\\frac{1}{n}\\sum_{i=1}^n\\sigma_i f(Z_i)\\right]$$\nと定める。ただし $\\sigma_i$ は独立な Rademacher 変数である。このとき任意の $\\delta\\in(0,1)$ に対し、確率少なくとも $1-\\delta$ で、全ての $f\\in\\mathcal F$ について\n$$E_P[f(Z)]\\leq\\frac1n\\sum_{i=1}^n f(Z_i)+2\\mathfrak R_n(\\mathcal F)+\\sqrt{\\frac{\\log(1/\\delta)}{2n}}$$\nが成り立つ。ここでは McDiarmid の不等式を用いてよい。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    {
      id: 0,
      code: '$\\Phi(S)=\\sup_{f\\in\\mathcal F}\\left(E_P[f(Z)]-\\frac1n\\sum_{i=1}^n f(Z_i)\\right)$ とおく。',
      solutionComment: '一様な汎化ギャップを1つの確率変数 $\\Phi(S)$ として扱う。',
    },
    {
      id: 1,
      code: '標本の第 $i$ 成分だけを別の値に置き換えても、各 $f(Z_i)\\in[0,1]$ なので $\\Phi(S)$ の変化量は高々 $1/n$ である。',
      solutionComment: '上限の supremum を取っていても、各候補の経験平均の変化が高々 $1/n$ なら supremum の変化も同じ上界を持つ。',
    },
    {
      id: 2,
      code: 'したがって McDiarmid の不等式より、確率少なくとも $1-\\delta$ で\n$\\displaystyle \\Phi(S)\\leq E_S[\\Phi(S)]+\\sqrt{\\frac{\\log(1/\\delta)}{2n}}$\nが成り立つ。',
      solutionComment: '$\\sum_i(1/n)^2=1/n$ を McDiarmid の片側評価に代入する。',
    },
    {
      id: 3,
      code: '独立なゴースト標本 $S\'= (Z_1\',\\ldots,Z_n\')$ を導入する。$E_P[f(Z)]=E_{S\'}[n^{-1}\\sum_i f(Z_i\')]$ と Jensen の不等式から\n$\\displaystyle E_S[\\Phi(S)]\\leq E_{S,S\'}\\left[\\sup_f\\frac1n\\sum_{i=1}^n\\bigl(f(Z_i\')-f(Z_i)\\bigr)\\right]$\nを得る。',
      solutionComment: '母期待値を独立な経験平均で置き換え、supremum に対する Jensen の不等式を使う。',
    },
    {
      id: 4,
      code: '対 $(Z_i,Z_i\')$ は交換可能なので、Rademacher 変数 $\\sigma_i$ を用いた対称化により右辺は\n$\\displaystyle E_{S,S\',\\sigma}\\left[\\sup_f\\frac1n\\sum_{i=1}^n\\sigma_i\\bigl(f(Z_i\')-f(Z_i)\\bigr)\\right]$\nに等しい。',
      solutionComment: '$\\sigma_i$ が符号を反転しても $(Z_i,Z_i\')$ の同時分布は変わらないという交換可能性を使う。',
    },
    {
      id: 5,
      code: 'supremum の劣加法性と $-\\sigma_i$ も Rademacher 変数であることから、この期待値は\n$\\displaystyle \\mathfrak R_n(\\mathcal F)+\\mathfrak R_n(\\mathcal F)=2\\mathfrak R_n(\\mathcal F)$\n以下である。',
      solutionComment: '$\\sup_f(A_f+B_f)\\leq\\sup_f A_f+\\sup_f B_f$ を、ゴースト標本側と元標本側に適用する。',
    },
    {
      id: 6,
      code: 'よって $E_S[\\Phi(S)]\\leq2\\mathfrak R_n(\\mathcal F)$ である。',
      solutionComment: 'ゴースト標本と対称化で得た上界をまとめる。',
    },
    {
      id: 7,
      code: 'これを McDiarmid の評価に代入すると、確率少なくとも $1-\\delta$ で\n$\\displaystyle \\Phi(S)\\leq2\\mathfrak R_n(\\mathcal F)+\\sqrt{\\frac{\\log(1/\\delta)}{2n}}$\nとなる。',
      solutionComment: '確率的な揺らぎの項と、関数クラスの複雑さの項を合わせる。',
    },
    {
      id: 8,
      code: '$\\Phi$ の定義を戻せば、同じ確率で全ての $f\\in\\mathcal F$ に対して\n$\\displaystyle E_P[f(Z)]\\leq\\frac1n\\sum_{i=1}^n f(Z_i)+2\\mathfrak R_n(\\mathcal F)+\\sqrt{\\frac{\\log(1/\\delta)}{2n}}$\nが成り立つ。$\\square$',
      solutionComment: 'supremum が上界を満たすことは、クラス中の各 $f$ の汎化ギャップがその上界以下であることを意味する。',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [5, 6], [2, 7], [6, 7], [7, 8],
  ],
  hints: [
    'まず、全ての関数にわたる汎化ギャップの supremum を $\\Phi(S)$ とおきます。',
    '標本を1点だけ置換したときの変化量は $1/n$ なので、McDiarmid の不等式で $\\Phi(S)$ をその期待値の近くに抑えます。',
    '期待値 $E[\\Phi(S)]$ はゴースト標本を入れ、Rademacher 変数で対称化すると $2\\mathfrak R_n(\\mathcal F)$ 以下になります。',
  ],
  explanation: {
    summary: 'ラデマッハ複雑度は、関数クラスがランダムな符号にどれだけ適合できるかを測る量です。この複雑さが小さいほど、経験平均から母期待値へのずれを一様に抑えられます。',
    points: [
      'McDiarmid の不等式は、標本を1点変えても値が大きく変わらない関数の集中を保証します。',
      'ゴースト標本は未知の母期待値を独立な経験平均に置き換えるための道具です。',
      '対称化により、2標本の差がランダム符号付き和へ変わり、ラデマッハ複雑度が現れます。',
      'この境界は全ての $f\\in\\mathcal F$ に同時に成り立つため、学習後に選ばれた関数にも適用できます。',
    ],
    complexity: {
      time: '経験過程、ゴースト標本、Rademacher 対称化、McDiarmid の不等式',
      space: '一様汎化ギャップを集中評価し、その期待値をラデマッハ複雑度で抑える',
    },
    tip: '証明の役割分担は明快です。McDiarmid は標本ごとの揺らぎを、ラデマッハ複雑度は関数クラスの表現力を評価しています。',
  },
});
