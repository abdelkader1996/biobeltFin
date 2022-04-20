import { ElectricalBranch } from "./electricalBranch";
export class Transformer {
    constructor(id = '', angle = 0, electricCase = false, powerConsumed = 0) {
        this.id = '';
        this.angle = 0;
        this.electricCase = false;
        this.powerConsumed = 0;
        this.electricalBranches = [];
        this.id = id;
        this.angle = angle;
        this.electricCase = electricCase;
        this.powerConsumed = powerConsumed;
    }
    static loadFromJSON(json) {
        var transformer = Object.assign(new Transformer, json);
        if (json.electricalBranches) {
            transformer.electricalBranches = [];
            json.electricalBranches.forEach(jsonElectricalBranch => { transformer.electricalBranches.push(ElectricalBranch.loadFromJSON(jsonElectricalBranch)); });
        }
        return transformer;
    }
}
//# sourceMappingURL=transformer.js.map