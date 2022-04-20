export class GeneralParameters {
    constructor() {
        this.upcMcuUid = "";
        this.upcFwVer = 0;
        this.upcMode = 0;
        this.upcStatus = 0;
        this.upcClock = 0;
        this.upcTimeZone = 0;
        this.upcLanguage = 0;
        this.upcTrapNum = 0;
        this.co2FlowRefTrap = 0;
        this.refFlowRateGperhour = 0;
        this.co2FlowRefNom = 0;
        this.co2FlowRefAdj = 0;
        this.co2PresOutRef1 = 0;
        this.co2PresOutRef2 = 0;
        this.co2PresOutRef3 = 0;
        this.co2PresOutRef4 = 0;
        this.co2PresOutRef5 = 0;
        this.co2PresOutRef6 = 0;
        this.co2PresOutRef7 = 0;
        this.co2PresOutRef8 = 0;
        this.co2PresOutRef9 = 0;
        this.co2PresOutRef10 = 0;
        this.co2PressOutTemp = 0;
        this.upcBattChrg = 0;
        this.upcBattTemp = 0;
        this.upcCo2PidInteg = 0;
        this.upcCo2PidDiff = 0;
        this.upcCo2PidProp = 300;
    }
    static loadFromJSON(json) {
        return Object.assign(new GeneralParameters, json);
    }
}
//# sourceMappingURL=generalParameters.js.map