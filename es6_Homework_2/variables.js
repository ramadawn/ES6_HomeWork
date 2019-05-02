/*

var initializes a weakly typled variable 
whose scope is only limited by function or class.

let initializes a variable whose scope is limited to it's 
immeadete code block

const insitializes a constant variables that cannot be changed
const has the sane scope as var

*/

//initialize a standard var
var variable = true;

//initialize a let variable inside of an if statement code block
if (variable) {
    let codeBlock = true;
}

//initialize a constant
const PI = 3.16;