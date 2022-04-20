export class DiffCo2 {
    constructor() {
        this.delay = 0;
        this.duration = 0;
        this.intensity = 0;
    }
    static loadFromJSON(json) {
        return Object.assign(new DiffCo2, json);
    }
}
//# sourceMappingURL=diffCo2.js.map