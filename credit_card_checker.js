// Import the readline library for handling terminal input/output
const readline = require("readline");

// Create a readline interface for taking user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user for credit card number
rl.question("Number: ", function (input) {
  // Parse the card number and store it as a BigInt to handle large numbers
  const cardNumber = BigInt(input.trim());

  // Initialize variables
  let count = 0; // Number of digits
  let sum = 0; // Sum for Luhn's algorithm
  let firstDigit = 0; // Store first digit of the card number
  let firstTwoDigits = 0; // Store first two digits of the card number

  // Temporary variable for iterating through digits
  let temp = cardNumber;

  // Loop to apply Luhn's Algorithm and to find the first and first two digits
  while (temp > 0) {
    // Extract the last digit of the number
    const lastDigit = Number(temp % 10n); // Using BigInt so we need 'n'

    // If the position is even, add the digit to the sum
    if (count % 2 === 0) {
      sum += lastDigit;
    } else {
      // If odd, double it and add individual digits to the sum
      const product = lastDigit * 2;
      sum += Math.floor(product / 10) + (product % 10);
    }

    // Check if this could be the first or first two digits of the card
    if (temp < 100 && temp > 9) {
      firstTwoDigits = Number(temp);
    }
    if (temp < 10) {
      firstDigit = Number(temp);
    }

    // Remove the last digit to continue the loop
    temp = temp / 10n; // BigInt division

    // Increase the digit count
    count++;
  }

  // Check the validity of the card using Luhn's algorithm
  if (sum % 10 !== 0) {
    console.log("INVALID");
    rl.close();
    return;
  }

  // Check the card type based on first digit(s) and total length
  if ((firstTwoDigits === 34 || firstTwoDigits === 37) && count === 15) {
    console.log("AMEX");
  } else if (firstTwoDigits > 50 && firstTwoDigits < 56 && count === 16) {
    console.log("MASTERCARD");
  } else if (firstDigit === 4 && (count === 13 || count === 16)) {
    console.log("VISA");
  } else {
    console.log("INVALID");
  }

  // Close the readline interface
  rl.close();
});
