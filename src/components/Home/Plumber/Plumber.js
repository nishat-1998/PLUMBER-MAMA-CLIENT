import React from 'react';
import img from '../../../images/10.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Plumber= () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Mr.James Smith</h4>
            <p> <FontAwesomeIcon className="text-warning" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Plumber;