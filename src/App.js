import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 20},
      {name: "Umida", age: 25},
      {name: "Baha", age: 25}
    ]
  }

  switchNameHandler = () => {
    //console.log("was clicked");
    this.setState({
      persons: [
        {name: "Maxima", age: 20},
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
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is racing.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }  
}

export default App;
