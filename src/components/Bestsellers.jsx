import React, { useState } from 'react'
import ShopByCategoriesContext from './ShopByCategoriesContext'
import { useInView } from "react-intersection-observer";
const LazyImage = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false); 
  };
  return (
    
    <div className="relative">
   
    {isLoading && (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
        <div className="spinner border-4 border-gray-300 border-t-4 border-t-primary rounded-full w-10 h-10 animate-spin"></div>
      </div>
    )}

    
    <img
      ref={ref}
      src={inView ? src : ""}
      alt={alt}
      className={`${className} transition-opacity duration-500 ease-in-out ${
        inView && !isLoading ? "opacity-100" : "opacity-0"
      }`}
      onLoad={handleImageLoad} 
    />
  </div>
  );
};
const Bestsellers = () => {
  const { productsApi } = React.useContext(ShopByCategoriesContext);
  return (
    <>
    <div className="w-full border   mt-2 rounded">
          <div className="bg-primary px-2 py-3 w-full rounded-t  ">
            <h2 className="font-semibold uppercase   text-white">Bestsellers</h2>
          </div>
          {productsApi
            .filter((product) => product.classification === "Top Sales")
            .map((product) => (
              <div className="flex items-center gap-2 px-3 border-b last:border-b-0 ">
                <div className="flex items-center   gap-2 w-full ">
                  <div className="lg:w-1/4 w-1/3 border my-2">
                    <LazyImage
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-3/4 flex flex-col py-2 gap-2">
                    <h3 className="font-semibold">{product.title}</h3>
                    <div className="text-primary font-semibold">
                      ${product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </>
  )
}

export default Bestsellers