import React from 'react';
import './menu-layout.css';

function MenuLayout() {
    return (
        <div className='Menu-Layout'>
            <ul className='menu-list'>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </div>
    );
}

export default MenuLayout;