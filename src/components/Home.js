import React, { Component } from 'react';
import computerFg from '../images/computer.jpg'
import computerBg from '../images/computer_point.jpg';
import familyFg from '../images/family.jpg';
import familyBg from '../images/family_point.jpg';
import micFg from '../images/mic.jpg';
import micBg from '../images/mic_point.jpg';

class Home extends Component {

  render() {
    const audioBg = {
      backgroundImage: `url(${micFg})`,
    };
    const dadBg = {
      backgroundImage: `url(${familyFg})`,
    };
    const devBg = {
      backgroundImage: `url(${computerFg})`,
    };

    return (
      <div className="home-container">
        <h3>Developer</h3>
          <div className="div-img" style={devBg}>
            <img className='fg-img' src={computerBg} id="dev-fg" alt='laptop computer'/>
          </div>
        <h3>Audio Guru</h3>
          <div className="div-img" style={audioBg}>
            <img className='fg-img' src={micBg} id="audio-fg" alt='microphone'/>
          </div>
        <h3>Dad</h3>
          <div className="div-img" style={dadBg}>
            <img className='fg-img' src={familyBg} id="dad-fg" alt='family'/>
          </div>

        <h2>What do <em>you</em> want to do today?</h2>
      </div>
    );
  }

}

export default Home;
