import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from 'react-router-dom';
import CalendarView from './components/CalendarView';
import TherapistProfile from './components/TherapistProfile';
import ClientProfile from './components/ClientProfile';

interface TherapistData {
  id: string;
  name: string;
  npi: string;
  license: string;
  clients: Array<{ id: string; name: string }>;
  schedule: string;
}

interface ClientData {
  id: string;
  name: string;
  age: number;
  diagnosis: string;
  therapists: Array<{ id: string; name: string }>;
}

function App() {
  return (
    <Router>
      <nav className="bg-primary p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">
            IPLC Scheduler
          </Link>
          <div className="space-x-4">
            <Link to="/therapists" className="text-white hover:text-secondary">
              Therapists
            </Link>
            <Link to="/clients" className="text-white hover:text-secondary">
              Clients
            </Link>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<CalendarView />} />
        <Route path="/therapists" element={
          <TherapistProfile therapist={{
            id: '1',
            name: 'Dr. Smith',
            npi: '1234567890',
            license: 'CA12345',
            clients: [
              { id: '1', name: 'John Doe' },
              { id: '2', name: 'Jane Smith' }
            ],
            schedule: 'Mon-Fri 9am-5pm'
          }} />
        } />
        <Route path="/clients" element={
          <ClientProfile client={{
            id: '1',
            name: 'John Doe',
            age: 35,
            diagnosis: 'ADHD',
            therapists: [
              { id: '1', name: 'Dr. Smith' },
              { id: '2', name: 'Dr. Johnson' }
            ]
          }} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
