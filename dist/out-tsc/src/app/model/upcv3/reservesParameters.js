import { LocalDateTime } from "./LocalDateTime";
export class ReservesParameters {
    constructor() {
        this.co2ResActive = 0;
        this.co2ResActAdj = 0;
        this.co2ResActPrev = new LocalDateTime();
        this.co2ResInactPrev = new LocalDateTime();
        this.co2ResType = 0;
        this.co2Res1Status = 0;
        this.co2Res1FillVol = 0;
        this.co2Res1FillTime = new LocalDateTime();
        this.co2Res1ActVol = 0;
        this.co2Res1ActDur = 0;
        this.co2Res1StartVol = 0;
        this.co2Res1AuxVol = 0;
        this.co2Res2Status = 0;
        this.co2Res2FillVol = 0;
        this.co2Res2FillTime = new LocalDateTime();
        this.co2Res2ActVol = 0;
        this.co2Res2ActDur = 0;
        this.co2Res2StartVol = 0;
        this.co2Res2AuxVol = 0;
        this.co2ResLow = 0;
    }
    static loadFromJSON(json) {
        var reservesParameters = Object.assign(new ReservesParameters, json);
        if (json.co2ResActPrev)
            reservesParameters.co2ResActPrev = LocalDateTime.loadFromJSON(json.co2ResActPrev);
        if (json.co2ResInactPrev)
            reservesParameters.co2ResInactPrev = LocalDateTime.loadFromJSON(json.co2ResInactPrev);
        if (json.co2Res1FillTime)
            reservesParameters.co2Res1FillTime = LocalDateTime.loadFromJSON(json.co2Res1FillTime);
        if (json.co2Res2FillTime)
            reservesParameters.co2Res2FillTime = LocalDateTime.loadFromJSON(json.co2Res2FillTime);
        return reservesParameters;
    }
}
//# sourceMappingURL=reservesParameters.js.map