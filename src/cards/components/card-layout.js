import React from 'react';
import './card-layout.css';

function CardLayout(props) {
    console.log(props.content);
    return (
      <div className='Card-Layout'>
        <img 
          src={props.content.image} 
          alt="project"
        ></img>
        <h3>
          <a 
            href={props.content.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >{props.content.title}</a>
        </h3>
        <p>{props.content.description}</p>
        <p>{props.content.technology}</p>
      </div>
    )
}

export default CardLayout;