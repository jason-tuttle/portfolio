import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Portfolio</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
