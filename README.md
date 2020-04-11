The aim of this repository is to showcase problem with devtools automation protocol.

Local setup requires Selenium:
```shell script
./node_modules/.bin/selenium-standalone install && ./node_modules/.bin/selenium-standalone start
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
npm run wdio -- wdio-webdriver.conf.js
npm run wdio -- wdio-devtools.conf.js
```
