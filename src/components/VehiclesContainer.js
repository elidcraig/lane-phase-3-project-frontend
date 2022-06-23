import React from 'react';
import VehicleCard from './VehicleCard.js'

function VehiclesContainer({vehicles, handleVehicleChoice}) {

  const createCard = vehicleObj => <VehicleCard {...vehicleObj} key={vehicleObj.id} handleClick={handleVehicleChoice}/>

  const vehicleComponents = vehicles.map(vehicleObj => createCard(vehicleObj))
  
  return (
    <div className='vehicles-container'>
      {vehicleComponents}
    </div>
  );
}

export default VehiclesContainer;