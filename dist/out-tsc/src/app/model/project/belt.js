import { Branch } from "./branch";
import { ProtectedArea } from "./protectedArea";
import { ElectricalOutlet } from "./electricalOutlet";
export class Belt {
    constructor(id = '', name = '') {
        this.id = '';
        this.name = '';
        this.trapsNumber = 0;
        this.pressureCalculated = 0;
        this.pressureInt1 = 0;
        this.pressureInt2 = 0;
        this.pressureInt3 = 0;
        this.pressureInt4 = 0;
        this.pressureInt5 = 0;
        this.pressureInt6 = 0;
        this.pressureInt7 = 0;
        this.pressureInt8 = 0;
        this.pressureInt9 = 0;
        this.flowTheoretical = 0;
        this.flowCumulated = 0;
        this.controlSheltered = false;
        this.trapsColor = TrapsColor.WOOD;
        this.bottleType = BottleType.B10;
        this.bottleNumberB1 = 0;
        this.bottleNumberB2 = 0;
        this.co2KgPrice = 0;
        this.co2MonthRentPrice = 0;
        this.electricalOutlets = [];
        this.branches = [];
        this.protectedAreas = [];
        this.id = id;
        this.name = name;
    }
    static loadFromJSON(json) {
        var belt = Object.assign(new Belt, json);
        if (json.branches) {
            belt.branches = [];
            json.branches.forEach(jsonBranch => { belt.branches.push(Branch.loadFromJSON(jsonBranch)); });
        }
        if (json.electricalOutlets) {
            belt.electricalOutlets = [];
            json.electricalOutlets.forEach(jsonElectricalOutlet => { belt.electricalOutlets.push(ElectricalOutlet.loadFromJSON(jsonElectricalOutlet)); });
        }
        if (json.protectedAreas) {
            belt.protectedAreas = [];
            json.protectedAreas.forEach(jsonProtectedArea => { belt.protectedAreas.push(ProtectedArea.loadFromJSON(jsonProtectedArea)); });
        }
        return belt;
    }
    resetCalculationValues() {
        this.flowCumulated = 0;
        this.flowTheoretical = 0;
        this.pressureCalculated = 0;
        this.pressureInt1 = 0;
        this.pressureInt2 = 0;
        this.pressureInt3 = 0;
        this.pressureInt4 = 0;
        this.pressureInt5 = 0;
        this.pressureInt6 = 0;
        this.pressureInt7 = 0;
        this.pressureInt8 = 0;
        this.pressureInt9 = 0;
    }
}
export var TrapsColor;
(function (TrapsColor) {
    TrapsColor["WOOD"] = "WOOD";
    TrapsColor["GREEN"] = "GREEN";
    TrapsColor["BROWN"] = "BROWN";
})(TrapsColor || (TrapsColor = {}));
export var BottleType;
(function (BottleType) {
    BottleType["B10"] = "B10";
    BottleType["B20"] = "B20";
    BottleType["B34"] = "B34";
    BottleType["B37"] = "B37";
    BottleType["B50LB"] = "B50LB";
    BottleType["R100"] = "R100";
    BottleType["R180"] = "R180";
})(BottleType || (BottleType = {}));
//# sourceMappingURL=belt.js.map