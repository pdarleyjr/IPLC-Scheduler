import React from 'react';
import Logo from "../../../../../../Desktop/IPLC Scheduler v1/400dpiLogo.PNG";

const Header = () => {
    return (
        <div className="bg-white shadow-card flex justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <img src={Logo} alt="IPLC Logo" className="h-8 w-8" />
                <h1 className="text-primary font-bold ml-2">IPLC Scheduler</h1>
            </div>
            <div className="flex items-center">
                <button className="text-secondary hover-effect mx-2">🔔</button>
                <button className="text-secondary hover-effect mx-2">⚙️</button>
                <button className="text-secondary hover-effect mx-2">👤</button>
            </div>
        </div>
    );
};

export default Header;
