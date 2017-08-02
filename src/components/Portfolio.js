import React, { Component } from 'react';
import game from '../images/game_of_life.png';
import rover from '../images/mars_rover2.jpg';
import fretboard from '../images/fretboard.png';

class Portfolio extends Component {

  render() {
    ;
    return (
      <div>
        <div>
          <p>You can find a lot in <a href="https://github.com/jason-tuttle">my GitHub</a> repositories:</p>
          <div style={{width: '80vw', margin:'auto'}}>
            <img src={fretboard} style={{width: '40vw'}} alt='fret board: mock store-front' /><br />
            <p>Fret Board, a mock store-front, written with React and Redux: <a href="https://jason-tuttle.github.io/week-10/">See it here</a></p>
          </div>
          <div style={{width: '80vw', margin:'auto'}}>
            <img src={game} style={{width: '40vw'}} alt='game of life simulation' /><br />
            <p>Conway's Game of Life simulation, written with React: <a href="https://jason-tuttle.github.io/game-of-life/">Run it here</a></p>
          </div>
          <div style={{width: '80vw', margin:'auto'}}>
            <img src={rover} style={{width: '40vw'}} alt='mars rover browser' /><br />
            <p>Pull photos from NASA Mars rovers, written with React: <a href="https://jason-tuttle.github.io/rover-photos/">See it here</a></p>
          </div>
        </div>

      </div>
    );
  }
}

export default Portfolio;
