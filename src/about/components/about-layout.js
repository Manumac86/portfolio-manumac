import React from 'react';
import './about-layout.css';
import NueveTercios from '../../images/nueve-tercios.jpg';

function AboutLayout() {
    return (
        <div className='About-Layout' id="about">
            <div className="About-Title">
                <h2>About me</h2>
            </div>
            <div className="About-Section-Container row">
                <div className="About-Description col-md-7">
                    <p>
                        I'm a passionate FrontEnd developer from <span>Córdoba, Argentina</span>. <br></br>
                        I enjoy working in a friendly environment with a commited team looking for the same common objectives.
                    </p>
                    <p>
                        I love to code and look into new technologies learning how to apply them to new or existing projects. <br></br>
                        I love <span>Open Source Projects</span>, sharing everything I learn, 
                        and encouraging people to create things that impact on other people's life.
                    </p>
                    <p>
                        I have a soul mate, <span>Fátima</span>. She make my days very happy, and we're about to be parents 
                        of a baby girl called <span>Eloísa Emma</span>. I want to be there for them all the time possible. That's why 
                        I love Remote and Freelance work. I belive that we need to have more free time for loving. 
                    </p>
                    <p>
                        My hobbies include playing bass guitar and electric guitar, composing new songs and go to all the rock concerts I can.<br></br>
                        I play bass guitar in a Rock Band called <span>Nueve Tercios</span> since 2015. 
                    </p>
                </div>
                <div className="About-Image col-md-5 d-none d-md-block">
                    <img src={NueveTercios} alt="Emmanuel tocando el bajo en Nueve Tercios"></img>
                </div>
            </div>
        </div>
    );
}

export default AboutLayout;