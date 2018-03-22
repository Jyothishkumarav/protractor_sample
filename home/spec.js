describe('Protractor Demo App', function () {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  beforeEach(function () {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
    latestResult.getText().then(function (text) {
      console.log('result is :' + text);
    });
  }

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  /* it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);
    goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
*/
  it('Should have a history', function () {
    add(1, 2);
    add(4, 5);
    expect(history.count()).toEqual(2);

  });
});