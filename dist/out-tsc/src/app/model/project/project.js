export class Project {
    constructor() {
        this.id = '';
        this.name = '';
        this.client = '';
        this.address = '';
        this.lat = 0;
        this.lng = 0;
        this.zoom = 0;
        this.hbmDistance = 0;
        this.additionalDistanceSheath = 0.5;
        this.customPicture = false;
        this.customPictureFilename = "";
        this.customPictureRatio = 0;
    }
    static loadFromJSON(json) {
        return Object.assign(new Project, json);
    }
}
//# sourceMappingURL=project.js.map