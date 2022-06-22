import { Button } from '@mui/material';
import React from 'react';
import VehicleImage from './VehicleImage';

function ReservationCard({start_date, end_date, vehicle, id, handleDelete}) {
  return (
    <div className='reservation-card'>
      <VehicleImage image_url={vehicle.image_url}/>
      <h1>{vehicle.make}</h1>
      <p>Start date: {start_date}</p>
      <p>End date: {end_date}</p>
      <Button variant='contained'>Change this Reservation</Button>
      <Button variant='contained' onClick={() => handleDelete(id)}>Delete this Reservation</Button>
    </div>
  );
}

export default ReservationCard;