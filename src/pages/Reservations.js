import React, { useEffect } from 'react'
import Header from '../components/Header.js'
import ReservationsContainer from '../components/ReservationsContainer.js'


function Reservations() {

  useEffect(() => {
    fetch(`http://localhost:9494/guests/100`)
      .then(resp => resp.json())
      .then(console.log)
  }, [])

  return (
    <div className='reservations'>
      <Header/>
      This is the Reservations page.
    </div>
  );
}

export default Reservations;