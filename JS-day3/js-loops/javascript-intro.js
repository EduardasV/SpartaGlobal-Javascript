/* for loops */

for (var i = 0; i < 10; i++) {
  console.log("This is a loop " + i);
}

var my_array = ["Ed", "Is a", "god"];

for (var i = 0; i < my_array.length; i++) {
  console.log(my_array[i]);
}

// while

var i = 0;
while (i < 5) {
  console.log("This loop has run " + i + " times");
  i++;
}

// do while

var number;

do {
  number = Math.random();
  console.log(number);
} while (number < 0.5);

// for loops

var my_object = new Object();

my_object.a = "1";
my_object.b = "2";
my_object.c = "3";

for (var key in my_object) {
  console.log(key);
  console.log(my_object[key]);
}

/* scope
code can see out but can't see in */
console.log("------ scope ------");

var outside_variable = 5;

function DoSomething() {
  console.log(outside_variable);
}

function DoSomethingTwo() {
  var inside_variable = 5;
}
DoSomethingTwo();

function FirstFunction() {
  console.log("I'm in the first function");
}

function SecondFunction() {
  FirstFunction();
  console.log("I'm in the second function");
}

SecondFunction();

//nested functions

function joinStringsAndPrint(string1, string2) {
  var new_string = string1 + string2;

  function printString(string) {
    console.log(string);

    //Q3 - will work because you can see outside of the function
    console.log(new_string);

    //Q4 - will work because you can see outside of the function
    console.log(string1 + string2);
  }
  printString(new_string);
  return new_string;
}

var string1 = "Hello ";
var string2 = "world";

joinStringsAndPrint(string1, string2);

// Q1 - will not work it's inside another function
// printString("run from outside joinStrings")

// Q2 - won't work variable inside function
// console.log(new_string);

// closure
// passing function as variables

function sayHello() {
  console.log("hello");
}

function functionCaller(functionToRun) {
  functionToRun();
}

functionCaller(sayHello);

//declare

function onTimerComplete() {
  console.log("Timer finished");
}

setTimeout(onTimerComplete, 3000);

// counter

function createCounter() {
  var total = 0;

  return function() {
    total++;
    return total;
  }
}

var counter = createCounter() // = 0

counter(); // = 1 --- counter = createCounter() --- counter() = createCounter.functionInside()
counter();
counter();

var total = counter();

console.log(total);
//it will be run after the loop is done --- self envoking
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, (i * 1000));
}
//function is going to run straight away
for (var i = 0; i < 10; i++) {
  setTimeout((function(j) {
    console.log(j);
  })(i), (i * 1000));
}
