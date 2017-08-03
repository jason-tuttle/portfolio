import React, { Component } from 'react';
import game from '../images/game_of_life.png';
import rover from '../images/mars_rover2.jpg';
import fretboard from '../images/fretboard.png';
import wordgame from '../images/word_game.png';
import filmclub from '../images/filmclub.png';

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
          <div style={{width: '80vw', margin:'auto'}}>
            <img src={filmclub} style={{width: '40vw'}} alt='film club mock site' /><br />
            <p>Responsive design assignment, written with just HTML &amp; CSS: <a href="https://jason-tuttle.github.io/tiy-week-two-project/">See it here</a></p>
          </div>

          <div style={{width: '80vw', margin:'auto'}}>
            <img src={wordgame} style={{width: '40vw'}} alt='mystery word game' /><br />
            <p>Full-Stack web app, Node.js/Express back-end, front-end rendered in Mustache: <a href="https://mystery-word-game.herokuapp.com/game">See it here</a></p>
          </div>
        </div>

      </div>
    );
  }
}

export default Portfolio;
