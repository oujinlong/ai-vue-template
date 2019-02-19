cd ../
rm -rf node_modules

cnpm install
#cnpm rebuild node-sass --force
#npm install --registry https://registry.npm.taobao.org
#npm rebuild node-sass --force

npm run build
rm -rf ./docker/dist
mv ./dist ./docker
cd ./docker

docker rm -f {image name}
docker rmi {image name}

docker build -t {image name} ./
