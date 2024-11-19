import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);

  const events = [
    { title: "Mangal Chaturthi Vrata", start: new Date(2024, 10, 4), end: new Date(2024, 10, 4) },
    { title: "World Children's Day", start: new Date(2024, 10, 5), end: new Date(2024, 10, 5) },
    { title: "Gorakhnath Puja", start: new Date(2024, 10, 8), end: new Date(2024, 10, 8) },
    { title: "International Volunteer Day", start: new Date(2024, 11, 5), end: new Date(2024, 11, 5) },
    { title: "Udhauli Parva/Dhanya Pooja", start: new Date(2024, 11, 30), end: new Date(2024, 11, 30) },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white border shadow-sm rounded-lg overflow-hidden">
       
        <div className="h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%", width: "100%" }}
            className="h-full w-full text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
