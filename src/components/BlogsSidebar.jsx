import React, { useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import { FaSearch } from "react-icons/fa";

const BlogsSidebar = () => {
  const { blogs } = useContext(ShopByCategoriesContext);
  const sortDates = blogs.sort((a, b) => {
    const dateA = new Date(a.published_date.split("/").reverse().join("-"));
    const dateB = new Date(b.published_date.split("/").reverse().join("-"));
    return dateB - dateA;
  });
  const recentPosts = sortDates.slice(0, 5);

  return (
    <>
      <div className="md:w-2/6 lg:w-1/6 w-full lg:flex-shrink-0 lg:min-w-60">
        <div>
          <form className="flex relative items-center overflow-hidden w-full rounded border bg-gray-200 px-4 py-4  ">
            <input
              type="text"
              className="focus:outline-none p-2 w-full rounded text-sm"
              placeholder="search posts here..."
            />
            <div className="flex items-center">
              <button className="flex items-center gap-2 absolute  py-2 px-2 rounded  text-white  bg-black right-2">
                <FaSearch size={20} className="text-white " />
              </button>
            </div>
          </form>
        </div>
        <div className="w-full border   mt-2 rounded">
          <div className="bg-primary px-2 py-3 w-full rounded-t  ">
            <h2 className="font-semibold uppercase   text-white">Categories</h2>
          </div>
          <div className="px-5 py-2 border ">
            {blogs.map((blog) => (
              <div
                className="font-semibold text-black p-2 border-b last:border-b-0"
                key={blog.id}
              >
                <h1>{blog.category}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border   mt-2 rounded">
          <div className="bg-primary px-2 py-3 w-full rounded-t  ">
            <h2 className="font-semibold uppercase   text-white">
              Recent Posts
            </h2>
          </div>
          <ul className="px-8 py-2 border ">
            {recentPosts.map((blog) => (
              <li
                className="font-semibold list-disc text-black p-2 border-b last:border-b-0"
                key={blog.id}
              >
                <h1>{blog.title}</h1>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogsSidebar;
