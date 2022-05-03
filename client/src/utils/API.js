import { HolidayAPI } from 'holidayapi';

const key = 'Insert your API key here';
const holidayApi = new HolidayAPI({ key });

export const upcomingHolidays = () => {
    return holidayApi.holidays({
        country: 'US',
        year: 2022,
        month: 5,
        day: 5,
        upcoming: true,
    });;
};