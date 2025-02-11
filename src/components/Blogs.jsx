import React from "react";
import { Link } from "react-router-dom";
import BlogsContent from "./BlogsContent";
import BlogsSidebar from "./BlogsSidebar";
import Footer from "./Footer";
const Blogs = () => {
  return (
    <>
      <div className="bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white">
        <div>
          <h1 className="text-xl font-bold flex justify-center items-center">
            Blogs
          </h1>
        </div>
        <h1>
          <Link to={"/"}>Home </Link>&gt; Blogs
        </h1>
      </div>
      <div className="flex w-full flex-wrap justify-between my-8 px-6 ">
        <BlogsContent />
        <BlogsSidebar />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
