import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';



class BaseLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'home',
      styles: {
        home: ['first', 'second', 'third'],
        about: ['third', 'first', 'second'],
        portfolio: ['second', 'third', 'first']
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
            <Link to="/" onClick={this.handleClick} className={styles[location][0]} name='home'>Home</Link>
            <Link to="/about" onClick={this.handleClick} className={styles[location][1]} name='about'>About</Link>
            <Link to="/portfolio" onClick={this.handleClick} className={styles[location][2]} name='portfolio'>Portfolio</Link>
          </div>
          <h1>Jason Tuttle</h1>
        </header>
        {this.props.children}
      </div>
    );
  }

}

export default BaseLayout;
