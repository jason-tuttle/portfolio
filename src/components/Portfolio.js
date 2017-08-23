import React, { Component } from 'react';
import game from '../images/game_of_life.png';
import rover from '../images/mars_rover2.jpg';
import fretboard from '../images/fretboard.png';
import wordgame from '../images/word_game.png';
import filmclub from '../images/filmclub.png';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className='portfolio-container'>
          <p>You can find a lot in <a href="https://github.com/jason-tuttle">
          my GitHub</a> repositories, but here are some highlights:</p>
          <div className='portfolio-piece'>
            <img src={fretboard} alt='fret board: mock store-front' className='portfolio-image' /><br />
            <div className="portfolio-description"><h3>Fret Board</h3>
              A mock store-front,
              written with React, using Redux to manage the state of the "store"
              and the user's shopping cart, and React Router to handle page navigation.
              <ul>
                <li style={{fontSize: '1.2em'}}><strong>Tech Stack:</strong></li>
                <li>React</li>
                <li>React Router</li>
                <li>Redux</li>
                <li>React Bootstrap</li>
              </ul>
            </div>
            <p className="portfolio-links">
              <i className="fa fa-share-square-o fa-2x" ></i>
              <a href="https://jason-tuttle.github.io/week-10/" target="_blank" rel="noopener noreferrer">
              See it in action here</a>, <br />
              or view the code on <a href='https://github.com/jason-tuttle/rover-photos' target="_blank" rel="noopener noreferrer">
              GitHub</a>
            </p>
          </div>
          <div className='portfolio-piece'>
            <img src={game} alt='game of life simulation' className='portfolio-image' /><br />
            <div className="portfolio-description"><h3>Conway's Game of Life simulation</h3>
              written with React
              <ul>
                <li style={{fontSize: '1.2em'}}><strong>Tech Stack:</strong></li>
                <li>React</li>
              </ul>
            </div>
            <p className="portfolio-links">
              <i className="fa fa-share-square-o fa-2x" ></i>
              <a href="https://jason-tuttle.github.io/game-of-life/" target="_blank" rel="noopener noreferrer">
              Run it here</a>, or view the code on&nbsp;
              <a href="https://github.com/jason-tuttle/game-of-life" target="_blank" rel="noopener noreferrer">
              GitHub</a>
              &nbsp;<i className="fa fa-share-square-o" aria-hidden="true"></i>
            </p>
          </div>
          <div className='portfolio-piece'>
            <img src={rover} alt='mars rover browser' className='portfolio-image' /><br />
            <div className="portfolio-description"><h3>Mars Rover Photo Browser</h3>
              Pull photos from NASA Mars rovers,
              with the ability to select from the rover's available cameras, and
              view photos from different "sols". Written with React:
              <ul>
                <li style={{fontSize: '1.2em'}}><strong>Tech Stack:</strong></li>
                <li>React</li>
                <li>NASA API</li>
              </ul>
            </div>
            <p className="portfolio-links">
              <i className="fa fa-share-square-o fa-2x" ></i>
              <a href="https://jason-tuttle.github.io/rover-photos/" target="_blank" rel="noopener noreferrer">
              See it here</a>, or view the code on&nbsp;
              <a href="https://github.com/jason-tuttle/rover-photos">GitHub</a>
            </p>
          </div>
          <div className='portfolio-piece'>
            <img src={filmclub} alt='film club mock site' className='portfolio-image' /><br />
            <div className="portfolio-description">
              <h3>Film Club</h3>
              Responsive design assignment, written with just HTML &amp; CSS:
              <ul>
                <li style={{fontSize: '1.2em'}}><strong>Tech Stack:</strong></li>
                <li>HTML</li>
                <li>CSS</li>
                <li>@media queries</li>
              </ul>
            </div>
            <p className="portfolio-links">
              <i className="fa fa-share-square-o fa-2x" ></i>
              <a href="https://jason-tuttle.github.io/tiy-week-two-project/" target="_blank" rel="noopener noreferrer">
              See it here</a>, or view the code on&nbsp;
              <a href="https://github.com/jason-tuttle/tiy-week-two-project/">GitHub</a>
            </p>
          </div>
          <div className='portfolio-piece'>
            <img src={wordgame} alt='mystery word game' className='portfolio-image' /><br />
            <div className="portfolio-description">
              <h3>Mystery Word</h3>
              Full-Stack web app, Node.js/Express back-end, front-end rendered in Mustache
              <ul>
                <li style={{fontSize: '1.2em'}}><strong>Tech Stack:</strong></li>
                <li>Node.js</li>
                <li>Express, Express-session, Express Validator</li>
                <li>Sequelize CLI</li>
                <li>Mustache Express</li>
              </ul>
            </div>
            <p className="portfolio-links">
              <i className="fa fa-share-square-o fa-2x" ></i>
            <a href="https://mystery-word-game.herokuapp.com/game" target="_blank" rel="noopener noreferrer">
            Play the game here</a> or view the code on&nbsp;
            <a href="https://github.com/jason-tuttle/week-five-project">GitHub</a>
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
