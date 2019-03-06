import React from 'react';
import './menu-layout.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MenuLayout() {
    return (
        <div className='Menu-Layout'>
            {/* <ul className='menu-list'>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul> */}
            <Navbar bg="light" expand="lg" className="menu-list">
                <Navbar.Brand href="#hero">EM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='menu-list'>
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#education">Education</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default MenuLayout;