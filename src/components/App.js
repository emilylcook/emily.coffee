import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cat from './common/Cat'
import '../styles/App.css';
import '../styles/detail.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route path='*' component={Home}/>
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Main />
        <Cat />
      </div>
    );
  }
}

export default App
