import { ElectricalNode } from "./electricalNode";
export class ElectricalBranch {
    constructor() {
        this.id = '';
        this.electricalNodes = [];
    }
    static loadFromJSON(json) {
        var electricalBranch = Object.assign(new ElectricalBranch, json);
        if (json.electricalNodes) {
            electricalBranch.electricalNodes = [];
            json.electricalNodes.forEach(jsonElectricalNode => { electricalBranch.electricalNodes.push(ElectricalNode.loadFromJSON(jsonElectricalNode)); });
        }
        return electricalBranch;
    }
}
//# sourceMappingURL=electricalBranch.js.map