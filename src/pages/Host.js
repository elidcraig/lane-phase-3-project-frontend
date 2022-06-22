import React, { useEffect, useState } from 'react'
import Header from '../components/Header.js'
import HostCard from '../components/HostCard.js'
import VehiclesContainer from '../components/VehiclesContainer.js'


function Host() {

  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9494/hosts/62`)
      .then(resp => resp.json())
      .then(data => setVehicles(data.vehicles))
  }, [])

  return (
    <div className='host'>
      This is the Host page.
      <VehiclesContainer vehicles={vehicles}/>
    </div>
  );
}

export default Host;