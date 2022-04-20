export class Node {
    constructor() {
        this.id = '';
        this.nodeType = NodeType.HEXAGONAL_TRAP;
        this.textAngle = 0;
        this.textDistance = 5;
        this.prevLinkBuried = false;
        this.prevDistance = 0;
        this.lat = 0;
        this.lng = 0;
        this.flowIn = 0;
        this.flowOut = 0;
        this.flowCumulated = 0;
        this.flowPercent = 0;
        this.pressure = 0;
        this.lossPressureCumulated = 0;
        this.voltage = 0;
        this.powerLoss = 0;
        // Calculations only
        this.speedInputModule = 0;
        this.reynoldsNumber = 0;
        this.deltaPLaminaire = 0;
        this.junctionLoss = 0;
        this.differenceFlowAverage = 0;
        this.flowTotalReference = 0;
        this.I = 0;
        this.i = 0;
        this.R = 0;
        this.U = 0;
        this.U2 = 0;
    }
    static loadFromJSON(json) {
        return Object.assign(new Node, json);
    }
    resetCalculationValues() {
        this.flowIn = 0;
        this.flowOut = 0;
        this.flowCumulated = 0;
        this.flowPercent = 0;
        this.pressure = 0;
        this.lossPressureCumulated = 0;
        this.speedInputModule = 0;
        this.reynoldsNumber = 0;
        this.deltaPLaminaire = 0;
        this.junctionLoss = 0;
        this.differenceFlowAverage = 0;
        this.flowTotalReference = 0;
    }
}
export var NodeType;
(function (NodeType) {
    NodeType["CONTROL"] = "CONTROL";
    NodeType["RECTANGULAR_TRAP"] = "RECTANGULAR_TRAP";
    NodeType["HEXAGONAL_TRAP"] = "HEXAGONAL_TRAP";
    NodeType["INTERMEDIATE"] = "INTERMEDIATE";
})(NodeType || (NodeType = {}));
//# sourceMappingURL=node.js.map