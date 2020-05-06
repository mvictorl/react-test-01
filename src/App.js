import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import One from './containers/One/One'
import Home from './containers/Home/Home';
import Two from './containers/Two/Two';
import Three from './containers/Three/Three'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
          <Route path="/three" component={Three} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
