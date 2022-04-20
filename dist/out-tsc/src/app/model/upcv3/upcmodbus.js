import * as tslib_1 from "tslib";
import { ModbusClient, UPCDiffCo2Program, UPCDiffCo2Sun } from './modbus';
import { GeneralParameters } from './generalParameters';
import { DiffusionParameters } from './diffusionParameters';
export class UPCModbus {
    /**
     * Constructor
     */
    constructor(stateChangeCallback) {
        // Attributes
        this.host = '10.1.1.1';
        this.port = 502;
        this.stateChangeCallback = null;
        this.state = UPCState.NULL;
        this.client = null;
        this.nameId = '';
        this.mode = 0;
        this.status = 0;
        this.trapNum = 0;
        this.general = new GeneralParameters();
        this.diffusions = new DiffusionParameters();
        this.co2FlowRefTrap = 0;
        this.co2Res1ActVol = 0;
        this.co2Res2ActVol = 0;
        this.diffHourSunrise = 0;
        this.diffHourSunset = 0;
        this.diffCo2Program = [
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program(),
            new UPCDiffCo2Program()
        ];
        this.diffCo2Sunrise = new UPCDiffCo2Sun();
        this.diffCo2Sunset = new UPCDiffCo2Sun();
        this.stateChangeCallback = stateChangeCallback;
        this.init();
    }
    readGeneralParameters() {
        this.client.getIntFromHoldingRegister(40015, 1).then(res => {
            alert(res);
            this.general.upcTrapNum = res;
        });
        this.client.getStringFromHoldingRegister(40441, 8).then(res => {
            //alert(res);
            this.general.upcMcuUid = res;
        });
        this.client.getFloatFromHoldingRegister(40016).then(res => {
            //alert(res);
            this.general.co2FlowRefTrap = res;
        });
        this.client.getFloatFromHoldingRegister(40020).then(res => {
            //alert(res)
            this.general.co2FlowRefNom = res;
        });
        this.client.getFloatFromHoldingRegister(40271).then(res => {
            //alert(res);
            this.general.co2PresOutRef1 = res;
        });
        this.client.getFloatFromHoldingRegister(40273).then(res => {
            //alert(res);
            this.general.co2PresOutRef2 = res;
        });
        this.client.getFloatFromHoldingRegister(40275).then(res => {
            //alert(res);
            this.general.co2PresOutRef3 = res;
        });
        this.client.getFloatFromHoldingRegister(40277).then(res => {
            //alert(res);
            this.general.co2PresOutRef4 = res;
        });
        this.client.getFloatFromHoldingRegister(40279).then(res => {
            //alert(res);
            this.general.co2PresOutRef5 = res;
        });
        this.client.getFloatFromHoldingRegister(40281).then(res => {
            //alert(res);
            this.general.co2PresOutRef6 = res;
        });
        this.client.getFloatFromHoldingRegister(40283).then(res => {
            //alert(res);
            this.general.co2PresOutRef7 = res;
        });
        this.client.getFloatFromHoldingRegister(40285).then(res => {
            //alert(res);
            this.general.co2PresOutRef8 = res;
        });
        this.client.getFloatFromHoldingRegister(40287).then(res => {
            //alert(res);
            this.general.co2PresOutRef9 = res;
        });
        this.client.getFloatFromHoldingRegister(40289).then(res => {
            //alert(res);
            this.general.co2PresOutRef10 = res;
        });
        this.client.getFloatFromHoldingRegister(40461).then(res => {
            //alert(res);
            this.general.co2PressOutTemp = res;
        });
        this.client.getIntFromHoldingRegister(40401, 2).then(res => {
            //alert(res);
            this.general.upcTimeZone = res;
        });
        this.client.getIntFromHoldingRegister(40376, 1).then(res => {
            //alert(res);
            this.general.upcStatus = res;
        });
        this.client.getIntFromHoldingRegister(40011, 1).then(res => {
            //alert(res);
            this.general.upcMode = res;
        });
        this.client.getIntFromHoldingRegister(40168, 1).then(res => {
            //alert(res);
            this.general.upcFwVer = res;
        });
        this.general.co2FlowRefAdj;
        this.client.getIntFromHoldingRegister(40012, 2).then(res => {
            //alert(res);
            this.general.upcClock = res;
        });
        this.client.getFloatFromHoldingRegister(40018).then(res => {
            //alert(res);
            this.general.co2FlowRefAdj = res;
        });
    }
    init() {
        // Init Client
        this.client = new ModbusClient(15000, false);
        this.client.on('reconnecting', function () {
            this.state = UPCState.RECONNECTING;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.on('offline', function () {
            this.state = UPCState.OFFLINE;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.on('online', function () {
            this.state = UPCState.ONLINE;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.on('error', function () {
            this.state = UPCState.ERROR;
            this.stateChangeCallback(this.state);
        }.bind(this));
        this.client.setHost(this.host);
        this.client.setPort(this.port);
        this.client.connect();
        this.client.reconnect();
    }
    disconnect() {
        // Modbus client
        this.client.disconnect();
    }
    reconnect() {
        // Modbus client
        this.client.disconnect();
        this.init();
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * Methods
     */
    flashFW(file, loading) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var lines = file.split('\n');
            for (var i = 0; i < lines.length; i++) {
                // Write line
                var l = lines[i].trim() + '\0';
                var length = l.length;
                if (length % 2 != 0) {
                    l = l + '\0';
                    length++;
                }
                yield this.client.setStringInHoldingRegister(41000, l);
                const load = yield loading.create({
                    duration: 2000,
                    message: 'Updating firmware : ' + (i / lines.length * 100).toFixed(1) + ' %'
                });
                yield load.present();
            }
        });
    }
    editTrapNum(nbpieges, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.client.setIntInHoldingRegister(40015, 1, this.client.getIntFromHoldingRegister(nbpieges, 1)).then(data => {
                alert(JSON.stringify(data));
            }).catch(err => {
                alert(JSON.stringify(err));
            });
            yield this.client.setFloatInHoldingRegister(40018, this.client.getFloatFromHoldingRegister(value)).then(data => {
                alert(JSON.stringify(data));
            }).catch(err => {
                alert(JSON.stringify(err));
            });
            ;
            yield this.client.setFloatInHoldingRegister(40020, this.client.getFloatFromHoldingRegister(value)).then(data => {
                alert(JSON.stringify(data));
            }).catch(err => {
                alert(JSON.stringify(err));
            });
            yield this.client.setFloatInHoldingRegister(40016, 0.17).then(data => {
                alert(JSON.stringify(data));
            }).catch(err => {
                alert(JSON.stringify(err));
            });
        });
    }
    getAllVars() {
        // TODO
        return Promise.all([
            // General parameters
            this.client.getStringFromHoldingRegister(40441, 8),
            this.client.getIntFromHoldingRegister(40168, 1),
            this.client.getStringFromHoldingRegister(40001, 10),
            this.client.getIntFromHoldingRegister(40011, 1),
            this.client.getIntFromHoldingRegister(40376, 1),
            this.client.getIntFromHoldingRegister(40012, 2),
            this.client.getIntFromHoldingRegister(40401, 2),
            this.client.getIntFromHoldingRegister(40014, 1),
            this.client.getIntFromHoldingRegister(40044, 1),
            this.client.getIntFromHoldingRegister(40015, 1),
            this.client.getFloatFromHoldingRegister(40016),
            this.client.getFloatFromHoldingRegister(40020),
            this.client.getFloatFromHoldingRegister(40018),
            this.client.getFloatFromHoldingRegister(40271),
            this.client.getFloatFromHoldingRegister(40273),
            this.client.getFloatFromHoldingRegister(40275),
            this.client.getFloatFromHoldingRegister(40277),
            this.client.getFloatFromHoldingRegister(40279),
            this.client.getFloatFromHoldingRegister(40281),
            this.client.getFloatFromHoldingRegister(40283),
            this.client.getFloatFromHoldingRegister(40285),
            this.client.getFloatFromHoldingRegister(40287),
            this.client.getFloatFromHoldingRegister(40289),
            this.client.getFloatFromHoldingRegister(40461),
            // Comunication
            this.client.getStringFromHoldingRegister(40024, 10),
            this.client.getStringFromHoldingRegister(40034, 10),
            this.client.getIntFromHoldingRegister(40022, 2),
            this.client.getIntFromHoldingRegister(40414, 1),
            this.client.getIntFromHoldingRegister(40415, 1),
            this.client.getStringFromHoldingRegister(40045, 10),
            this.client.getStringFromHoldingRegister(40055, 10),
            this.client.getIntFromHoldingRegister(40340, 1),
            // CO2 diffusion
            this.client.getIntFromHoldingRegister(40068, 2),
            this.client.getIntFromHoldingRegister(40070, 2),
            this.client.getDiffusionProgramFromHoldingRegister(40072),
            this.client.getDiffusionProgramFromHoldingRegister(40078),
            this.client.getDiffusionProgramFromHoldingRegister(40084),
            this.client.getDiffusionProgramFromHoldingRegister(40090),
            this.client.getDiffusionProgramFromHoldingRegister(40096),
            this.client.getDiffusionProgramFromHoldingRegister(40102),
            this.client.getDiffusionProgramFromHoldingRegister(40108),
            this.client.getDiffusionProgramFromHoldingRegister(40114),
            this.client.getDiffusionProgramFromHoldingRegister(40120),
            this.client.getDiffusionProgramFromHoldingRegister(40126),
            this.client.getDiffusionSunFromHoldingRegister(40132),
            this.client.getDiffusionSunFromHoldingRegister(40138),
            this.client.getFloatFromHoldingRegister(40427),
            this.client.getFloatFromHoldingRegister(40429),
            this.client.getFloatFromHoldingRegister(40431),
            this.client.getFloatFromHoldingRegister(40433),
            this.client.getFloatFromHoldingRegister(40435),
            this.client.getFloatFromHoldingRegister(40455),
            this.client.getFloatFromHoldingRegister(40437),
            this.client.getFloatFromHoldingRegister(40457),
            this.client.getFloatFromHoldingRegister(40463),
            this.client.getFloatFromHoldingRegister(40439),
            this.client.getFloatFromHoldingRegister(40459),
            this.client.getFloatFromHoldingRegister(40390),
            this.client.getIntFromHoldingRegister(40416, 1),
            this.client.getIntFromHoldingRegister(40065, 1),
            this.client.getFloatFromHoldingRegister(40451),
            // CO2 reserves
            this.client.getIntFromHoldingRegister(40151, 1),
            this.client.getIntFromHoldingRegister(40150, 1),
            this.client.getIntFromHoldingRegister(40417, 2),
            this.client.getIntFromHoldingRegister(40419, 2),
            this.client.getIntFromHoldingRegister(40382, 1),
            this.client.getIntFromHoldingRegister(40381, 1),
            this.client.getFloatFromHoldingRegister(40384),
            this.client.getFloatFromHoldingRegister(40153),
            this.client.getIntFromHoldingRegister(40155, 2),
            this.client.getFloatFromHoldingRegister(40157),
            this.client.getIntFromHoldingRegister(40159, 1),
            this.client.getFloatFromHoldingRegister(40421),
            this.client.getFloatFromHoldingRegister(40347),
            this.client.getIntFromHoldingRegister(40383, 1),
            this.client.getFloatFromHoldingRegister(40386),
            this.client.getFloatFromHoldingRegister(40161),
            this.client.getIntFromHoldingRegister(40163, 2),
            this.client.getFloatFromHoldingRegister(40165),
            this.client.getIntFromHoldingRegister(40167, 1),
            this.client.getFloatFromHoldingRegister(40449),
            this.client.getFloatFromHoldingRegister(40354),
            // Alarms setup
            this.client.getIntFromHoldingRegister(40388, 2),
            this.client.getIntFromHoldingRegister(40066, 1),
            this.client.getIntFromHoldingRegister(40169, 1),
            this.client.getIntFromHoldingRegister(40170, 1),
            this.client.getIntFromHoldingRegister(40171, 1),
            this.client.getIntFromHoldingRegister(40172, 1),
            this.client.getIntFromHoldingRegister(40173, 1),
            this.client.getIntFromHoldingRegister(40174, 1),
            this.client.getStringFromHoldingRegister(40175, 10),
            this.client.getStringFromHoldingRegister(40185, 10),
            this.client.getStringFromHoldingRegister(40195, 10),
            this.client.getStringFromHoldingRegister(40205, 10),
            this.client.getStringFromHoldingRegister(40215, 10),
            this.client.getFloatFromHoldingRegister(40227),
            this.client.getFloatFromHoldingRegister(40225),
            this.client.getFloatFromHoldingRegister(40269),
            this.client.getFloatFromHoldingRegister(40291),
            this.client.getFloatFromHoldingRegister(40293),
            this.client.getFloatFromHoldingRegister(40229),
            this.client.getFloatFromHoldingRegister(40231),
            this.client.getFloatFromHoldingRegister(40233),
            this.client.getFloatFromHoldingRegister(40235),
            this.client.getFloatFromHoldingRegister(40237),
            this.client.getFloatFromHoldingRegister(40239),
            this.client.getFloatFromHoldingRegister(40241),
            this.client.getFloatFromHoldingRegister(40243),
            this.client.getFloatFromHoldingRegister(40245),
            this.client.getFloatFromHoldingRegister(40247),
            this.client.getFloatFromHoldingRegister(40249),
            this.client.getFloatFromHoldingRegister(40251),
            this.client.getFloatFromHoldingRegister(40253),
            this.client.getFloatFromHoldingRegister(40255),
            this.client.getFloatFromHoldingRegister(40257),
            this.client.getFloatFromHoldingRegister(40259),
            this.client.getFloatFromHoldingRegister(40261),
            this.client.getFloatFromHoldingRegister(40263),
            this.client.getFloatFromHoldingRegister(40265),
            this.client.getFloatFromHoldingRegister(40267),
            this.client.getFloatFromHoldingRegister(40356),
            this.client.getFloatFromHoldingRegister(40358),
            this.client.getFloatFromHoldingRegister(40360),
            this.client.getFloatFromHoldingRegister(40362),
            this.client.getFloatFromHoldingRegister(40364),
            this.client.getFloatFromHoldingRegister(40366),
            this.client.getFloatFromHoldingRegister(40368),
            this.client.getFloatFromHoldingRegister(40370),
            this.client.getFloatFromHoldingRegister(40372),
            this.client.getFloatFromHoldingRegister(40374),
            this.client.getFloatFromHoldingRegister(40465),
            // Auxiliary parameters
            this.client.getStringFromHoldingRegister(40295, 15),
            this.client.getStringFromHoldingRegister(40310, 10),
            this.client.getStringFromHoldingRegister(40320, 10),
            this.client.getStringFromHoldingRegister(40330, 10),
            this.client.getFloatFromHoldingRegister(40453),
            this.client.getFloatFromHoldingRegister(40377),
            this.client.getFloatFromHoldingRegister(40379),
            this.client.getFloatFromHoldingRegister(40423),
            this.client.getFloatFromHoldingRegister(40425) // upcBattTemp
        ]).then(results => {
            return {
                // General parameters
                general: {
                    upcMcuUid: results[0], upcFwVer: results[1], upcNameId: results[2], upcMode: results[3], upcStatus: results[4], upcClock: results[5], upcTimeZone: results[6],
                    upcLanguage: results[7], upcEventNum: results[8], upcTrapNum: results[9], co2FlowRefTrap: results[10], co2FlowRefNom: results[11], co2FlowRefAdj: results[12],
                    co2PressOutRef: [results[13], results[14], results[15], results[16], results[17], results[18], results[19], results[20], results[21], results[22]],
                    co2PressOutTemp: results[23]
                },
                // Comunication
                comunication: {
                    comMdmName: results[24], comMdmPass: results[25], comMdmIpAdr: results[26], comMdmMode: results[27],
                    comMdmLevel: results[28], comWifiSsid: results[29], comWifiPass: results[30], comWifiApCh: results[31]
                },
                // CO2 diffusion
                co2Diffusion: {
                    diffHourSunRise: results[32], diffHourSunSet: results[33],
                    diffCo2Program: [results[34], results[35], results[36], results[37], results[38], results[39], results[40], results[41], results[42], results[43]],
                    diffCo2Sunrise: results[44], diffCo2Sunset: results[45], co2PressInpMeas1: results[46], co2PressInpMeas2: results[47], co2PressOutMeas: results[48],
                    co2FlowMeas: results[49], co2PressInpAvg: results[50], co2PressInpOffs: results[51], co2PressOutAvg: results[52], co2PressoutOffs: results[53],
                    co2PressOutComp: results[54], co2FlowAvg: results[55], co2FlowOffs: results[56], co2FlowGain: results[57], upcCo2DiffLvl: results[58],
                    upcDiffLvlAdj: results[59], co2TempAvg: results[60]
                },
                // CO2 reserves
                co2Reserves: {
                    co2ResActive: results[61], co2ResActAdj: results[62], co2ResActPrev: results[63], co2ResInactPrev: results[64], co2ResType: results[65],
                    co2Res1Status: results[66], co2Res1FillNew: results[67], co2Res1FillVol: results[68], co2Res1FillTime: results[69], co2Res1ActVol: results[70],
                    co2Res1ActDur: results[71], co2Res1StartVol: results[72], co2Res1AuxVol: results[73], co2Res2Status: results[74], co2Res2FillNew: results[75],
                    co2Res2FillVol: results[76], co2Res2FillTime: results[77], co2Res2ActVol: results[78], co2Res2ActDur: results[79], co2Res2StartVol: results[80],
                    co2Res2AuxVol: results[81]
                },
                // Alarms setup
                alarms: {
                    alrResEmptyTest: results[82], alrResLowEn: results[83], alrResEmptyEn: results[84], alrPressInpEn: results[85], alrPressOutEn: results[86], alrFlowAvgEn: results[87],
                    alrPowDownEn: results[88], alrPowBackEn: results[89], alrSmsNum: [results[90], results[91], results[92], results[93], results[94]], alrResLowLevel: results[95],
                    alrResEmptyFlow: results[96], alrPressInpTol: results[97], alrPressOutTol: results[98], alrFlowSetTol: results[99],
                    alrPressInpSet1: [results[100], results[101], results[102], results[103], results[104], results[105], results[106], results[107], results[108], results[109]],
                    alrPressInpSet2: [results[110], results[111], results[112], results[113], results[114], results[115], results[116], results[117], results[118], results[119]],
                    alrPressOutSet: [results[120], results[121], results[122], results[123], results[124], results[125], results[126], results[127], results[128], results[129]],
                    alrPressSetTemp: results[130]
                },
                // Auxiliary parameters
                auxiliary: {
                    comWebSrvUrl: results[131], comMdmApnId: results[132], comMdmApnUser: results[133], comMdmApnPass: results[134], upcCo2PidProp: results[135],
                    upcCo2PidInteg: results[136], upcCo2PidDiff: results[137], upcBattChrg: results[138], upcBattTemp: results[139]
                }
            };
        });
    }
    reset() {
        return Promise.all([this.client.setIntInHoldingRegister(40011, 1, 0xffff)]);
    }
    wipe() {
        return Promise.all([this.client.setIntInHoldingRegister(40011, 1, 0xeeee)]);
    }
}
UPCModbus.litterToKilograms = 0.001974;
export var UPCState;
(function (UPCState) {
    UPCState[UPCState["RECONNECTING"] = 0] = "RECONNECTING";
    UPCState[UPCState["ONLINE"] = 1] = "ONLINE";
    UPCState[UPCState["OFFLINE"] = 2] = "OFFLINE";
    UPCState[UPCState["ERROR"] = 3] = "ERROR";
    UPCState[UPCState["NULL"] = 4] = "NULL";
})(UPCState || (UPCState = {}));
//# sourceMappingURL=upcmodbus.js.map