import React from 'react';
import book from '../../../images/book.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#fcd116' }}>Book Services</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={book} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default BookHeader;