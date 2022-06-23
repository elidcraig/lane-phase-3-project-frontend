import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';

function EditReservation({activeUser, activeVehicle}) {
  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null
  })
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let price = calculatePrice(formData.startDate, formData.endDate)
    setTotalPrice(price)
  }, [formData])

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const calculatePrice = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const days = Math.round(((((endDate - startDate)/1000)/60)/60)/24)
    return (days + 1) * activeVehicle.price_per_day
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form className='new-reservation' onSubmit={handleSubmit}>
      <TextField 
        fullWidth
        margin='normal'
        label='Start Date'
        name='startDate'
        value={formData.startDate}
        onChange={handleChange}
      />
      <TextField 
        fullWidth
        margin='normal'
        label='End Date'
        name='endDate'
        helperText='Please use format yyyy-mm-dd'
        value={formData.endDate}
        onChange={handleChange}
      />
      <p>Total Cost: ${totalPrice < 0 ? '' : totalPrice}</p>
      <input type='submit' className='new-reservation__submit' value='SUBMIT'/>
    </form>
  );
}

export default EditReservation;