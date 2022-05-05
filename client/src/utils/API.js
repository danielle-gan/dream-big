import { HolidayAPI } from "holidayapi";

const key = "c79bf8a0-046f-41a8-adca-ad46a2de975c";
const holidayApi = new HolidayAPI({ key });

export const upcomingHolidays = async () => {
  return await holidayApi.holidays({
    country: "US",
    year: 2022,
    month: 5,
    day: 5,
    upcoming: true,
  });
};
