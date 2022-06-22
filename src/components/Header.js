import { Avatar } from '@mui/material';
import React from 'react';


function Header({activeUser}) {
  return (
    <div className='header'>
      <h1 className='header__title'>LANE</h1>
      <Avatar sx={{ width: 50, height: 50 }}/>
    </div>
  );
}

export default Header;