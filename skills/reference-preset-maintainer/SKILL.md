---
name: reference-preset-maintainer
description: Use when maintaining this AI prompt generator's reference preset gallery from user-provided images, especially when the user uploads an image and gives only the elements they want to reuse. Adds or updates gallery.json and the app.js fallback gallery with Japanese preset names, English/Japanese preset metadata, tags, negative terms, and recommended settings.
---

# Reference Preset Maintainer

Use this skill for the `ai-prompt-generator` project when the user wants to add a reference preset from an uploaded image.

The user may provide only:

```text
使いたい要素: 色味と余白感
```

That is enough. Do not require usage, preset name, or detailed settings unless the image or requested element is ambiguous.

## Goal

Turn the uploaded reference image into a manually curated prompt preset.

The image is a visual index. The app does not analyze images at runtime. Codex looks at the uploaded image during maintenance and writes stable metadata into:

- `data/gallery.json`
- `js/app.js` `FALLBACK_GALLERY`

## Workflow

1. Inspect the uploaded image.
2. Respect the user's stated `使いたい要素`.
3. Name the preset in natural Japanese.
4. Create an ASCII-safe `id`.
5. Save or place the image under `images/sample/` when a local image file is provided.
6. Add the preset object to `data/gallery.json`.
7. Add the same preset object to `FALLBACK_GALLERY` in `js/app.js`.
8. Run syntax checks:
   - `node --check ai-prompt-generator/js/app.js`
   - Parse `ai-prompt-generator/data/gallery.json` as JSON.
9. Summarize the added preset name, tags, and intended reusable elements.

## Naming

Use Japanese for `title`.

Examples:

- `清潔感のある余白LP`
- `やわらか自然光コスメ`
- `信頼感のあるSaaSビジュアル`
- `高級感ミニマル商品カット`
- `ナチュラル記事LPトーン`

Use lowercase English kebab-case for `id`, ending with a number if useful:

- `clean-whitespace-lp-01`
- `soft-natural-cosmetic-01`
- `trust-saas-visual-01`

## Preset Shape

Each object must follow this shape:

```json
{
  "id": "soft-natural-cosmetic-01",
  "title": "やわらか自然光コスメ",
  "image": "images/sample/example.svg",
  "tags": ["LP", "clean", "cosmetic"],
  "preset": {
    "composition": "English composition description",
    "lighting": "English lighting description",
    "colorPalette": "English color palette",
    "mood": "English mood words",
    "texture": "English texture and material feeling",
    "style": "English style direction",
    "negative": "English negative terms"
  },
  "presetJa": {
    "composition": "日本語の構図説明",
    "lighting": "日本語の光の説明",
    "colorPalette": "日本語の色味",
    "mood": "日本語のトンマナ",
    "texture": "日本語の質感",
    "style": "日本語のスタイル方向性",
    "negative": "日本語の禁止要素"
  },
  "recommendedSettings": {
    "aspectRatio": "16:9",
    "referenceUse": "Use this image as a style reference if the generation tool supports reference images.",
    "variationAdvice": "Keep the same seed and change only the subject for consistent series generation."
  }
}
```

## Writing Guidance

Prioritize stability for production assets:

- Describe composition, lighting, color, mood, and texture concretely.
- Include whitespace and copy-placement language when the image supports LP or ad use.
- Keep descriptions reusable across subjects.
- Do not overfit to incidental details unless the user says they want them.
- Negative terms should prevent common production failures: text, logo, watermark, clutter, harsh shadows, unreadable UI, distorted hands, or irrelevant objects.

If the user says they only want one element, such as `色味`, keep the preset centered on that element and avoid importing unrelated details too strongly.

## Tags

Choose 3 to 6 tags.

Use a mix of:

- 表現形式 tags: `写真`, `イラスト`, `コラージュ`, `UI`, `3D文字`
- 雰囲気・質感 tags: `透明感`, `高級感`, `POP`, `清潔感`, `パステル`, `フレア`, `ナチュラル`, `信頼感`, `余白`, `立体感`, `光沢`
- 用途・構図 tags: `背景`, `人物`, `商品`, `文字`, `バナー`, `LP`, `LP素材`, `記事LP`, `Web`
- Domain tags when useful: `コスメ`, `SaaS`, `ウェルネス`, `食品`, `ファッション`, `医療`

Prefer Japanese tags for user-facing filtering. If usage is unknown, use category/domain/style tags and one broad tag such as `Web` only when visually appropriate.

The app supports OR-based multi-tag filtering with a maximum of 3 selected tags. Choose tags that work well as broad discovery filters, such as `商品`, `透明感`, `背景`, or `ナチュラル`.

## Image Handling

If the user provides a local image path, copy or move it into:

```text
ai-prompt-generator/images/sample/
```

Prefer descriptive ASCII filenames:

```text
soft-natural-cosmetic-01.png
```

Do not use the original screenshot name if it contains spaces, dates, or non-ASCII characters.

## Do Not

- Do not claim the app performs runtime AI image analysis.
- Do not add upload or backend functionality unless explicitly asked.
- Do not require the user to provide usage or a preset name.
- Do not create new app architecture for simple preset additions.
- Do not remove or rewrite existing presets unless requested.
