export class Calendar {
    startDate: Date;
    numDays: number;
    countryCode: string;
    startOfWeek: Date;
    renderDate: Date;
    
    constructor(startDate: Date, numDays: number, countryCode: string) {
        this.startDate = startDate;
        this.numDays = numDays;
        this.countryCode = countryCode;
        this.renderDate = this.startOfWeek(this.startDate);
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