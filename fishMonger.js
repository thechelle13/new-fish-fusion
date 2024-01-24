// Import the boatInventory function from the fishingBoat module.
const { boatInventory } = require("./fishingBoat.js");

// Invoke the boatInventory function to get the fish inventory.
const inventory = boatInventory();

// Create an array to store a modified inventory based on certain conditions.
const boatInventoryNew = [];

// Iterate through the original inventory to filter and modify data.
for (const fish of inventory) {
    // Check if the fish amount is greater than or equal to 10 and the price is less than or equal to 7.50.
    if (fish.amount >= 10 && fish.price <= 7.50) {
        // Push the fish into the new modified inventory.
        boatInventoryNew.push(fish);
    }
}

// Create an array to store the final menu items.
const menu = [];

// Define a function called mongerInventory.
const mongerInventory = () => {
    // Iterate through the modified inventory to filter and modify data.
    for (const selection of boatInventoryNew) {
        // Check if the selection price is less than or equal to 5 and the amount is greater than or equal to 10.
        if (selection.price <= 5 && selection.amount >= 10) {
            // Set the selection amount to 10.
            selection.amount = 10;
            // Push the selection into the final menu.
            menu.push(selection);
        }
    }
    // Return the final menu.
    return menu;
};

// Export the mongerInventory function for use in other modules.
module.exports = { mongerInventory };
