import React, { Component } from 'react';
import './App.css';

import ChatWindow from './ChatWindow/ChatWindow';

class App extends Component {
  constructor() {
      super();
  }
  render() {
    return (
      <div id="App__container">
        <ChatWindow />
      </div>
    );
  }
}

export default App;
