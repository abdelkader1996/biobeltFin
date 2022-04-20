export class DiffCo2Program {
    constructor() {
        this.daysCode = 7;
        this.start = "00:00:00";
        this.end = "00:00:00";
        this.intensity = 0;
    }
    static loadFromJSON(json) {
        return Object.assign(new DiffCo2Program, json);
    }
}
export var DaysCode;
(function (DaysCode) {
    DaysCode[DaysCode["Sunday"] = 0] = "Sunday";
    DaysCode[DaysCode["Monday"] = 1] = "Monday";
    DaysCode[DaysCode["Tuesday"] = 2] = "Tuesday";
    DaysCode[DaysCode["Wednesday"] = 3] = "Wednesday";
    DaysCode[DaysCode["Thursday"] = 4] = "Thursday";
    DaysCode[DaysCode["Friday"] = 5] = "Friday";
    DaysCode[DaysCode["Saturday"] = 6] = "Saturday";
    DaysCode[DaysCode["All week"] = 7] = "All week";
    DaysCode[DaysCode["Weekend"] = 8] = "Weekend";
    DaysCode[DaysCode["Midweek"] = 9] = "Midweek";
})(DaysCode || (DaysCode = {}));
export const intensities = [
    { name: 'Désactivée', value: 0 },
    { name: '1', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 }
];
export const daysCodes = [
    { name: 'Tous les jours', value: DaysCode['All week'] },
    { name: 'Semaine', value: DaysCode['Midweek'] },
    { name: 'Weekend', value: DaysCode['Weekend'] },
    { name: 'Lundi', value: DaysCode['Monday'] },
    { name: 'Mardi', value: DaysCode['Tuesday'] },
    { name: 'Mercredi', value: DaysCode['Wednesday'] },
    { name: 'Jeudi', value: DaysCode['Thursday'] },
    { name: 'Vendredi', value: DaysCode['Friday'] },
    { name: 'Samedi', value: DaysCode['Saturday'] },
    { name: 'Dimanche', value: DaysCode['Sunday'] }
];
//# sourceMappingURL=diffCo2Program.js.map