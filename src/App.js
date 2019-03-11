import React, { Component } from 'react';
import './App.css';
import Hero from './hero/containers/hero';
import Menu from './menu/containers/menu';
import About from './about/containers/about';
import Projects from './projects/containers/projects';
import Contact from './contact/containers/contact';
/* import Education from './education/containers/education'; */
import Experience from './experience/containers/experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero></Hero>
        <Menu></Menu>
        <About></About>
        <Projects></Projects>
        {/* <Education></Education>*/}
        <Experience></Experience> 
        <Contact></Contact> 
      </div>
    );
  }
}

export default App;
