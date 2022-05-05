//  big timestamp jumbotron on top
//  ADD TASK BUTTON
//  MODAL TO EDIT/DELETE TASKS ON CLICK
//  SORT BY DATE AND START TIME

// import React, { useState, useEffect } from 'react';
// import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

// const Schedule = () => {

//     return (
//         <div>
//             <p>Hello</p>
//         </div>
//     )
// }

// export default Schedule

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
class Calendar extends React.Component {
   render() {
       return (
           <Calendar
               startAccessor="start"
               endAccessor="end"
           />
       )
   }
}
export default Calendar;

getHolidaysList() {
const holidaysList = []
    for (var i = 0; i < holidays.length; i++) {
    let color = '#ff0000'
    holidaysList.push({ color: color })
   }
 };

getAbsentiesList() {
   const absentiesList = []
   for (var i = 0; i < leaves.length; i++) {
       let start_at = (new Date(leaves[i].start_at))
       let end_at = (new Date(leaves[i].end_at))
       absentiesList.push({start_at: start_at, end_at: end_at})
     }
   };

var Event {
  title: string,
  start: Date,
  end: Date,
  allDay: boolean,
  resource: any,
};

const holidays = []
       this.state.holidaysList.forEach((holiday) => {
           let start = moment(holiday.for_date).toDate()
           holidays.push({ id: holiday.id, title: holiday.occasion, start: start, end: start, color: holiday.color, resource: holiday.is_restricted, type: 'holiday', allDay: 'true' })
       })
       const leaves = []
       this.state.absentiesList.forEach((leave) => {
           let start_at = (new Date(leave.start_at))
           let end_at = (new Date(leave.end_at))
           leaves.push({ id: leave.id, title: leave.username, start: start_at, end: end_at, color: leave.color, type: 'leave', allDay: 'true' })
       })
       const list = [...holidays, ...leaves]

return (
           <Calendar
               events={list}
               startAccessor="start"
               endAccessor="end"
               defaultDate={moment().toDate()}
               eventPropGetter={event => {
                   const eventData = list.find(ot => ot.id === event.id);
                   const backgroundColor = eventData && eventData.color;
                   return { style: { backgroundColor } };
               }}
           />
       )