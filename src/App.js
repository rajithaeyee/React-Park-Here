import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route,Switch } from 'react-router-dom';
import MainPage from './components/MainPage/Mainpage';
import Login from './containers/Login/Login';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={Login} />
        </Switch>
      </Layout>

    );
  }
}

export default App;
