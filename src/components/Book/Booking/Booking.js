import React from 'react';
import BookCard from '../BookCard/BookCard';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        id: 1,
        subject: 'PIPE LEAKING',
        ele: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores.',
        cost: 1000
    },
    {
        _id: '5e8df578e6e8231764dc23df',
        id: 2,
        subject: 'BATHTUB INSTALLATION',
      ele: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores.',
        cost:1200
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        id: 3,
        subject: 'TOILET LEAKING',
        ele:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores.',
        cost:1400
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        id: 4,
        subject: 'DRAIN CLEANING',
        ele: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores.',
        cost:1360
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        id: 5,
        subject: 'SOLDER COPPER',
        ele:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores.',
        cost:1276
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        id: 6,
        subject: ' Orthodontics',
        ele:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores.',
        cost:1500
    }
]
const Booking = ({date}) => {
    return (
      <section>
          <h1 className="text-center text-brand mb-5"> Available Services on {date.toDateString()}</h1>
          <h1 className="text-center">Request <span className="text-warning ">Service</span></h1>
          <h3>Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our audience.</h3>
          {
                    bookingData.map(booking => <BookCard booking={booking} date={date} key={booking.id}></BookCard>)
                }
      </section>  
    );
};

export default Booking;