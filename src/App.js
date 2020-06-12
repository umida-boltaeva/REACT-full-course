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
    otherState: "some other value",
    showPersons: false
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 20},
        {name: event.target.value, age: 25},
        {name: "Baha", age: 30}
      ]
    })
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
  
  render(){
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      borderRadius: "3px",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} />
        })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey, I'm a React App</h1>
        <p>This is definitely working!</p>
        <button 
        style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}   
      </div>
    );
  }  
};

export default App;

