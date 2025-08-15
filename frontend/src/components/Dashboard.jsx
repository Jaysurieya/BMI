import React from 'react'
import Navbar from './Navbar'
import '../css/Dasboard.css'
import Background from '../components/Background'
import Navbar_com from './Navbar-com'
import Sidebar_use from './Sidebar_use'


const Dashboard = () => {
  return (
    <div>
      <Background>
        <Sidebar_use />
      </Background>
    </div>
  )
}

export default Dashboard