/**
 * Created by quangh on 9/15/2017.
 */
//"use strict";
// undeclared: assign a value to an identifier that is not previously created using let, var, const

function foo(){
    x=1;
}

foo();
console.log(x);
// undefined is a defined variable, but not assigned a value.
// using "===" or typeof to check

let y;
console.log(y);
console.log(y===undefined);
console.log(typeof y === 'undefined');
console.log(y==undefined);
// warning: dont use "==" to check undefined variable because :
let z = null;
console.log(z==undefined);

// null variable is a defined and assigned variable: its value is "null" ~ no value.
// using "===" to check null variable

let a = null;
console.log(a===null);
