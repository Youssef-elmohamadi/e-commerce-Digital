import React from 'react'
import NewArrivals from './NewArrivals'
import PopularCategories from './PopularCategories'
import TrendingProuducts from './TrendingProducts'
import FeaturedProducts from './FeaturedProducts'

const Controlbannel = () => {
  return (
    <>
    <div className="lg:w-3/5 flex-grow w-full">
    <NewArrivals />
    <PopularCategories />
    <TrendingProuducts />
    <FeaturedProducts />
    </div>
    </>
  )
}

export default Controlbannel