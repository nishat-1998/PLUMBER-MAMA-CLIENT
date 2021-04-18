import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faHome, faComments, faUserPlus,faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://peaceful-harbor-44348.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li><Link to="/book" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Book Service</span>
                    </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon icon={faComments} /> <span>Add Review</span>
                        </Link>
                    </li>
                   { isAdmin && 
                       <div>
                            <li>
                        <Link to="/addService" className="text-white" >
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/addAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allClients" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>All Clients</span>
                        </Link>
                    </li>
                  
                   
                    <li>
                        <Link to="/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                       </div>
                   }
        
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;