const {boatInventory} = require("./fishingBoat.js")

const inventory = boatInventory()

const boatInventoryNew = []

for (const fish of inventory) {
    if (fish.amount >+ 10 && fish.price <= 7.50){
        boatInventoryNew.push(fish)
    }
}

const menu = []

const mongerInventory = () => {
    for ( const selection of boatInventoryNew) {
        if (selection.price <= 5 && selection.amount >= 10) {
            selection.amount = 10
            menu.push(selection)
        }
        } return menu
    } 

module.exports = {mongerInventory}