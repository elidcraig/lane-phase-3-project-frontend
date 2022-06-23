import React from 'react'
import ReservationCard from '../components/ReservationCard.js'


function Reservations({activeUser, reservations, reload}) {

  const handleDelete = reservationId => {
    console.log(reservationId)
    fetch(`http://localhost:9494/reservations/${reservationId}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
      .then(deletedObj => {
        reload()
      })
  }

  const reservationComponents = reservations.map(resObject => {
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