// ml_008: EOS後のbalancing gapの単調減少 ★4
// 出典: Ghosh et al. "Learning Dynamics of Deep Linear Networks Beyond the Edge of Stability" (2025)
(window.PROBLEMS_REGISTRY = window.PROBLEMS_REGISTRY || []).push({
  id: 'ml_008',
  title: 'EOS後の balancing gap の単調減少',
  category: 'papers_2025Ghosh',
  categoryLabel: '論文 / 2025Ghosh',
  difficulty: 4,
  language: 'proof',
  description: '【Proposition 2 (Balancing of Singular Values) の直感的な証明】\nDLNでは、勾配流では層間の singular value balancing gap が保存される。一方、Ghosh et al. (2025) は、GDがEOSを越えた大きな学習率で振動すると、この保存則が破れて balancing gap が単調に減少することを示した。\n\n1つの特異値インデックスに注目し、層 $\\ell$ の特異値を $\\sigma_\\ell(t)$、積を $\\pi(t)=\\prod_{\\ell=1}^L\\sigma_\\ell(t)$ とする。スカラー損失\n$$\\frac{1}{2}(\\pi(t)-\\sigma^\\star)^2$$\nに対する議論の流れを正しい順序に並び替えよ。',
  pinnedCode: [
    '【証明】',
  ],
  blocks: [
    {
      id: 0,
      code: '特異ベクトル整列により、各特異値インデックスはスカラー損失\n$\\frac{1}{2}\\left(\\prod_{\\ell=1}^{L}\\sigma_\\ell-\\sigma^\\star\\right)^2$\nとして解析できる。',
    },
    {
      id: 1,
      code: '層間のズレを測るため、$b_{i,j}(t)=\\sigma_i(t)^2-\\sigma_j(t)^2$ を balancing gap として定義する。',
    },
    {
      id: 2,
      code: 'GD更新は\n$\\sigma_i(t+1)=\\sigma_i(t)-\\eta(\\pi(t)-\\sigma^\\star)\\dfrac{\\pi(t)}{\\sigma_i(t)}$\nと書ける。',
    },
    {
      id: 3,
      code: '2つの層 $i,j$ について更新後の二乗差を計算すると、共通の一次項が打ち消し合う。',
    },
    {
      id: 4,
      code: 'その結果、\n$b_{i,j}(t+1)=b_{i,j}(t)\\left(1-\\eta^2(\\pi(t)-\\sigma^\\star)^2\\dfrac{\\pi(t)^2}{\\sigma_i(t)^2\\sigma_j(t)^2}\\right)$\nという乗法的な更新式が得られる。',
    },
    {
      id: 5,
      code: '学習率が beyond EOS の範囲にあり、初期スケール $\\alpha$ が十分小さいとき、この括弧内の係数の絶対値はある $c\\in(0,1]$ で上から抑えられる。',
    },
    {
      id: 6,
      code: 'したがって $|b_{L,\\ell}(t+1)|<c|b_{L,\\ell}(t)|$ となり、ゼロ初期化された層と他の層との balancing gap は各ステップで縮小する。',
    },
    {
      id: 7,
      code: 'EOS後の振動では、特異値積が最小点の下側と上側を交互に通るため、下側での厳密な縮小が繰り返し効き、全体として gap は 0 に向かう。',
    },
    {
      id: 8,
      code: 'よってGD beyond EOS は、勾配流で保存される balancing gap を破り、層間特異値をより balanced な、すなわちより flat な最小点へ近づける。$\\square$',
    },
  ],
  partialOrder: [
    [0, 1], [1, 2],
    [2, 3], [3, 4],
    [4, 5], [5, 6],
    [6, 7], [7, 8],
  ],
  hints: [
    'まず特異値だけのスカラー損失に落とし、層間の二乗差 $b_{i,j}$ を追います。',
    'GD更新式を二乗して差を取ると、更新式が $b_{i,j}(t)$ に係数を掛ける形になります。',
    'beyond EOS の仮定と小さい初期化により、その係数の絶対値が 1 以下に抑えられます。',
    '振動により縮小が繰り返し起きるので、最終的に balanced な最小点へ向かいます。',
  ],
  explanation: {
    summary: 'この問題は、EOS後の大きな学習率が単に不安定性を生むだけでなく、層間の特異値を揃える方向に働くことを示す論証です。',
    points: [
      '勾配流では balancing gap が保存されるため、初期のアンバランスが残りやすいです。',
      'GDでは二乗差の更新に二次の補正項が入り、EOS後の大きな学習率ではこの項が gap を縮小させます。',
      '特異値積が最小点の下側にいるときは厳密な収縮が示され、上側では非増加に抑えられます。',
      '振動によって下側と上側を行き来するため、長期的には gap が 0 に近づきます。',
      'balanced minimum は deep matrix factorization の global minima の中で flattest な点として解釈されます。',
    ],
    complexity: {
      time: 'スカラー化されたDLN特異値ダイナミクス、GD更新、収縮評価',
      space: '二乗差 $b_{i,j}$ の乗法的更新から balancing gap の減少を示す',
    },
    tip: 'この論文の重要な見方は、EOSを「不安定な振動」ではなく「保存則を破って flatter な解へ移動する離散時間効果」として捉える点です。',
  },
});
