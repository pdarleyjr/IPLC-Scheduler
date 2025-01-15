import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

export default function Calendar() {
    const [events, setEvents] = useState([]);
    const [selectedTherapist, setSelectedTherapist] = useState('all');
    const [therapists, setTherapists] = useState([]);

    useEffect(() => {
        // Fetch appointments
        axios.get('/appointments').then((res) => {
            setEvents(res.data.map((event) => ({
                id: event.id,
                title: event.title,
                start: event.startTime,
                end: event.endTime,
                backgroundColor: event.therapistId === selectedTherapist || selectedTherapist === 'all' 
                    ? '#0073e6' // Sky blue for visible events
                    : '#F0F0F0', // Greyed out for non-visible events
            })));
        });

        // Fetch therapists
        axios.get('/therapists').then((res) => {
            setTherapists(res.data);
        });
    }, [selectedTherapist]);

    return (
        <div className="bg-background-light p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-primary font-bold text-2xl">Scheduler</h1>
                <select
                    className="p-2 border border-secondary rounded"
                    value={selectedTherapist}
                    onChange={(e) => setSelectedTherapist(e.target.value)}
                >
                    <option value="all">All Therapists</option>
                    {therapists.map((therapist) => (
                        <option key={therapist.id} value={therapist.id}>
                            {therapist.name}
                        </option>
                    ))}
                </select>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                editable
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                eventClick={(info) => {
                    alert(`Event: ${info.event.title}`);
                }}
            />
        </div>
    );
}
