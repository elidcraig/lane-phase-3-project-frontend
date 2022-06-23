import React from 'react';
import VehicleImage from './VehicleImage.js'
import { Link } from 'react-router-dom'

function VehicleCard({make, model, year, price_per_day, description, image_url, id, host, handleClick}) {
  
  return (
    <div className='vehicle-card'>
      <VehicleImage image_url={image_url}/>
      <div className='vehicle-card__header'>
        <h2>{year} {make} {model}</h2>
        <div className='vehicle-card__header-host'>
          <h5>{host.username}</h5>
          <img className='vehicle-card__host-avatar'src={host.profile_image_url}/>
        </div>
      </div>
      <p>{description}</p>
      <h5>${price_per_day} / day</h5>
      <Link to={'/reservations/new/'} className='vehicle-card__link' onClick={() => handleClick({id: id, price_per_day: price_per_day})}>
        Book This Vehicle
      </Link>
    </div>
  );
}

export default VehicleCard;