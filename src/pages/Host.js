import React, { useEffect } from 'react'
import Header from '../components/Header.js'
import HostCard from '../components/HostCard.js'
import VehiclesContainer from '../components/VehiclesContainer.js'


function Host() {

  useEffect(() => {
    fetch(`http://localhost:9494/hosts/62`)
      .then(resp => resp.json())
      .then(console.log)
  }, [])

  return (
    <div className='host'>
      This is the Host page.
    </div>
  );
}

export default Host;