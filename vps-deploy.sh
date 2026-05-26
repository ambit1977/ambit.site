#!/bin/bash
set -e

echo "=== AMBIT VPS セットアップ ==="

# Node.js インストール（未インストール時）
if ! command -v node &> /dev/null; then
    echo "▶ Node.js インストール中..."
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo dnf install -y nodejs
fi

echo "▶ Node.js バージョン"
node --version
npm --version

# ディレクトリ準備
echo -e "\n▶ ディレクトリ準備"
sudo mkdir -p /var/www/ambit.go2020.tokyo
sudo chown alma:alma /var/www/ambit.go2020.tokyo
cd /var/www/ambit.go2020.tokyo

# GitHub からクローン
echo -e "\n▶ GitHub からクローン"
if [ -d ".git" ]; then
    git pull origin main
else
    git clone https://github.com/ambit1977/ambit.site.git .
fi

# npm install
echo -e "\n▶ npm install"
npm install

# ビルド
echo -e "\n▶ Next.js ビルド"
npm run build

# ビルド確認
echo -e "\n▶ 出力ファイル確認"
ls -lh out/index.html

# Nginx 設定
echo -e "\n▶ Nginx 設定"
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

# Nginx 再起動
echo -e "\n▶ Nginx 再起動"
sudo nginx -t
sudo systemctl restart nginx

# デプロイスクリプト
echo -e "\n▶ デプロイスクリプト設定"
sudo tee /usr/local/bin/deploy-ambit.sh > /dev/null << 'DEPLOY'
#!/bin/bash
cd /var/www/ambit.go2020.tokyo
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
DEPLOY

sudo chmod +x /usr/local/bin/deploy-ambit.sh

# Cron 設定
echo -e "\n▶ Cron 設定（30分ごと自動デプロイ）"
(crontab -l 2>/dev/null || true; echo "*/30 * * * * /usr/local/bin/deploy-ambit.sh >> /var/log/ambit-deploy.log 2>&1") | crontab -
crontab -l | grep deploy-ambit

echo -e "\n✅ セットアップ完了！"
echo "https://ambit.go2020.tokyo にアクセス"
