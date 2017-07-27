import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/portfolio-app/" component={Home} />
        <Route path="/portfolio-app/about" component={About}/>
        <Route path="/portfolio-app/portfolio" component={Portfolio}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
