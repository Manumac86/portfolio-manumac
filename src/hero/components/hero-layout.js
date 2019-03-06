import React from 'react';
import './hero-layout.css';
import avatar from '../../images/avatar.jpg';
import Menu from '../../menu/containers/menu';

function HeroLayout() {
    return (
        <div className='Hero-Layout'>
            <div className='title-container'>
                <img src={avatar}></img>
                <h1>Emmanuel Martínez</h1>
                <Menu></Menu>  
            </div>
        </div>
    );
}
export default HeroLayout;