import { Stock } from "./stock";
import { UPCV3 } from "./upcv3/upcv3";
export class Site {
    constructor() {
        this.id = '';
        this.clientNumber = '';
        this.name = '';
        this.infos = '';
        this.address = '';
        this.lat = 0;
        this.lng = 0;
        this.stockClient = '';
        this.upcv3 = [];
    }
    get state() {
        var state = State.RESERVE_1;
        // If all belts hibernating
        var hibernating = true;
        this.upcv3.forEach(upcv3 => { if (!upcv3.hibernated)
            hibernating = false; });
        // If a belt is in B2
        var b2 = false;
        this.upcv3.forEach(upcv3 => { if (!upcv3.hibernated && (upcv3.reservesParameters.co2Res1Status == 0 || upcv3.reservesParameters.co2Res2Status == 0))
            b2 = true; });
        // If a belt is in B3 OR DISABLE OR EMPTY
        var disable = false;
        this.upcv3.forEach(upcv3 => { if (!upcv3.hibernated && (upcv3.reservesParameters.co2Res1Status == 0 && upcv3.reservesParameters.co2Res2Status == 0))
            disable = true; });
        if (hibernating)
            state = State.HIBERNATING;
        if (b2)
            state = State.RESERVE_2;
        if (disable)
            state = State.DISABLE;
        return state;
    }
    get communicationState() {
        var state = true;
        // UPC-V3
        this.upcv3.forEach(upcv3 => {
            if (!upcv3.hibernated && upcv3.lastPollResult != 0)
                state = false;
        });
        return state;
    }
    get hasBelts() {
        return this.upcv3.length > 0;
    }
    static loadFromJSON(json) {
        var site = Object.assign(new Site, json);
        if (json.stock)
            site.stock = Stock.loadFromJSON(json.stock);
        if (json.upcv3) {
            site.upcv3 = [];
            json.upcv3.forEach(jsonUpcv3 => { site.upcv3.push(UPCV3.loadFromJSON(jsonUpcv3)); });
        }
        return site;
    }
}
export var State;
(function (State) {
    State[State["HIBERNATING"] = 0] = "HIBERNATING";
    State[State["RESERVE_1"] = 1] = "RESERVE_1";
    State[State["RESERVE_2"] = 2] = "RESERVE_2";
    State[State["DISABLE"] = 3] = "DISABLE";
})(State || (State = {}));
//# sourceMappingURL=site.js.map