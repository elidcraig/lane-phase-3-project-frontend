import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function NewReservation({activeUser, activeVehicle}) {
  const history = useHistory()

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
    const patchObject = {
      start_date: formData.startDate,
      end_date: formData.endDate,
      vehicle_id: activeVehicle.id,
      guest_id: activeUser.id
    }
    fetch('http://localhost:9494/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(patchObject)
    })
      .then(resp => resp.json())
      .then(history.push('/reservations'))
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

export default NewReservation;