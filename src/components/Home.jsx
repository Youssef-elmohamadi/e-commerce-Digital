import React from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Controlbannel from './Controlbannel'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <Slider/>
    <div className="flex px-6 my-8 gap-6 w-full flex-wrap justify-between ">
      <Sidebar />
      <Controlbannel/>
    </div>
    <Footer/>
    </>
  )
}

export default Home