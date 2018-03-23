import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Letter from './common/Letter'
import LetterSmall from './common/LetterSmall'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

/**
 * -------------------------------------------------------
 * React Scroll Parallax
 * -------------------------------------------------------
 *
 * Experimenting with some scroll based parallax effects
 * using React. See react-scroll-parallax:
 * https://github.com/jscottsmith/react-scroll-parallax
 *
 */

const Gradients = () => (
    <svg width="50" height="50" version="1.1" className="hidden">
        <defs>
            <linearGradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2fcee3" />
                <stop offset="100%" stopColor="#90e1c4" />
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#405D86" />
                <stop offset="100%" stopColor="#384257" />
            </linearGradient>
            <linearGradient id="gradient-3" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#c74a93" />
                <stop offset="100%" stopColor="#fb9fb9" />
            </linearGradient>
            <linearGradient id="gradient-4" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#F07F6B" />
                <stop offset="100%" stopColor="#EFC15C" />
            </linearGradient>
            <linearGradient id="gradient-5" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7b3bb2" />
                <stop offset="100%" stopColor="#a9a5d4" />
            </linearGradient>
            <linearGradient id="gradient-6" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#dbac2f" />
                <stop offset="100%" stopColor="#ecdfa1" />
            </linearGradient>
        </defs>
    </svg>
);

const E1 = {
    bounds: [110, 281],
    forms: [,
        <svg viewBox="0 0 110 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204"/>
        </svg>,
        <svg viewBox="0 0 110 281" version="1.1">
            <polygon className="fill-4" points="0,0,0,70, 110,0"></polygon>
        </svg>,
        <svg viewBox="0 0 110 281" version="1.1"> //55,146 55,92 135,92
            <polygon className="fill-6" points="0,250,0,180,110,250"></polygon>
        </svg>,
        <svg viewBox="0 0 110 281" version="1.1"> //55,146 55,92 135,92
            <rect className="fill-3" y="107" x="30" width="100" height="30"/>
        </svg>,
    ],
};

const I1 = {
    bounds: [60, 281],
    forms: [
        <svg viewBox="0 0 60 281" version="1.1">
            <rect className="fill-1" y="22" width="55" height="204"/>
        </svg>,
        <svg viewBox="0 0 60 281" version="1.1">
            <polygon className="fill-4" points="0,0,0,200, 50,0"></polygon>
        </svg>,
        <svg viewBox="0 0 60 281" version="1.1"> //55,146 55,92 135,92
            <polygon className="fill-3" points="0,250,56,250,56,40"></polygon>
        </svg>,
    ],
};

const L1 = {
  bounds: [110, 281],
  forms: [
      <svg viewBox="0 0 110 281" version="1.1">
          <rect className="fill-1" y="22" width="55" height="204"/>
      </svg>,
      <svg viewBox="0 0 110 281" version="1.1">
          <path className="fill-6" d="M0,226c0,30.4,24.6,55,55,55s55-24.6,55-55H0z"/>
      </svg>,
  ],
};

const Y1 = {
  bounds: [150, 281],
  forms: [
      <svg viewBox="0 0 150 281" version="1.1">
          <rect className="fill-1" y="22" x="47" width="55" height="204"/>
      </svg>,
      <svg viewBox="0 0 150 281" version="1.1">
          <polygon className="fill-3" points="0,0,75,150, 150,0"></polygon>
      </svg>,
      <svg viewBox="0 0 150 281" version="1.1">
          <polygon className="fill-1" points="30,0,75,100, 120,0"></polygon>
      </svg>,
  ],
};

const M1 = {
  bounds: [280, 281],
  forms: [
    <svg viewBox="0 0 280 281" version="1.1"> //left bottom, ? , top l/r , top vertical , right bottom, ?
        <polygon className="fill-2" points="30,250,100,0,155,250"></polygon>
    </svg>,
    <svg viewBox="0 0 280 281" version="1.1"> //left bottom, ? , top l/r , top vertical , right bottom, ?
        <polygon className="fill-1" points="30,250,100,0,65,250"></polygon>
    </svg>,
    <svg viewBox="0 0 280 281" version="1.1"> //left bottom, ? , top l/r , top vertical , right bottom, ?
        <polygon className="fill-5" points="150,250,210,0,275,250"></polygon>
    </svg>,
    <svg viewBox="0 0 280 281" version="1.1"> //left bottom, ? , top l/r , top vertical , right bottom, ?
        <polygon className="fill-1" points="150,250,210,0,185,250"></polygon>
    </svg>
  ],
};

const word = [E1, M1, I1, L1, Y1];



const Hello = () => (
    <div className="hello">
        <p>Hello.</p>
    </div>
);

const Scroll = () => (
    <div className="scroll">
        <p>scroll</p>
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
            <polygon className="fill-3" points="167,73 83.5,298.9 0,73 "/>
            <polygon className="fill-1" points="137.4,0 83.5,145.9 29.6,0 "/>
        </svg>
    </div>
);

const Github = () => (
    <a href="https://github.com/jscottsmith/react-scroll-parallax" rel="noopener" target="_blank" className="button">GitHub</a>
);

const Linkedin = () => (
  <div className="button-container">
      <a href="https://www.linkedin.com/in/emilylc/" rel="noopener" target="_blank" className="top button">LinkedIn</a>
      <a href="https://www.linkedin.com/in/emilylc/" rel="noopener" target="_blank" className="bottom button">LinkedIn</a>
  </div>
);

const AboutMeBtn = () => (
  <div className="button-container fade-in-slow">
    <Link to='/about' className="top button">About</Link>
    <Link to='/about' className="bottom button">About</Link>
  </div>
);

const EmilyHeader = () => (
    <div id='EmilyHeader'>
      <div className='left fade-in'>
        HI, I'm
      </div>
      <div className='word big slide-down'>
          {word.map((X, i) =>
              <Letter key={i} letter={X} />
          )}
      </div>
      <div className='word small slide-left'>
          {word.map((X, i) =>
              <LetterSmall key={i} letter={X} />
          )}
      </div>
  </div>
);

class Home extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <main>
            <Gradients />
            <EmilyHeader />
          {
             <AboutMeBtn />
          }
          </main>
        </ParallaxProvider>
      </div>
    );
  }
}

export default Home
