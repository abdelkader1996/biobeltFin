import { Transformer } from "./transformer";
export class ElectricalOutlet {
    constructor(id = '', lat = 0, lng = 0) {
        this.id = '';
        this.lat = 0;
        this.lng = 0;
        this.transformers = [];
        this.id = id;
        this.lat = lat;
        this.lng = lng;
    }
    static loadFromJSON(json) {
        var electricalOutlet = Object.assign(new ElectricalOutlet, json);
        if (json.transformers) {
            electricalOutlet.transformers = [];
            json.transformers.forEach(jsonTransformer => { electricalOutlet.transformers.push(Transformer.loadFromJSON(jsonTransformer)); });
        }
        return electricalOutlet;
    }
}
//# sourceMappingURL=electricalOutlet.js.map