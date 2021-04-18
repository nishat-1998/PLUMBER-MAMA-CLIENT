import React,{useState} from 'react';
import BookForm from '../BookForm/BookFrom';


const BookCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
  
    return ( 
    
        <div className=" col-md-4 mb-5"> 
        <div className="card p-3">
            <div className="card-body text-center ">
                <h5 className="card-title text-brand">{booking.subject}</h5>
                <h6>{booking.ele}</h6>
                <p>{booking.cost} Tk For This Service</p>
                <button onClick={openModal} className="btn btn-brand text-uppercase">Book Services</button>
               <BookForm modalIsOpen={modalIsOpen} BookOn={booking.subject}closeModal={closeModal} date={date}></BookForm>
            </div>
        </div>
    </div>
    );
};

export default BookCard;