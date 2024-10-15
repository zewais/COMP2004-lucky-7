// Purpose: Contains utility functions for the application.
//randomNumber: Returns a random number between the min and max values.
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//getRolls: Returns an array of random numbers based on the number of rolls.
const getRolls = (numberOfDice) => {
  return Array.from({ length: numberOfDice }, () => randomNumber(1, 6));
};
//totalNumber: Returns the total of all the numbers in the array.
const totalNumber = (arr) => {
  return arr.reduce((accumlator, current) => accumlator + current, 0);
};

// Export the functions.
export { randomNumber, totalNumber, getRolls };
