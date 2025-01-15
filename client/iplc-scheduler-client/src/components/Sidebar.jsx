import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const links = [
        { name: 'Dashboard', icon: '📊', path: '/' },
        { name: 'Calendar', icon: '📅', path: '/calendar' },
        { name: 'Staff', icon: '👩‍⚕️', path: '/staff' },
        { name: 'Clients', icon: '👤', path: '/clients' },
        { name: 'Reports', icon: '📈', path: '/reports' },
    ];

    return (
        <div className="bg-primary text-white h-screen w-64 shadow-card">
            <div className="p-4">
                <h1 className="text-2xl font-bold">IPLC Scheduler</h1>
            </div>
            <nav className="mt-4">
                {links.map((link) => (
                    <NavLink
                        to={link.path}
                        key={link.name}
                        className="flex items-center px-4 py-2 hover:bg-secondary rounded hover-effect"
                    >
                        <span className="mr-2">{link.icon}</span>
                        {link.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
