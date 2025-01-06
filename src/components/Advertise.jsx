import React from 'react'

const Advertise = ({src}) => {
  return (
    <>
    <div className="hidden lg:block relative group overflow-hidden mt-2">
          <div className="absolute top-0 left-[-200%] z-10 w-[200%] h-full bg-gradient-to-r from-white to-transparent opacity-30 transform scale-x-[0.5] skew-x-12 transition-transform duration-500 ease-in-out group-hover:translate-x-[150%]"></div>
          <img src={src} alt="New arrival advertisement" className="w-full" />
        </div>
    </>
  )
}

export default Advertise