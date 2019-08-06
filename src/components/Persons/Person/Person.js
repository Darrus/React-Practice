import React, {Component} from 'react';
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        return (<div>
        <p onClick={this.props.click}>Hello my name is {this.props.name}. I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name}/>
        </div>);
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    chagned: PropTypes.func
};

export default withClass(Person, classes.Person);