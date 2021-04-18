import React from 'react';

const Testimonial = ({testimonial}) => {

    return (
        
        <div className="card shadow-sm ">
            <div className="card-body">
                <p className="card-text text-center">{testimonial.comment}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={`http://localhost:5055/${testimonial.image.img}`} alt="" width="60"/>
                <div>
                    <h6 className="text-warning">{testimonial.name}</h6>
                    <p className="m-0">{testimonial.from}</p>
                </div>
            </div> 
       </div>
     
    );
};

export default Testimonial;