import React, { useEffect, useState } from 'react'
import Header from '../components/Header.js'
import HostCard from '../components/HostCard.js'
import VehiclesContainer from '../components/VehiclesContainer.js'


function Host() {
  const [host, setHost] = useState({})
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9494/hosts/83`)
      .then(resp => resp.json())
      .then(data => {
        const hostObj = {
          username: data.username,
          profileImage: data.profile_image_url,
          id: data.id
        }
        setHost(hostObj)
        setVehicles(data.vehicles)
      })
  }, [])

  return (
    <div className='host'>
      <HostCard hostInfo={host}/>
      <VehiclesContainer vehicles={vehicles}/>
    </div>
  );
}

export default Host;