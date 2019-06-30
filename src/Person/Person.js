import React from 'react';
import Radium from 'radium';

import classes from './Person.css';

const person = (props) => {
    return (
    <div className={classes.Person}>
        <p onClick={props.click}>Hello my name is {props.name}. I am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
}

export default Radium(person);