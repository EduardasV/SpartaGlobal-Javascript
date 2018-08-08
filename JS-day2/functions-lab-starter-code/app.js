// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (number1,number2) {
  var result = number1 * number2;
  return result;
}
// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(number1,number2,number3){
  var result = number1 + number2 + number3;
  return result;
}
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(number1,number2){
  if(number1 < number2)
    return number1;
  else
    return number2;
}
// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(number1,number2,number3){
  if(number1>number2 && number2>number3)
    return number1;
  else if (number1<number2 && number1>number3)
    return number2;
  else
    return number3;
}
// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(string){
  var split_string = string.split("");
  var string_reversed = split_string.reverse();
  var result = string_reversed.join("");
  return result;
}
// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel(string){
  var result = string.replace(/[aeiou]/gi, '');
  return result;
}
// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if((array[i]%2) ==0)
      newArray.push(array[i]);
  }
  return newArray;
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(array){
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if((array[i]%2) !=0)
      newArray.push(array[i]);
  }
  return newArray;
}
// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(array){
  var main_string = array[0];
  for(var i = 0; i < array.length; i++){
    if(main_string.length < array[i].length)
      main_string = array[i];
  }
  return main_string;
}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree(array){
  array.splice(0,3);
  return array;
}
//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(array){
  var result = {};
  if((array.length%2) ==0){
    for (var i = 0; i < array.length; i+=2)
      result[array[i]] = array[i+1];
    return result;
  }else
    console.log("not even");
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
function fizzBuzz(number){
  var result = number;
  if((number%5) == 0 && (number%3) == 0)
    result = "FizzBuzz"
  else if((number%3) == 0)
    result = "Fizz";
  else if((number%5) == 0)
    result = "Buzz";

  return result;
}
// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
