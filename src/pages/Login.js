import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField } from "@mui/material";

function Login({handleLogin, reload}) {
  const history = useHistory()

  const [formData, setFormData] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:9494/guests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({username: formData})
    })
      .then(resp => resp.json())
      .then(userObject => {
        handleLogin(userObject)
        reload()
        history.push('/reservations')
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField 
        label='username' 
        value={formData} 
        onChange={(e) => setFormData(e.target.value)}
      />
      <input type='submit'/>
    </form>
  );
}

export default Login;