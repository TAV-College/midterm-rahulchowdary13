import React from 'react';
import { FaHome, FaCog, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings">
                            <FaCog /> Settings
                        </NavLink>
                    </li>
                    {/* Add the new tab for Rahul here */}
                    <li>
                        <NavLink to="/rahul-tab">
                            <FaUser /> Rahul's Tab
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                {/* Add routes for your tabs here */}
            </div>
        </div>
    );
};

export default Layout;