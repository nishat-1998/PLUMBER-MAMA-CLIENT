  
import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "PIPE LEAKING 1" , link: "/super service"},
        {name: "BATHTUB INSTALLATION" , link: "/emergency"},
        {name: "TOILET LEAKING Pro" , link: "/super service"},
        {name: "DRAIN CLEANING Ex" , link: "/super service"},
        {name: "SOLDER COPPER Pro" , link: "/super service"}
    ]
    const ourAddress = [
        {name: "Mohakhali DOHS -Dhaka-1206" , link: "//google.com/map"},
        {name: "Bangladesh" , link: "//google.com/map"},
       
    ]
    const proService = [
        {name: "PIPE LEAKING" , link: "/super service"},
        {name: "BATHTUB INSTALLATION" , link: "/emergency"},
        {name: "TOILET LEAKING" , link: "/super service"},
        {name: "DRAIN CLEANING" , link: "/super service"},
        {name: "SOLDER COPPER" , link: "/super service"},
        {name: "OVERFLOWING TOILET" , link: "/checkup"},
        {name: "SOLDER COPPER Pro" , link: "/super service"}
    ]
    const services = [
        {name: "PIPE LEAKING" , link: "/super service"},
        {name: "BATHTUB INSTALLATION" , link: "/emergency"},
        {name: "TOILET LEAKING" , link: "/super service"},
        {name: "DRAIN CLEANING" , link: "/super service"},
        {name: "SOLDER COPPER" , link: "/super service"},
        {name: "OVERFLOWING TOILET" , link: "/checkup"},
        {name: "SOLDER COPPER Pro" , link: "/super service"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={proService}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-warning">+8801720464156</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-secondary">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved @ Nishat Ahmed</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;