import React from 'react';
import './contact-layout.css';
import linkedIn from '../../images/linkedIn.png';
import twitter from '../../images/twitter.png';


function ContactLayout() {
    return (
        <div className='Contact-Layout' id="contact">
            <div className="Contact-Title text-center">
                <h2>Contact me</h2>
            </div>
            <div className="Contact-Container row text-center">
                <div className="Social-Container col-md-6">
                    <h4>Social</h4>
                    <a className="socialIconContainer" href="https://www.linkedin.com/in/emmartinez-profile/">
                        <img className="socialIconImage" alt="LinkedIn logo" src={ linkedIn }/> 
                        LinkedIn
                    </a>
                    <a className="socialIconContainer" href="https://twitter.com/manumac86">
                        <img className="socialIconImage" alt="LinkedIn logo" src={ twitter }/>
                        Twitter
                    </a>
                </div>
                <div className="Social-Container col-md-6">
                    <h4>Direct</h4>
                    <a href="mailto:hi@manumac.com.ar">hi@manumac.com.ar</a>
                    <a href="mailto:emmartinez86@gmail.com">emmartinez86@gmail.com</a>
                </div>
            </div>
            <h4><a href="http://manumac.com.ar">Emmanuel Martínez</a></h4>
        </div>
    );
}

export default ContactLayout;