# AMBIT Site

AMBIT - Data Governance × WEBアナリティクス × アドテク Consultant

## Project Overview

Next.js ベースの静的サイト。データを事業の意思決定言語にするというコンセプトでビジネスコンサルティングサービスを紹介します。

## Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Language**: JavaScript (React)
- **Export**: Static HTML (`next export`)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Export static files
npm run export
```

## Project Structure

```
├── pages/              # Next.js pages
│   ├── _app.jsx       # App wrapper
│   ├── _document.jsx  # HTML document
│   └── index.jsx      # Home page
├── components/        # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Engagements.jsx
│   └── Footer.jsx
├── styles/           # Global styles
│   └── globals.css
├── lib/              # Utilities and content
│   └── content.js
├── public/           # Static assets
├── next.config.js    # Next.js config
├── tailwind.config.js # Tailwind config
└── package.json
```

## Deployment

Static files are generated in the `out/` directory after build.

### VPS Deployment Flow

1. Push to GitHub
2. VPS pulls latest changes
3. Runs `npm install && npm run build`
4. Serves static files from `out/` directory

## Design System

### Colors
- `--ink`: #0A0A0B (primary text)
- `--paper`: #FAFAF7 (background)
- `--signal`: #1F6FEB (accent blue)
- `--highlight`: #E8F0FF (highlight background)
- `--hairline`: #E5E5DF (borders)
- `--mist`: #F1F1EC (secondary background)

### Typography
- **Sans**: Inter (English), Noto Sans JP (Japanese)
- **Mono**: JetBrains Mono

## Content

Content data is managed in `lib/content.js` for easy updates.

## License

All rights reserved.
