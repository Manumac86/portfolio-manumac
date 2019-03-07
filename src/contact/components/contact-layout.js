import React from 'react';
import './contact-layout.css';
import linkedIn from '../../images/linkedIn.png';

function ContactLayout() {
    return (
        <div className='Contact-Layout' id="contact">
            <div className="Contact-Title text-center">
                <h2>Contact me</h2>
            </div>
            <div className="Contact-Container row text-center">
                <div className="Social-Container col-md-6">
                    <h4>Social</h4>
                    <a href="https://www.linkedin.com/in/emmartinez-profile/">LinkedIn</a>
                    <a href="https://twitter.com/manumac86">Twitter</a>
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