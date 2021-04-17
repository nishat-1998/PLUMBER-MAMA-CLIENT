import React from 'react';
//import { Link } from 'react-router-dom';
import leak from '../../../images/leak.png';
import plumber from '../../../images/plumber.png';
import toilet from '../../../images/toilet.png';
import plum from '../../../images/plumbing.png';
import water from '../../../images/water-pipe.png';
import over from '../../../images/water-pipe.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Link} from 'react-router-dom';

const serviceData=[
    {
        name:'PIPE LEAKING',
        img:leak
    },
    {
        name:'BATHTUB INSTALLATION',
        img:plumber
    },
    {
        name:'TOILET LEAKING',
        img:toilet
    },
    {
        name:'DRAIN CLEANING',
        img:plum
    },  {
        name:'SOLDER COPPER',
        img:water
    },
    {
        name:'OVERFLOWING TOILET',
        img:over
    }
]
const Services = () => {
    return (
       <section className="services-container mt-5">
          <div className="text-center">
          <h1 className="text-dark">OUR SERVICES</h1>
          <h3>Some Benefits of <span className="text-warning">Plumbing</span> <br/>and <span className="text-warning"> Sanitary </span>Systems</h3>
          </div>
          <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
              serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)  
            }
            </div>
        </div>
        <div>
        <h1 style={{textAlign: 'center'}}>Let's  <Link to="/book">Book Service</Link></h1>
        </div>
       </section>
    );
};

export default Services;