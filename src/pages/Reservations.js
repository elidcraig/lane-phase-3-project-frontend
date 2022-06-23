import React, { useEffect, useState } from 'react'
import ReservationsContainer from '../components/ReservationsContainer.js'
import ReservationCard from '../components/ReservationCard.js'


function Reservations({activeUser}) {
  const [userReservations, setUserReservations] = useState([])

  useEffect(() => {
    if(activeUser) {
      setUserReservations(activeUser.reservations)
    }
  }, [activeUser])

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

  const reservationComponents = userReservations.map(resObject => {
    return (<ReservationCard {...resObject} key={resObject.id} handleDelete={handleDelete}/>)
  })

  return (
    <div className='reservations'>
      <div className='reservations-container'>
        {reservationComponents}
      </div>
    </div>
  );
}

export default Reservations;