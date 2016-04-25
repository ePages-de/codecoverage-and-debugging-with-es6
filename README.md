# Code coverage with ECMAScript 6

Test this example project like so:

```shell
# clone project to your machine
git clone https://github.com/ePages-de/codecoverage-with-es6.git
cd codecoverage-with-es6

# install dependencies
npm install

# run tests
npm test
```

This generates two coverage reports. The old `isparta` based and the new `babel-plugin-__coverage__` based:

* `coverage/old/{your-chrome-browser}/lcov-report/index.html`
* `coverage/new/{your-chrome-browser}/lcov-report/index.html`
