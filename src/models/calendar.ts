import {Month} from './month'

export class Calendar {
    startDate: Date;
    numDays: number;
    countryCode: string;
    endDate: Date;
    months: Month[];
    
    
    constructor(startDate: Date, numDays: number, countryCode: string) {
        this.startDate = startDate;
        this.numDays = numDays;
        this.countryCode = countryCode;
        this.setMonths();
    }
    
    setMonths() {
        this.startDate = new Date(this.startDate);
        this.endDate = new Date(this.startDate.getTime());
        this.endDate.setDate(this.endDate.getDate() + this.numDays);
        console.log(this.endDate)
        this.months = [];
        let month = new Month(); 
        month.startDate = new Date(this.startDate.getTime());
        let renderDate: Date = this.startOfWeek(this.startDate);
        let prevDate: Date = null;
        let week: Date[] = []
        while(renderDate < this.endDate){
            let currentDate = new Date(renderDate.getTime());
            if(prevDate != null && currentDate.getMonth() != prevDate.getMonth()) {
                let postWeekDates = this.datesEndOfWeek(prevDate);
                week = week.concat(postWeekDates);
                month.weeks.push(week);
                this.months.push(month);
                
                month = new Month();
                month.startDate = new Date(currentDate.getTime());
                week = [];
                let prevWeekDates = this.datesStartOfWeek(currentDate);
                week = week.concat(prevWeekDates);
                
                prevDate = null;
            }
            if(prevDate != null && currentDate.getDay() == 0){
                month.weeks.push(week);
                week = [];
            }
            week.push(currentDate);
            prevDate = new Date(renderDate.getTime());
            renderDate.setDate(renderDate.getDate() + 1);
        }
        let lastDate = new Date(week[week.length - 1].getTime());
        let remindingDates = this.datesEndOfWeek(lastDate);
        week = week.concat(remindingDates);
        month.weeks.push(week);
        this.months.push(month);
        console.log(this.months)
    }
    
    startOfWeek(date) {
        let resultDate = new Date(date.getTime());
        resultDate.setDate(date.getDate() - date.getDay());
        return resultDate;
    }
    
    datesStartOfWeek(date) {
        let startDate = this.startOfWeek(date);
        let dates = [];
        while(startDate < date){
            dates.push(new Date(startDate.getTime()));
            startDate.setDate(startDate.getDate() + 1);
        }
        return dates;
    }
    
    endOfWeek(date) {
        let resultDate = new Date(date.getTime());
        resultDate.setDate(date.getDate() + (7 + 6 - date.getDay()) % 7);
        return resultDate;
    }
    
    datesEndOfWeek(date) {
        let endDate = this.endOfWeek(date);
        let dates = [];
        date.setDate(date.getDate() + 1);
        while(date <= endDate){
            dates.push(new Date(date.getTime()));
            date.setDate(date.getDate() + 1);
        }
        return dates;
    }
    
    isInvalid(date, dateOfMonth) {
        let afterDays = new Date(this.startDate.getTime());
        afterDays.setDate(afterDays.getDate() + this.numDays - 1);
        return date < this.startDate || date > afterDays || date.getMonth() != dateOfMonth.getMonth();
    }
    
    isWeekday(date, dateOfMonth) {
        return !this.isInvalid(date, dateOfMonth) && date.getDay() != 0 && date.getDay() != 6;
    }
    
    isWeekend(date, dateOfMonth) {
        return !this.isInvalid(date, dateOfMonth) && (date.getDay() == 0 || date.getDay() == 6);
    }
}