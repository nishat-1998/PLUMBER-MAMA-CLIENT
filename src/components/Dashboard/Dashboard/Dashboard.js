import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BookByDate from '../BookByDate/BookByData';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    const [selectedDate,setSelectedDate] =useState(new Date());
    const [books,setBooks] = useState([])
    
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://peaceful-harbor-44348.herokuapp.com/bookingByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectedDate })
        })
        .then(res=>res.json())
        .then(data => setBooks(data))
    }, [selectedDate])
  
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <BookByDate books={books}></BookByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;