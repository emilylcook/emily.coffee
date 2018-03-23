import React, { Component } from 'react'

class ContactMeForm extends Component {

  constructor (props) {
      super(props)


      this.submitEmail = this.submitEmail.bind(this)
    }


  submitEmail(e){
      alert('not implemented')
  }

  render() {
    return (
    <div id='ContactMeSection' ref='ContactMeSection' className={`contact-me collapsible ${this.props.contactMeSection}`}>

      <div className='container'>
        <form id='ContactMeForm' ref='ContactMeForm'>

          <div className='form-group'>
            <label for='name'>Name</label>
            <input type='text' id='Name' name='Name' className='item' placeholder='' required/>
          </div>

          <div className='form-group'>
            <label for='email'>Email</label>
            <input type='email' id='Email' name='Email' className='item'placeholder='' required />
          </div>

          <div className='form-group'>
            <label for='email'>Subject</label>
            <input type='text' id='Subject' name='Subject' className='item' placeholder='' required/>
            </div>

          <div className='form-group'>
            <label for='message'>Message</label>
            <textarea id='message' name='message' className='item' placeholder='Write something..' rows='5' required></textarea>
          </div>

          <div className='form-group submit-container '>
            <div className="button-container">
              <div type='button' className='button item' onClick={this.submitEmail}>Submit</div>
            </div>
          </div>

        </form>
      </div>

    </div>
    );
  }
}

export default ContactMeForm
