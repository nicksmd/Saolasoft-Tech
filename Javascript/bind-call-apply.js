/**
 * Created by quangh on 9/15/2017.
 */
/**
 * ref: https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
 */

x=100;
let obj = {
    x: 81,
    getX: function() {
        return this.x;
    }
};
console.log(obj.getX());
// global scope call
obj2 = obj.getX;
console.log(obj2());
// use .bind() when you want function to be called later with a certain context
console.log(obj.getX.bind(obj)());
// user .call() and .apply() when you want to invoke the function immediately
console.log(obj.getX.call(obj));
console.log(obj.getX.apply(obj));
