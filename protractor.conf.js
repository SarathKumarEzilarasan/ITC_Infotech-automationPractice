/*
* Configuration file 
*/

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  showSummary: true,
  showConfiguration: true,
  reportTitle: 'E2E Test Report',
  filename: 'AutomationPractice-testreport.html',
  captureOnlyFailedSpecs: false,
  reportOnlyFailedSpecs: false,
  preserveDirectory: false,
  pathBuilder: function (currentSpec, suites, browserCapabilities) {
    return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
  },
  dest: './testOutput/HtmlReport'

});
var url = 'http://automationpractice.com/index.php'

exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['disable-infobars']
    }
  },

  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },
  framework: 'jasmine',

  onPrepare: function () {

    jasmine.getEnv().addReporter(reporter);

    global.requirePO = function () {
      return require(basePath);
    }
    global.requireDataPath = function () {
      return dataPath;
    }

    global.getUrl = function () {
      return url;
    }
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(4000);
    allScriptsTimeout: 100000;

  },
  plugins: [{
    package: 'protractor-testability-plugin'
  }],
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [
    './testSpecs/loginPage/*.spec.js',
    './testSpecs/products/*.spec.js'
  ],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1000000,
    showColors: true
  }
};
