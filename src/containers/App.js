import React, { Component } from 'react';
import styles from './App.css'; 
import Person from "../components/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "qwe1", name: "Max", age: 20},
      { id: "qwe2", name: "Umida", age: 25},
      { id: "qwe3", name: "Baha", age: 25}
    ],
    otherState: "some other value",
    showPersons: false
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
    let btnClass = "";

    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
        </div>
      );
      btnClass = styles.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(styles.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(styles.bold);
    };

    return (
      <div className={styles.App}>
        <h1>Hey, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is definitely working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle  Persons
        </button>
         {persons}   
      </div>
    );
  } 
}; 


export default App;
