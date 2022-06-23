import { Button } from '@mui/material';
import React from 'react';
import VehicleImage from './VehicleImage';
import { useHistory } from 'react-router-dom'

function ReservationCard({start_date, end_date, vehicle, id, handleDelete, handleVehicleChoice}) {
  const history = useHistory()

  const handleChangeReservation = () => {
    handleVehicleChoice(vehicle)
    history.push(`/reservations/${id}/edit`)
  }


  return (
    <div className='reservation-card'>
      <VehicleImage image_url={vehicle.image_url}/>
      <h1>{vehicle.year} {vehicle.make} {vehicle.model}</h1>
      <p>Start date: {start_date}</p>
      <p>End date: {end_date}</p>
      <Button variant='contained' onClick={() => handleChangeReservation()}>Change this Reservation</Button>
      <Button variant='contained' onClick={() => handleDelete(id)}>Delete this Reservation</Button>
    </div>
  );
}

export default ReservationCard;