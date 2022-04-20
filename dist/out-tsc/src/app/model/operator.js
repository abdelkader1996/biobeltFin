import { User } from "./user";
import { Site } from "./site";
export class Operator extends User {
    constructor() {
        super(...arguments);
        this.lastName = '';
        this.firstName = '';
        this.phone = '';
        this.sites = [];
    }
    static loadFromJSON(json) {
        var operator = Object.assign(new Operator, json);
        if (json.sites) {
            operator.sites = [];
            json.sites.forEach(jsonSite => { operator.sites.push(Site.loadFromJSON(jsonSite)); });
        }
        return operator;
    }
}
//# sourceMappingURL=operator.js.map