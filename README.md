## Setup nginx with docker
```bash
docker run -itd --name nginx -p 80:8080 nginx:latest
docker ps -a --filter name=nginx # confirm whether nginx is running
```

## Copy the file form the container
```bash
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH

docker cp nginx:/etc/nginx ~/pro/nginx
```

## Copy the file into the container
```bash
docker cp ~/pro/nginx/nginx.conf nginx:/etc/nginx/nginx.conf
```