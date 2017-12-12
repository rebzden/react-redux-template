import React, { Component } from 'react';
import {Route, Switch } from 'react-router';
import  HomeView  from '../views/HomeView';
import  LoginView  from '../views/LoginView';
import  RegisterView  from '../views/RegisterView';
import { PrivateRoute } from '../components/PrivateRoute';

class RootRoute extends Component {
  render() {
    return (
        <Switch>
            <PrivateRoute exact path='/' component={HomeView}/>
            <Route exact path='/login' component={LoginView}/>
            <Route exact path='/register' component={RegisterView}/>
        </Switch>
    );
  }
}

export default RootRoute;