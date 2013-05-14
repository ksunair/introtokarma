/**
 * Created with JetBrains WebStorm.
 * User: Patrick
 * Date: 5/14/13
 * Time: 1:08 PM
 * To change this template use File | Settings | File Templates.
 */
describe('main page testing', function(){
   beforeEach(function(){
       browser().navigateTo('../../app/index.html');
   });

   it('should multiply two numbers', function(){
      input('firstNumber').enter(2);
      input('secondNumber').enter(2);
      element(':button').click();
      expect(binding('result')).toEqual('4.00');
   });

    it('should multiply two numbers with three digit precision', function(){
        input('firstNumber').enter(2);
        input('secondNumber').enter(2);
        input('decimals').enter(3);
        element(':button').click();
        expect(binding('result')).toEqual('4.000');
    });

    it('should multiply two numbers with no decimal digits', function(){
        input('firstNumber').enter(2);
        input('secondNumber').enter(2);
        input('decimals').enter(0);
        element(':button').click();
        expect(binding('result')).toEqual('4');
    });
});
