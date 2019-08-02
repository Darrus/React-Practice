import React, { Component } from 'react';

import classes from './App.css';

import Persons from "../components/Persons/Persons";
import Radium, { StyleRoot } from "radium";
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';

class App extends Component {
  state = {
    persons: [
      {id: "a", name:"Darrus", age:26},
      {id: "as", name:"Jasmine", age:15},
      {id: "asd", name:"Max", age:40}
    ],
    showPersons: false,
    changeCounter: 0
  };

  nameChangedHandler = (event, personId) => {
    const persons = [...this.state.persons];
    const person = persons.find(e=>{return e.id === personId;});
    person.name = event.target.value;

    this.setState((prevState, props)=>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
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

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <Auxiliary>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);