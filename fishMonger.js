// Import the boatInventory function from the fishingBoat module.
const { boatInventory } = require("./fishingBoat.js");

// Invoke the boatInventory function to get the fish inventory.
const inventory = boatInventory();

// Define a function called filterAndModifyInventory.
const filterAndModifyInventory = () => {
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

    // Return the modified inventory.
    return boatInventoryNew;
};

// Define a function called mongerInventory.
const mongerInventory = (dailyPriceLimit) => {
    // Call filterAndModifyInventory to get the modified inventory.
    const boatInventoryNew = filterAndModifyInventory();

    // Create an array to store the final menu items.
    const menu = [];

    // Iterate through the modified inventory to filter and modify data.
    for (const selection of boatInventoryNew) {
        // Check if the selection price is less than or equal to 5 and the amount is greater than or equal to 10.
        // and the amount is greater than or equal to 10.
        if (selection.price <= dailyPriceLimit && selection.amount >= 10) {
            // Push the selection into the final menu with an amount of 5.
            menu.push({ ...selection, amount: 5 });
        }
    }

    // Return the final menu.
    return menu;
};

// Export the mongerInventory function for use in other modules.
module.exports = { mongerInventory };
