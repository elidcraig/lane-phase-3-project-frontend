import React from 'react'
import Header from '../components/Header.js'
import Login from '../components/Login.js'
import NewReservation from '../components/NewReservation.js';

function Home() {
  return (
    <div className='home'>
      <Header/>
      <NewReservation/>
    </div>
  );
}

export default Home;
