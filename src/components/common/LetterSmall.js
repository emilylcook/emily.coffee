import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

class LetterSmall extends React.Component {
    render() {
        const { letter } = this.props;
        const offset = getRandomInt(100, 170)
        const isSlower = true;// getRandomInt(0, 1) ? true : false;
        return (
              <div className="letter" style={{
                  width: letter.bounds[0] / 5 + 'rem',
                  height: letter.bounds[1] / 5 + 'rem',
              }}>
                  {letter.forms.map((X, i) =>
                      <Parallax
                          className="form"
                          key={i}
                        offsetYMin={'0px'}
                        offsetYMax={'0px'}
                          slowerScrollRate={isSlower}
                      >
                          {X}
                      </Parallax>
                  )}
              </div>
        );
    }
}

export default LetterSmall
