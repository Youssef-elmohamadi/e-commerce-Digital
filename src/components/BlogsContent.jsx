import React, { useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
const BlogsContent = () => {
  const { blogs } = useContext(ShopByCategoriesContext);
  return (
    <>
      <div className="flex gap-5 flex-wrap md:w-3/6 lg:w-4/6 flex-grow w-full">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full sm:w-[48%] lg:w-[31%] xl:w-[22%] rounded">
            <div className="w-full h-40">
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogsContent;
