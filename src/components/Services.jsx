import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <>
    <div className="border flex flex-col gap-4 p-3 rounded mt-4">
              <div className="flex items-center gap-2  mt-2">
                <div
                  className="bg-emerald-400 p-3 text-white relative 
              transition duration-1000 ease-in-out rounded 
              hover:rounded-full hover:scale-105"
                >
                  <TbTruckDelivery size={30} />
                </div>
                <div>
                  <h3 className="font-semibold">Free delivery</h3>
                  <p className="text-sm text-gray-500">from $50</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div
                  className="bg-rose-500 p-3 text-white relative 
              transition duration-1000 ease-in-out rounded 
              hover:rounded-full hover:scale-105"
                >
                  <MdOutlineSupportAgent size={30} />
                </div>
                <div>
                  <h3 className="font-semibold">Support 24/7</h3>
                  <p className="text-sm text-gray-500">OnLine 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div
                  className="bg-yellow-400 p-3 text-white relative 
              transition duration-1000 ease-in-out rounded 
              hover:rounded-full hover:scale-105"
                >
                  <GiReceiveMoney size={30} />
                </div>
                <div>
                  <h3 className="font-semibold">Free Return Money</h3>
                  <p className="text-sm text-gray-500">365 days</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div
                  className="bg-indigo-500 p-3 text-white relative 
              transition duration-1000 ease-in-out rounded 
              hover:rounded-full hover:scale-105"
                >
                  <RiSecurePaymentLine size={30} />
                </div>
                <div>
                  <h3 className="font-semibold">Payment Method</h3>
                  <p className="text-sm text-gray-500">Secure Payment</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div
                  className="bg-blue-500 p-3 text-white relative 
              transition duration-1000 ease-in-out rounded 
              hover:rounded-full hover:scale-105"
                >
                  <RiSecurePaymentFill size={30} />
                </div>
                <div>
                  <h3 className="font-semibold">Get Promotion</h3>
                  <p className="text-sm text-gray-500">Secure Payment</p>
                </div>
              </div>
            </div>
    </>
  )
}

export default Services