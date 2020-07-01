import React, {Component} from "react";
import styles from"./Person.css";



class Person extends Component {
    render() {
        return (
            <>
            {/* // <React.Fragment>           */}
                <p onClick={this.props.click}>
                I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} 
                value={this.props.name}/>
            {/* // </React.Fragment> */}
            </>
        );
    }   
};

export default Person;