import React, { Component } from 'react';
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      {id: "a", name:"Darrus", age:26},
      {id: "as", name:"Gwen", age:25},
      {id: "asd", name:"Max", age:40}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const person = persons.find(e=>{return e.id === personId;});
    person.name = event.target.value;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            key={person.id} 
            click={this.deletePersonHandler.bind(this, index)}
            changed={(event) => {this.nameChangedHandler(event, person.id);}} />;
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push('red');
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push('bold');
    }

    assignedClasses = assignedClasses.join(' ');

    return (
      <StyleRoot>
        <div className={classes.App}>
          <p className={assignedClasses}>Hello world!</p>
          <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);