var angularHomepage = require('./pages/AngularHomepage');
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();

    angularHomepage.setName('Julie');
    angularHomepage.getGreeting().then(function(text){
        console.log(text);
    });
    expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
  });
}); 