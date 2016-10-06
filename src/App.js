import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMITTING!!...');
    // TODO: handle authentication with backend DB

    const self = this;
    // TODO: Refactor to use RxJS
    let username = document.getElementById('username-input').value || 'temp username';

    let url = require('../env').authAppServer + '/auth/local';
    let options = {
      method: 'POST', 
      contentType: 'application/json',
      body: JSON.stringify({user: username})
    }

    fetch(url, options)
      .then(() => { console.log('sucess posting to server...'); })
      .catch(self.handleError);
  }

  handleError(e) {
    console.log('[ERROR] Error submitting : ', e);
  }

  render() {
    return (
      <div id='auth-form-container'>
        <div id='app-logo'>GoRep</div>
        <div id="login-form-title">Log In </div>
        <form id='login-form' onSubmit={this.handleSubmit.bind(this)}>
          <input id='username-input' placeholder='username' />
          <input id='password-input' placeholder='password' />
          <button id='login-button' type='submit'> Submit </button>
        </form>
      </div>
    )
  }
}