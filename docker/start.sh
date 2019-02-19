docker stop msp-web && docker rm -f {image name}
docker run --name msp-web -d -p 8000:80 {image name}
