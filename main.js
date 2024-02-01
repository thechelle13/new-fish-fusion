// Import the fishMenu function from the restaurant module.
const { fishMenu } = require("./restaurant.js");

// Set the dailyPriceLimit variable to 3.99.
const dailyPriceLimit = 3.99;

// Call the fishMenu function with the dailyPriceLimit as an argument to generate the menu.
const menu = fishMenu(dailyPriceLimit);

// Log the generated menu to the console.
console.log(menu);
