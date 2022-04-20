import { DiffCo2Program } from "./diffCo2Program";
import { DiffCo2 } from "./diffCo2";
export class DiffusionParameters {
    constructor() {
        this.diffHourSunrise = 0;
        this.diffHourSunset = 0;
        this.diffCo2Program1 = new DiffCo2Program();
        this.diffCo2Program2 = new DiffCo2Program();
        this.diffCo2Program3 = new DiffCo2Program();
        this.diffCo2Program4 = new DiffCo2Program();
        this.diffCo2Program5 = new DiffCo2Program();
        this.diffCo2Program6 = new DiffCo2Program();
        this.diffCo2Program7 = new DiffCo2Program();
        this.diffCo2Program8 = new DiffCo2Program();
        this.diffCo2Program9 = new DiffCo2Program();
        this.diffCo2Program10 = new DiffCo2Program();
        this.diffCo2Sunrise = new DiffCo2();
        this.diffCo2Sunset = new DiffCo2();
        this.diffCo2Instant = new DiffCo2();
        this.co2PresInpMeas1 = 0;
        this.co2PresInpMeas2 = 0;
        this.co2PresOutMeas = 0;
        this.co2FlowMeas = 0;
        this.co2PresInpAvg = 0;
        this.co2PressInpOffs = 0;
        this.co2PresOutAvg = 0;
        this.co2PressOutOffs = 0;
        this.co2PressOutComp = 0;
        this.co2FlowAvg = 0;
        this.co2FlowOffs = 0;
        this.upcCo2DiffLvl = 0;
        this.upcDiffLvlAdj = 0;
        this.co2TempAvg = 0;
    }
    static loadFromJSON(json) {
        var diffusionParameters = Object.assign(new DiffusionParameters, json);
        if (json.diffCo2Program1)
            diffusionParameters.diffCo2Program1 = DiffCo2Program.loadFromJSON(json.diffCo2Program1);
        if (json.diffCo2Program2)
            diffusionParameters.diffCo2Program2 = DiffCo2Program.loadFromJSON(json.diffCo2Program2);
        if (json.diffCo2Program3)
            diffusionParameters.diffCo2Program3 = DiffCo2Program.loadFromJSON(json.diffCo2Program3);
        if (json.diffCo2Program4)
            diffusionParameters.diffCo2Program4 = DiffCo2Program.loadFromJSON(json.diffCo2Program4);
        if (json.diffCo2Program5)
            diffusionParameters.diffCo2Program5 = DiffCo2Program.loadFromJSON(json.diffCo2Program5);
        if (json.diffCo2Program6)
            diffusionParameters.diffCo2Program6 = DiffCo2Program.loadFromJSON(json.diffCo2Program6);
        if (json.diffCo2Program7)
            diffusionParameters.diffCo2Program7 = DiffCo2Program.loadFromJSON(json.diffCo2Program7);
        if (json.diffCo2Program8)
            diffusionParameters.diffCo2Program8 = DiffCo2Program.loadFromJSON(json.diffCo2Program8);
        if (json.diffCo2Program9)
            diffusionParameters.diffCo2Program9 = DiffCo2Program.loadFromJSON(json.diffCo2Program9);
        if (json.diffCo2Program10)
            diffusionParameters.diffCo2Program10 = DiffCo2Program.loadFromJSON(json.diffCo2Program10);
        if (json.diffCo2Sunrise)
            diffusionParameters.diffCo2Sunrise = DiffCo2.loadFromJSON(json.diffCo2Sunrise);
        if (json.diffCo2Sunset)
            diffusionParameters.diffCo2Sunset = DiffCo2.loadFromJSON(json.diffCo2Sunset);
        if (json.diffCo2Instant)
            diffusionParameters.diffCo2Instant = DiffCo2.loadFromJSON(json.diffCo2Instant);
        return diffusionParameters;
    }
}
//# sourceMappingURL=diffusionParameters.js.map