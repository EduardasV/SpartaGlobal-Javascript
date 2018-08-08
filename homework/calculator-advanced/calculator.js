while (1) {
  var calculator_type_input = prompt("Welcome to the handy calculator press: (1)basic calculator, (2)BMI calculator, (3)Trip Calculator");

  switch (calculator_type_input) {
    case "1":
      Calculator();
      break;
    case "2":
      BMI();
      break;
    case "3":
      TripCalculator();
      break;
    default:

  }
}

function TripCalculator() {
  var distance_input = parseFloat(prompt("Enter your distance in Miles: "));
  var fuel_efficiency_input = parseFloat(prompt("Enter your fuel efficiency in MPG: "));
  var cost_per_galon_input = parseFloat(prompt("Enter your cost per galon: "));
  var speed_mph_input = parseFloat(prompt("Enter your speed in MPH: "));
  var duration = distance_input / speed_mph_input;
  if (speed_mph_input > 60) {
    var reducing_fuel_efficiency_input = speed_mph_input - 60;
    reducing_fuel_efficiency_input *= 2;
    fuel_efficiency_input -= reducing_fuel_efficiency_input;
    console.log(fuel_efficiency_input);
  }
  if (fuel_efficiency_input < 2) {
    fuel_efficiency_input = 2;
  }
  var total_price = ((distance_input / fuel_efficiency_input) * cost_per_galon_input);
  alert("Your trip will take " + duration.toFixed(2) + " hours and cost £" + total_price);
}

function BMI() {
  var metric_or_imperial_input = prompt("(1)Metric or (2)Imperial");

  switch (metric_or_imperial_input) {
    case "1":
      var first_number_input = parseFloat(prompt("Input your weight in kilograms: "));
      var second_number_input = parseFloat(prompt("Input your height in centimeters: ")) / 100;
      alert("Your BMI is: " + (
      (first_number_input / Math.pow(second_number_input, 2))));
      break;
    case "2":
      var first_number_input = parseFloat(prompt("Input your weight in pounds: "));
      var second_number_input = parseFloat(prompt("Input your height in inches: "));
      alert("Your BMI is: " + (
      ((first_number_input * 703) / Math.pow(second_number_input, 2))));
      break;
    default:
  }
}

function Calculator() {
  var first_number_input = parseFloat(prompt("Enter your first number: "));
  var operation_input = prompt("Enter your operation for: " + first_number_input);
  var second_number_input = parseFloat(prompt("Enter your second number for: " + first_number_input + operation_input));

  switch (operation_input) {
    case "+":
      alert("Your answer: " + (
      first_number_input + second_number_input));
      break;
    case "-":
      alert("Your answer: " + (
      first_number_input - second_number_input));
      break;
    case "*":
      alert("Your answer: " + (
      first_number_input * second_number_input));
      break;
    case "/":
      alert("Your answer: " + (
      first_number_input / second_number_input));
      break;
    case "^":
      alert("Your answer: " + (
      Math.pow(first_number_input, second_number_input)));
      break;
    case "r":
      alert("Your answer: " + (
      Math.sqrt(first_number_input)));
      break;
    default:
      alert("Invalid input")
  }
}
