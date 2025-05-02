# Deployment Setup

This repository uses GitHub webhooks for automatic deployment.

## Server Setup
1. SSH key for deployment is stored in /var/www/.ssh/
2. Webhook endpoint: https://danielbamford.com/webhook.php
3. Deployment script: /var/www/deploy-scripts/deploy.sh

## Local Setup
1. Clone the repository
2. Make changes
3. Push to master branch
4. Changes will be automatically deployed

## Troubleshooting
- Check webhook logs: /var/www/deploy-scripts/webhook.log
- Check deployment logs: /var/www/deploy-scripts/deploy.log
- Verify GitHub webhook settings in repository Settings → Webhooks
- Ensure SSH key has proper permissions (600 for private key, 644 for public key)
- Check file ownership (www-data:www-data for web files) 