import React from 'react';
import VehicleImage from './VehicleImage.js'
import { Link } from 'react-router-dom'

function VehicleCard({make, model, year, price_per_day, description, image_url}) {
  return (
    <div className='vehicle-card'>
      <VehicleImage image_url={image_url}/>
      <h2>{year} {make} {model}</h2>
      <p>{description}</p>
      <h5>${price_per_day} / day</h5>
      <Link to='/reservations/new' className='vehicle-card__link'>
        Book This Vehicle
      </Link>
    </div>
  );
}

export default VehicleCard;