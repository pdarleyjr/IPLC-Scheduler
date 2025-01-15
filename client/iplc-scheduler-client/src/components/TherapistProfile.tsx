import React from 'react';

interface Client {
  id: string;
  name: string;
}

interface Therapist {
  id: string;
  name: string;
  npi: string;
  license: string;
  clients: Client[];
  schedule: string;
}

interface TherapistProfileProps {
  therapist: Therapist;
}

const TherapistProfile: React.FC<TherapistProfileProps> = ({ therapist }) => {
  return (
    <div className="bg-background-white p-6 rounded-lg shadow-md">
      <h2 className="text-primary text-xl font-bold mb-4">Therapist Profile</h2>
      <div className="space-y-2">
        <p><span className="font-medium">Name:</span> {therapist.name}</p>
        <p><span className="font-medium">NPI:</span> {therapist.npi}</p>
        <p><span className="font-medium">License:</span> {therapist.license}</p>
        <div>
          <h3 className="font-medium mt-4 mb-2">Linked Clients:</h3>
          <ul className="list-disc list-inside">
            {therapist.clients.map(client => (
              <li key={client.id}>{client.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mt-4 mb-2">Schedule:</h3>
          <p>Availability: {therapist.schedule}</p>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
