import React, { useEffect, useState } from 'react'
import VehiclesContainer from '../components/VehiclesContainer.js';
import SearchBar from '../components/SearchBar.js'
import FilterBar from '../components/FilterBar.js'

function Vehicles({handleVehicleChoice}) {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    fetch('http://localhost:9494/vehicles')
      .then(resp => resp.json())
      .then(data => setVehicles(data))
  }, [])

  const displayedVehicles = vehicles.filter(vehicle => vehicle)

  return (
    <div className='vehicles'>
      <SearchBar/>
      <FilterBar/>
      <VehiclesContainer vehicles={displayedVehicles} handleVehicleChoice={handleVehicleChoice}/>
    </div>
  );
}

export default Vehicles;