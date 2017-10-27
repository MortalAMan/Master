import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import './css/Index.css';

import Tile from './components/Tile';
import NotFound from './components/NotFound';

const Root = () => {
  return(
    
    <BrowserRouter>
    <div>
    <Match exactly pattern='/' component={App} />
    <Match pattern='./components/Tile' component={Tile} />
    <Miss component={NotFound} />
    </div>
    </BrowserRouter>
    
  )
}

render(<Root/>, document.querySelector('#main')); 


