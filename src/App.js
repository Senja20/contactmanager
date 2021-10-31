import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts.js';
import Header from './components/layout/Header.js';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context.js';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact.js';
import NotFound  from './components/pages/NotFound.js';
import Test from './components/test/Test.js';
import EditContact from './components/contacts/EditContact.js';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                  <Route exact path="/" component={Contacts}/>
                  <Route exact path="/contact/add" component={AddContact}/>
                  <Route exact path="/contact/edit/:id" component={EditContact}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/test" component={Test}/>
                  <Route component={NotFound}/>
              </Switch>
            </div>
          </div> 
        </Router>
      </Provider>
    );
  }
}

export default App;