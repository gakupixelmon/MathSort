// ta_004: テンソル積の結合則 ★5
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_004',
  title: 'テンソル積の結合則',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 5,
  language: 'proof',
  description: '【定理（テンソル積の結合則）】\nベクトル空間 $V_1,V_2,V_3$ に対し、\n$$\\alpha:(V_1\\otimes V_2)\\otimes V_3\\xrightarrow{\\sim}V_1\\otimes(V_2\\otimes V_3)$$\nであって\n$$\\alpha((v_1\\otimes v_2)\\otimes v_3)=v_1\\otimes(v_2\\otimes v_3)$$\nを満たす標準的な線形同型が存在する。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '各 $v_3\\in V_3$ を固定する。写像\n$\\displaystyle B_{v_3}:V_1\\times V_2\\to V_1\\otimes(V_2\\otimes V_3),\\qquad B_{v_3}(v_1,v_2)=v_1\\otimes(v_2\\otimes v_3)$\nは双線形である。', solutionComment: '$v_3$ を固定すると、テンソル積の各変数に関する線形性から $v_1,v_2$ の双線形写像になる。' },
    { id: 1, code: '$V_1\\otimes V_2$ の普遍性により、一意な線形写像\n$\\displaystyle L_{v_3}:V_1\\otimes V_2\\to V_1\\otimes(V_2\\otimes V_3)$\nが存在し、$L_{v_3}(v_1\\otimes v_2)=v_1\\otimes(v_2\\otimes v_3)$ を満たす。', solutionComment: '双線形写像 $B_{v_3}$ を、最初の二因子のテンソル積上の線形写像へ線形化する。' },
    { id: 2, code: '$v_3\\mapsto L_{v_3}$ は線形である。従って\n$\\displaystyle G:(V_1\\otimes V_2)\\times V_3\\to V_1\\otimes(V_2\\otimes V_3),\\qquad G(z,v_3)=L_{v_3}(z)$\nは双線形である。', solutionComment: '$L_{av_3+bv_3^{\\prime}}$ と $aL_{v_3}+bL_{v_3^{\\prime}}$ は単純テンソル上で一致するため、普遍性の一意性により等しい。' },
    { id: 3, code: '再び普遍性を用いると、一意な線形写像\n$\\displaystyle \\alpha:(V_1\\otimes V_2)\\otimes V_3\\to V_1\\otimes(V_2\\otimes V_3)$\nが存在し、$\\alpha(z\\otimes v_3)=G(z,v_3)$ を満たす。特に\n$\\displaystyle \\alpha((v_1\\otimes v_2)\\otimes v_3)=v_1\\otimes(v_2\\otimes v_3)$\nである。', solutionComment: '今度は双線形写像 $G$ を、外側のテンソル積上の線形写像へ線形化する。' },
    { id: 4, code: '同じ構成で括弧の向きを逆にすると、一意な線形写像\n$\\displaystyle \\beta:V_1\\otimes(V_2\\otimes V_3)\\to(V_1\\otimes V_2)\\otimes V_3$\nであって\n$\\displaystyle \\beta(v_1\\otimes(v_2\\otimes v_3))=(v_1\\otimes v_2)\\otimes v_3$\nを満たすものが得られる。', solutionComment: '$\\alpha$ と全く同じ普遍性の議論を、左右を入れ替えて適用する。' },
    { id: 5, code: '任意の $v_r\\in V_r$ に対し\n$\\displaystyle (\\beta\\circ\\alpha)((v_1\\otimes v_2)\\otimes v_3)=(v_1\\otimes v_2)\\otimes v_3$\nである。', solutionComment: '$\\alpha$ で括弧を右へ移し、$\\beta$ で元へ戻す。' },
    { id: 6, code: '同様に\n$\\displaystyle (\\alpha\\circ\\beta)(v_1\\otimes(v_2\\otimes v_3))=v_1\\otimes(v_2\\otimes v_3)$\nである。', solutionComment: '反対側の合成も、生成元である単純テンソル上では恒等写像になる。' },
    { id: 7, code: 'これらの単純テンソルは各テンソル積空間を生成する。従って線形性より\n$\\displaystyle \\beta\\circ\\alpha=\\operatorname{id},\\qquad \\alpha\\circ\\beta=\\operatorname{id}$\nが空間全体で成り立つ。ゆえに $\\alpha$ は線形同型である。$\\square$', solutionComment: '線形写像は生成集合上の値で一意に決まるため、生成元上の等式を全テンソルへ拡張できる。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [4, 6], [5, 7], [6, 7]],
  hints: [
    'まず $v_3$ を固定し、$V_1\\times V_2$ 上の双線形写像を線形化します。',
    '得られた写像が $v_3$ に関して線形であることを使い、普遍性をもう一度適用します。',
    '逆向きの写像を作り、両合成を単純テンソル上で確認します。',
  ],
  explanation: {
    summary: '普遍性を二段階で用いて括弧を移す線形写像を構成し、逆向きの写像との合成を生成元上で確認します。',
    points: [
      '$(v_1,v_2,v_3)\\mapsto v_1\\otimes(v_2\\otimes v_3)$ を二度に分けて線形化します。',
      '逆写像も同じ普遍性から標準的に構成できます。',
      '二つのテンソル積は集合として同一ではありませんが、標準同型によって括弧を省略できます。',
    ],
    complexity: { time: 'テンソル積の普遍性、双線形写像、結合則', space: '普遍性を二度使って同型と逆写像を構成する' },
    tip: 'テンソル積の等式を示すときは、まず単純テンソル上で確認し、それらが全空間を生成することを使います。',
  },
});
