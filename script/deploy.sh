#!/bin/bash

npm run build

echo "
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
" > .htaccess


ssh -p 65002 u371241921@154.41.233.11 "rm -rf /home/u371241921/domains/rajraiyani.dev/public_html/assets"
scp -P 65002 -r dist/* u371241921@154.41.233.11:/home/u371241921/domains/rajraiyani.dev/public_html
# scp -P 65002 -r .htaccess u371241921@154.41.233.11:/home/u371241921/domains/rajraiyani.dev/public_html


rm -rf dist
rm .htaccess

