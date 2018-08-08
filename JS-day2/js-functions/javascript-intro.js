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

// conrtol flow by Anthony
console.log("------ control flow ------");

/*
for an if statement the statement inside the parentheses has to have a true or false argument

we will make the sentence : "if the money in pocket less than £10 go home otherwise we get a drink" into code
with the code bellow 20 is > 10 so it will run the code inside the if statement
if money_in_my_pocket is between 10 and 5 it will run the code inside else if money_in_my_pocket > 5 section
if money_in_my_pocket is < 10 it will execute the code inside else
*/
var money_in_my_pocket = parseFloat(prompt("How much money do you have?"));
if(money_in_my_pocket > 10){
  console.log("Another drink please!");
}else if(money_in_my_pocket > 5){
  console.log("Just crisps then");
}else{
  console.log("I'm off Home");
}

// comparison operators

/*
10 > 5               will be true
false == !true       will be true
1 < 3                will be true
1 != 1               will be false
10 <= 10             will be true
10 >= 10             will be true
"a" < "b"            will be true -- reason is that A and B have a position in the alphabet it will check their position and show true and a is lower than b
"z" > "c"            will be true
true && true         will be true
true && false        will be false
5>10 && 3<5          will be false
true || true         will be true
true || false        will be true
false || !true       will be false

implementing it in code:
when you have more than £10 and drank less than 3 drinks.
when you have more than £5 or the crisps cost £0, also if you had more than 2 drinks and have more than £5 or crisps cost £0.
*/

console.log("------ comparison practice ------");

var money_in_my_pocket = parseFloat(prompt("How much money do you have?"));
var drinks_drink = parseFloat(prompt("How many have you had already?"));
var price_of_crisp = parseFloat(prompt("HOw much are those crisps"));

if(money_in_my_pocket > 10 && drinks_drink < 3){
  console.log("Another drink please!");
}else if(money_in_my_pocket > 5 || price_of_crisp == 0){
  console.log("Just crisps then");
}else{
  console.log("I'm off Home");
}

/*
switch statements

if version of switch statements
*/

console.log("------ switch statements ------");

var name = "tim";

if(name == "bob"){
  console.log("hi bob");
}else if (name == "tim"){
  console.log("hi tim");
}else if (name == "steve"){
  console.log("hi steve");
}

/*
switch version

switch uses strict comparison ===
*/

switch (name) {
  case "bob":
    console.log("hi bob");
    break;
  case "tim":
    console.log("hi tim");
    break;
  case "steve":
    console.log("hi steve");
    break;
  default:
    console.log("hi default person");
}
