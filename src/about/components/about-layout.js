import React from 'react';
import './about-layout.css';

function AboutLayout() {
    return (
        <div className='About-Layout' id="about">
            <div className="About-Title">
                <h2>About me</h2>
            </div>
            <div className="About-Section-Container row">
                <div className="About-Description col-md-7">
                    <p>
                        I'm a passionate <span>FrontEnd Developer </span>from <span>Córdoba, Argentina</span>. <br></br>
                        I enjoy working in a friendly environment with a committed team looking for the same common objectives. <br></br>
                        I truly believe that communication skills and respect are the basis of an unstoppable and unique team. 
                    </p>
                    <p>
                        Working <span>since 2010 </span>in several Web Projects as a <span>Freelance FrontEnd Developer</span>  
                        I've reached experience and knowledge in different technologies, frameworks, and systems as HTML5, 
                        CSS3, JS, CoffeeScript, Reactjs, Bootstrap, PHP, Unit Testing, Continuous Integration, Git, GitHub, BitBucket, 
                        DeployHQ, Wordpress, among others. <br></br>
                        Also, I've learned Graphic Design, Video Editing Software, and Audio Production and I work every day with these concepts.
                    </p>
                    <p>
                        I love to code, design, discover, learning, look into new technologies and figure how to apply 
                        them to new or existing projects to improve the user experience, performance, and capabilities. <br></br>
                        I love sharing everything I learn and to encourage people to create things that impact on other people's life.
                    </p>
                    <p>
                        I have a soul mate who makes my days very happy, and we're about to be parents 
                        of a baby girl.  
                    </p>
                    <p>
                        My hobbies include playing bass guitar and electric guitar, composing new songs and going to all the rock concerts I can.<br></br>
                        I play bass guitar in a Rock Band called <span>Nueve Tercios</span> since 2015. 
                    </p>
                </div>
                <div className="About-Image col-md-5 d-none d-md-block">
                </div>
            </div>
        </div>
    );
}

export default AboutLayout;