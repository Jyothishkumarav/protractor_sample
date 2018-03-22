var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  /*multiCapabilities:[
   { browserName: 'chrome'},
   { browserName: 'firefox'}
  ],*/
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 4
  },
  suites: {
    homepage: './test/*spec.js',
    search: ['./home/*spec.js',
      './todo/*spec.js'
    ]
  },
  framework: 'jasmine',
  // specs: ['todo-spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './report',
        screenshotsFolder: './images',
        takeScreenshots: true,
        cleanDestination: true,
        fileName: 'MyReportName',
        fileNameDateSuffix: true,
        consolidate: true,
        consolidateAll: true
      })
    )
  }
};