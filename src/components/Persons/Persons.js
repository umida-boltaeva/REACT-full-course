import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //     if (nextProps.persons !== this.props.persons ||
  //         nextProps.clicked !== this.props.clicked ||
  //         nextProps.changed !== this.props.changed) {
  //         return true;
  //     }else {
  //         return false;
  //     }
  //     // return true;
  // }

  render() {
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
