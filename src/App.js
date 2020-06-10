import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 20},
      {name: "Umida", age: 25},
      {name: "Baha", age: 25}
    ],
    otherState: "some other value"
  };

 switchNameHandler = (newName) => {
    //console.log("was clicked");
    this.setState({
      persons: [
        {name: newName, age: 20},
        {name: "Umida", age: 25},
        {name: "Baha", age: 30}
      ]
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1>Hey, I'm a React App</h1>
        <p>This is definitely working!</p>
        <button onClick={this.switchNameHandler.bind(this, "Steve")}>Switch Name</button>
        <Person name={this.state.persons[0].name}
         age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, "Mimic")}>My hobby is racing.</Person>
        <Person name={this.state.persons[2].name}
         age={this.state.persons[2].age}/>
      </div>
    );
  }  
};

export default App;

