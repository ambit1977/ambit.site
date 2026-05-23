#!/bin/bash
# VPS deployment script
# Place this on VPS at: /home/ambit/deploy.sh

set -e

REPO_DIR="/var/www/ambit.go2020.tokyo"
LOG_FILE="/var/log/ambit-deploy.log"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deployment started" >> $LOG_FILE

cd $REPO_DIR

# Pull latest code
echo "Pulling latest code..." | tee -a $LOG_FILE
git pull origin main

# Install dependencies
echo "Installing dependencies..." | tee -a $LOG_FILE
npm install --production

# Build static files
echo "Building static files..." | tee -a $LOG_FILE
npm run build

# Nginx は out/ をドキュメントルートとして指定
echo "[$(date '+%Y-%m-%d %H:%M:%S')] Deployment completed successfully" >> $LOG_FILE
