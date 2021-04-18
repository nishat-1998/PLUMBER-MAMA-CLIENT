import React,{useEffect,useState} from 'react';
import BookCard from '../BookCard/BookCard';


const Booking = ({date}) => {


    const [bookingData,setBookingData] = useState([])

    useEffect( () => {
        fetch('http://localhost:5055/bookingData')
        .then(res => res.json())
        .then(data => setBookingData(data))
    }, [])

    return (
      <section>
          <h1 className="text-center text-brand mb-5"> Available Services on {date.toDateString()}</h1>
          <h1 className="text-center">Request <span className="text-warning ">Service</span></h1>
          <h3>Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our audience.</h3>
          {
                    bookingData.map(booking => <BookCard key={booking._id} booking={booking} date={date} ></BookCard>)
                }
      </section>  
    );
};

export default Booking;