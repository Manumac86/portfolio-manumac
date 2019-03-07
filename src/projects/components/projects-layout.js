import React from 'react';
import './projects-layout.css';
import Card from '../../cards/containers/card';
import ufo from '../../images/ufo.png';
import villaMatilda from '../../images/villa-matilda.png';
import destinoCba from '../../images/destino-cba.png';
import nueveTercios from '../../images/nueve-tercios.png';
import museoPatagonico from '../../images/museo.png';
import museoPatagonico2 from '../../images/museo2.png';
import bajoAgua from '../../images/bajoagua.png';
import manumac from '../../images/manumac.png';


function ProjectsLayout() {
    return (
        <div className='Projects-Layout' id="projects">
            <div className="Projects-Title">
                <h2>Projects</h2>
            </div>
            <div className="Cards-Container">
                <Card link="http://manumac.com.ar" image={manumac} title="Online Personal CV" description="Personal CV Website" technology="React, Bootstrap, Webpack"/>            
                <Card link="http://museopatagonico.org.ar" image={museoPatagonico} title="Museo Patagónico" description="Museum Website" technology="HTML5, CSS3, JS"/>
                <Card link="http://latest.museopatagonico.org.ar" image={museoPatagonico2} title="Museo Patagónico" description="Museum Update Website (WIP)" technology="React, Webpack"/>
                <Card link="http://ufozonacaliente.com" image={ufo} title="UFO Zona Caliente" description="UFO Scientific Research Blog" technology="HTML5, CSS3, JS"/>
                <Card link="http://villamatilda.com.ar" image={villaMatilda} title="Villa Matilda" description="Events Room Website" technology="HTML5, CSS3, Bootstrap, JS"/>
                <Card link="https://destinocordoba.com.ar" image={destinoCba} title="Destino Córdoba" description="News and Travel Website" technology="HTML5, CSS3, JS, Wordpress"/>
                <Card link="http://bajoaguasounds.com" image={bajoAgua} title="Bajo Agua Sounds" description="Audio Production Agency" technology="HTML5, CSS3, JS"/>
                <Card link="http://nuevetercios.com" image={nueveTercios} title="Nueve Tercios" description="Rock Band Website" technology="HTML5, CSS3, Bootstrap"/>
            </div>
        </div>
    );
}

export default ProjectsLayout;