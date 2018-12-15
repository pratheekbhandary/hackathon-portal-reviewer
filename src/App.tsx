import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";

import reducers from './reducers';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Alert from './container/Alert';
import Guard from './container/Guards';
import Login from './container/Login';
import ReviewRemarks from './container/ReviewRemarks';
import ReviewTable from './container/ReviewTable';

class App extends Component {
  private store:any;
  constructor(props:any){
    super(props);
    this.store=createStore(reducers,{},applyMiddleware(logger));
  }
  render() {
    return (
        <Provider store={this.store}>
          <BrowserRouter>
            <span>
            <Alert/>
            <Switch>
              <Route path="/login" component={Login}/>
              <Guard path="/ideas" component={ReviewTable}/>
              <Guard path="/remarks" component={ReviewRemarks}/>

              <Redirect from="/" to="/login"/>
            </Switch>
            </span>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
