import React, { Component } from 'react';
import styles from './App.css'; 
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "qwe1", name: "Max", age: 20},
      { id: "qwe2", name: "Umida", age: 25},
      { id: "qwe3", name: "Baha", age: 25}
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({persons: persons});
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
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />;
    };

    return (
      <div className={styles.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        { this.state.showCockpit ? 
        <Cockpit
          title={this.props.appTitle} 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggled={this.togglePersonsHandler}
        /> : null}
         {persons}   
      </div>
    );
  } 
}; 


export default App;

