import React from 'react';

export default function ClientProfile({ client }) {
    return (
        <div className="bg-background-white p-6 rounded-lg shadow-md">
            <h2 className="text-primary text-xl font-bold mb-4">Client Profile</h2>
            <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {client.name}</p>
                <p><span className="font-medium">Date of Birth:</span> {client.dob}</p>
                <p><span className="font-medium">Insurance:</span> {client.insurance}</p>
                <div>
                    <h3 className="font-medium mt-4 mb-2">Linked Therapists:</h3>
                    <ul className="list-disc list-inside">
                        {client.therapists.map(therapist => (
                            <li key={therapist.id}>{therapist.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium mt-4 mb-2">Treatment Plan:</h3>
                    <p>{client.treatmentPlan}</p>
                </div>
            </div>
        </div>
    );
}
