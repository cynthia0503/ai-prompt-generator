# AI素材生成プロンプト・リファレンス管理ツール

LP / 広告 / Web / 動画素材のための、ローカル用プロンプト生成ツールです。

参考画像をAIで解析するのではなく、手動で登録したリファレンスプリセットを使って、安定した英語・日本語プロンプト、ネガティブプロンプト、推奨生成設定を作成します。

## 使い方

1. `index.html` をブラウザで開きます。
2. 素材用途、主体、場景、構図、トンマナなどを入力します。
3. 右側のリファレンスプリセットを選びます。
4. 必要に応じてタグを複数選択し、参考画像を絞り込みます。
5. `プロンプトを生成` を押します。
6. 必要な出力をコピーして画像生成AIに貼り付けます。

## できること

- 英語プロンプト生成
- 日本語プロンプト生成
- ネガティブプロンプト生成
- 推奨設定の整理
- 手動登録した参考スタイルの適用
- 複数タグによるリファレンス絞り込み。タグは最大3個まで選択でき、選んだタグのどれか1つでも含むプリセットが表示されます。
- タグは `参考主要素`、`雰囲気・質感`、`背景・空間` の上位カテゴリごとに表示されます。
- スタイル優先度を指定して、参考プリセットから `筆触・上色`、`色味・光`、`質感`、`構図` のどれを強く使うか調整できます。
- English Prompt では、入力欄のよく使う日本語表現を簡易辞書で英語化します。
- 参考プリセットは `メイン` 1つと `サブ` 最大2つを選べます。サブ参考は光・色味・雰囲気・質感の補助として扱われます。
- `背景` 参考を1つ選べます。背景参考は背景の空気感、奥行き、環境光、色味、余白だけに使われます。
- 各出力のワンクリックコピー

## できないこと

- 画像の自動解析
- 参考画像の完全再現
- 生成AIごとの差異の完全吸収
- 永続的なブラウザ内アップロード保存
- ログインやデータベース管理

## プリセットを追加する方法

1. 画像を `images/sample/` に置きます。
2. `data/gallery.json` に新しい項目を追加します。
3. 直接 `index.html` を開いている場合は、ブラウザの制限でJSONが読めないことがあります。その場合は `js/app.js` の `FALLBACK_GALLERY` にも同じ項目を追加してください。

推奨データ形式:

```json
{
  "id": "clean-lp-hero-01",
  "title": "Clean LP Hero",
  "image": "images/sample/clean-lp-hero-01.svg",
  "tags": ["LP", "clean", "cosmetic", "premium"],
  "preset": {
    "composition": "centered product composition with generous whitespace for copy placement",
    "lighting": "soft natural morning light, low contrast, gentle shadows",
    "colorPalette": "white, pale blue, soft gray",
    "mood": "clean, premium, trustworthy, calm",
    "texture": "smooth ceramic surface, subtle glossy reflection",
    "style": "Japanese skincare LP hero advertising visual",
    "negative": "busy background, harsh shadows, clutter, text, logo, watermark"
  },
  "presetJa": {
    "composition": "コピーを配置しやすい余白を広く取った、商品中央配置の構図",
    "lighting": "柔らかい朝の自然光、低コントラスト、やさしい影",
    "colorPalette": "白、淡いブルー、ソフトグレー",
    "mood": "清潔感、高級感、信頼感、落ち着き",
    "texture": "なめらかなセラミック面、控えめな光沢反射",
    "style": "日本向けスキンケアLPのヒーロー広告ビジュアル",
    "negative": "散らかった背景、強い影、過度な装飾、文字、ロゴ、透かし"
  },
  "recommendedSettings": {
    "aspectRatio": "16:9",
    "referenceUse": "Use this image as a style reference if the generation tool supports reference images.",
    "variationAdvice": "Keep the same seed and change only the subject for consistent series generation."
  }
}
```

## なぜ参考画像だけでなくプリセットを書くのか

画像生成AIで安定した素材を作るには、単に「この画像っぽく」ではなく、構図・光・色・質感・禁止事項・比率などを固定することが重要です。

このツールでは参考画像を「見た目の索引」として使い、その裏にある手動メタデータをプロンプトに反映します。

## 推奨ワークフロー

- うまく生成できた素材があれば、その条件をプリセット化する。
- 同じシリーズの素材では、同じプリセット、同じ比率、同じネガティブプロンプトを使う。
- 生成AI側が reference image / style reference / seed に対応している場合は、選択した参考画像と推奨設定も一緒に使う。
