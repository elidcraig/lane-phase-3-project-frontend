import React, { useState, useEffect } from 'react';
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
  const [activeVehicle, setActiveVehicle] = useState({})

  useEffect(() => {
    fetch('http://localhost:9494/guests/active')
      .then(resp => resp.json())
      .then(userObject => setActiveUser(userObject))
      .catch(() => setActiveUser({}))
  }, [])

  const handleLogin = userObject => setActiveUser(userObject)

  const handleVehicleChoice = vehicleObject => setActiveVehicle(vehicleObject)

  return (
    <div className="app">
      <Header activeUser={activeUser} />
      <Route path='/login'>
        <Login handleLogin={handleLogin}/>
      </Route>
      <Route exact path='/vehicles'>
        <Vehicles handleVehicleChoice={handleVehicleChoice}/>
      </Route>
      {/* <Route path='/vehicles/:id'>

      </Route> */}
      <Route path='/reservations/new'>
        <NewReservation activeUser={activeUser} activeVehicle={activeVehicle}/>
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
