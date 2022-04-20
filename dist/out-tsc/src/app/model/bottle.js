import { BottleType } from "./bottleType";
import { LocalDateTime } from "./upcv3/LocalDateTime";
export class Bottle {
    constructor() {
        this.id = '';
        this.barcode = '';
        this.status = Status.ENTREPOSE;
        this.state = State.FULL;
        this.bottleType = null;
        this.bottleEvents = [];
        this.lastStatus = Status.ENTREPOSE;
        this.rack = "";
    }
    get statusString() {
        switch (this.status) {
            case Status.ENTREPOSE: return 'Entreposée';
            case Status.B1: return 'Sur B1';
            case Status.B2: return 'Sur B2';
            case Status.REVOKED: return 'Retirée';
            case Status.UNDEFINED: return 'Indéfini';
        }
    }
    get bottleString() {
        return this.bottleType.designationString + ' (' + this.barcode + ')';
    }
    static loadFromJSON(json) {
        var bottle = Object.assign(new Bottle, json);
        if (json.bottleType)
            bottle.bottleType = BottleType.loadFromJSON(json.bottleType);
        if (json.bottleEvents) {
            bottle.bottleEvents = [];
            json.bottleEvents.forEach(jsonBottleEvent => bottle.bottleEvents.push(BottleEvent.loadFromJSON(jsonBottleEvent)));
        }
        return bottle;
    }
}
export class BottleEvent {
    constructor() {
        this.id = '';
        this.code = Code.ENTREPOSAGE;
        this.date = new LocalDateTime();
        this.parameter = '';
        this.destinationId = '';
        this.destinationType = '';
        this.state = '';
        this.intervention_time = new LocalDateTime();
        this.operator = '';
    }
    get codeString() {
        switch (this.code) {
            case Code.ENTREPOSAGE:
                if (this.parameter === "0840ffbf-82ee-4f23-a3b9-96b1f99cefdd" || this.parameter === '1e2b0d98-44a8-4fe8-a412-299f0991919d' || this.parameter === "8eea82b3-e17c-4a62-8e4a-389a8f15e9a2" || this.parameter === "ff1c41aa-f9f7-478b-8b41-8616313f6d88") {
                    return 'Ajout au stock';
                }
                else {
                    return 'Ajout à la ceinture';
                }
            case Code.CONNEXION_A_B1: return 'Ajout à B1';
            case Code.CONNEXION_A_B2: return 'Ajout à B2';
            case Code.RECEPTION: return 'Reception au stock';
            case Code.RENVOIE: return 'Suppression du stock';
        }
    }
    get parameterString() {
        if (this.parameter)
            return this.parameter;
        else
            return '-';
    }
    static loadFromJSON(json) {
        var bottleEvent = Object.assign(new BottleEvent, json);
        if (json.date)
            bottleEvent.date = LocalDateTime.loadFromJSON(json.date);
        return bottleEvent;
    }
}
export var Status;
(function (Status) {
    Status["ENTREPOSE"] = "ENTREPOSE";
    Status["B1"] = "B1";
    Status["B2"] = "B2";
    Status["REVOKED"] = "REVOKED";
    Status["UNDEFINED"] = "UNDEFINED";
})(Status || (Status = {}));
export var State;
(function (State) {
    State["FULL"] = "FULL";
    State["IN_USE"] = "IN_USE";
    State["EMPTY"] = "EMPTY";
})(State || (State = {}));
export var Code;
(function (Code) {
    Code["ENTREPOSAGE"] = "ENTREPOSAGE";
    Code["CONNEXION_A_B1"] = "CONNEXION_A_B1";
    Code["CONNEXION_A_B2"] = "CONNEXION_A_B2";
    Code["RECEPTION"] = "RECEPTION";
    Code["RENVOIE"] = "RENVOIE";
})(Code || (Code = {}));
//# sourceMappingURL=bottle.js.map