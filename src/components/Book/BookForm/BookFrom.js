import React,{useState} from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Ie12hBWfEFcwoJKPjRH7HQdwoXzf1H0txLnBUEWtII1Uup3oofpOgjUSvEq80WvU62lje3STODP1FN8XKWI4igQ00Igazvvok');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const BookForm = ({modalIsOpen,closeModal,BookOn,date}) => {
    const { register, handleSubmit, errors } = useForm();
    const [bookingData,setBookingData] =useState(null);
    

    const onSubmit = data => {
        data.service = BookOn;
        data.date = bookingData;
       data.created = new Date();
        setBookingData(data);
    }
    const handlePaymentSuccess =  paymentId =>{
      const newData= {
          ...bookingData,paymentId
      }
        fetch('https://peaceful-harbor-44348.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                 alert('Booking created successfully.');
            }
        })
    }

    return (
        <div>

<Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                 <div style={{display:bookingData ? 'none': 'block'}} >
                <h2 className="text-center text-brand">{BookOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
              
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="time" placeholder="Preferable Time" className="form-control" />
                        {errors.time && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                    

                            <select className="form-control" name="option" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select option</option>
                                <option value="Month">Month</option>
                                <option value="Contact">Contact</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.option && <span className="text-danger">This field is required</span>}

                        </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
               </div>
               
               <div style={{display:bookingData ? 'block': 'none'}}>
                   <h3>Please Pay</h3>
                   <Elements stripe={stripePromise}>
                   <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                   </Elements>
               
              </div>
        </Modal>
    </div>
    );
};

export default BookForm;