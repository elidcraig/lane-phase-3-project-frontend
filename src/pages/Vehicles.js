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

  const handleFilterChange = filterValue => {
    fetch(`http://localhost:9494/vehicles/by_price_${filterValue}`)
      .then(resp => resp.json())
      .then(data => {
        setVehicles(data)
      })
  }

  return (
    <div className='vehicles'>
      <SearchBar/>
      <FilterBar handleClick={handleFilterChange}/>
      <VehiclesContainer vehicles={displayedVehicles} handleVehicleChoice={handleVehicleChoice}/>
    </div>
  );
}

export default Vehicles;