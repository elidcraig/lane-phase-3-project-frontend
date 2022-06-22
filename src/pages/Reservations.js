import React, { useEffect, useState } from 'react'
import ReservationsContainer from '../components/ReservationsContainer.js'


function Reservations({activeUser}) {
  const [userReservations, setUserReservations] = useState([])

  useEffect(() => {
    if(activeUser) {
      setUserReservations(activeUser.reservations)
    }
  }, [])

  const handleDelete = reservationId => {
    console.log(reservationId)
    fetch(`http://localhost:9494/reservations/${reservationId}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(deletedObj => {
        console.log(deletedObj)
        const updatedReservations = userReservations.filter(reservation => reservation.id !== deletedObj.id)
        setUserReservations(updatedReservations)
      })
  }

  return (
    <div className='reservations'>
      <ReservationsContainer reservations={userReservations} handleDelete={handleDelete}/>
    </div>
  );
}

export default Reservations;