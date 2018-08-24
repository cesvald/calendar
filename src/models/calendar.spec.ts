import {Calendar} from './calendar'

describe('Calendar Class', () => {
    let calendar: Calendar;
    
    beforeEach(() => {
        calendar = new Calendar(new Date(2018, 7, 23), 30, '');
    });
    
    afterEach(() => {
        calendar = null;
    });
});