import React, { Component } from 'react';
import classes from './Home.module.css';

export default class Home extends Component {

  render() {
    const cls = [
      classes.Home,
      'jumbotron',
      'jumbotron-fluid'
    ]

    return (
      <div className={cls.join(' ')}>
        <div className="container">
          <h1 className="display-4">Home page</h1>
          <p className="lead">This is a homepage of my application.</p>
        </div>
      </div>
    )
  }
}