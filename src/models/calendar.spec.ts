import {Calendar} from './calendar'

fdescribe('Calendar Class', () => {
    let calendar: Calendar;
    
    beforeEach(() => {
        calendar = new Calendar(new Date(2018, 7, 23), 30, '');
    });
    
    afterEach(() => {
        calendar = null;
    });
    
    it('should set the initial render date on the closest Sunday: 19 of August', () => {
       expect(calendar.renderDate.getDay()).toEqual(0);
    });
    
    it('should set the end date to the closest Saturday after moving the numDays', () => {
        expect(calendar.endDate().getDate()).toEqual(22);
        expect(calendar.endDate().getMonth()).toEqual(8);
    });
    
    it('should set the specific date on Sunday from startOfWeek', () => {
       expect( calendar.startOfWeek( new Date(2018, 7, 25) ).getDay() ).toEqual(0);
    });
    
    it('should set the specific date on Saturday from endOfWeek', () => {
        expect( calendar.endOfWeek( new Date(2018, 7, 24) ).getDay() ).toEqual(6);
    });
    
    it('should move the renderDate to the next date from nextDate', () => {
        calendar.nextDate();
        expect(calendar.renderDate.getDate()).toEqual(20);
    });
    
    it('should identify a date as invalid', () => {
       calendar.isInvalid(new Date(2018, 7, 19)).toEqual(true);
       calendar.isInvalid(new Date(2018, 7, 25)).toEqual(false);
       calendar.isInvalid(new Date(2018, 8, 24)).toEqual(true);
    });
    
    it('should identify a date as weekday', () => {
        calendar.isWeekday(new Date(2018, 7, 23)).toEqual(true);
        calendar.isWeekday(new Date(2018, 7, 25)).toEqual(false);
    });
});