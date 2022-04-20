export class ProtectedArea {
    constructor(id = '') {
        this.id = '';
        this.width = 100;
        this.color = '#0A4A14';
        this.points = [];
        this.id = id;
    }
    static loadFromJSON(json) {
        var protectedArea = Object.assign(new ProtectedArea, json);
        if (json.points)
            try {
                protectedArea.points = JSON.parse(json.points);
            }
            catch (_a) {
                protectedArea.points = json.points;
            }
        return protectedArea;
    }
}
//# sourceMappingURL=protectedArea.js.map