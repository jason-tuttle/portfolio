import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';



class BaseLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'home',
      styles: {
        home: ['first', 'third', 'third', 'third'],
        about: ['second', 'first', 'third', 'third'],
        portfolio: ['second', 'third', 'first', 'third'],
        contact: ['second', 'third', 'third', 'first']
      }
    };
  }

  handleClick = (e) => {
    this.setState({location: e.target.name});
  }

  render() {
    const {styles, location} = this.state;
    return (
      <div className="App">
        <header>
          <div className='linkBox'>
            <NavLink to="/" onClick={this.handleClick} className={styles[location][0]} name='home'>Home</NavLink>
            <NavLink to="/about" onClick={this.handleClick} className={styles[location][1]} name='about'>About</NavLink>
            <NavLink to="/portfolio" onClick={this.handleClick} className={styles[location][2]} name='portfolio'>Portfolio</NavLink>
            <NavLink to="/contact" onClick={this.handleClick} className={styles[location][3]} name='contact'>Contact</NavLink>
          </div>
          <h1>Jason Tuttle</h1>
        </header>
        {this.props.children}
      </div>
    );
  }

}

export default BaseLayout;
