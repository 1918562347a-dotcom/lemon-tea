const root = document.documentElement;
const revealItems = document.querySelectorAll(".reveal");
const storySection = document.querySelector(".scroll-product");
const storyBlocks = [...document.querySelectorAll(".story-block")];
const languageSelect = document.querySelector("[data-language-select]");
const translatableNodes = [...document.querySelectorAll("[data-i18n]")];
const formatButtons = [...document.querySelectorAll("[data-format]")];
const qtyValue = document.querySelector("[data-qty-value]");
const priceDisplay = document.querySelector("[data-price-display]");
const purchaseNote = document.querySelector("[data-purchase-note]");
const addToBagButton = document.querySelector("[data-add-to-bag]");
const bagToggle = document.querySelector("[data-bag-toggle]");
const bagDrawer = document.querySelector("[data-bag-drawer]");
const bagBackdrop = document.querySelector("[data-bag-backdrop]");
const bagCloseButtons = [...document.querySelectorAll("[data-bag-close]")];
const bagCheckout = document.querySelector("[data-bag-checkout]");
const bagCount = document.querySelector("[data-bag-count]");
const bagFormat = document.querySelector("[data-bag-format]");
const bagQty = document.querySelector("[data-bag-qty]");
const bagTotal = document.querySelector("[data-bag-total]");
const bagEmpty = document.querySelector("[data-bag-empty]");
const scrollButtons = [...document.querySelectorAll("[data-scroll-target]")];

let currentLanguage = "zh";
let quantity = 1;
let bagItems = 0;
let selectedFormat = "single";
let selectedPrice = 12;

const currencyMap = {
  zh: "¥",
  en: "$",
  ko: "₩",
  ja: "¥",
};

const translations = {
  zh: {
    "nav.product": "产品",
    "nav.story": "故事",
    "nav.flavor": "风味",
    "nav.serve": "饮用方式",
    "nav.shop": "购买",
    "nav.language": "语言",
    "bag.button": "购物袋",
    "bag.eyebrow": "购物袋",
    "bag.title": "你的 Lemon Tea 选择",
    "bag.item": "商品",
    "bag.qty": "数量",
    "bag.total": "小计",
    "bag.empty": "购物袋还是空的，先选一份 Lemon Tea 吧。",
    "bag.checkout": "去结算",
    "bag.continue": "继续浏览",
    "hero.eyebrow": "高级柠檬茶，不必喧闹。",
    "hero.title": "把一盒日常柠檬茶，做成值得停下来看的品牌体验。",
    "hero.text":
      "这不是“把产品摆上去”的网页，而是一页真正面向顾客的品牌宣传页。它要让人一眼觉得高级，再往下看时逐渐产生购买欲。",
    "hero.meta1": "真实茶感",
    "hero.meta2": "柠檬清亮",
    "hero.meta3": "冷饮更好喝",
    "hero.primary": "立即购买",
    "hero.secondary": "了解这款茶",
    "hero.tagLeft": "1000ml 日常容量",
    "hero.tagRight": "滚动时，产品会随页面变化",
    "product.wordmark": "LEMON TEA",
    "product.subline": "Bright citrus. Clean tea.",
    "morph.eyebrow": "滚动主视觉",
    "morph.title": "屏幕往下走，柠檬茶自己跟着变形。",
    "morph.text":
      "从纸盒感、到玻璃感、再到冷饮感，视觉不是静止摆着，而是跟着滚动慢慢变化，让页面更像真正的品牌官网，而不是模板拼贴。",
    "morph.step1": "盒装识别",
    "morph.step2": "茶色展开",
    "morph.step3": "冷饮收尾",
    "story.block1Title": "先让人认出来",
    "story.block1Text":
      "首屏不讲太多，先建立品牌记忆点。黄、黑、茶色的对比要直接，让顾客知道这是一款干净、明亮、有气质的柠檬茶。",
    "story.block2Title": "再让人想象口感",
    "story.block2Text":
      "真正打动顾客的不是“参数”，而是脑海里出现的味觉预期。茶的厚度、柠檬的清亮、冰饮后的顺口感，都要被看见。",
    "story.block3Title": "最后把购买理由补齐",
    "story.block3Text":
      "当视觉、口感、使用场景都成立之后，购买按钮才有说服力。这才是一个真正面向顾客的宣传网页逻辑。",
    "value.eyebrow": "为什么这款茶值得被记住",
    "value.title": "不是“便宜饮料”的语气，而是“有品质的日常选择”。",
    "value.card1Tag": "柠檬感",
    "value.card1Title": "清亮，不尖锐",
    "value.card1Text": "不是廉价香精感的酸，而是刚好把茶味提起来的明亮感，入口更干净。",
    "value.card2Tag": "茶底",
    "value.card2Title": "顺滑，有骨架",
    "value.card2Text": "不会被柠檬抢走主导权，茶底仍然稳，喝起来更成熟，也更耐喝。",
    "value.card3Tag": "场景",
    "value.card3Title": "好看，也好带入日常",
    "value.card3Text": "无论是办公桌、冰箱、野餐还是送人，它都不显得随便，这是高级感的关键。",
    "flavor.eyebrow": "风味表达",
    "flavor.title": "顾客不一定懂茶，但一定懂“想不想喝”。",
    "flavor.text":
      "所以这部分不做教科书式说明，而是直接把风味翻译成购买语言：看起来清透，想象里顺口，喝完后会愿意再买。",
    "flavor.note1Title": "前段是柠檬的亮",
    "flavor.note1Text": "先提神，再醒口，让人觉得这一口很干净。",
    "flavor.note2Title": "中段是红茶的稳",
    "flavor.note2Text": "不像糖水，也不飘，保留了茶的层次和成年感。",
    "flavor.note3Title": "尾段是冰过后的松弛",
    "flavor.note3Text": "收尾爽，回味短，不腻，是会让人默默喝完的一种顺口。",
    "serve.eyebrow": "饮用方式",
    "serve.title": "真正让顾客下单的，往往是“我能在哪一刻喝它”。",
    "serve.card1Tag": "工作中",
    "serve.card1Title": "替代无聊的白水",
    "serve.card1Text": "有味道，但不太重；能提神，又不破坏工作节奏。",
    "serve.card2Tag": "聚会时",
    "serve.card2Title": "看起来更体面",
    "serve.card2Text": "比普通瓶装饮料更有气质，摆上桌也不显得廉价。",
    "serve.card3Tag": "送人时",
    "serve.card3Title": "不夸张，但有分寸",
    "serve.card3Text": "作为小礼物也成立，因为它的视觉和口感都足够克制。",
    "shop.eyebrow": "购买 Lemon Tea",
    "shop.title": "信息不需要很多，但每一项都要让顾客更接近“想买”。",
    "shop.text": "所以这里保留真正有用的选项：规格、数量、购买反馈和购物袋，而不是堆一堆没有意义的装饰。",
    "shop.productTitle": "Signature Citrus Edition",
    "shop.formatLabel": "规格",
    "shop.formatSingle": "单瓶",
    "shop.formatTriple": "三瓶装",
    "shop.formatGift": "礼盒装",
    "shop.featureLabel": "产品标签",
    "shop.feature1": "低负担口感",
    "shop.feature2": "冰饮友好",
    "shop.feature3": "送礼也合适",
    "shop.addToBag": "加入购物袋",
    "shop.note": "默认推荐冰镇后饮用，风味会更完整。",
    "closing.eyebrow": "最后一屏",
    "closing.title": "像真正的品牌页一样结束，而不是像作业一样结束。",
    "closing.text":
      "好的宣传网页，不只是“有几个大字”和“能滚动”。它应该让顾客明白这款茶是什么、为什么值得买、买完会出现在什么生活场景里。",
    "closing.primary": "现在购买",
    "closing.secondary": "回到顶部",
    "footer.left": "LEMON TEA 品牌概念站点",
    "footer.right": "已按移动端适配，可直接部署为静态网站。",
    "status.selected": "已选择",
    "status.added": "已加入购物袋",
    "status.default": "默认推荐冰镇后饮用，风味会更完整。",
  },
  en: {
    "nav.product": "Product",
    "nav.story": "Story",
    "nav.flavor": "Flavor",
    "nav.serve": "Serve",
    "nav.shop": "Shop",
    "nav.language": "Language",
    "bag.button": "Bag",
    "bag.eyebrow": "Shopping bag",
    "bag.title": "Your Lemon Tea selection",
    "bag.item": "Item",
    "bag.qty": "Quantity",
    "bag.total": "Subtotal",
    "bag.empty": "Your bag is empty. Start with one bottle of Lemon Tea.",
    "bag.checkout": "Checkout",
    "bag.continue": "Continue browsing",
    "hero.eyebrow": "Premium lemon tea, with no need to shout.",
    "hero.title": "Turn an everyday carton of lemon tea into a brand experience worth stopping for.",
    "hero.text":
      "This is not a page that simply places a product on screen. It is a customer-facing brand story designed to feel premium at first glance and more desirable as you keep scrolling.",
    "hero.meta1": "Real tea depth",
    "hero.meta2": "Bright lemon lift",
    "hero.meta3": "Best served cold",
    "hero.primary": "Buy now",
    "hero.secondary": "Meet the tea",
    "hero.tagLeft": "1000ml everyday size",
    "hero.tagRight": "The product shifts with your scroll",
    "product.wordmark": "LEMON TEA",
    "product.subline": "Bright citrus. Clean tea.",
    "morph.eyebrow": "Scroll visual",
    "morph.title": "As the screen moves down, the lemon tea transforms with it.",
    "morph.text":
      "The product evolves from carton identity to glass clarity to chilled refreshment, so the page feels like a real brand site instead of a static mockup.",
    "morph.step1": "Carton",
    "morph.step2": "Tea body",
    "morph.step3": "Cold finish",
    "story.block1Title": "Start with recognition",
    "story.block1Text":
      "The first screen should not explain too much. It should establish memory fast through yellow, black, and tea-amber contrast.",
    "story.block2Title": "Then suggest the taste",
    "story.block2Text":
      "Customers do not fall for technical specs alone. They respond to the taste they can imagine: bright lemon, grounded tea, and a smooth iced finish.",
    "story.block3Title": "Then complete the reason to buy",
    "story.block3Text":
      "Once the visuals, flavor, and lifestyle fit together, the purchase button finally feels convincing. That is how a real customer-facing page works.",
    "value.eyebrow": "Why this tea stays in memory",
    "value.title": "Not the tone of a cheap drink, but the tone of a refined daily choice.",
    "value.card1Tag": "Lemon",
    "value.card1Title": "Clear, never harsh",
    "value.card1Text": "It lifts the tea rather than covering it, giving the first sip a cleaner impression.",
    "value.card2Tag": "Tea base",
    "value.card2Title": "Smooth, with structure",
    "value.card2Text": "The tea remains steady beneath the citrus, making the drink feel more grown and more balanced.",
    "value.card3Tag": "Scene",
    "value.card3Title": "Beautiful in daily life",
    "value.card3Text": "On a desk, in a fridge, at a picnic, or as a small gift, it never feels careless.",
    "flavor.eyebrow": "Flavor story",
    "flavor.title": "Customers may not know tea, but they always know whether they want to drink it.",
    "flavor.text":
      "So this section avoids textbook wording and translates flavor into desire: it looks clear, feels smooth in the mind, and leaves you willing to buy again.",
    "flavor.note1Title": "A bright lemon opening",
    "flavor.note1Text": "It wakes up the palate and feels clean right away.",
    "flavor.note2Title": "A calm black tea middle",
    "flavor.note2Text": "Not sugary, not flat, still anchored by tea character.",
    "flavor.note3Title": "A relaxed iced finish",
    "flavor.note3Text": "Short, crisp, and light enough to finish without effort.",
    "serve.eyebrow": "How it fits life",
    "serve.title": "The real reason people buy is often the moment they can picture drinking it.",
    "serve.card1Tag": "At work",
    "serve.card1Title": "Better than plain water",
    "serve.card1Text": "It has flavor without becoming heavy, and refreshes without breaking your focus.",
    "serve.card2Tag": "When hosting",
    "serve.card2Title": "Looks more composed",
    "serve.card2Text": "It feels more presentable than an ordinary bottled drink and still looks tasteful on the table.",
    "serve.card3Tag": "As a gift",
    "serve.card3Title": "Simple, but considered",
    "serve.card3Text": "It works as a small premium gesture because both the taste and the look stay restrained.",
    "shop.eyebrow": "Shop Lemon Tea",
    "shop.title": "You do not need more information. You need the right information to make buying easier.",
    "shop.text":
      "That is why this section keeps only what helps the customer act: format, quantity, purchase feedback, and a real bag interaction.",
    "shop.productTitle": "Signature Citrus Edition",
    "shop.formatLabel": "Format",
    "shop.formatSingle": "Single",
    "shop.formatTriple": "3-Pack",
    "shop.formatGift": "Gift Box",
    "shop.featureLabel": "Product tags",
    "shop.feature1": "Light profile",
    "shop.feature2": "Ideal over ice",
    "shop.feature3": "Gift-friendly",
    "shop.addToBag": "Add to bag",
    "shop.note": "Best served chilled for the fullest flavor.",
    "closing.eyebrow": "Final screen",
    "closing.title": "End like a real brand site, not like a design exercise.",
    "closing.text":
      "A strong product page is not just large type and a long scroll. It should help customers understand what the tea is, why it is worth buying, and where it belongs in life.",
    "closing.primary": "Buy now",
    "closing.secondary": "Back to top",
    "footer.left": "LEMON TEA brand concept site",
    "footer.right": "Built responsively and ready to deploy as a static website.",
    "status.selected": "selected",
    "status.added": "added to bag",
    "status.default": "Best served chilled for the fullest flavor.",
  },
  ko: {
    "nav.product": "제품",
    "nav.story": "스토리",
    "nav.flavor": "풍미",
    "nav.serve": "마시는 방식",
    "nav.shop": "구매",
    "nav.language": "언어",
    "bag.button": "장바구니",
    "bag.eyebrow": "장바구니",
    "bag.title": "선택한 Lemon Tea",
    "bag.item": "상품",
    "bag.qty": "수량",
    "bag.total": "소계",
    "bag.empty": "장바구니가 비어 있습니다. Lemon Tea를 먼저 담아보세요.",
    "bag.checkout": "결제하기",
    "bag.continue": "계속 보기",
    "hero.eyebrow": "고급스러운 레몬티는 굳이 시끄러울 필요가 없습니다.",
    "hero.title": "평범한 레몬티 한 팩을, 멈춰서 보게 되는 브랜드 경험으로.",
    "hero.text":
      "이 페이지는 단순히 제품을 놓아두는 화면이 아닙니다. 첫인상은 고급스럽고, 스크롤할수록 더 사고 싶어지도록 설계한 고객용 브랜드 페이지입니다.",
    "hero.meta1": "진짜 차의 깊이",
    "hero.meta2": "맑은 레몬감",
    "hero.meta3": "차갑게 마실수록 좋음",
    "hero.primary": "지금 구매",
    "hero.secondary": "이 차 알아보기",
    "hero.tagLeft": "1000ml 데일리 용량",
    "hero.tagRight": "스크롤에 따라 제품이 변합니다",
    "product.wordmark": "LEMON TEA",
    "product.subline": "Bright citrus. Clean tea.",
    "morph.eyebrow": "스크롤 비주얼",
    "morph.title": "화면이 내려가면, 레몬티도 함께 변형됩니다.",
    "morph.text":
      "종이 팩의 인상에서 유리감, 그리고 차갑게 마시는 마무리까지 자연스럽게 바뀌어 실제 브랜드 사이트처럼 보이도록 만들었습니다.",
    "morph.step1": "팩 인상",
    "morph.step2": "차의 전개",
    "morph.step3": "차가운 마무리",
    "story.block1Title": "먼저 기억되게 만들기",
    "story.block1Text":
      "첫 화면은 설명보다 인지가 먼저여야 합니다. 노랑, 검정, 차색 대비로 제품을 빠르게 기억하게 합니다.",
    "story.block2Title": "그 다음 맛을 상상하게 하기",
    "story.block2Text":
      "고객을 움직이는 건 스펙보다도 상상되는 맛입니다. 레몬의 맑음, 차의 깊이, 얼음과 함께 마셨을 때의 부드러움이 보여야 합니다.",
    "story.block3Title": "마지막으로 구매 이유 완성하기",
    "story.block3Text":
      "비주얼과 맛, 사용 장면이 모두 맞아떨어질 때 구매 버튼이 설득력을 갖습니다. 그게 실제 고객용 페이지의 구조입니다.",
    "value.eyebrow": "왜 이 차가 기억에 남는가",
    "value.title": "저렴한 음료의 톤이 아니라, 품질 있는 일상 선택의 톤.",
    "value.card1Tag": "레몬감",
    "value.card1Title": "맑고 날카롭지 않게",
    "value.card1Text": "값싼 향료 같은 산미가 아니라 차 맛을 깨우는 밝은 인상입니다.",
    "value.card2Tag": "차 베이스",
    "value.card2Title": "부드럽고 중심 있게",
    "value.card2Text": "레몬이 전부를 덮지 않고, 차의 구조가 남아 더 성숙하게 느껴집니다.",
    "value.card3Tag": "장면",
    "value.card3Title": "예쁘고, 일상에 잘 스며듦",
    "value.card3Text": "책상 위, 냉장고, 피크닉, 작은 선물 어디에서도 가볍게 보이지 않습니다.",
    "flavor.eyebrow": "풍미 표현",
    "flavor.title": "고객이 차를 몰라도, 마시고 싶은지는 바로 압니다.",
    "flavor.text":
      "그래서 이 구간은 설명보다 욕구를 만듭니다. 맑아 보이고, 부드러울 것 같고, 마신 뒤 다시 사고 싶어져야 합니다.",
    "flavor.note1Title": "첫맛은 레몬의 밝음",
    "flavor.note1Text": "입안을 깨우고, 시작부터 깨끗하게 느껴집니다.",
    "flavor.note2Title": "중간은 홍차의 안정감",
    "flavor.note2Text": "달기만 한 음료가 아니라 차의 존재감이 남습니다.",
    "flavor.note3Title": "끝은 차갑고 느슨한 마무리",
    "flavor.note3Text": "짧고 시원하게 끝나서 부담 없이 한 병을 비우게 됩니다.",
    "serve.eyebrow": "마시는 장면",
    "serve.title": "사람들이 실제로 사는 이유는, 언제 마실지 장면이 그려지기 때문입니다.",
    "serve.card1Tag": "업무 중",
    "serve.card1Title": "지루한 물보다 나은 선택",
    "serve.card1Text": "맛은 있지만 무겁지 않고, 집중을 깨지 않으면서 기분을 바꿉니다.",
    "serve.card2Tag": "모임에서",
    "serve.card2Title": "더 단정해 보임",
    "serve.card2Text": "평범한 병음료보다 테이블 위에서 더 보기 좋고 세련돼 보입니다.",
    "serve.card3Tag": "선물할 때",
    "serve.card3Title": "과하지 않지만 센스 있음",
    "serve.card3Text": "맛과 비주얼이 모두 절제되어 있어 작은 프리미엄 선물로도 자연스럽습니다.",
    "shop.eyebrow": "Lemon Tea 구매",
    "shop.title": "정보는 많을 필요가 없습니다. 사고 싶게 만드는 정보면 충분합니다.",
    "shop.text":
      "그래서 여기에는 실제로 필요한 것만 남겼습니다. 구성, 수량, 구매 피드백, 그리고 진짜 장바구니 상호작용입니다.",
    "shop.productTitle": "Signature Citrus Edition",
    "shop.formatLabel": "구성",
    "shop.formatSingle": "싱글",
    "shop.formatTriple": "3팩",
    "shop.formatGift": "기프트 박스",
    "shop.featureLabel": "제품 태그",
    "shop.feature1": "가벼운 프로필",
    "shop.feature2": "얼음과 잘 맞음",
    "shop.feature3": "선물하기 좋음",
    "shop.addToBag": "장바구니 담기",
    "shop.note": "차갑게 마시면 풍미가 가장 잘 살아납니다.",
    "closing.eyebrow": "마지막 화면",
    "closing.title": "디자인 과제처럼 끝나지 않고, 실제 브랜드 사이트처럼 마무리됩니다.",
    "closing.text":
      "좋은 제품 페이지는 큰 글자와 긴 스크롤만으로 완성되지 않습니다. 이 차가 무엇이고, 왜 살 만하며, 어디에 어울리는지까지 전달해야 합니다.",
    "closing.primary": "지금 구매",
    "closing.secondary": "맨 위로",
    "footer.left": "LEMON TEA 브랜드 콘셉트 사이트",
    "footer.right": "모바일 대응 완료, 정적 사이트로 바로 배포할 수 있습니다.",
    "status.selected": "선택됨",
    "status.added": "장바구니에 추가됨",
    "status.default": "차갑게 마시면 풍미가 가장 잘 살아납니다.",
  },
  ja: {
    "nav.product": "商品",
    "nav.story": "ストーリー",
    "nav.flavor": "味わい",
    "nav.serve": "飲み方",
    "nav.shop": "購入",
    "nav.language": "言語",
    "bag.button": "バッグ",
    "bag.eyebrow": "ショッピングバッグ",
    "bag.title": "あなたの Lemon Tea 選択",
    "bag.item": "商品",
    "bag.qty": "数量",
    "bag.total": "小計",
    "bag.empty": "バッグはまだ空です。まずは Lemon Tea を追加してください。",
    "bag.checkout": "チェックアウト",
    "bag.continue": "閲覧を続ける",
    "hero.eyebrow": "上質なレモンティーは、騒がなくていい。",
    "hero.title": "日常のレモンティーを、立ち止まって見たくなるブランド体験へ。",
    "hero.text":
      "これはただ商品を置いただけのページではありません。最初の一目で上質に感じられ、スクロールするほど欲しくなるように設計した顧客向けブランドページです。",
    "hero.meta1": "本物の紅茶感",
    "hero.meta2": "明るいレモン感",
    "hero.meta3": "冷やすとより美味しい",
    "hero.primary": "今すぐ購入",
    "hero.secondary": "このお茶を知る",
    "hero.tagLeft": "1000ml の日常サイズ",
    "hero.tagRight": "スクロールに合わせて商品が変化します",
    "product.wordmark": "LEMON TEA",
    "product.subline": "Bright citrus. Clean tea.",
    "morph.eyebrow": "スクロールビジュアル",
    "morph.title": "画面が下に進むと、レモンティーも一緒に変形する。",
    "morph.text":
      "紙パックらしさから、グラスの透明感、そして冷たい余韻へ。静止した見せ方ではなく、スクロールに合わせて少しずつ変化します。",
    "morph.step1": "紙パック",
    "morph.step2": "紅茶の広がり",
    "morph.step3": "冷たい仕上がり",
    "story.block1Title": "まずは記憶に残す",
    "story.block1Text":
      "最初の画面では説明しすぎません。黄色、黒、茶色のコントラストで、すぐに商品らしさを印象づけます。",
    "story.block2Title": "次に味を想像させる",
    "story.block2Text":
      "人を動かすのはスペックではなく、頭の中に浮かぶ味です。レモンの明るさ、紅茶の厚み、氷を入れたときの飲みやすさを見せます。",
    "story.block3Title": "最後に買う理由を整える",
    "story.block3Text":
      "ビジュアル、味、使う場面が揃ったとき、購入ボタンはようやく説得力を持ちます。これが本当に顧客向けのページ構成です。",
    "value.eyebrow": "なぜこのお茶が記憶に残るのか",
    "value.title": "安い飲み物の語り方ではなく、質のある日常選択の語り方で。",
    "value.card1Tag": "レモン感",
    "value.card1Title": "明るく、きつすぎない",
    "value.card1Text": "安っぽい酸味ではなく、紅茶を引き立てるちょうどいい明るさです。",
    "value.card2Tag": "茶の土台",
    "value.card2Title": "なめらかで、芯がある",
    "value.card2Text": "レモンがすべてを奪わず、紅茶の輪郭が残るから大人っぽく感じられます。",
    "value.card3Tag": "シーン",
    "value.card3Title": "きれいで、日常に溶け込む",
    "value.card3Text": "デスク、冷蔵庫、ピクニック、小さなギフト。どこでも雑に見えません。",
    "flavor.eyebrow": "味わいの見せ方",
    "flavor.title": "お茶に詳しくなくても、“飲みたいかどうか”はすぐに伝わる。",
    "flavor.text":
      "だからここでは教科書のような説明をしません。見た目が澄んでいて、飲み口がやさしそうで、また買いたくなることが大切です。",
    "flavor.note1Title": "最初はレモンの明るさ",
    "flavor.note1Text": "気分を起こし、ひと口目をすっきりと見せます。",
    "flavor.note2Title": "中盤は紅茶の安定感",
    "flavor.note2Text": "ただ甘いだけではなく、紅茶らしさがしっかり残ります。",
    "flavor.note3Title": "最後は冷たい余韻",
    "flavor.note3Text": "短く軽やかに終わり、気づけば一本飲みきってしまう飲みやすさです。",
    "serve.eyebrow": "飲むシーン",
    "serve.title": "人が本当に買う理由は、“いつ飲むか”が想像できるからです。",
    "serve.card1Tag": "仕事中",
    "serve.card1Title": "ただの水より気分が上がる",
    "serve.card1Text": "味はあるのに重くなく、集中を崩さずに気分を切り替えられます。",
    "serve.card2Tag": "人を招く時",
    "serve.card2Title": "見た目がきちんとしている",
    "serve.card2Text": "普通のボトル飲料よりもテーブル上で上品に見えます。",
    "serve.card3Tag": "贈る時",
    "serve.card3Title": "大げさではないのに気が利く",
    "serve.card3Text": "味も見た目も控えめに整っているから、小さな上質ギフトとして成立します。",
    "shop.eyebrow": "Lemon Tea を購入",
    "shop.title": "情報は多くなくていい。買いたくなる情報であればいい。",
    "shop.text":
      "そのためここには、本当に必要なものだけを残しました。仕様、数量、購入フィードバック、そして実際に使えるバッグです。",
    "shop.productTitle": "Signature Citrus Edition",
    "shop.formatLabel": "仕様",
    "shop.formatSingle": "単品",
    "shop.formatTriple": "3本セット",
    "shop.formatGift": "ギフトボックス",
    "shop.featureLabel": "商品タグ",
    "shop.feature1": "軽やかな飲み口",
    "shop.feature2": "氷と相性が良い",
    "shop.feature3": "贈りやすい",
    "shop.addToBag": "バッグに追加",
    "shop.note": "冷やして飲むと風味がいちばんきれいに出ます。",
    "closing.eyebrow": "最後の画面",
    "closing.title": "デザイン課題の終わり方ではなく、本物のブランドサイトの終わり方で。",
    "closing.text":
      "良い商品ページは、大きな文字や長いスクロールだけでは完成しません。このお茶が何で、なぜ買う価値があり、どんな生活に似合うかまで伝える必要があります。",
    "closing.primary": "今すぐ購入",
    "closing.secondary": "トップへ戻る",
    "footer.left": "LEMON TEA ブランドコンセプトサイト",
    "footer.right": "モバイル対応済み。静的サイトとしてそのまま配布できます。",
    "status.selected": "を選択",
    "status.added": "をバッグに追加しました",
    "status.default": "冷やして飲むと風味がいちばんきれいに出ます。",
  },
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));
if (!("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations.zh[key] || key;
}

function formatCurrency(value) {
  return `${currencyMap[currentLanguage] || "¥"}${value}`;
}

function getFormatLabel(format) {
  if (format === "triple") return t("shop.formatTriple");
  if (format === "gift") return t("shop.formatGift");
  return t("shop.formatSingle");
}

function setPurchaseNote(message) {
  if (purchaseNote) {
    purchaseNote.textContent = message;
  }
}

function updatePurchaseUI() {
  if (qtyValue) qtyValue.textContent = String(quantity);
  if (priceDisplay) priceDisplay.textContent = formatCurrency(selectedPrice * quantity);
}

function updateBagUI() {
  if (bagCount) bagCount.textContent = String(bagItems);
  if (bagFormat) bagFormat.textContent = getFormatLabel(selectedFormat);
  if (bagQty) bagQty.textContent = String(bagItems);
  if (bagTotal) bagTotal.textContent = formatCurrency(selectedPrice * bagItems);
  if (bagEmpty) bagEmpty.hidden = bagItems > 0;
  if (bagCheckout) bagCheckout.disabled = bagItems === 0;
}

function applyTranslations() {
  root.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (key) node.textContent = t(key);
  });
  updatePurchaseUI();
  updateBagUI();
  setPurchaseNote(t("status.default"));
}

function openBag() {
  if (!bagDrawer || !bagBackdrop) return;
  bagDrawer.classList.add("open");
  bagDrawer.setAttribute("aria-hidden", "false");
  bagBackdrop.hidden = false;
}

function closeBag() {
  if (!bagDrawer || !bagBackdrop) return;
  bagDrawer.classList.remove("open");
  bagDrawer.setAttribute("aria-hidden", "true");
  bagBackdrop.hidden = true;
}

function updateMorphScene() {
  if (!storySection) return;
  const rect = storySection.getBoundingClientRect();
  const total = rect.height - window.innerHeight;
  if (total <= 0) return;

  const progress = Math.min(Math.max(-rect.top / total, 0), 1);
  root.style.setProperty("--morph-progress", progress.toFixed(3));

  const index = Math.min(storyBlocks.length - 1, Math.floor(progress * storyBlocks.length));
  storyBlocks.forEach((block, blockIndex) => {
    block.classList.toggle("active", blockIndex === index);
  });
}

function updateFloatingMotion() {
  const hero = document.querySelector(".hero-stage");
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  const viewport = window.innerHeight || 1;
  const offset = (rect.top + rect.height / 2 - viewport / 2) / viewport;
  hero.style.transform = `translateY(${offset * -12}px)`;
}

formatButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formatButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    selectedFormat = button.dataset.format || "single";
    selectedPrice = Number(button.dataset.price || 12);
    updatePurchaseUI();
    updateBagUI();
    setPurchaseNote(`${getFormatLabel(selectedFormat)} ${t("status.selected")}`);
  });
});

document.querySelectorAll("[data-qty-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-qty-action");
    quantity = action === "increase" ? quantity + 1 : Math.max(1, quantity - 1);
    updatePurchaseUI();
  });
});

if (addToBagButton) {
  addToBagButton.addEventListener("click", () => {
    bagItems += quantity;
    updateBagUI();
    setPurchaseNote(`${getFormatLabel(selectedFormat)} ${t("status.added")}`);
    addToBagButton.textContent =
      currentLanguage === "zh"
        ? "已加入"
        : currentLanguage === "en"
          ? "Added"
          : currentLanguage === "ko"
            ? "추가됨"
            : "追加済み";
    openBag();
    window.setTimeout(() => {
      addToBagButton.textContent = t("shop.addToBag");
    }, 1000);
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    currentLanguage = event.target.value;
    applyTranslations();
  });
}

if (bagToggle) {
  bagToggle.addEventListener("click", openBag);
}

bagCloseButtons.forEach((button) => button.addEventListener("click", closeBag));
bagBackdrop?.addEventListener("click", closeBag);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeBag();
});

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selector = button.getAttribute("data-scroll-target");
    if (!selector) return;
    const target = document.querySelector(selector);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function onScroll() {
  updateMorphScene();
  updateFloatingMotion();
}

applyTranslations();
updatePurchaseUI();
updateBagUI();
onScroll();

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
