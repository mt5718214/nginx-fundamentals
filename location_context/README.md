## Copy the file into the container
```bash
docker cp ~/pro/nginx/location_context/nginx.conf nginx:/etc/nginx/nginx.conf
docker cp ~/pro/nginx/location_context/site/ nginx:/etc/nginx/
```

## reload the new configuration
```bash
nginx -s reload
```
## hard reload (for sometime the browser cache the file)
```
cmd + shift + R
```
