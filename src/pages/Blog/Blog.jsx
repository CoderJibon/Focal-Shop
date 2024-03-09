import React, { useEffect } from "react";
import MetaData from "../../components/MetaData/MetaData.jsx";
import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
const Blog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);

  return (
    <>
      <MetaData title={`Blog`} />
      <BreadCum title="Blog" />
      {/* Blogs Start */}

      <div className="blog-wrapper home-wrapper-2 py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-3 col-12 mb-4">
              <BlogSidebar />
            </div>

            <div className="col-md-9 col-12">
              <div className="row">
                {blog &&
                  blog.map((item, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-12 mb-4">
                        <BlogCard data={item} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
