import React, { Component } from 'react';
import classes from './One.module.css';

export default class One extends Component {
  
  render() {
    return (
      <div className={classes.One}>
        <div className="container">
          <h1 className="display-4">One Container</h1>
        </div>
      </div>
    )
  }
}