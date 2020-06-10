import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const App = props => {
  const  [personsState, setPersonsState] = useState({
    persons: [
      {name: "Max", age: 20},
      {name: "Umida", age: 25},
      {name: "Baha", age: 25}
    ],
    otherState: "some other value"
  });

console.log(personsState);

  const switchNameHandler = () => {
    //console.log("was clicked");
    setPersonsState({
      persons: [
        {name: "Maxima", age: 20},
        {name: "Umida", age: 25},
        {name: "Baha", age: 30}
      ]
    })
  }
  
    return (
      <div className="App">
        <h1>Hey, I'm a React App</h1>
        <p>This is definitely working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is racing.</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    ); 
}

export default App;


