## Copy the file into the container
```bash
docker cp ~/pro/nginx/server_static_content/nginx.conf nginx:/etc/nginx/nginx.conf
docker cp ~/pro/nginx/server_static_content/site/ nginx:/etc/nginx/
```

## reload the new configuration
```bash
nginx -s reload
```