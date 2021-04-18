import React from 'react';
import { motion } from "framer-motion"

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
           <img animate={{color:'yellow'}} style={{height:"50px"}} src={service.img} alt=""/> 
           <motion.h5 animate={{color:'#fcd116',opacity:1}} className="mt-3 mb-3">{service.name}</motion.h5>
           <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, asperiores.</p>
        </div>
    );
};

export default ServiceDetail;