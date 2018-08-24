import {Calendar} from './calendar'

fdescribe('Calendar Class', () => {
    let calendar: Calendar;
    
    beforeEach(() => {
        calendar = new Calendar(new Date(2018, 7, 23), 30, '');
    });
    
    afterEach(() => {
        calendar = null;
    });
    
    it('should set the initial render date on the closest Sunday', () => {
       expect(calendar.renderDate.getDay()).toEqual(0);
    });
    
    it('should set the specific date on Sunday', () => {
       expect(calendar.startOfWeek(new Date(2018, 7, 25)).getDay()).toEqual(0);
    });
    
    it('should set the specific date on Saturday', () => {
        expect( calendar.endOfWeek(new Date(2018, 7, 24)).getDay() ).toEqual(6);
    });
    
    
});