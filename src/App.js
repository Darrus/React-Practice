import React, { Component } from 'react';
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";

import './App.css';

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
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      };
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    classes = classes.join(' ');

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes}>Hello world!</p>
          <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);