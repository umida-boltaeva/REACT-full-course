import React, {Component} from "react";
import styles from"./Person.css";



class Person extends Component {
    render() {
        return [          
            <p key="k1" onClick={this.props.click}>
            I am {this.props.name} and I am {this.props.age} years old!</p>,
            <p key="k2">{this.props.children}</p>,
            <input key="k3" type="text" onChange={this.props.changed} 
            value={this.props.name}/>
           
        ];
    }
    
    
};

export default Person;