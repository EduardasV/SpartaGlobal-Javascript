first = true;
second = true;
third = true;

while (first){
  var first_number = prompt("Enter first number: ");
  if (first_number){
    if (first_number.match(/[0-9]/g))
    first = false;
    else
      alert("wrong format.");
  }
}
while (second){
  var operation = prompt("Enter operation for :" + first_number);
  if (operation){
    if (operation.match(/[+-/*]/g))
    second = false;
    else
    alert("wrong format.");
  }
}
while (third){
  var second_number = prompt("Enter second number for: " + first_number + operation);
  if (second_number){
    if (second_number.match(/[0-9]/g))
    third = false;
    else{
      alert("wrong format.");
    }
  }
}
if (operation == "+"){
  alert(parseInt(first_number) + parseInt(second_number));
} else if (operation == "-"){
  alert(parseInt(first_number) - parseInt(second_number));
} else if (operation == "/"){
  alert(parseInt(first_number) / parseInt(second_number));
} else{
  alert(parseInt(first_number) * parseInt(second_number));
}
