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

const defaultUser = {
  id: 154,
  username: 'samara',
  profile_image_url: "https://robohash.org/repellendusaccusamusomnis.png?size=300x300&set=set1",
  reservations: []
}

function App() {
  const [activeUser, setActiveUser] = useState(defaultUser)
  const [activeVehicle, setActiveVehicle] = useState({})

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
