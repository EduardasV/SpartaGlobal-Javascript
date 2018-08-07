/* ------------------ feedback ------------------

 * don't edit presenting code before you present
 * if you use short variable names that don't make sense comment it out
 * have a stage repository, which you use to present so if you do make changes to code it won't break your presentation code
 * clear variable names, so if you look at it you know exactly what it is

 ------------------ feedback end ------------------ */

// Richards demo - something you should never use.
var num1 = 5;
var operator = "+";
var num2 = 10;

console.log(eval(num1 + operator + num2));

// ------------------ FUNCTIONS INTRO ------------------

/*
- DRY
  D - don't
  R - repeat
  Y - yourself

declaration    name      parameters  block-list of instructions
function    addNumbers    ()         {}

name              decleration  parameters  block-list of instructions
var addNumbers2 = function      ()          {}
This is used to add the result of the function to a variable from the start

2 functions above are the same
*/

var results = 5 + 10;
var results2 = 1 + 2;

console.log(results);

// Declaring Function
// name function
console.log("------ functions ------");
function  addNumbers(){
  var function_results = 5 + 10;
  console.log(function_results);
}
// un-named function
var addNumbers2 = function(){
  var function_results2 = 5 + 11;
  console.log(function_results2);
}

// using the functions
addNumbers();
addNumbers2();

// hoisting
/*
when a function is called before it is declaired, it will find the function bring it to the top and run the function even if it's at the bottom
*/
console.log("------ hoisting ------");

makeNoise();

function makeNoise(){
  console.log("how annoying - we will never use these in our games")
}

//function parameters
/*
use this to specify what values you want to run through the function
*/
console.log("------ function parameters ------");

function addNumbersTogether(number1, number2){
  var results = number1 + number2;
  console.log(results);
}

addNumbersTogether(1,5);
addNumbersTogether(10,5);

//returns in Functions
/*
when you pass a value you get an output (without console.log or alert)
give the value of the function to the variable that asked for it

after return anything you have underneath (within a loop/function) will not be executed
works like break but returns a value when stopping the function/loop
*/
console.log("------ return in functions ------");

function addNumberWithReturn(number1, number2){
  var result = number1 + number2;
  return result;
}

var answer1 = addNumberWithReturn(1,3);

var answer = addNumberWithReturn(addNumberWithReturn(5,7),addNumberWithReturn(addNumberWithReturn(2,10),2));
// answer should be 26
console.log(answer);
