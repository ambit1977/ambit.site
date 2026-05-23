# AMBIT Site - Deployment Guide

## Project Status

✅ Next.js プロジェクト構造完成  
✅ Design Case 2 (テキスト重視型) 実装  
✅ コンポーネント化完了  
✅ Tailwind CSS 統合済み  

## File Structure Generated

```
components/
  ├── Header.jsx
  ├── Hero.jsx
  ├── Services.jsx
  ├── Engagements.jsx
  └── Footer.jsx

pages/
  ├── _app.jsx
  ├── _document.jsx
  └── index.jsx

styles/
  └── globals.css

lib/
  └── content.js

public/
  └── robots.txt

.github/workflows/
  └── build.yml

├── next.config.js        (static export mode enabled)
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .gitignore
├── .eslintrc.json
├── deploy.sh
└── README.md
```

## Build & Deployment Steps

### 1. Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser: http://localhost:3000
```

### 2. Static Build

```bash
# Create static export
npm run build

# Static files generated in: out/
```

### 3. GitHub Setup

#### Option A: HTTPS (Recommended for first setup)

```bash
cd /Users/ambit/Documents/遊び/サーバー操作のお試し/AMBIT\ SITE

# Initialize git
git init
git config user.email "ambit.akiyama@gmail.com"
git config user.name "Akiyama Taishi"

# Add and commit
git add .
git commit -m "Initial commit: Next.js project with design case 2"

# Add remote
git remote add origin https://github.com/ambit1977/ambit.site.git

# Push to main
git branch -M main
git push -u origin main
```

#### Option B: SSH (For continuous development)

```bash
git remote add origin git@github.com:ambit1977/ambit.site.git
git branch -M main
git push -u origin main
```

### 4. VPS Deployment Configuration

#### A. Initial Setup on VPS

```bash
# SSH to VPS (via bastion)
ssh -J maternitylife@maternitylife.sakura.ne.jp ambit@ambit.go2020.tokyo

# Clone repository
cd /var/www
git clone https://github.com/ambit1977/ambit.site.git ambit.go2020.tokyo
cd ambit.go2020.tokyo

# Install dependencies
npm install --production

# Build static files
npm run build

# Copy static files to Nginx
# Configure Nginx to serve from ./out/
```

#### B. Nginx Configuration

```nginx
server {
    listen 80;
    server_name ambit.go2020.tokyo;

    root /var/www/ambit.go2020.tokyo/out;
    index index.html;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### C. Automatic Deployment Script

Place `/home/ambit/deploy.sh` on VPS:

```bash
#!/bin/bash
cd /var/www/ambit.go2020.tokyo
git pull origin main
npm install --production
npm run build
sudo systemctl reload nginx
```

Make executable:
```bash
chmod +x /home/ambit/deploy.sh
```

#### D. Scheduled Deploy (via cron)

```bash
# Edit crontab
crontab -e

# Add (deploy every 30 minutes)
*/30 * * * * /home/ambit/deploy.sh >> /var/log/ambit-deploy.log 2>&1
```

### 5. GitHub Actions (Optional Auto-Deploy)

The `.github/workflows/build.yml` is configured to run tests on push.  
For automatic VPS deployment, add SSH key to GitHub Secrets and extend the workflow.

## Environment Variables

Currently none required. Add to `.env.local` if needed in future:

```
NEXT_PUBLIC_API_URL=https://api.ambit.go2020.tokyo
```

## Monitoring

```bash
# Check VPS deployment log
ssh -J maternitylife@maternitylife.sakura.ne.jp \
    ambit@ambit.go2020.tokyo \
    tail -f /var/log/ambit-deploy.log

# Verify site
curl https://ambit.go2020.tokyo/

# Check Nginx
sudo systemctl status nginx
```

## Troubleshooting

### Build fails: "next export not supported"
- Check `next.config.js` has `output: 'export'`
- Ensure no dynamic routes are used in pages/

### Nginx 404 after deploy
- Verify `root` points to `./out/` directory
- Check file permissions: `chmod -R 755 out/`
- Reload Nginx: `sudo systemctl reload nginx`

### Git permission denied
- Setup SSH keys on VPS
- Or use GitHub PAT for HTTPS

## Next Steps

1. ✅ Confirm project files are complete
2. ⏳ Push to GitHub
3. ⏳ Configure VPS environment
4. ⏳ Test deployment
5. ⏳ Monitor live site at https://ambit.go2020.tokyo/

---

**Last Updated**: 2026-05-24  
**Version**: 1.0.0  
**Build**: Next.js 14 + Static Export
