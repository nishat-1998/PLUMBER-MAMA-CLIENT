  
import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Book from './components/Book/Book/Book';
import AllClients from './components/AllClients/AllClients/AllClients';
import AddReview from './components/AddReview/AddReview';
import AddService from './components/AddService/AddService'
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import AddAdmin from './components/AddAdmin/AddAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <PrivateRoute path="/book">
        <Book></Book>
      </PrivateRoute>
      <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/addService">
         <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
         <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
         <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/allClients">
           <AllClients></AllClients>
          </PrivateRoute>
      <Route path="/login">
            <Login></Login>
          </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
