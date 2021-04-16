import React from 'react';
import Footer from '../../Shared/Footer/Footer'
import FeaturedService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import Plumbers from '../Plumbers/Plumbers';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
         <Header></Header>
         <Services></Services>
         <FeaturedService></FeaturedService>
       <Testimonials></Testimonials>
       <Plumbers></Plumbers> 
          <Footer></Footer>
        </div>
    );
};

export default Home;