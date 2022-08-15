import React, { Component } from 'react';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <div className="container">
          <Form />
          <Posts />
        </div>
      </div>
    );
  }
}

export default App;
