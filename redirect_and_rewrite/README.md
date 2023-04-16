## Copy the file into the container
```bash
docker cp ~/pro/nginx/redirect_and_rewrite/nginx.conf nginx:/etc/nginx/nginx.conf
docker cp ~/pro/nginx/redirect_and_rewrite/site/ nginx:/etc/nginx/
```

## reload the new configuration
```bash
nginx -s reload
```