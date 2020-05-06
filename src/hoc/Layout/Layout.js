import React, { Component } from 'react';
import classes from './Layout.module.css';
import Drawer from '../../components/Menu/Drawer/Drawer';
import MenuToggle from '../../components/Menu/MenuToggle/MenuToggle';

class Layout extends Component {

  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className={classes.Layout}>

        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          toggleMenuHandler={this.toggleMenuHandler}
        />

        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout;