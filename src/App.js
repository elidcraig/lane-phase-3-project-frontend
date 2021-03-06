import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import Home from './pages/Home.js'
import Vehicles from './pages/Vehicles.js'
import Reservations from './pages/Reservations.js'
import NewReservation from './pages/NewReservation';
import Login from './pages/Login'
import EditReservation from './pages/EditReservation';


function App() {
  const [activeUser, setActiveUser] = useState({})
  const [activeVehicle, setActiveVehicle] = useState({})

  useEffect(() => {
    reloadActiveUser()
  }, [])

  const reloadActiveUser = () => {
    fetch('http://localhost:9494/guests/active')
      .then(resp => resp.json())
      .then(userObject => setActiveUser(userObject))
      .catch(() => setActiveUser({}))
  }

  const handleLogin = userObject => setActiveUser(userObject)

  const handleVehicleChoice = vehicleObject => setActiveVehicle(vehicleObject)

  return (
    <div className="app">
      <Header activeUser={activeUser} />
      <Route path='/login'>
        <Login handleLogin={handleLogin} reload={reloadActiveUser}/>
      </Route>
      <Route exact path='/vehicles'>
        <Vehicles handleVehicleChoice={handleVehicleChoice}/>
      </Route>
      <Route path='/reservations/:id/edit'>
        <EditReservation activeUser={activeUser} activeVehicle={activeVehicle} reload={reloadActiveUser}/>
      </Route>
      <Route exact path='/reservations/new'>
        <NewReservation activeUser={activeUser} activeVehicle={activeVehicle} reload={reloadActiveUser}/>
      </Route>
      <Route exact path='/reservations'>
        <Reservations activeUser={activeUser} reservations={activeUser.reservations ? activeUser.reservations : []} reload={reloadActiveUser}
          handleVehicleChoice={handleVehicleChoice}
        />
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
