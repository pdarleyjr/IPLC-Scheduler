import React from 'react';

export default function TherapistProfile({ therapist }) {
    return (
        <div className="bg-background-white p-4 rounded-lg shadow">
            <h2 className="text-primary text-xl font-bold mb-4">Therapist Profile</h2>
            <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {therapist.name}</p>
                <p><span className="font-medium">NPI:</span> {therapist.npi}</p>
                <p><span className="font-medium">License:</span> {therapist.license}</p>
                <div>
                    <h3 className="font-medium">Schedule:</h3>
                    <ul className="list-disc pl-5">
                        {therapist.schedule.map((slot, index) => (
                            <li key={index}>{slot}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium">Linked Clients:</h3>
                    <ul className="list-disc pl-5">
                        {therapist.clients.map((client, index) => (
                            <li key={index}>{client.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
