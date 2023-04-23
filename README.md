## Start reading order
- server_static_content
- mime_type
- location_context
- redirect_and_rewrite
- load_balancer

## Setup nginx with docker
```bash
docker run -itd --name nginx -p 80:8080 nginx:latest
docker ps -a --filter name=nginx # confirm whether nginx is running
```

## Copy the file from the container
```bash
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH

docker cp nginx:/etc/nginx ~/pro/nginx
```

## Copy the file into the container
```bash
docker cp ~/pro/nginx/nginx.conf nginx:/etc/nginx/nginx.conf
```