const readline = require('readline');

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Array of fruits with their costs
const fruits = [
  { name: 'Apple', cost: 10 },
  { name: 'Banana', cost: 5 },
  { name: 'Strawberry', cost: 15 },
  { name: 'Orange', cost: 8 },
  { name: 'Grapes', cost: 12 },
];

// Display fruit options
console.log('Available fruits:');
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit.name} - $${fruit.cost}`);
});

// Start the program
rl.question('Choose a fruit by number (1-5): ', (choice) => {
  const fruitIndex = parseInt(choice) - 1;

  switch (fruitIndex) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      const chosenFruit = fruits[fruitIndex];
      console.log(`You chose ${chosenFruit.name}, which costs $${chosenFruit.cost}.`);
      
      rl.question('Do you want anything else with it? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
          console.log('Additional options:');
          fruits.forEach((fruit, index) => {
            console.log(`${index + 1}. ${fruit.name} - $${fruit.cost}`);
          });

          rl.question('Choose additional items by number (comma-separated): ', (additionalChoices) => {
            const indices = additionalChoices.split(',').map(Number).map(i => i - 1);
            let totalCost = chosenFruit.cost;

            console.log('You added:');
            for (const index of indices) {
              if (index >= 0 && index < fruits.length) {
                console.log(`${fruits[index].name} - $${fruits[index].cost}`);
                totalCost += fruits[index].cost;
              } else {
                console.log('Invalid choice ignored.');
              }
            }

            console.log(`Total cost: $${totalCost}`);
            console.log('Thank you for your purchase!');
            rl.close();
          });
        } else {
          console.log('Have a great day!');
          rl.close();
        }
      });
      break;

    default:
      console.log('Invalid choice. Please restart and choose a valid option.');
      rl.close();
  }
});