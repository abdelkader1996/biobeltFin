import { LocalDateTime } from "./upcv3/LocalDateTime";
export class Commentaires {
    constructor() {
        this.date = new LocalDateTime();
        this.edited = false;
    }
    static loadFromJSON(json) {
        return Object.assign(new Commentaires, json);
    }
}
//# sourceMappingURL=commentaire.js.map