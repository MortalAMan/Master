import React from 'react';
import { render } from 'react-dom';
import './css/App.css';
import App from './components/App';
import Header from './components/Header';
import Body from './components/Body';

render(<App/>, document.querySelector('#main'));