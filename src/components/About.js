import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

class About extends Component {

  render() {

    return (
      <div>
        <h3>Developer. Audio Guru. Dad.</h3>
        <p>
          <h4>Also:</h4>
          Cyclist.<br />
          Musician.<br />
          Songwriter.<br />
          Award-winning sound editor!<br />
          Mostly harmless.<br />
        </p>
        <p>After nearly 20 years working in sound &mdash; <br />
        editing sound for video games, films, &amp; television &mdash;<br />
        mixing live sound for theatre &amp; music &mdash;<br />
        &mdash;<br />
        I'm adding web development to that list.<br />
        12 weeks at the Iron Yard in Indianapolis has prepared me for a lifetime of learning to code,<br />
        because if I've learned one thing, it's that I haven't learned <em>anything</em> yet... in the grand scheme of things.
        </p>
        <p>However, I <em>have</em> learned that I can learn, and pretty fast, too.<br />
        HTML, CSS, &amp; JavaScript, with Node.js/Express, SQL(Postgres), MongoDB/Mongoose, &amp; React/React Native to round it all out.</p>
        <p>Like I said, what do <em>you</em> want to do today?</p>
        <p><i className="fa fa-globe fa-3x" ></i></p>
        <div style={{padding: '50px'}}>
          <h3>Resumé</h3>
          <Accordion styled fluid>
            <Accordion.Title className='resume-header'>
              <Icon name='dropdown' />
              Skills
            </Accordion.Title>
            <Accordion.Content>
              <div className='portfolio-piece'>
                <ul>
                <li>Apple macOS expert</li>
                <li>Web Development:</li>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Ember.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                  </ul>
                <li>XCode<br />
                    fundamental knowledge of Mac/iOS software development in</li>
                  <ul>
                    <li>Objective-C</li>
                    <li>Swift</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>C++</li>
                  </ul>
                <li>Creative Professional apps:
                  <ul>
                    <li>ProTools</li>
                    <li>Logic Pro X</li>
                    <li>Final Cut Pro X</li>
                    <li>Pixelmator</li>
                    <li>Vectorworks (CAD)</li>
                    <li>Microsoft Office suite</li>
                    <li>Apple iWork suite, and much more...</li>
                  </ul></li>
                </ul>
              </div>
            </Accordion.Content>
          </Accordion>
          <Accordion styled fluid>
            <Accordion.Title className='resume-header'>
              <Icon name='dropdown' />
              Experience
            </Accordion.Title>
            <Accordion.Content>
              <div className='portfolio-piece'>
                <h4 className='portfolio-links'>Front-End Developer</h4>
                <p className='portfolio-description'>
                  <strong>The Iron Yard, Indianapolis IN – May 2017-present</strong><br />
                  Web Development Career Path bootcamp-style code school, studying
                  front-end & back-end web development fundamentals, plus a focused
                  study in React.js.
                </p>
              </div>
              <div className='portfolio-piece'>
                <h4 className='portfolio-links'>Sound Engineer</h4>
                <p className='portfolio-description'>
                  <strong>Indiana Repertory Theatre, Indianapolis IN – 2015-2017</strong><br />
                  Install, operate, troubleshoot, and maintain sound systems for
                  IRT plays, performances, and events, working alongside sound
                  designers, and cooperatively with several creative departments
                  (scenery, lighting, props, etc).
                </p>
              </div>
              <div className='portfolio-piece'>
                <h4 className='portfolio-links'>Freelance</h4>
                <p className='portfolio-description'>
                  <strong>Los Angeles CA & Indianapolis IN – 2001-present</strong><br />
                  Sole proprietor of Hear Spot Bark, providing services in sound
                  design, editing, mixing, recording, and engineering for films,
                  television, and theater productions.
                </p>
              </div>
              <div className='portfolio-piece'>
                <h4 className='portfolio-links'>Lead Audio Editor</h4>
                <p className='portfolio-description'>
                  <strong>Max Post, Los Angeles, CA – 2011-2013</strong><br />
                  Transcode media files from picture editors, selected audio takes
                  and edited dialogue and production audio tracks to prepare TV
                  episodes for mixing. Also, edited and mixed dialog, effects and
                  music for “webisodes” and special online content.
                </p>
              </div>
            </Accordion.Content>
          </Accordion>
          <Accordion styled fluid>
            <Accordion.Title className='resume-header'>
              <Icon name='dropdown' />
              Education
            </Accordion.Title>
            <Accordion.Content>
              <div className='portfolio-piece'>
                <h4 className='portfolio-links'>University of California, LA</h4>
                <p className='portfolio-description'>
                  <strong>Los Angeles, CA &mdash; Master of Fine Arts (Sound Design), 2006</strong><br />
                  School of Theater Film, & Television
                </p>
              </div>
              <div className='portfolio-piece'>
                <h4 className='portfolio-links'>University of Michigan</h4>
                <p className='portfolio-description'>
                  <strong>Ann Arbor, MI —Bachelor of Fine Arts (Performing Arts Technology), 1998</strong><br />
                  School of Music, Theater & Dance
                </p>
              </div>
            </Accordion.Content>
          </Accordion>
        </div>
      </div>
    );
  }

}

export default About;
