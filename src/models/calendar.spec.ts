import {Calendar} from './calendar'

describe('Calendar Class', () => {
    let calendar: Calendar;
    
    beforeEach(() => {
        calendar = new Calendar(new Date(2018, 7, 23), 30, '');
    });
    
    afterEach(() => {
        calendar = null;
    });
    
    it('should set the end date to the closest Saturday after moving the numDays', () => {
        expect(calendar.endDate.getDate()).toEqual(22);
        expect(calendar.endDate.getMonth()).toEqual(8);
    });
    
    it('should set the specific date on Sunday from startOfWeek', () => {
       expect( calendar.startOfWeek( new Date(2018, 7, 23) ).getDay() ).toEqual(0);
       expect( calendar.startOfWeek( new Date(2018, 7, 23) ).getDate() ).toEqual(19);
    });
    
    it('should set the specific date on Saturday from endOfWeek', () => {
        expect( calendar.endOfWeek( new Date(2018, 7, 24) ).getDay() ).toEqual(6);
    });
    
    it('should return array of dates from datesStartOfWeek', () => {
        expect( calendar.datesStartOfWeek( new Date(2018, 7, 24) ).length ).toEqual(5);
    });
    
    it('should return array of dates from datesEndOfWeek', () => {
        expect( calendar.datesEndOfWeek( new Date(2018, 7, 24) ).length ).toEqual(1);
    });
    
    it('should have two months', () => {
        expect(calendar.months.length).toEqual(2);
    });
    
    it('should have 2 weeks the first month and 4 weeks the second month with 7 days each one', () => {
        expect(calendar.months[0].weeks.length).toEqual(2);
        expect(calendar.months[0].weeks[0].length).toEqual(7);
        expect(calendar.months[0].weeks[1].length).toEqual(7);
        expect(calendar.months[1].weeks.length).toEqual(4);
        expect(calendar.months[1].weeks[0].length).toEqual(7);
        expect(calendar.months[1].weeks[1].length).toEqual(7);
        expect(calendar.months[1].weeks[2].length).toEqual(7);
        expect(calendar.months[1].weeks[3].length).toEqual(7);
    });
    
    it('should identify a date as invalid', () => {
       expect(calendar.isInvalid(new Date(2018, 7, 19), new Date(2018, 7, 20))).toBeTruthy();
       expect(calendar.isInvalid(new Date(2018, 7, 25), new Date(2018, 7, 20))).toBeFalsy();
       expect(calendar.isInvalid(new Date(2018, 8, 24), new Date(2018, 7, 20))).toBeTruthy();
    });
    
    it('should identify a date as weekday', () => {
        expect(calendar.isWeekday(new Date(2018, 7, 23), new Date(2018, 7, 20))).toBeTruthy();
        expect(calendar.isWeekday(new Date(2018, 7, 25), new Date(2018, 7, 20))).toBeFalsy();
    });
}); 
