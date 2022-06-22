import { Button } from '@mui/material';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function NewReservation() {
  const [formData, setFormData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  })

  const handleSelect = ranges => {
    console.log(ranges)
    const newFormData = {
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: 'selection'
    }
    setFormData(newFormData)
  }

  const handleSubmit = () => {
    const patchObject = {
      // need to format date correctly
      // here or in controller or in model?
      startDate: formData.startDate,
      endDate: formData.endDate,
      vehicle_id: 100,
      guest_id: 100
    }
    fetch('http://localhost:9494/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(patchObject)
    })
  }

  return (
    <div>
      <DateRangePicker
        ranges={[formData]}
        disabledDates={[/*place reserved dates here*/]}
        onChange={handleSelect}
      />
      <Button onClick={handleSubmit}>SUBMIT</Button>
    </div>
  );
}

export default NewReservation;