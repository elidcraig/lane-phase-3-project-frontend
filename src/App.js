import './App.css';
import Home from './pages/Home.js'
import Vehicles from './pages/Vehicles.js'
import Reservations from './pages/Reservations.js'
import Host from './pages/Host.js'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Route path='/vehicles'>
        <Vehicles/>
      </Route>
      {/* <Route path='/vehicles/:id'>

      </Route> */}
      <Route path='/reservations'>
        <Reservations/>
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
