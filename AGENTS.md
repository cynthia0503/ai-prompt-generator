# AGENTS.md

## Project Name

AI素材生成プロンプト・リファレンス管理ツール

English working name: AI Prompt & Reference Preset Manager

## Project Purpose

This is a local-first tool for LP / advertising / web / video asset production.

The goal is not to perfectly analyze or reproduce reference images. The goal is to make image generation more stable by turning reusable creative direction into structured prompt presets.

The user enters asset requirements, chooses a manually registered reference preset, and receives structured English and Japanese prompts that can be copied into image generation tools.

The MVP should be completed quickly and remain simple enough to open directly in a browser.

## Primary User

The user is a Japan-based LP / web designer.

Primary workflows:

- LP hero image generation
- Advertising banner asset generation
- Article LP visual generation
- Web section image generation
- Video thumbnail or background asset generation
- AI image generation prompt standardization
- Reusing successful visual direction as prompt presets

## Product Positioning

This tool is a prompt and reference preset manager, not an image analysis tool.

It helps increase:

- Prompt writing speed
- Visual direction consistency
- Reuse of successful generation recipes
- Negative prompt consistency
- Team handoff quality
- Japanese / English prompt workflow speed

It does not guarantee:

- Exact image reproduction
- Automatic image understanding
- Stable output across all AI models
- Perfect character, logo, or text handling

## MVP Scope

Build only the following:

1. Input form for asset requirements.
2. Manual reference preset gallery.
3. Image tags, multi-tag filtering, and preset metadata.
4. Click a reference preset to apply its style recipe.
5. Generate structured English prompt.
6. Generate structured Japanese prompt.
7. Generate negative prompt.
8. Generate recommended generation settings.
9. One-click copy for each output block.

Reference selection supports one main preset and up to two secondary presets. Main preset controls the primary style direction. Secondary presets should only contribute supporting mood, lighting, color, and texture cues, not exact subject or composition.

## Out of Scope for MVP

Do not implement:

- AI-based image analysis
- Automatic similar-image search
- Upload with permanent file storage
- Login
- Backend database
- Notion API integration
- WordPress integration
- User account system
- Payment features
- Complex build tools
- React
- Next.js
- npm dependencies

## Technical Requirements

Use only:

- HTML
- CSS
- Vanilla JavaScript
- JSON

No external packages.
No npm.
No build step.
The app should work by opening `index.html` in a browser.

Important: many browsers block `fetch()` for local JSON files when opened with the `file://` protocol. For the MVP, keep a built-in fallback preset list in `js/app.js` and also provide `data/gallery.json` as the editable source format.

## File Structure

```text
ai-prompt-generator/
├── AGENTS.md
├── README.md
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   └── gallery.json
└── images/
    └── sample/
```

## UI Language

The UI should primarily use Japanese because the intended workflow is Japanese LP / advertising / web design.

Code comments and documentation may use English when practical. Product explanation may include Traditional Chinese if needed for the owner.

## Prompt Generation Principles

Prompts should be structured and stable, not overly poetic.

Prefer fixed sections:

- Purpose
- Subject
- Scene
- Composition
- Lighting
- Color palette
- Mood / tone
- Style direction
- Texture / material
- Usage notes

Always produce:

- English Prompt
- Japanese Prompt
- Negative Prompt
- Recommended Settings

English Prompt should avoid leaving Japanese user input as-is. Because this is a static local MVP without translation APIs, use the local replacement dictionary in `js/app.js` for common Japanese design terms. Japanese Prompt should preserve the user's original wording.

The generated prompt should include both user inputs and selected preset values. User inputs should remain visible and should not be silently overwritten by the preset.

## Reference Preset Concept

A reference image is a visual index for a manually registered style recipe.

The app does not inspect image pixels. It reads metadata from the gallery preset.

Each gallery item should define stable creative controls:

- Composition
- Lighting
- Color palette
- Mood
- Texture
- Style
- Negative terms
- Recommended settings

Tags are used for filtering. The UI supports selecting up to 3 tags at once. Multiple selected tags should show presets that include at least one selected tag.

Display tags under these top-level groups while keeping all child tags cross-selectable:

- 表現形式: 写真 / イラスト / コラージュ / UI / 3D文字
- 雰囲気・質感: 透明感 / 高級感 / POP / 清潔感 / パステル / フレア / ナチュラル / 信頼感 / 余白 / 立体感 / 光沢 / フェミニン
- 用途・構図: 背景 / 人物 / 女性 / 商品 / 文字 / バナー / LP / LP素材 / 記事LP / Web

## Gallery JSON Schema

Use the following shape in `data/gallery.json`:

```json
[
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
]
```

## Form Fields

Recommended fields:

- Asset usage
- Subject
- Scene
- Composition
- Tone and manner
- Color direction
- Style priority
- Must include
- Prohibited elements
- Output ratio
- Extra notes

Style priority should control how strongly the selected reference preset is used:

- Balanced: use the preset as overall style direction.
- Linework/coloring: prioritize expression method, brush touch, linework, and coloring; strengthen negative terms against photorealistic output.
- Light/color only: use only color mood and lighting atmosphere.
- Texture only: use only tactile surface feeling.
- Composition only: use only layout logic.

## Copy Behavior

Provide separate copy buttons:

- Copy English Prompt
- Copy Japanese Prompt
- Copy Negative Prompt
- Copy Settings

Do not copy all by default unless a dedicated "copy all" button is added later.

## Design Direction

The UI should feel like a practical production tool for designers, not a marketing landing page.

Use:

- Dense but readable layout
- Clear form sections
- Tag chips
- Selected state for gallery cards
- Copy feedback
- Responsive layout for laptop and mobile

Avoid:

- Decorative hero-only landing pages
- Unnecessary animations
- Overly large marketing headings
- Purple gradient-heavy styling
- Nested cards

## Future Ideas After MVP

These may be considered later, but must not block the MVP:

- Temporary local image preview import
- JSON export helper for new presets
- Model-specific prompt formats
- Midjourney parameter output
- Stable Diffusion parameter output
- Firefly-friendly prompt format
- Preset duplication
- Favorite presets
- Preset search
- Conflict warning between user inputs and selected preset
