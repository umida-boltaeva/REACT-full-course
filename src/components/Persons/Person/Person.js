import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from"./Person.css";
import withClass from "../../../HOC/withClass";



class Person extends Component {
    render() {
        return (
           <>
                <p onClick={this.props.click}>
                I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} 
                value={this.props.name}/>
           </>
        );
    }   
};

Person.propTypes= {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, styles.Person);