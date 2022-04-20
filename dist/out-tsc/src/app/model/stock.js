import { BottleType } from "./bottleType";
export class Stock {
    constructor() {
        this.id = '';
        this.name = '';
        this.bottleTypes = [];
        this.bottleTypeStringCeint = "";
        this.fullBottlesNumber = 0;
        this.emptyBottlesNumber = 0;
        this.selected = false;
    }
    get bottleTypesString() {
        var names = [];
        this.bottleTypes.forEach(bottleType => names.push(bottleType.designationString));
        return names.join(' | ');
    }
    static loadFromJSON(json) {
        var stock = Object.assign(new Stock, json);
        if (json.bottleTypes) {
            stock.bottleTypes = [];
            json.bottleTypes.forEach(jsonBottleType => { stock.bottleTypes.push(BottleType.loadFromJSON(jsonBottleType)); });
        }
        return stock;
    }
}
//# sourceMappingURL=stock.js.map