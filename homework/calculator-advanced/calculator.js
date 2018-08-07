function Calculator(){
  var first_number_input = parseFloat(prompt("Enter your first number: "));
  var operation_input = prompt("Enter your operation for: " + first_number_input);
  var second_number_input = parseFloat(prompt("Enter your second number for: " + first_number_input + operation_input));

  switch (operation_input) {
    case "+":
      alert("Your answer: " + (first_number_input + second_number_input));
      break;
    case "-":
      alert("Your answer: " + (first_number_input - second_number_input));
      break;
    case "*":
      alert("Your answer: " + (first_number_input * second_number_input));
      break;
    case "/":
      alert("Your answer: " + (first_number_input / second_number_input));
      break;
    case "^":
      alert("Your answer: " + (Math.pow(first_number_input, second_number_input)));
      break;
    case "r":
      alert("Your answer: " + (Math.sqrt(first_number_input)));
      break;
    default:
      alert("Invalid input")
  }
}
