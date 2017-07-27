import React, { Component } from 'react';
import game from '../images/game_of_life.png';


class Portfolio extends Component {

  render() {
    ;
    return (
      <div>
        <div>
          <p>You can find a lot in <a href="https://github.com/jason-tuttle">my GitHub</a> repositories:</p>
          <img src={game} style={{width: '40vw'}} alt='game of life simulation' />
        </div>

      </div>
    );
  }
}

export default Portfolio;
