import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen bg-background-light">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
