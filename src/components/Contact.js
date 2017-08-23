import React, { Component } from 'react';

class Class extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <p>There are many ways to see what I'm up to, and get in touch with me. Here are a few:</p>
        <div>
          <p className="contact-piece">
            <i className="fa fa-file-text-o fa-2x"></i><br />
            Personal Blog: <a href='http://hearspotbark.com'>hearspotbark.com</a>
          </p>
          <p className="contact-piece">
            <i className="fa fa-github fa-2x" ></i><br />
            GitHub: <a href='https://github.com/jason-tuttle'>jason-tuttle</a></p>
          <p className="contact-piece">
            <i className="fa fa-linkedin-square fa-2x" ></i><br />
            LinkedIn: <a href='https://www.linkedin.com/in/jasonmtuttle/'>jasonmtuttle</a></p>
          <p className="contact-piece">
            <i className="fa fa-twitter-square fa-2x" ></i><br />
            Twitter: <a href='https://twitter.com/_jtuttle'>_jtuttle</a></p>
          <p className="contact-piece">
            <i className="fa fa-laptop fa-2x" ></i><br />
            HackerRank: <a href='https://www.hackerrank.com/jason71'>jason71</a></p>
        </div>
          <p className="contact-piece">
            <i className="fa fa-paper-plane fa-2x" ></i><br />
            Email: <a href="mailto:jason@hearspotbark.com">jason@hearspotbark.com</a>
          </p>

      </div>
    );
  }

}

export default Class;
