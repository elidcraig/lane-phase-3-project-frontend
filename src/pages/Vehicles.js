import React, { useEffect, useState } from 'react'
import Header from '../components/Header.js'
import VehiclesContainer from '../components/VehiclesContainer.js';
import SearchBar from '../components/SearchBar.js'
import FilterBar from '../components/FilterBar.js'

function Vehicles() {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    fetch('http://localhost:9494/vehicles')
      .then(resp => resp.json())
      .then(data => setVehicles(data))
  }, [])

  return (
    <div className='vehicles'>
      <SearchBar/>
      <FilterBar/>
      <VehiclesContainer vehicles={vehicles} />
    </div>
  );
}

export default Vehicles;