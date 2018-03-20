import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import About from './components/About'
import Home from './components/Home'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter, Route } from 'react-router-dom'

import './styles/index.css'


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))


//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
