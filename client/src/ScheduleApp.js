import "@progress/kendo-theme-default/dist/all.css";
import "./App.css";
import PickDateOfBirth from "./components/calendar/PickDateOfBirth";
import BookTimeSlot from "./components/calendar/BookTimeSlot";
import RoomScheduler from "./components/scheduler/RoomScheduler";
function ScheduleApp() {
  return (
    <div className="App">
      <PickDateOfBirth />
      <hr className="k-my-8" />
      <BookTimeSlot />
      <hr className="k-my-8" />
      <RoomScheduler />
    </div>
  );
}

export default ScheduleApp;