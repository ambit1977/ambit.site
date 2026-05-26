# AMBIT Site デプロイ - Claude Code 引き継ぎドキュメント

## 📋 現状サマリー

### ✅ 完了したこと
1. **Next.js プロジェクト構造** - 完全生成済み
   - pages/, components/, styles/, lib/ ディレクトリ構成
   - Design Case 2 実装済み
   - Tailwind CSS 統合済み

2. **GitHub へのプッシュ** - 成功
   - リポジトリ: https://github.com/ambit1977/ambit.site.git
   - main ブランチにすべてのコミット完了
   - 35 ファイル、6969 行のコード

3. **VPS SSH 接続** - 成功
   - 踏み台: maternitylife@maternitylife.sakura.ne.jp
   - VPS: alma@ambit.go2020.tokyo (ambit.go2020.tokyo)
   - SSH 接続テスト: OK

### ⏳ 残りのタスク
1. **VPS 環境セットアップ** - 部分完了
   - ✅ Node.js v18.20.8 インストール完了
   - ❌ Git インストール必要
   - ❌ Nginx インストール必要
   - ❌ プロジェクト クローン必要
   - ❌ npm install & build 必要
   - ❌ Nginx 設定必要
   - ❌ デプロイスクリプト設定必要
   - ❌ Cron 設定必要

## 🖥️ VPS 情報

### サーバー仕様
```
サービス: VPS AMBIT 検証用
プロバイダ: さくらのVPS (v3)
ホスト名: ambit.go2020.tokyo
IPアドレス: 49.212.164.216
OS: AlmaLinux 9.4 (Seafoam Ocelot)
カーネル: 5.14.0-427.22.1.el9_4.x86_64
管理ユーザー: alma
ディスク: 100GB（使用819MB）
メモリ: 961MB + Swap 2GB
```

### インストール済みサービス
- Apache 2.4.62
- PHP 7.4.33
- MariaDB 10.5.29
- Node.js v18.20.8 ✅
- Nginx ❌ (要インストール)
- Git ❌ (要インストール)

### SSH アクセス
```bash
# 踏み台経由での接続
ssh -J maternitylife@maternitylife.sakura.ne.jp alma@ambit.go2020.tokyo

# または ~/.ssh/config で設定済み
Host sakura-vps
    HostName ambit.go2020.tokyo
    User alma
    ProxyJump sakura-rental
```

## 📦 プロジェクト構成

### GitHub リポジトリ
- **URL**: https://github.com/ambit1977/ambit.site.git
- **ブランチ**: main
- **ファイル数**: 35 ファイル
- **最新コミット**: Initial commit: Next.js + Design Case 2

### ローカルパス
```
/Users/ambit/Documents/遊び/サーバー操作のお試し/AMBIT SITE/
├── pages/
│   ├── _app.jsx
│   ├── _document.jsx
│   └── index.jsx
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Engagements.jsx
│   └── Footer.jsx
├── styles/
│   └── globals.css
├── lib/
│   └── content.js
├── public/
│   └── robots.txt
├── .github/workflows/
│   └── build.yml
├── next.config.js (output: 'export', distDir: 'out')
├── tailwind.config.js
├── package.json
├── .gitignore
└── DEPLOYMENT.md
```

## 🚀 VPS セットアップの手順（残りの処理）

### Step 1: 必須パッケージインストール
```bash
ssh -J maternitylife@maternitylife.sakura.ne.jp alma@ambit.go2020.tokyo << 'EOF'
sudo dnf install -y git nginx
git --version
nginx -v
EOF
```

### Step 2: プロジェクト クローン＆ビルド
```bash
ssh -J maternitylife@maternitylife.sakura.ne.jp alma@ambit.go2020.tokyo << 'EOF'
sudo mkdir -p /var/www/ambit.go2020.tokyo
sudo chown alma:alma /var/www/ambit.go2020.tokyo
cd /var/www/ambit.go2020.tokyo
git clone https://github.com/ambit1977/ambit.site.git .
npm install
npm run build
ls -la out/
EOF
```

### Step 3: Nginx 設定
```bash
ssh -J maternitylife@maternitylife.sakura.ne.jp alma@ambit.go2020.tokyo << 'EOF'
sudo tee /etc/nginx/conf.d/ambit.conf > /dev/null << 'NGINX'
server {
    listen 80;
    server_name ambit.go2020.tokyo;
    root /var/www/ambit.go2020.tokyo/out;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|gif|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
NGINX

sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
EOF
```

### Step 4: デプロイスクリプト＆Cron 設定
```bash
ssh -J maternitylife@maternitylife.sakura.ne.jp alma@ambit.go2020.tokyo << 'EOF'
sudo tee /usr/local/bin/deploy-ambit.sh > /dev/null << 'DEPLOY'
#!/bin/bash
cd /var/www/ambit.go2020.tokyo
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deployment completed" >> /var/log/ambit-deploy.log
DEPLOY

sudo chmod +x /usr/local/bin/deploy-ambit.sh

# Cron: 30分ごとに自動更新
(crontab -l 2>/dev/null || true; echo "*/30 * * * * /usr/local/bin/deploy-ambit.sh >> /var/log/ambit-deploy.log 2>&1") | crontab -
crontab -l
EOF
```

### Step 5: 動作確認
```bash
curl http://ambit.go2020.tokyo/
```

## 🔧 トラブルシューティング

### Git not found
```bash
sudo dnf install -y git
```

### Nginx not found
```bash
sudo dnf install -y nginx
```

### permission denied for /usr/local/bin/deploy-ambit.sh
```bash
sudo chmod +x /usr/local/bin/deploy-ambit.sh
```

### npm ERR! permission denied
```bash
sudo chown -R alma:alma /var/www/ambit.go2020.tokyo
```

## 📝 次のステップ

1. **Git & Nginx インストール**
2. **プロジェクト クローン＆ビルド**
3. **Nginx 設定と起動**
4. **デプロイスクリプト設定**
5. **動作確認**: https://ambit.go2020.tokyo にアクセス
6. **ログ監視**: `/var/log/ambit-deploy.log`

## 📞 トラブルシューティング連絡先

- VPS ホスト: ambit.go2020.tokyo
- ユーザー: alma
- GitHub: ambit1977/ambit.site
- デプロイログ: `/var/log/ambit-deploy.log`
- Nginx ログ: `/var/log/nginx/error.log`

---

**引き継ぎ日**: 2026-05-24  
**引き継ぎ元**: Cowork Claude  
**引き継ぎ先**: Claude Code
