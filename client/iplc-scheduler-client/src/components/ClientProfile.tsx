import React from 'react';

interface Therapist {
  id: string;
  name: string;
}

interface Client {
  id: string;
  name: string;
  age: number;
  diagnosis: string;
  therapists: Therapist[];
}

interface ClientProfileProps {
  client: Client;
}

const ClientProfile: React.FC<ClientProfileProps> = ({ client }) => {
  return (
    <div className="bg-background-white p-6 rounded-lg shadow-md">
      <h2 className="text-primary text-xl font-bold mb-4">Client Profile</h2>
      <div className="space-y-2">
        <p><span className="font-medium">Name:</span> {client.name}</p>
        <p><span className="font-medium">Age:</span> {client.age}</p>
        <p><span className="font-medium">Diagnosis:</span> {client.diagnosis}</p>
        <div>
          <h3 className="font-medium mt-4 mb-2">Linked Therapists:</h3>
          <ul className="list-disc list-inside">
            {client.therapists.map(therapist => (
              <li key={therapist.id}>{therapist.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
