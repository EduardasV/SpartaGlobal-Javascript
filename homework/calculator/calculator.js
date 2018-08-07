first_prompt = true;
second_prompt = true;
third_prompt = true;
while (first_prompt){
  var first_number = prompt("Enter first number: ");
  if (first_number){
    if (first_number.match(/[0-9]/g))
    first_prompt = false;
    else
      alert("wrong format.");
  }
}
while (second_prompt){
  var operation = prompt("Enter operation for :" + first_number);
  if (operation){
    if (operation.match(/[+-/*]/g))
    second_prompt = false;
    else
    alert("wrong format.");
  }
}
while (third_prompt){
  var second_number = prompt("Enter second number for: " + first_number + operation);
  if (second_number){
    if (second_number.match(/[0-9]/g))
    third_prompt = false;
    else{
      alert("wrong format.");
    }
  }
}
if (operation == "+"){
  alert(parseInt(first_number, +, second_number));
} else if (operation == "-"){
  alert(parseInt(first_number, -, second_number));
} else if (operation == "/"){
  alert(parseInt(first_number, /, second_number));
} else{
  alert(parseInt(first_number, *, second_number));
}
