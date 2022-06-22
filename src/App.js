import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js'
import Home from './pages/Home.js'
import Vehicles from './pages/Vehicles.js'
import Reservations from './pages/Reservations.js'
import Host from './pages/Host.js'
import NewReservation from './pages/NewReservation';
import Login from './pages/Login'
import { Route } from 'react-router-dom';

function App() {
  const [activeUser, setActiveUser] = useState({})

  const handleLogin = userObject => setActiveUser(userObject)

  return (
    <div className="app">
      <Header activeUser={activeUser} />
      <Route path='/login'>
        <Login handleLogin={handleLogin}/>
      </Route>
      <Route path='/vehicles'>
        <Vehicles/>
      </Route>
      {/* <Route path='/vehicles/:id'>

      </Route> */}
      <Route path='/reservations/new'>
        <NewReservation />
      </Route>
      <Route path='/reservations'>
        <Reservations activeUser={activeUser}/>
      </Route>
      <Route path='/hosts/:id'>
        <Host/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
