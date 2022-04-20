import { LocalDateTime } from "./upcv3/LocalDateTime";
export class InterventionV3 {
    constructor() {
        this.id = 0;
        this.datetime = new LocalDateTime();
        this.objet = '';
        this.operateur = '';
        this.bouteillesB1 = '';
        this.bouteillesB1Dates = '';
        this.bouteillesB1Barcode = '';
        this.bouteillesB2 = '';
        this.bouteillesB2Dates = '';
        this.bouteillesB2Barcode = '';
        this.bouteilleB1Added = 0;
        this.bouteilleB2Added = 0;
        this.bouteilleB1Deleted = 0;
        this.bouteilleB2Deleted = 0;
        this.currentStateB1 = "";
        this.currentStateB2 = "";
        this.currentStateHL = "";
    }
    static loadFromJSON(json) {
        var intervention = Object.assign(new InterventionV3, json);
        if (json.datetime)
            intervention.datetime = LocalDateTime.loadFromJSON(json.datetime);
        return intervention;
    }
    get b1() {
        var bottles = [];
        if (this.bouteillesB1.length > 0) {
            var b1 = this.bouteillesB1.split(',');
            var b1Dates = this.bouteillesB1Dates.split(',');
            var b1Barcodes = this.bouteillesB1Barcode.split(',');
            for (var i = 0; i < b1.length; i++) {
                bottles.push({
                    designation: parseFloat(b1[i]),
                    barcode: b1Barcodes[i],
                    principalReserve: true,
                    previousIntervention: parseInt(b1Dates[i]) == 1 ? true : false
                });
            }
        }
        return bottles;
    }
    get b2() {
        var bottles = [];
        if (this.bouteillesB2.length > 0) {
            var b2 = this.bouteillesB2.split(',');
            var b2Dates = this.bouteillesB2Dates.split(',');
            var b2Barcodes = this.bouteillesB2Barcode.split(',');
            for (var i = 0; i < b2.length; i++) {
                bottles.push({
                    designation: parseFloat(b2[i]),
                    barcode: b2Barcodes[i],
                    principalReserve: false,
                    previousIntervention: parseInt(b2Dates[i]) == 1 ? true : false
                });
            }
        }
        return bottles;
    }
}
//# sourceMappingURL=interventionv3.js.map