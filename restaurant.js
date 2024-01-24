const { mongerInventory } = require("./fishMonger.js");

const inventory = mongerInventory();

const boughtInventory = [];

const fishMenu = (dailyPriceLimit) => {
    let menuHTML = `<h1>Menu</h1>\n<article class="menu">\n`
    for (const fish of inventory) {
        fish.amount = fish.amount * 0.50;
        boughtInventory.push(fish);

        
        menuHTML += `   <h2>${fish.species}</h2>\n`;
        menuHTML += `   <section class="menu_item">${fish.species} Soup</section>\n`;
        menuHTML += `   <section class="menu_item">${fish.species} Sandwich</section>\n`;
        menuHTML += `   <section class="menu_item">Grilled ${fish.species}</section>\n`;
        }
    menuHTML += "</article>"
    
    return menuHTML;
};

module.exports = {fishMenu};

