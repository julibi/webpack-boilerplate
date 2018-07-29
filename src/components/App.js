import React, { Component } from 'react';
import Example from './Example';
import style from './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <h1 className={ style.header }>My React App!!!!</h1>
        <Example />
      </div>
    );
  }
}

export default App;