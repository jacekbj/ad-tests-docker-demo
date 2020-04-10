This project is heavily inspired by https://github.com/blueimp work.

The aim of this repository is to get a working example of WDIO in Docker with devtools support.

Build images:
```shell script
docker build -f Dockerfile-base -t wdio-base .
docker build -f Dockerfile-tests -t wdio-tests .
```

Copy test files to test parallel execution:
```shell script
cd tests/specs
for i in {1..5} ; do cp testHN_0.test.js testHN_$i.test.js ; done 
for i in {1..5} ; do sed -i.bak -e 's/0/'$i'/g' testHN_$i.test.js ; done 
find . -name "*.bak" -delete
```

Run tests:
```shell script
docker-compose run --rm wdio wdio
```

Versions of software:
```shell script
docker-compose run --rm wdio google-chrome --version
docker-compose run --rm wdio /usr/local/bin/chromedriver --version
```
