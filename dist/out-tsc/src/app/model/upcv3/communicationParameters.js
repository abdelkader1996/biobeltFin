export class CommunicationParameters {
    constructor() {
        this.comWiFiName = "";
        this.comWiFiPass = "";
        this.comWiFiIpAdr = "";
        this.comGsmName = "";
        this.comGsmPass = "";
        this.comGsmIpAdr = "0.0.0.0";
        this.comGsmMode = 0;
        this.comGsmLevel = 0;
        this.comWebSrvUrl = "";
        this.comMdmApnId = "";
        this.comMdmApnId2 = "orange.m2m";
        this.comMdmApnUser = "orange";
        this.comMdmApnPass = "orange";
        this.comWifiApCh = 11;
    }
    get comGsmModeString() {
        switch (this.comGsmMode) {
            case 0: return 'Non enregistré';
            case 1: return '2G GPRS';
            case 2: return '2G EDGE';
            case 3: return '3G WCDMA';
            case 4: return '3G HSDPA';
            case 5: return '3G HSUPA';
            case 6: return '3G HSDPA/HSUPA';
            case 7: return '4G';
        }
    }
    static loadFromJSON(json) {
        return Object.assign(new CommunicationParameters, json);
    }
}
//# sourceMappingURL=communicationParameters.js.map