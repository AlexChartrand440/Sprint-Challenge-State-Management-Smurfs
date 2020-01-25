import React, { Component } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';

import axios from 'axios';

import Smurf from './Smurf';

class App extends Component {

  constructor() {
    super();
    this.state = {DATA: []};
  }

  componentDidMount() {

    axios.get('/smurfs').then(res => {

      console.log(res);
      this.setState({DATA: res.data});

    }).catch(err => console.log(err));

  }

  addSmurf(event) {

    event.preventDefault();

    axios({
      method: 'post',
      url: '/smurfs',
      data: {
        name: this.state.name,
        age: 5000,
        height: '20ft'
      }
    });

  }

  render() {
    return (
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          {console.log(this.state.DATA.length)}=
          {this.state.DATA.length != 0 && this.state.DATA.map(smurf => 
            <SmurfContext.Provider value={{smurf}}>
              <Smurf />
            </SmurfContext.Provider>)}
          <form onSubmit={(event) => this.addSmurf(event)}>
            <input placeholder='Smurf name' onChange={(event) => {this.setState({name: event.target.value})}}></input>
            <button>Add</button>
          </form>
        </div>
    );
  }
}

export default App;
