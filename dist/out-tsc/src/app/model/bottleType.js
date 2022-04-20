export class BottleType {
    constructor() {
        this.id = '';
        this.designation = 0;
        this.brand = '';
        this.isRembo = false;
    }
    get designationString() {
        return this.designation + ' kg' + (this.isRembo ? ' (Rembo) - ' : ' - ') + this.brand;
    }
    static loadFromJSON(json) {
        return Object.assign(new BottleType, json);
    }
}
//# sourceMappingURL=bottleType.js.map