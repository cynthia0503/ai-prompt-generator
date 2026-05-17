const FALLBACK_GALLERY = [
  {
    id: "clean-lp-hero-01",
    title: "Clean LP Hero",
    image: "images/sample/clean-lp-hero-01.svg",
    tags: ["LP", "商品", "コスメ", "清潔感", "高級感", "余白"],
    preset: {
      composition: "centered product composition with generous whitespace for copy placement",
      lighting: "soft natural morning light, low contrast, gentle shadows",
      colorPalette: "white, pale blue, soft gray",
      mood: "clean, premium, trustworthy, calm",
      texture: "smooth ceramic surface, subtle glossy reflection",
      style: "Japanese skincare LP hero advertising visual",
      negative: "busy background, harsh shadows, clutter, text, logo, watermark"
    },
    presetJa: {
      composition: "コピーを配置しやすい余白を広く取った、商品中央配置の構図",
      lighting: "柔らかい朝の自然光、低コントラスト、やさしい影",
      colorPalette: "白、淡いブルー、ソフトグレー",
      mood: "清潔感、高級感、信頼感、落ち着き",
      texture: "なめらかなセラミック面、控えめな光沢反射",
      style: "日本向けスキンケアLPのヒーロー広告ビジュアル",
      negative: "散らかった背景、強い影、過度な装飾、文字、ロゴ、透かし"
    },
    recommendedSettings: {
      aspectRatio: "16:9",
      referenceUse: "Use this image as a style reference if the generation tool supports reference images.",
      variationAdvice: "Keep the same seed and change only the subject for consistent series generation."
    }
  },
  {
    id: "pastel-translucent-flare-01",
    title: "パステル透明感フレア",
    image: "images/sample/pastel-translucent-flare-01.jpg",
    tags: ["商品", "コスメ", "パステル", "透明感", "フレア", "高級感"],
    preset: {
      composition: "soft close-up product composition with layered translucent objects and gentle diagonal movement",
      lighting: "bright diffused light with pastel lens flares, pearlescent highlights, soft glow, low contrast",
      colorPalette: "milky white, pale lavender, powder blue, soft pink, iridescent pastel tones",
      mood: "transparent, airy, delicate, dreamy, premium, clean",
      texture: "frosted glass, translucent liquid, pearlescent shimmer, soft prism reflection, glossy wet highlights",
      style: "delicate beauty advertising visual with pastel flare lighting and clear translucent atmosphere",
      negative: "heavy shadows, dark background, strong contrast, muddy colors, hard edges, clutter, text, logo, watermark"
    },
    presetJa: {
      composition: "透明感のあるオブジェクトを重ねた、やわらかな接写構図と穏やかな斜めの動き",
      lighting: "明るく拡散した光、パステル調のフレア、真珠のようなハイライト、柔らかな発光感、低コントラスト",
      colorPalette: "ミルキーホワイト、淡いラベンダー、パウダーブルー、ソフトピンク、虹色を含むパステルトーン",
      mood: "透明感、軽やか、繊細、夢のよう、高級感、清潔感",
      texture: "すりガラス、透明感のある液体、パールのきらめき、プリズム反射、みずみずしい光沢",
      style: "パステルのフレア光と透明感を活かした、繊細なビューティー広告ビジュアル",
      negative: "重い影、暗い背景、強すぎるコントラスト、濁った色、硬い輪郭、散らかり、文字、ロゴ、透かし"
    },
    recommendedSettings: {
      aspectRatio: "4:5",
      referenceUse: "Use this image as a color, flare, and translucency reference if the generation tool supports reference images.",
      variationAdvice: "Keep pastel flare lighting and translucent texture fixed while changing the subject for a consistent beauty-style series."
    }
  },
  {
    id: "puffy-3d-text-texture-01",
    title: "ぷっくり3D文字質感",
    image: "images/sample/txt-3d.png",
    tags: ["3D文字", "文字", "POP", "立体感", "光沢", "バナー"],
    preset: {
      composition: "large centered typographic composition with thick rounded 3D lettering and clear readable character shapes",
      lighting: "soft studio lighting with bright specular highlights, subtle rim glow, and gentle cast shadows that enhance depth",
      colorPalette: "color is flexible and should follow the user's chosen palette; do not lock to the reference image color",
      mood: "playful, bold, glossy, dimensional, eye-catching",
      texture: "inflated puffy lettering, smooth plastic or gel-like surface, glossy highlights, rounded bevels, soft extrusion depth",
      style: "3D typographic visual focused on tactile dimensional text texture rather than a specific color scheme",
      negative: "flat text, thin strokes, hard angular bevels, rough texture, unreadable letters, broken characters, unwanted extra words, watermark"
    },
    presetJa: {
      composition: "読みやすい文字形を保った、大きめ中央配置の太く丸い3Dタイポグラフィ構図",
      lighting: "奥行きを強調する柔らかなスタジオ光、明るい鏡面ハイライト、控えめなリム光、やさしい落ち影",
      colorPalette: "色はユーザー指定の配色に合わせる。参考画像の色には固定しない",
      mood: "遊び心、力強さ、光沢感、立体感、目を引く印象",
      texture: "ぷっくり膨らんだ文字、なめらかなプラスチックやジェルのような表面、光沢ハイライト、丸いベベル、柔らかな押し出しの奥行き",
      style: "特定の色ではなく、触れられそうな立体文字の質感にフォーカスした3Dタイポグラフィビジュアル",
      negative: "平面的な文字、細すぎる線、硬い角張ったベベル、ざらついた質感、読めない文字、崩れた字形、不要な追加文字、透かし"
    },
    recommendedSettings: {
      aspectRatio: "16:9",
      referenceUse: "Use this image as a 3D text material and depth reference only; choose colors separately in the prompt.",
      variationAdvice: "Keep rounded puffy extrusion, glossy highlights, and readable letterforms fixed while changing the text content and color palette."
    }
  },
  {
    id: "delicate-girly-line-illustration-01",
    title: "繊細ガーリー線画",
    image: "images/sample/person-illustration.png",
    tags: ["イラスト", "人物", "清潔感", "パステル", "女性", "美容"],
    preset: {
      composition: "elegant character-focused illustration with a clean bust-up or half-body composition and soft negative space",
      lighting: "flat gentle illustration lighting with subtle blush-like shading and no harsh shadows",
      colorPalette: "soft pastel palette, pale pinks, warm skin tones, light beige, muted brown linework, low saturation",
      mood: "delicate, feminine, graceful, romantic, clean, beauty-oriented",
      texture: "fine hand-drawn linework, thin brown pencil-like strokes, soft watercolor-style coloring, translucent blush, lightly textured paper feeling",
      style: "Japanese girly beauty illustration with delicate manga-inspired line art and airy pastel coloring",
      negative: "thick black outlines, harsh cel shading, heavy contrast, realistic photo texture, messy brush strokes, over-saturated colors, distorted face, extra fingers, text, watermark"
    },
    presetJa: {
      composition: "人物を上品に見せる、バストアップまたは半身中心の清潔な構図とやわらかな余白",
      lighting: "強い影を使わない、淡いチークのような陰影を中心にした穏やかなイラスト光",
      colorPalette: "淡いパステル、薄いピンク、温かい肌色、ライトベージュ、くすんだブラウンの線、低彩度",
      mood: "繊細、フェミニン、上品、ロマンチック、清潔感、美容感",
      texture: "細い手描き線、ブラウンの鉛筆風ライン、淡い水彩風の塗り、透けるようなチーク表現、軽い紙の質感",
      style: "繊細な少女漫画風の線画と、空気感のある淡いパステル塗りを活かした日本向け美容イラスト",
      negative: "太い黒線、強いアニメ塗り、強すぎるコントラスト、写真的な質感、雑な筆跡、彩度が高すぎる色、崩れた顔、余分な指、文字、透かし"
    },
    recommendedSettings: {
      aspectRatio: "4:5",
      referenceUse: "Use this image as a linework and coloring reference for delicate illustration style, not as an exact character reference.",
      variationAdvice: "Keep fine brown linework, soft pastel coloring, and gentle watercolor-like shading consistent while changing the person, pose, or theme."
    }
  },
  {
    id: "airy-bubble-pop-photo-01",
    title: "エアリーバブルPOP",
    image: "images/sample/sample-1.png",
    tags: ["写真", "透明感", "POP", "人物", "バナー", "水色"],
    preset: {
      composition: "playful editorial layout with a person framed by large translucent bubbles, floating type-like elements, and generous airy spacing",
      lighting: "bright diffused studio light with soft reflections, pale blue glow, and transparent bubble highlights",
      colorPalette: "pale blue, white, soft cyan, airy cool tones",
      mood: "fresh, playful, clean, buoyant, transparent",
      texture: "soap bubble transparency, glossy reflections, light refraction, soft plastic-like floating elements",
      style: "Japanese pop editorial photo visual with airy bubbles and translucent freshness",
      negative: "dark heavy mood, muddy colors, hard shadows, cluttered layout, overly realistic product packshot, unreadable tiny text, watermark"
    },
    presetJa: {
      composition: "人物を大きな透明バブルで囲み、浮遊感のある文字要素と広い余白を使ったポップなエディトリアル構図",
      lighting: "明るく拡散したスタジオ光、柔らかな反射、淡い水色の発光感、透明な泡のハイライト",
      colorPalette: "淡い水色、白、ソフトシアン、軽やかな寒色トーン",
      mood: "フレッシュ、遊び心、清潔感、浮遊感、透明感",
      texture: "シャボン玉の透明感、光沢反射、光の屈折、柔らかい樹脂のような浮遊パーツ",
      style: "透明感のある泡と軽やかな水色トーンを活かした、日本向けPOPエディトリアル写真ビジュアル",
      negative: "暗く重い雰囲気、濁った色、強い影、散らかったレイアウト、過度な商品写真感、読めない小さな文字、透かし"
    },
    recommendedSettings: {
      aspectRatio: "4:5",
      referenceUse: "Use this image as a bubble transparency and playful airy layout reference.",
      variationAdvice: "Keep the pale blue freshness, floating bubble texture, and playful editorial spacing consistent while changing the subject."
    }
  },
  {
    id: "soft-botanical-pastel-pattern-01",
    title: "淡色ボタニカル背景",
    image: "images/sample/sample-2.png",
    tags: ["イラスト", "背景", "パステル", "ナチュラル", "花", "余白"],
    preset: {
      composition: "seamless botanical background pattern with scattered delicate flowers, thin stems, and balanced open spacing",
      lighting: "soft matte lighting with gentle depth and no harsh shadows",
      colorPalette: "warm off-white, dusty pink, muted lavender, sage green, soft beige",
      mood: "gentle, natural, romantic, calm, delicate",
      texture: "soft watercolor petals, lightly raised floral details, fine botanical linework, paper-like matte surface",
      style: "delicate pastel botanical illustration background suitable for LP sections, packaging, and feminine web visuals",
      negative: "strong contrast, saturated neon color, dense clutter, hard vector edges, photorealistic flowers, dark background, text, watermark"
    },
    presetJa: {
      composition: "繊細な花、細い茎、ほどよい余白を散らしたシームレス風のボタニカル背景構図",
      lighting: "強い影を使わない、柔らかくマットな光と控えめな奥行き",
      colorPalette: "温かいオフホワイト、くすみピンク、淡いラベンダー、セージグリーン、ソフトベージュ",
      mood: "やさしい、ナチュラル、ロマンチック、穏やか、繊細",
      texture: "淡い水彩の花びら、少し浮き上がった花のディテール、細い植物線画、紙のようなマット感",
      style: "LP背景、パッケージ、女性向けWeb素材に使いやすい淡色ボタニカルイラスト背景",
      negative: "強すぎるコントラスト、鮮やかすぎるネオン色、密集しすぎた装飾、硬いベクター感、写実的すぎる花、暗い背景、文字、透かし"
    },
    recommendedSettings: {
      aspectRatio: "9:16",
      referenceUse: "Use this image as a pastel botanical background and delicate floral texture reference.",
      variationAdvice: "Keep the soft botanical spacing, muted pastel palette, and paper-like floral texture consistent across background variations."
    }
  },
  {
    id: "watercolor-blue-bird-elements-01",
    title: "水彩ブルーバード素材",
    image: "images/sample/sample-3.png",
    tags: ["イラスト", "ナチュラル", "清潔感", "水彩", "素材", "動物"],
    preset: {
      composition: "small standalone illustration elements arranged with clean spacing, suitable as decorative assets or sticker-like motifs",
      lighting: "flat soft illustration lighting with gentle watercolor gradients and no harsh shadows",
      colorPalette: "dusty blue, soft teal, cream, warm beige, muted coral accents",
      mood: "gentle, friendly, natural, handmade, clean",
      texture: "soft watercolor wash, visible brush grain, dry-paper texture, delicate feather strokes",
      style: "hand-painted watercolor animal illustration elements with clean commercial asset usability",
      negative: "photorealistic bird, hard vector outline, saturated primary colors, heavy black linework, cluttered background, text, watermark"
    },
    presetJa: {
      composition: "装飾素材やステッカー風モチーフとして使いやすい、余白を持った小さな単体イラスト配置",
      lighting: "強い影のないフラットで柔らかなイラスト光、水彩の穏やかなグラデーション",
      colorPalette: "くすみブルー、ソフトティール、クリーム、温かいベージュ、控えめなコーラル差し色",
      mood: "やさしい、親しみやすい、ナチュラル、手描き感、清潔感",
      texture: "柔らかな水彩のにじみ、筆の粒感、乾いた紙の質感、繊細な羽のタッチ",
      style: "商用素材として使いやすい、手描き水彩の動物イラストパーツ",
      negative: "写実的な鳥、硬いベクター線、彩度の高い原色、太い黒線、散らかった背景、文字、透かし"
    },
    recommendedSettings: {
      aspectRatio: "1:1",
      referenceUse: "Use this image as a watercolor brush and small decorative element reference.",
      variationAdvice: "Keep the watercolor paper texture, dusty blue palette, and friendly rounded animal shapes consistent when changing motifs."
    }
  },
  {
    id: "clear-gel-glow-photo-01",
    title: "透明ジェル光沢",
    image: "images/sample/sample-4.png",
    tags: ["写真", "透明感", "光沢", "コスメ", "商品", "高級感"],
    preset: {
      composition: "minimal close-up composition with translucent gel spheres or glossy liquid forms placed on a clean gradient background",
      lighting: "bright cosmetic studio lighting with sharp glossy highlights, soft refraction, and luminous edge glow",
      colorPalette: "clear blue, pale pink, white highlights, cool luxury gradient",
      mood: "clean, premium, fresh, transparent, luminous",
      texture: "clear gel, glossy liquid surface, glass-like refraction, smooth wet highlights, skincare serum texture",
      style: "premium cosmetic macro photo visual focused on transparent gel gloss and luminous freshness",
      negative: "muddy liquid, dull matte surface, cluttered props, harsh dark shadows, rough texture, dirty background, unreadable text, watermark"
    },
    presetJa: {
      composition: "透明なジェル球や光沢のある液体形状を、清潔なグラデーション背景に置いたミニマルな接写構図",
      lighting: "鋭い光沢ハイライト、柔らかな屈折、発光するエッジを持つ明るいコスメ系スタジオ光",
      colorPalette: "クリアブルー、淡いピンク、白いハイライト、クールで高級感のあるグラデーション",
      mood: "清潔感、高級感、フレッシュ、透明感、発光感",
      texture: "透明ジェル、光沢のある液体表面、ガラスのような屈折、なめらかな濡れたハイライト、美容液の質感",
      style: "透明ジェルの光沢とみずみずしい発光感にフォーカスした、高級コスメ向けマクロ写真ビジュアル",
      negative: "濁った液体、鈍いマット面、散らかった小物、暗く強い影、粗い質感、汚れた背景、読めない文字、透かし"
    },
    recommendedSettings: {
      aspectRatio: "4:3",
      referenceUse: "Use this image as a transparent gel gloss and cosmetic macro lighting reference.",
      variationAdvice: "Keep the glossy gel refraction, clean gradient background, and premium cosmetic lighting consistent while changing the product or shape."
    }
  },
  {
    id: "saas-ad-01",
    title: "Trust SaaS Ad",
    image: "images/sample/saas-ad-01.svg",
    tags: ["BtoB", "SaaS", "UI", "Web", "信頼感", "背景"],
    preset: {
      composition: "clean dashboard-inspired composition with clear focal area and organized spacing",
      lighting: "even studio lighting, soft highlights, no dramatic shadows",
      colorPalette: "deep green, white, slate gray, restrained accent color",
      mood: "reliable, modern, practical, professional",
      texture: "smooth digital surfaces, subtle glass reflection, crisp edges",
      style: "Japanese BtoB SaaS advertising visual for web and LP sections",
      negative: "chaotic UI, unreadable text, fake logo, overly futuristic neon, clutter"
    },
    presetJa: {
      composition: "焦点が明確で余白が整理された、ダッシュボードを想起させるクリーンな構図",
      lighting: "均一なスタジオライティング、柔らかいハイライト、強い影なし",
      colorPalette: "深いグリーン、白、スレートグレー、控えめなアクセントカラー",
      mood: "信頼感、現代的、実用的、プロフェッショナル",
      texture: "なめらかなデジタル面、控えめなガラス反射、シャープなエッジ",
      style: "日本向けBtoB SaaSのWeb・LP広告ビジュアル",
      negative: "混沌としたUI、読めない文字、架空ロゴ、過度に未来的なネオン、散らかり"
    },
    recommendedSettings: {
      aspectRatio: "16:9",
      referenceUse: "Use this image as a layout and mood reference if supported.",
      variationAdvice: "Keep the layout and palette stable when generating a campaign series."
    }
  },
  {
    id: "natural-wellness-01",
    title: "Natural Wellness",
    image: "images/sample/natural-wellness-01.svg",
    tags: ["記事LP", "商品", "ウェルネス", "ナチュラル", "背景"],
    preset: {
      composition: "soft lifestyle composition with natural props and moderate whitespace",
      lighting: "warm diffused daylight, gentle highlights, natural shadows",
      colorPalette: "warm white, sage green, light wood, muted beige accents",
      mood: "healthy, approachable, natural, relaxed",
      texture: "paper, linen, wood, matte packaging, organic surface details",
      style: "Japanese wellness article LP visual with natural editorial feeling",
      negative: "medical fear appeal, heavy contrast, artificial neon color, messy table, text"
    },
    presetJa: {
      composition: "自然な小物と適度な余白を使った、柔らかいライフスタイル構図",
      lighting: "暖かく拡散した日中の自然光、やさしいハイライト、自然な影",
      colorPalette: "暖かい白、セージグリーン、明るい木目、控えめなベージュ",
      mood: "健康的、親しみやすい、自然体、リラックス",
      texture: "紙、リネン、木、マットなパッケージ、有機的な表面感",
      style: "自然なエディトリアル感のある日本向けウェルネス記事LPビジュアル",
      negative: "医療的な恐怖訴求、強すぎるコントラスト、人工的なネオン色、散らかったテーブル、文字"
    },
    recommendedSettings: {
      aspectRatio: "4:5",
      referenceUse: "Use this image as a tone and color reference if supported.",
      variationAdvice: "Use the same palette for article thumbnails and supporting LP images."
    }
  }
];

const state = {
  gallery: FALLBACK_GALLERY,
  selectedPresetId: FALLBACK_GALLERY[0].id,
  selectedTags: new Set()
};

const MAX_SELECTED_TAGS = 3;

const TAG_GROUPS = [
  {
    label: "表現形式",
    tags: ["写真", "イラスト", "コラージュ", "UI", "3D文字"]
  },
  {
    label: "雰囲気・質感",
    tags: ["透明感", "高級感", "POP", "清潔感", "パステル", "フレア", "ナチュラル", "信頼感", "余白", "立体感", "光沢", "フェミニン"]
  },
  {
    label: "用途・構図",
    tags: ["背景", "人物", "女性", "商品", "文字", "バナー", "LP", "LP素材", "記事LP", "Web"]
  }
];

const els = {
  form: document.querySelector("#promptForm"),
  galleryGrid: document.querySelector("#galleryGrid"),
  tagFilter: document.querySelector("#tagFilter"),
  tagSummary: document.querySelector("#tagSummary"),
  clearTagsButton: document.querySelector("#clearTagsButton"),
  galleryStatus: document.querySelector("#galleryStatus"),
  selectedPresetLabel: document.querySelector("#selectedPresetLabel"),
  toast: document.querySelector("#toast"),
  clearButton: document.querySelector("#clearButton"),
  englishOutput: document.querySelector("#englishOutput"),
  japaneseOutput: document.querySelector("#japaneseOutput"),
  negativeOutput: document.querySelector("#negativeOutput"),
  settingsOutput: document.querySelector("#settingsOutput")
};

const fieldIds = [
  "usage",
  "subject",
  "scene",
  "composition",
  "tone",
  "colors",
  "stylePriority",
  "mustInclude",
  "avoid",
  "ratio",
  "notes"
];

function getFieldValues() {
  return Object.fromEntries(
    fieldIds.map((id) => [id, document.querySelector(`#${id}`).value.trim()])
  );
}

function compactList(items) {
  return items.filter(Boolean).join(", ");
}

function sentence(value, fallback) {
  return value || fallback;
}

const ENGLISH_INPUT_REPLACEMENTS = [
  ["花柄のワンピースを着用している若い日本女性", "a young Japanese woman wearing a floral dress"],
  ["若い日本女性", "a young Japanese woman"],
  ["日本女性", "Japanese woman"],
  ["花柄のワンピース", "floral dress"],
  ["ワンピース", "dress"],
  ["青空", "blue sky"],
  ["花畑", "flower field"],
  ["細い道", "narrow path"],
  ["歩いている", "walking"],
  ["笑顔", "smiling expression"],
  ["カメラ目線", "looking at the camera"],
  ["風が髪を吹いて", "hair gently blowing in the wind"],
  ["髪", "hair"],
  ["花びら", "flower petals"],
  ["舞い", "floating"],
  ["淡いピンク", "pale pink"],
  ["淡いパープル", "pale purple"],
  ["淡い春の配色", "soft spring color palette"],
  ["春", "spring"],
  ["透明感", "translucent clarity"],
  ["パステル", "pastel"],
  ["フレア", "flare"],
  ["薄ら", "subtle"],
  ["人物", "person"],
  ["左寄り", "left-aligned"],
  ["左", "left side"],
  ["右", "right side"],
  ["余白", "negative space"],
  ["コピー", "copy text"],
  ["入れる", "place"],
  ["可愛", "cute"],
  ["可愛い", "cute"],
  ["女性", "woman"],
  ["表情", "facial expression"],
  ["はっきり見える", "clearly visible"],
  ["手描き風", "hand-drawn style"],
  ["イラスト", "illustration"],
  ["筆触", "brush touch"],
  ["上色方式", "coloring method"],
  ["線画", "line art"],
  ["構図", "composition"],
  ["質感", "texture"],
  ["背景", "background"],
  ["文字", "text"],
  ["ロゴ", "logo"],
  ["透かし", "watermark"],
  ["手", "hands"],
  ["散らかった背景", "cluttered background"],
  ["高級感", "premium feeling"],
  ["清潔感", "clean feeling"],
  ["信頼感", "trustworthy feeling"],
  ["人物は", "the person is "],
  ["テキスト", "text"],
  ["を入れてください", " should be included"],
  ["「", "\""],
  ["」", "\""],
  ["、", ", "],
  ["。", ". "],
  ["\n", " "]
];

function translateInputToEnglish(value) {
  if (!value) return "";
  let translated = value;
  ENGLISH_INPUT_REPLACEMENTS.forEach(([from, to]) => {
    translated = translated.split(from).join(to);
  });
  return translated
    .replace(/\s+/g, " ")
    .replace(/\s+,/g, ",")
    .replace(/,\s*,/g, ",")
    .trim();
}

function getSelectedPreset() {
  return state.gallery.find((item) => item.id === state.selectedPresetId) || state.gallery[0];
}

const STYLE_PRIORITY_COPY = {
  balanced: {
    en: "Apply the selected reference as an overall style direction, while keeping the user's subject and scene requirements dominant.",
    ja: "選択した参考プリセットを全体のスタイル方向として反映しつつ、主体と場景の指定を優先する。",
    negative: ""
  },
  "linework-coloring": {
    en: "Prioritize the reference's expression method, linework, brush touch, and coloring style. Keep the output clearly illustrated and hand-drawn; do not drift into photorealistic or semi-realistic photo style.",
    ja: "参考の表現形式、線の筆触、ブラシ感、上色方式を最優先する。写真風や半写実ではなく、明確に手描きイラストとして仕上げる。",
    negative: "photorealistic, realistic photo, semi-realistic portrait, live action, cinematic photo, realistic skin texture, glossy skin, 3D render"
  },
  "light-color-only": {
    en: "Use only the reference's color mood and lighting atmosphere. Do not import its subject, material, composition, or product-like details.",
    ja: "参考からは色味と光の雰囲気だけを使う。被写体、素材感、構図、商品写真的な要素は取り込まない。",
    negative: "unwanted reference subject, product photo look, glass material unless requested, liquid texture unless requested"
  },
  "texture-only": {
    en: "Use only the reference's tactile texture and surface feeling. Keep the user's subject, scene, composition, and color direction dominant.",
    ja: "参考からは触感や表面の質感だけを使う。主体、場景、構図、色味はユーザー指定を優先する。",
    negative: "unwanted reference subject, copied composition, copied color palette"
  },
  "composition-only": {
    en: "Use only the reference's layout and composition logic. Do not import its color palette, material texture, subject, or rendering style.",
    ja: "参考からはレイアウトと構図の考え方だけを使う。色味、素材感、被写体、描画スタイルは取り込まない。",
    negative: "copied color palette, copied material texture, unwanted reference subject"
  }
};

function getStylePriorityCopy(value) {
  return STYLE_PRIORITY_COPY[value] || STYLE_PRIORITY_COPY.balanced;
}

function buildPrompts() {
  const values = getFieldValues();
  const preset = getSelectedPreset();
  const p = preset.preset;
  const pJa = preset.presetJa || preset.preset;
  const stylePriority = getStylePriorityCopy(values.stylePriority);

  const subjectEn = sentence(translateInputToEnglish(values.subject), "the main subject");
  const sceneEn = sentence(translateInputToEnglish(values.scene), "a production-ready visual scene");
  const compositionEn = compactList([translateInputToEnglish(values.composition), p.composition]);
  const colorsEn = compactList([translateInputToEnglish(values.colors), p.colorPalette]);
  const moodEn = compactList([translateInputToEnglish(values.tone), p.mood]);
  const mustIncludeEn = sentence(translateInputToEnglish(values.mustInclude), "clear subject visibility and enough whitespace for design use");
  const usageNoteEn = sentence(translateInputToEnglish(values.notes), "ready to use in LP, advertising, web, or video asset production");

  const english = [
    `Purpose: Create a ${values.usage}.`,
    `Subject: ${subjectEn}.`,
    `Scene: ${sceneEn}.`,
    `Composition: ${compositionEn}.`,
    `Lighting: ${p.lighting}.`,
    `Color palette: ${colorsEn}.`,
    `Mood and tone: ${moodEn}.`,
    `Style direction: ${p.style}.`,
    `Style priority: ${stylePriority.en}`,
    `Texture and material feeling: ${p.texture}.`,
    `Must include: ${mustIncludeEn}.`,
    `Usage notes: ${usageNoteEn}.`,
    "Generate a polished, commercially usable visual with a clear focal point and controlled negative space."
  ].join("\n");

  const japanese = [
    `用途: ${toJapaneseUsage(values.usage)}向けの画像生成プロンプト。`,
    `主体: ${sentence(values.subject, "主役となる被写体")}。`,
    `場景: ${sentence(values.scene, "素材制作に使いやすいビジュアルシーン")}。`,
    `構図: ${compactList([values.composition, pJa.composition])}。`,
    `ライティング: ${pJa.lighting}。`,
    `色味: ${compactList([values.colors, pJa.colorPalette])}。`,
    `トンマナ: ${compactList([values.tone, pJa.mood])}。`,
    `スタイル方向性: ${pJa.style}。`,
    `スタイル優先度: ${stylePriority.ja}`,
    `質感: ${pJa.texture}。`,
    `必ず入れたい要素: ${sentence(values.mustInclude, "主体が明確に見え、デザインで使いやすい余白がある")}。`,
    `用途メモ: ${sentence(values.notes, "LP、広告、Web、動画素材として使いやすい完成度")}。`,
    "商用デザインに使いやすく、主役が明確で、余白が整理されたビジュアルにする。"
  ].join("\n");

  const negative = compactList([translateInputToEnglish(values.avoid), p.negative, stylePriority.negative]);

  const settings = [
    `Aspect ratio: ${values.ratio || preset.recommendedSettings.aspectRatio}`,
    `Reference: ${preset.title}`,
    `Style priority: ${stylePriority.en}`,
    `Reference usage: ${preset.recommendedSettings.referenceUse}`,
    `Variation advice: ${preset.recommendedSettings.variationAdvice}`,
    "If the generation tool supports seed values, keep the same seed for visual consistency across a series."
  ].join("\n");

  els.englishOutput.value = english;
  els.japaneseOutput.value = japanese;
  els.negativeOutput.value = negative;
  els.settingsOutput.value = settings;
}

function toJapaneseUsage(value) {
  const map = {
    "LP hero visual": "LPヒーロー",
    "advertising banner visual": "広告バナー",
    "article LP key visual": "記事LP",
    "web section background visual": "Webセクション",
    "video thumbnail or background asset": "動画素材",
    "social media advertising visual": "SNS広告"
  };
  return map[value] || value;
}

function renderTags() {
  const tags = new Set();
  state.gallery.forEach((item) => item.tags.forEach((tag) => tags.add(tag)));
  TAG_GROUPS.forEach((group) => group.tags.forEach((tag) => tags.add(tag)));
  const groupedTags = new Set(TAG_GROUPS.flatMap((group) => group.tags));
  const otherTags = [...tags].filter((tag) => !groupedTags.has(tag));

  els.tagFilter.innerHTML = "";
  TAG_GROUPS.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "tag-group";
    groupEl.innerHTML = `<h3>${group.label}</h3>`;
    const list = document.createElement("div");
    list.className = "tag-button-list";
    group.tags.forEach((tag) => list.append(createTagButton(tag)));
    groupEl.append(list);
    els.tagFilter.append(groupEl);
  });

  if (otherTags.length > 0) {
    const groupEl = document.createElement("div");
    groupEl.className = "tag-group";
    groupEl.innerHTML = "<h3>その他</h3>";
    const list = document.createElement("div");
    list.className = "tag-button-list";
    otherTags.sort((a, b) => a.localeCompare(b, "ja")).forEach((tag) => {
      list.append(createTagButton(tag));
    });
    groupEl.append(list);
    els.tagFilter.append(groupEl);
  }

  updateTagSummary();
}

function createTagButton(tag) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `tag-button${state.selectedTags.has(tag) ? " is-active" : ""}`;
  button.textContent = tag;
  button.setAttribute("aria-pressed", String(state.selectedTags.has(tag)));
  button.addEventListener("click", () => {
    if (state.selectedTags.has(tag)) {
      state.selectedTags.delete(tag);
    } else if (state.selectedTags.size >= MAX_SELECTED_TAGS) {
      showToast(`タグは${MAX_SELECTED_TAGS}個まで選択できます`);
      return;
    } else {
      state.selectedTags.add(tag);
    }
    renderTags();
    renderGallery();
  });
  return button;
}

function renderGallery() {
  const selectedTags = [...state.selectedTags];
  const visibleItems = selectedTags.length === 0
    ? state.gallery
    : state.gallery.filter((item) => selectedTags.some((tag) => item.tags.includes(tag)));

  els.galleryGrid.innerHTML = "";
  if (visibleItems.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-gallery";
    empty.textContent = "一致するリファレンスがありません。タグを減らしてください。";
    els.galleryGrid.append(empty);
    updateTagSummary(0);
    return;
  }

  visibleItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `preset-card${item.id === state.selectedPresetId ? " is-selected" : ""}`;
    button.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <strong>${item.title}</strong>
      <p>${item.preset.style}</p>
      <span class="tag-list">
        ${item.tags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("")}
      </span>
    `;
    button.addEventListener("click", () => {
      state.selectedPresetId = item.id;
      updateSelectedPresetLabel();
      renderGallery();
      buildPrompts();
    });
    els.galleryGrid.append(button);
  });

  updateTagSummary(visibleItems.length);
}

function updateTagSummary(visibleCount = null) {
  const selectedTags = [...state.selectedTags];
  const count = visibleCount ?? state.gallery.filter((item) => (
    selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag))
  )).length;
  els.tagSummary.textContent = selectedTags.length === 0
    ? `すべて表示: ${count}件`
    : `選択中: ${selectedTags.join(" / ")} のいずれか / ${count}件 (${selectedTags.length}/${MAX_SELECTED_TAGS})`;
}

function updateSelectedPresetLabel() {
  const preset = getSelectedPreset();
  els.selectedPresetLabel.textContent = preset ? preset.title : "プリセット未選択";
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 1800);
}

async function copyOutput(targetId) {
  const target = document.querySelector(`#${targetId}`);
  if (!target.value.trim()) {
    showToast("コピーする内容がありません");
    return;
  }

  try {
    await navigator.clipboard.writeText(target.value);
    showToast("コピーしました");
  } catch {
    target.select();
    document.execCommand("copy");
    showToast("コピーしました");
  }
}

async function loadGallery() {
  if (window.location.protocol === "file:") {
    els.galleryStatus.textContent = "内蔵データ";
    return;
  }

  try {
    const response = await fetch("data/gallery.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Gallery JSON not found");
    }
    state.gallery = await response.json();
    state.selectedPresetId = state.gallery[0]?.id || "";
    els.galleryStatus.textContent = "JSON読込済";
  } catch {
    state.gallery = FALLBACK_GALLERY;
    state.selectedPresetId = FALLBACK_GALLERY[0].id;
    els.galleryStatus.textContent = "内蔵データ";
  }
}

function bindEvents() {
  els.form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildPrompts();
    showToast("プロンプトを生成しました");
  });

  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", () => copyOutput(button.dataset.copyTarget));
  });

  els.clearButton.addEventListener("click", () => {
    els.form.reset();
    buildPrompts();
    showToast("入力をクリアしました");
  });

  els.clearTagsButton.addEventListener("click", () => {
    state.selectedTags.clear();
    renderTags();
    renderGallery();
    showToast("タグを解除しました");
  });

  fieldIds.forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("input", buildPrompts);
  });
}

async function init() {
  bindEvents();
  await loadGallery();
  renderTags();
  renderGallery();
  updateSelectedPresetLabel();
  buildPrompts();
}

init();
