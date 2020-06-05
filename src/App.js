import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hey, I'm a React App</h1>
  //   </div>
  // );
  return React.createElement("div", null, React.createElement("h1", {className: "App"}, "Is it working now?"));
}

export default App;
