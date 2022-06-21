import React, { useEffect } from 'react'
import Header from '../components/Header.js'
import VehiclesContainer from '../components/VehiclesContainer.js';
import SearchBar from '../components/SearchBar.js'
import FilterBar from '../components/FilterBar.js'

function Vehicles() {

  useEffect(() => {
    fetch('http://localhost:9494/vehicles')
      .then(resp => resp.json())
      .then(console.log)
  }, [])

  return (
    <div className='vehicles'>
      <Header/>
      <SearchBar/>
      <FilterBar/>
      <VehiclesContainer/>
    </div>
  );
}

export default Vehicles;