import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CalendarView from './components/CalendarView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CalendarView />
  </React.StrictMode>
);
