# learn-react

## run
```shell
docker-compose run --rm node sh -c "npm i -g create-react-app && create-react-app learn-react --scripts-version=react-scripts-ts"
docker-compose run --rm node sh -c "NODE_ENV=development && yarn install"
```
```shell
docker-compose run --rm --service-ports node yarn install
docker-compose run --rm --service-ports node yarn start
```
