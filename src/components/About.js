import React, { Component } from 'react'
import ContactMeForm from './ContactMeForm'


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
          <div class="heading">
            <div class="title">
              <h1 className='title'>Emily Cook</h1>
              <h2 className='sub-title'>DEVELOPER, CAT WHISPERER</h2>
            </div>
            <div class="buttons">
              <div id="ContactMeBtn" onClick={this.toggleContact} className='button btn'>Contact Me</div>
            </div>
          </div>
          <hr className='blue-rule' />
          <ContactMeForm contactMeSection={this.state.contactMeSection} />
          <div className='detail-body'>
          <h3 className='greeting'>Hello :)</h3>
          <p>
            I'm emily.
            Small kitty warm kitty little balls of fur throwup on your pillow. Chew the plant run outside as soon as door open or if it smells like fish eat as much as you wish touch water with paw then recoil in horror. Cough furball meow so you call this cat food. You are a captive audience while sitting on the toilet, pet me meow meow, i tell my human i shredded your linens for you yet eat the fat cats food, eat plants, meow, and throw up because i ate plants. Litter kitter kitty litty little kitten big roar roar feed me hide head under blanket so no one can see hiding behind the couch until lured out by a feathery toy find a way to fit in tiny box. Hiding behind the couch until lured out by a feathery toy kitty scratches couch bad kitty mewl for food at 4am dead stare with ears cocked. Licks paws be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day meowzer kitty power, for somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock. Sit by the fire ignore the human until she needs to get up, then climb on her lap and sprawl eat grass, throw it back up chase red laser dot. Chase imaginary bugs friends are not food but try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard yet loves cheeseburgers always hungry for eats owners hair then claws head open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow!. Swat turds around the house lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back chase the pig around the house but going to catch the red dot today going to catch the red dot today yet run in circles eat plants, meow, and throw up because i ate plants or chase after silly colored fish toys around the house. I like cats because they are fat and fluffy attack the dog then pretend like nothing happened love to play with owner's hair tie yet spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce eat an easter feather as if it were a bird then burp victoriously, but tender claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Purr you have cat to be kitten me right meow cat not kitten around spend six hours per day washing, but still have a crusty butthole for sleep nap, or allways wanting food. Scratch chase after silly colored fish toys around the house, so catch mouse and gave it as a present the fat cat sat on the mat bat away with paws pose purrfectly to show my beauty hide when guests come over, but kitty power. Lick arm hair sun bathe, stare at the wall, play with food and get confused by dust chase the pig around the house. Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat hide at bottom of staircase to trip human but lies down eat and than sleep on your face, and eat and than sleep on your face. Curl up and sleep on the freshly laundered towels stare at the wall, play with food and get confused by dust, for plop down in the middle where everybody walks. Chase after silly colored fish toys around the house. Cat not kitten around eat the fat cats food but thinking longingly about tuna brine but scratch at the door then walk away i show my fluffy belly but it's a trap! if you pet it i will tear up your hand sniff other cat's butt and hang jaw half open thereafter. Sweet beast allways wanting food for get video posted to internet for chasing red dot. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet if human is on laptop sit on the keyboard or favor packaging over toy or cough furball into food bowl then scratch owner for a new one stare at ceiling meow all night and my water bowl is clean and freshly replenished, so i'll drink from the toilet. Ask to go outside and ask to come inside and ask to go outside and ask to come inside sit on human. Hunt by meowing loudly at 5am next to human slave food dispenser lick the plastic bag scoot butt on the rug lie in the sink all day. 
           </p>
          </div>
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
