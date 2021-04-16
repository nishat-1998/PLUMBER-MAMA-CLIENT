import React,{useState} from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import BookHeader from '../BookHeader/BookHeader';
import Booking from '../Booking/Booking';


const Book = () => {
    const [selectedDate,setSelectedDate] =useState(new Date())
    const handleDateChange= date =>{
        setSelectedDate(date);
    }
    return (
        <div>
              <Navbar></Navbar>
              <BookHeader handleDateChange={handleDateChange}></BookHeader>
               <Booking date={selectedDate}></Booking>
            <Footer></Footer>
        </div>

    );
};

export default Book;