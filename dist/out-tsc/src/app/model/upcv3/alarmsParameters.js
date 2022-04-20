export class AlarmsParameters {
    constructor() {
        this.alrResLowEn = false;
        this.alrResEmptyEn = false;
        this.alrPresInpEn = false;
        this.alrPresOutEn = false;
        this.alrFlowAvgEn = false;
        this.alrPowBackEn = false;
        this.alrPowDownEn = false;
        this.alrEmptyPress = 0;
        this.alrEmptyVol = 0;
        this.alrPresInpTol = 0;
        this.alrPresOutTol = 0;
        this.alrFlowSetTol = 0;
        this.alrResLowLevel = 0;
        this.alrResEmptyFlow = 0;
        this.alrResEmptyTest = 3600;
        this.alrSmsNum1 = "";
        this.alrSmsNum2 = "";
        this.alrSmsNum3 = "";
        this.alrSmsNum4 = "";
        this.alrSmsNum5 = "";
        this.alrPressInpSet1_1 = 0;
        this.alrPressInpSet1_2 = 0;
        this.alrPressInpSet1_3 = 0;
        this.alrPressInpSet1_4 = 0;
        this.alrPressInpSet1_5 = 0;
        this.alrPressInpSet1_6 = 0;
        this.alrPressInpSet1_7 = 0;
        this.alrPressInpSet1_8 = 0;
        this.alrPressInpSet1_9 = 0;
        this.alrPressInpSet1_10 = 0;
        this.alrPressInpSet2_1 = 0;
        this.alrPressInpSet2_2 = 0;
        this.alrPressInpSet2_3 = 0;
        this.alrPressInpSet2_4 = 0;
        this.alrPressInpSet2_5 = 0;
        this.alrPressInpSet2_6 = 0;
        this.alrPressInpSet2_7 = 0;
        this.alrPressInpSet2_8 = 0;
        this.alrPressInpSet2_9 = 0;
        this.alrPressInpSet2_10 = 0;
        this.alrPressOutSet_1 = 0;
        this.alrPressOutSet_2 = 0;
        this.alrPressOutSet_3 = 0;
        this.alrPressOutSet_4 = 0;
        this.alrPressOutSet_5 = 0;
        this.alrPressOutSet_6 = 0;
        this.alrPressOutSet_7 = 0;
        this.alrPressOutSet_8 = 0;
        this.alrPressOutSet_9 = 0;
        this.alrPressOutSet_10 = 0;
        this.alrPressSetTemp = 0;
    }
    static loadFromJSON(json) {
        return Object.assign(new AlarmsParameters, json);
    }
}
//# sourceMappingURL=alarmsParameters.js.map