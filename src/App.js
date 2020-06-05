import React from 'react';
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hey, I'm a React App</h1>
      <p>This is definitely working!</p>
      <Person name="Max" age="22" />
      <Person name="Umida" age="25">My hobby is racing.</Person>
      <Person name="Baha" age="25"/>
    </div>
  );
  
}

export default App;
