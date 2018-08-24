export class Calendar {
    startDate: Date;
    numDays: number;
    countryCode: string;
    renderDate: Date;
    endDate: Date;
    
    constructor(startDate: Date, numDays: number, countryCode: string) {
        this.startDate = startDate;
        this.numDays = numDays;
        this.countryCode = countryCode;
        this.renderDate = this.startOfWeek(this.startDate);
        this.endDate = new Date(this.startDate.getTime());
        this.endDate.setDate(this.endDate.getDate() + numDays);
    }
    
    startOfWeek(date) {
        let resultDate = new Date(date.getTime());
        resultDate.setDate(date.getDate() - date.getDay());
        return resultDate;
    }
    
    endOfWeek(date) {
        let resultDate = new Date(date.getTime());
        resultDate.setDate(date.getDate() + (7 + 6 - date.getDay()) % 7);
        return resultDate;
    }
}