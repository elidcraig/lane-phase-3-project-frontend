import React from 'react';
import ReservationCard from './ReservationCard.js'
import ReservationList from './ReservationList.js'

function ReservationsContainer({reservations, handleDelete}) {

  const reservationComponents = reservations.map(resObject => {
    return (<ReservationCard {...resObject} key={resObject.id} handleDelete={handleDelete}/>)
  })

  return (
    <div className='reservations-container'>
      {reservationComponents}
    </div>
  );
}

export default ReservationsContainer;