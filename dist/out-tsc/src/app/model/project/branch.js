import { Node } from './node';
export class Branch {
    constructor() {
        this.id = '';
        this.width = 3;
        this.color = '#0A4A14';
        this.numbersColor = '#0A4A14';
        this.suffix = '';
        this.tubeDiameter = 6;
        this.nodes = [];
        // Calculations only
        this.flowCumulated = 0;
        this.trapsNumber = 0;
        this.nodesNumber = 0;
    }
    static loadFromJSON(json) {
        var branch = Object.assign(new Branch, json);
        if (json.nodes) {
            branch.nodes = [];
            json.nodes.forEach(jsonNode => { branch.nodes.push(Node.loadFromJSON(jsonNode)); });
        }
        return branch;
    }
}
//# sourceMappingURL=branch.js.map