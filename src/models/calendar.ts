export class Calendar {
    startDate: Date;
    numDays: number;
    countryCode: string;
    startOfWeek: Date;
    renderDay: Date;
    
    constructor(startDate: Date, numDays: number, countryCode: string) {
        this.startDate = startDate;
        this.numDays = numDays;
        this.countryCode = countryCode;
        this.startOfWeek = this.startDate
        this.startOfWeek.setDate(this.startOfWeek.getDate() - this.startOfWeek.getDay());
    }
}