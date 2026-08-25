// ta_003: W tensor V* と Hom(V,W) の標準同型 ★4
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ta_003',
  title: 'テンソルと一次写像の標準同型',
  category: 'tensor_algebra',
  categoryLabel: '代数学 / テンソル代数',
  difficulty: 4,
  language: 'proof',
  description: '【定理（有限次元での標準同型）】\n$V,W$ を有限次元ベクトル空間とする。単純テンソルに対し\n$$\\Phi(w\\otimes\\varphi)(v)=\\varphi(v)w$$\nで定まる写像は、基底に依存しない線形同型\n$$\\Phi:W\\otimes V^*\\xrightarrow{\\sim}\\operatorname{Hom}(V,W)$$\nを与える。以下の証明ステップを正しい順序に並び替えよ。',
  pinnedCode: ['【証明】'],
  blocks: [
    { id: 0, code: '$\\displaystyle B:W\\times V^*\\to\\operatorname{Hom}(V,W),\\qquad B(w,\\varphi)(v)=\\varphi(v)w$\nと定める。', solutionComment: '単純テンソルに対応させたい階数高々1の写像を、まず二変数の写像として定義する。' },
    { id: 1, code: '$B$ は $w$ と $\\varphi$ のそれぞれについて線形なので双線形である。', solutionComment: '例えば $B(w_1+w_2,\\varphi)(v)=\\varphi(v)(w_1+w_2)$ であり、$\\varphi$ 側も同様である。' },
    { id: 2, code: 'テンソル積の普遍性により、一意な線形写像\n$\\displaystyle \\Phi:W\\otimes V^*\\to\\operatorname{Hom}(V,W)$\nが存在して、$\\Phi(w\\otimes\\varphi)(v)=\\varphi(v)w$ を満たす。', solutionComment: '双線形写像 $B$ がテンソル積を経由して線形化される。定義自体は基底を使わない。' },
    { id: 3, code: '$\\{e_1,\\ldots,e_n\\}$ を $V$ の基底、$\\{e^1,\\ldots,e^n\\}$ を双対基底、$\\{f_1,\\ldots,f_m\\}$ を $W$ の基底とする。', solutionComment: '同型性の確認だけに基底を選ぶ。' },
    { id: 4, code: '各 $i,j,k$ について\n$\\displaystyle \\Phi(f_i\\otimes e^j)(e_k)=e^j(e_k)f_i=\\delta_{jk}f_i=E_{ij}(e_k)$\nである。', solutionComment: '単純テンソル $f_i\\otimes e^j$ は、基本一次写像 $E_{ij}$ に対応する。' },
    { id: 5, code: '線形写像は基底上の値で決まるので\n$\\displaystyle \\Phi(f_i\\otimes e^j)=E_{ij}$\nである。', solutionComment: '全ての入力基底ベクトル上で一致する二つの線形写像は等しい。' },
    { id: 6, code: '$\\{f_i\\otimes e^j\\}_{i,j}$ は $W\\otimes V^*$ の基底であり、$\\{E_{ij}\\}_{i,j}$ は $\\operatorname{Hom}(V,W)$ の基底である。', solutionComment: 'ta_001 のテンソル積基底定理と ta_002 の Hom 空間基底定理を使う。' },
    { id: 7, code: '$\\Phi$ は一方の基底を他方の基底へ全単射に写す線形写像なので、線形同型である。$\\square$', solutionComment: '基底は証明に使っただけで、普遍性から定めた $\\Phi$ 自体は基底に依存しない。' },
  ],
  partialOrder: [[0, 1], [1, 2], [2, 4], [3, 4], [4, 5], [3, 6], [5, 7], [6, 7]],
  hints: [
    '最初に $(w,\\varphi)$ から階数1写像を作る双線形写像を定義します。',
    '普遍性でテンソル積上の線形写像へ延長します。',
    '双対基底を使い、テンソル積の基底が Hom 空間の基本写像へ移ることを確認します。',
  ],
  explanation: {
    summary: '有限次元では、テンソル $w\\otimes\\varphi$ は $v\\mapsto\\varphi(v)w$ という階数1写像を表し、その有限和で全ての線形写像を表せます。',
    points: [
      '写像 $\\Phi$ の定義は基底に依存せず、自然な同型です。',
      '基底を選ぶと $f_i\\otimes e^j$ は行列単位 $E_{ij}$ に対応します。',
      '無限次元ではテンソルの有限和が表すのは有限階数写像だけなので、一般には全 Hom 空間と一致しません。',
    ],
    complexity: { time: 'テンソル積の普遍性、双対基底、有限階数写像、自然同型', space: '単純テンソルを階数1写像へ対応させる' },
    tip: 'テンソルと行列の対応では、右側の双対ベクトルが入力をスカラーへ縮約し、左側のベクトルが出力方向を決めます。',
  },
});
