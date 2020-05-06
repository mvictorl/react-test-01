import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import MenuToggle from '../MenuToggle/MenuToggle';
import classes from './Drawer.module.css';

const links = [
  {to: '/', label: 'home', exact: true},
  {to: '/one', label: 'one', exact: false},
  {to: '/two', label: 'two', exact: false},
  {to: '/three', label: 'three', exact: false}
]

class Drawer extends Component {

  clickHandler = () => {
    this.props.onClose();
  }

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink            
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    const cls = [
      classes.Drawer
    ]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
      <Fragment>
        <nav className={cls.join(' ')}>
          <MenuToggle
            onToggle={this.props.toggleMenuHandler}
            isOpen={this.props.isOpen}
          />
          <ul>
            { this.renderLinks() }
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.clickHandler} /> : null }
      </Fragment>
    )
  }
}

export default Drawer;