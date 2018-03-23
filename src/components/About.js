import React, { Component } from 'react'

class About extends Component {
  constructor (props) {
      super(props)

      this.toggleContact = this.toggleContact.bind(this)

      this.state = {
        contactMeSection: 'collapsed'
      }
    }

  toggleContact(e){
      this.setState({
       contactMeSection: this.state.contactMeSection == 'collapsed' ? '' : 'collapsed'
     })
  }

  render() {
    return (
      <div className='About detail-page'>
        <div className='wrapper'>
          <h1 className='title'>Emily Cook</h1>
          <h2 className='sub-title'>DEVELOPER, CAT WHISPERER</h2>
          <div id="ContactMeBtn" onClick={this.toggleContact} className='button btn'>Contact Me</div>
          <hr className='blue-rule' />
            <div ref='ContactMeSection' className={`contact-me collapsible ${this.state.contactMeSection}`}>
                dummy form here
            </div>
          <h3 className='greeting'>Hello :)</h3>
          <p>
            I'm emily.  Lick left leg for ninety minutes, still dirty chew foot. Suddenly go on wild-eyed crazy rampage try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard cereal boxes make for five star accommodation or all of a sudden cat goes crazy pounce on unsuspecting person. Instead of drinking water from the cat bowl, make sure to steal water from the toilet curl into a furry donut, but i cry and cry and cry unless you pet me and then maybe i cry just for fun for sniff other cat's butt and hang jaw half open thereafter but thug cat . Love to play with owners hair tie head nudges yet yowling nonstop the whole night always hungry for mew yet ooh, are those your $250 dollar sandals? lemme use that as my litter box.
          </p>
          <div className='bottom-row'>
            <div className='location-block'>
              <i className='fa fa-home' /><p>Seattle, WA</p>
            </div>
            <div className='network-block'>
                <a href='https://www.linkedin.com/in/emilylc/' rel="noopener" target="_blank"><i className='fa fa-linkedin-square'></i></a>
                <a href='https://www.twitter.com/@eavu__' rel="noopener" target="_blank"><i className='fa fa-twitter'></i></a>
                <a href='https://www.instagram.com/fulminee' rel="noopener" target="_blank"><i className='fa fa-instagram'></i></a>
                <a href='https://www.facebook.com/emilycookx' rel="noopener" target="_blank"><i className='fa fa-facebook-square'></i></a>
            </div>
          </div>
          {
            //<hr className='blue-rule bottom' />
          }
        </div>
      </div>
    );
  }
}

export default About
