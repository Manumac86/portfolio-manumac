import React from 'react';
import './hero-layout.css';
import avatar from '../../images/avatar.jpg';

function HeroLayout() {
    return (
        <div className='Hero-Layout'id="hero">
            <div className='title-container'>
                <img src={avatar} alt="Avatar"></img>
                <h1>Emmanuel Martínez</h1>
            </div>
        </div>
    );
}
export default HeroLayout;