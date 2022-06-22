function VehicleImage({image_url}) {
  return (
    <div className="vehicle-image">
      <img alt='vehicle' src={image_url}/>
    </div>
  );
}

export default VehicleImage;