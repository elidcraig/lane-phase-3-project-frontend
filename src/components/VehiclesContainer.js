import React from 'react';
import VehicleCard from './VehicleCard.js'

function VehiclesContainer({vehicles}) {

  const createCard = vehicleObj => <VehicleCard {...vehicleObj} key={vehicleObj.id}/>

  const vehicleComponents = vehicles.map(vehicleObj => createCard(vehicleObj))
  
  return (
    <div>
      {vehicleComponents}
    </div>
  );
}

export default VehiclesContainer;