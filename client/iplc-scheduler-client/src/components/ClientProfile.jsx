import React from 'react';

export default function ClientProfile({ client }) {
    return (
        <div className="bg-background-white p-4 rounded-lg shadow">
            <h2 className="text-primary text-xl font-bold mb-4">Client Profile</h2>
            <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {client.name}</p>
                <p><span className="font-medium">Date of Birth:</span> {client.dob}</p>
                <p><span className="font-medium">Insurance:</span> {client.insurance}</p>
                <div>
                    <h3 className="font-medium">Linked Therapists:</h3>
                    <ul className="list-disc pl-5">
                        {client.therapists.map((therapist, index) => (
                            <li key={index}>{therapist.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium">Appointments:</h3>
                    <ul className="list-disc pl-5">
                        {client.appointments.map((appointment, index) => (
                            <li key={index}>
                                {appointment.date} with {appointment.therapist}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
