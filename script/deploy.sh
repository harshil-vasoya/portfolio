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


ssh -p 65002 u371241921@147.93.101.85 "rm -rf /home/u371241921/domains/ullasindia.com/public_html/harshil_portfolio/assets"
scp -P 65002 -r dist/* u371241921@147.93.101.85:/home/u371241921/domains/ullasindia.com/public_html/harshil_portfolio
# scp -P 65002 -r .htaccess u371241921@147.93.101.85:/home/u371241921/domains/rajraiyani.dev/public_html


rm -rf dist
rm .htaccess

