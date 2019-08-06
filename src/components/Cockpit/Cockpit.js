import React, {useEffect, useRef} from 'react';

import classes from './Cockpit.css';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(()=>{
    toggleBtnRef.current.click();
  }, []);

  let assignedClasses = [];
  if(props.persons.length <= 2) {
    assignedClasses.push('red');
  }

  if(props.persons.length <= 1) {
    assignedClasses.push('bold');
  }

  assignedClasses = assignedClasses.join(' ');

  let btnClass = null;
  if(props.showPersons) {
      btnClass = classes.Red;
  }

  return (
      <div className={classes.Cockpit}>
          <p className={assignedClasses}>Hello world!</p>
          <button
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
      </div>
  )
}

export default Cockpit;