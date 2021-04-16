import React from 'react';
import BookList from '../BookList/BookList';

const BookByDate = ({books}) => {

    return (
        <div>
            <h2 className="text-brand text-center">Booking</h2>
      {
          books.length ?
        <BookList books={books}></BookList>
        :
        <div className="p-5">
        <h4 className="lead text-center">No Booking for this Date</h4>
    </div>
      }
        </div>
    );
};

export default BookByDate;