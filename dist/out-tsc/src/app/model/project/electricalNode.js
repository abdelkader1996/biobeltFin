export class ElectricalNode {
    constructor() {
        this.id = '';
        this.nodeId = '';
    }
    static loadFromJSON(json) {
        return Object.assign(new ElectricalNode, json);
    }
}
//# sourceMappingURL=electricalNode.js.map