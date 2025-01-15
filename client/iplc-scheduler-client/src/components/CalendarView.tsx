import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarView: React.FC = () => {
  const [events, setEvents] = useState([]);

  return (
    <div className="calendar-container p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        editable={true}
        selectable={true}
        eventContent={(eventInfo) => (
          <div
            className={`rounded p-2 shadow-card text-white hover-effect ${
              eventInfo.event.extendedProps.status === 'Completed'
                ? 'bg-secondary'
                : 'bg-accent-lime'
            }`}
          >
            <div className="flex items-center">
              {eventInfo.event.extendedProps.therapist?.avatar && (
                <img 
                  src={eventInfo.event.extendedProps.therapist.avatar}
                  alt={eventInfo.event.extendedProps.therapist.name}
                  className="w-6 h-6 rounded-full mr-2"
                />
              )}
              <p>{eventInfo.event.title}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default CalendarView;
