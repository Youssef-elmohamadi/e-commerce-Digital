import React from 'react'
import Advertise from './Advertise';
import Bestsellers from './Bestsellers';
import Services from './Services';
import Testimonials from './Testimonials';
import ads1 from "../images/item-3.jpg";
import ads2 from "../images/item-4.jpg";
import LatestBlogs from './LatestBlogs';
const Sidebar = () => {
  return (
    <>
    <div className="lg:w-1/6 w-full lg:flex-shrink-0 lg:min-w-60 ">
        <Advertise src={ads1} />
        <Bestsellers />
        <Advertise src={ads2} />
        <Services />
        <Testimonials />
        <LatestBlogs/>
      </div>
    </>
  )
}

export default Sidebar