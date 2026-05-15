import React from 'react'
import Navbar from '../components/Navbar'
import HeroeHeader from '../components/Home/HeroeHeader'
import HomeBody from '../components/Home/HomeBody'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroeHeader />
      <HomeBody />
      <Footer />
    </div>
  )
}

export default Home
