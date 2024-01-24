// Import the mongerInventory function from the fishMonger module.
const { mongerInventory } = require("./fishMonger.js");

// Invoke the mongerInventory function to get the fish inventory.
const inventory = mongerInventory();

// Create an array to store purchased fish inventory.
const boughtInventory = [];

// Define a function called fishMenu that takes dailyPriceLimit as a parameter.
const fishMenu = (dailyPriceLimit) => {
  // Initialize the menuHTML string with the opening HTML tags.
  let menuHTML = `<h1>Menu</h1>\n<article class="menu">\n`;

  // Iterate through the fish inventory.
  for (const fish of inventory) {
    // Update the fish amount and push it to the boughtInventory array.
    fish.amount = fish.amount * 0.50;
    boughtInventory.push(fish);

    // Append HTML elements for each fish to the menuHTML string.
    menuHTML += `<h2>${fish.species}</h2>\n`;
    menuHTML += `<section class="menu__item">${fish.species} Soup</section>\n`;
    menuHTML += `<section class="menu__item">${fish.species} Sandwich</section>\n`;
    menuHTML += `<section class="menu__item">Grilled ${fish.species}</section>\n`;
  }

  // Close the article tag in the menuHTML string.
  menuHTML += "</article>";

  // Assuming you are appending the dailyPriceLimit to the menu somewhere
  menuHTML += `<p>Daily Price Limit: ${dailyPriceLimit}</p>`;

  // Return the final menuHTML string.
  return menuHTML;
};

// Export the fishMenu function for use in other modules.
module.exports = { fishMenu };


