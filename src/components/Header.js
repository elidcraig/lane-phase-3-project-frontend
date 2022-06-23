import { Avatar } from '@mui/material';
import React from 'react';


function Header({activeUser}) {
  const {username, profile_image_url} = activeUser

  const getFirstCharacter = name => name ? name[0] : ''
  const avatarLetter = getFirstCharacter(activeUser.username)
  
  return (
    <div className='header'>
      <h1 className='header__title'>LANE</h1>
      <Avatar sx={{ width: 50, height: 50 }} >{avatarLetter.toUpperCase()}</Avatar>
    </div>
  );
}

export default Header;