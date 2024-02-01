## Practice

-in progress

## Project Flow

```mermaid
sequenceDiagram
    participant FishingBoat
    participant FishMonger
    participant Restaurant

    FishingBoat->>FishMonger: boatInventory()
    FishMonger-->>FishingBoat: Purchased fish array

    FishMonger->>Restaurant: mongerInventory(chefBudget)
    Restaurant-->>FishMonger: Chef's selected fish array

    FishMonger->>Restaurant: fishMenu(dailyPriceLimit)
    Restaurant-->>FishMonger: Final menu HTML

    Note over FishMonger: Inventory calculations and filtering
    Note over Restaurant: Menu HTML generation
```