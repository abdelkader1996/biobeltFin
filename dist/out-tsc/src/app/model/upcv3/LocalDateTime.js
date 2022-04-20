export class LocalDateTime {
    constructor() {
        this.year = 1970;
        this.dayOfYear = 1;
        this.month = 'JANUARY';
        this.monthValue = 1;
        this.dayOfMonth = 1;
        this.dayOfWeek = 'MONDAY';
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.nano = 0;
    }
    get daysFromNow() {
        return Math.round((new Date().getTime() - new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).getTime()) / (1000 * 60 * 60 * 24));
    }
    get hoursFromNow() {
        return Math.round((new Date().getTime() - new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).getTime()) / (1000 * 60 * 60));
    }
    get minutesFromNow() {
        return Math.round((new Date().getTime() - new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).getTime()) / (1000 * 60));
    }
    static loadFromJSON(json) {
        return Object.assign(new LocalDateTime, json);
    }
    get date() {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth);
    }
    isBefore(date) {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth) <= new Date(date.year, date.monthValue - 1, date.dayOfMonth);
    }
    isAfter(date) {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth) >= new Date(date.year, date.monthValue - 1, date.dayOfMonth);
    }
    isEqual(date) {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth) == new Date(date.year, date.monthValue - 1, date.dayOfMonth);
    }
    toLocaleString() {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth, this.hour, this.minute, this.second).toLocaleString();
    }
    toLocaleDateString() {
        return new Date(this.year, this.monthValue - 1, this.dayOfMonth).toLocaleDateString();
    }
    static getLastDayOfMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
}
//# sourceMappingURL=LocalDateTime.js.map