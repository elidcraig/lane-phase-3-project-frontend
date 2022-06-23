import { Avatar } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom'


function Header({activeUser}) {
  const {username, profile_image_url} = activeUser
  const history = useHistory()

  const getFirstCharacter = name => name ? name[0] : ''
  const avatarLetter = getFirstCharacter(activeUser.username)
  
  return (
    <div className='header'>
      <h1 className='header__title'>LANE</h1>
        <h2 className='header__navlinks' onClick={() => history.push('/vehicles')}>VEHICLES</h2>
        <h2 className='header__navlinks' onClick={() => history.push('/reservations')}>RESERVATIONS</h2>
      <Avatar sx={{ width: 50, height: 50 }} >{avatarLetter.toUpperCase()}</Avatar>
    </div>
  );
}

export default Header;