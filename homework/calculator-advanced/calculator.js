

function BMI(){
  var metric_or_imperial_input = prompt("(1)Metric or (2)Imperial");
  switch (metric_or_imperial_input) {
    case "1":
      var first_number_input = parseFloat(prompt("Input your weight in kilograms: "));
      var second_number_input = parseFloat(prompt("Input your height in centimeters: "))/100;
      alert("Your BMI is: " + ((first_number_input/Math.pow(second_number_input,2))));
      break;
    case "2":
      var first_number_input = parseFloat(prompt("Input your weight in pounds: "));
      var second_number_input = parseFloat(prompt("Input your height in inches: "));
      alert("Your BMI is: " + (((first_number_input*703)/Math.pow(second_number_input,2))));
      break;
    default:
  }
}
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
