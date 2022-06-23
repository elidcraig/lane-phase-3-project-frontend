import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  history.push('/login')
  return (
    <div className='home'>
      <h1>Welcome to Lane!</h1>
    </div>
  );
}

export default Home;
