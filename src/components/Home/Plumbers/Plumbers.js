import React from 'react';
import Plumber from '../Plumber/Plumber';
const Plumbers = () => {
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-warning mb-5">Our Plumber</h5>
                <div className="row">
                    <Plumber></Plumber>
                    <Plumber></Plumber>
                    <Plumber></Plumber>
                </div>
            </div>
        </section>
    );
};

export default Plumbers;