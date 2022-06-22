import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

function NewReservation({activeUser}) {
  const params = useParams()
  const history = useHistory()

  const [formData, setFormData] = useState({
    startDate: null,
    endDate: null
  })

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const patchObject = {
      start_date: formData.startDate,
      end_date: formData.endDate,
      vehicle_id: params.id,
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
        helperText='Please use format mm/dd/yyyy'
        value={formData.endDate}
        onChange={handleChange}
      />
      <input type='submit' className='new-reservation__submit' value='SUBMIT'/>
    </form>
  );
}

export default NewReservation;