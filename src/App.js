import React, { Component } from 'react';
import Logo from './components/Logo/Logo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <navigation />
        <Logo />
          {/*<ImageLinkForm />
          <FaceRecongnition />*/}
      </div>
    );
  }
}

export default App;
