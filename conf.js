exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities:[
   { browserName: 'chrome'},
   { browserName: 'firefox'}
  ],
  framework: 'jasmine',
  specs: ['todo-spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};

