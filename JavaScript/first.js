const num1 = prompt("Enter first number:");       // First number
const num2 = prompt("Enter second number: ");        // Second number
let operator = prompt("Enter operater: ")  // Operator (change this to test other operations)

switch (operator) {
  case '+':
    console.log(`Result: ${num1} + ${num2} = ${num1 + num2}`);
    break;

  case '-':
    console.log(`Result: ${num1} - ${num2} = ${num1 - num2}`);
    break;

  case '*':
    console.log(`Result: ${num1} * ${num2} = ${num1 * num2}`);
    break;

  case '/':
    switch (num2) {
      case 0:
        console.log('Error: Division by zero is not allowed.');
        break;
      default:
        console.log(`Result: ${num1} / ${num2} = ${num1 / num2}`);
        break;
    }
    break;

  default:
    console.log('Invalid operator. Please use +, -, *, or /.');
    break;
}