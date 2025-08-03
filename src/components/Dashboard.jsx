import React from 'react'
import Navbar from './Navbar'
import '../css/Dasboard.css'
import Background from '../components/Background'
import Navbar_com from './Navbar-com'

const Dashboard = () => {
  return (
    <div className='dash-container'>
      <div className='navbar-top'>
        <Navbar />
      </div>
      <Background>
        {/* Content can go here */}
      </Background>
    </div>
  )
}

export default Dashboard