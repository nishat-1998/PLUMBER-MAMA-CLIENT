  
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

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path="/book">
        <Book></Book>
      </Route>
      <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/addReview">
         <AddReview></AddReview>
          </Route>
          <Route path="/allClients">
           <AllClients></AllClients>
          </Route>
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
