import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route,Switch } from 'react-router-dom';
import MainPage from './components/MainPage/Mainpage';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import OwnedParks from './components/OwnedParks/OwnedParks';
import Earnings from './components/Earnings/Earnings';
import SearchParks from './components/SearchParks/SearchParks';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login"  component={Login} />
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/dashboard/myprofile" component={Profile}/>
        <Route path="/dashboard/myparks" component={OwnedParks}/>
        <Route path="/dashboard/myearnings" component={Earnings}/>
        <Route path="/dashboard/search" component={SearchParks}/>
        </Switch>
      </Layout>
    );
  }
}
export default App;
