import React,{useEffect,useState} from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'; 


const Testimonials = () => {
    const [testimonials,setTestimonials] = useState([])

    useEffect( () => {
        fetch('https://peaceful-harbor-44348.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
 
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h1 className="text-warning text-uppercase">REVIEW</h1>
                   <h1>What Our Client <br/> Says </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonials.map(testimonial => <Testimonial key={testimonial._id} testimonial={testimonial} />)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;