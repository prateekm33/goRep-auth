import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMITTING...');
    // TODO: handle authentication with backend DB


    // TODO: Refactor to use RxJS
    $.ajax({
      type: 'POST', 
      url: require('../env').authAppServer + '/auth/local',
      contentType: 'application/json', 
      success: (r) => {
        window.location.replace(require('../env').mainAppServer);
      },
      error: (e) => { console.log('[ERROR] Error submitting info to server: ', e)}
    });
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