import React, { useEffect } from "react";
import styles from "./Cockpit.css"

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect"); 
    //http request...
    const timer = setTimeout(() => {
      alert("Saved data to the cloud!")
    }, 1000);
    return  () => {
      clearTimeout(timer);
      console.log("[cockpit.js] cleanup work in useEffect");
      
    }
  }, []); 

  useEffect(() => {
    console.log("[cockpit.js] 2nd useEffect");
    return () => {
      console.log("[cockpit.js] cleanup work in 2nd useEffect");
    };
  });

    const assignedClasses = [];
    let btnClass = "";
    if(props.showPersons) {
        btnClass = styles.Red;
    }

    if(props.persons.length <=2){
      assignedClasses.push(styles.red);
    }
    if(props.persons.length <=1){
      assignedClasses.push(styles.bold);
    };
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
        <p className={assignedClasses.join(" ")}>This is definitely working!</p>
        <button className={btnClass} onClick={props.toggled}>Toggle  Persons
        </button>
        </div>
    );
};

export default Cockpit;