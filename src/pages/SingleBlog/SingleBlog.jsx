import { Link, useParams } from "react-router-dom";
import MetaData from "../../components/MetaData/MetaData.jsx";
import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import BlogSidebar from "../../components/BlogSidebar/BlogSidebar.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSIngleBlog } from "../../features/blog/blogApiSlice.js";
const SingleBlog = () => {
  const title = "DynamicBlogName - Focal";
  const dispatch = useDispatch();
  const { singleBlog, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );
  //get the brand id
  const { slug } = useParams();

  //get single blog
  useEffect(() => {
    dispatch(getSIngleBlog(slug));
  }, [dispatch, slug]);
  // if (isLoading) {
  //   return (
  //     <div class="spinner-border text-secondary" role="status">
  //       <span class="visually-hidden">Loading...</span>
  //     </div>
  //   );
  // }
  return (
    <>
      <MetaData title={title} />
      <BreadCum title={singleBlog?.slug} />

      {/* SingleBlog Start */}

      <div className="SingleBlog_wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-3 col-12 mb-4">
              <BlogSidebar />
            </div>
            <div className="col-md-9 col-12">
              {isLoading && (
                <div class="spinner-border text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
              <div className="singleBlogCard">
                <h3 className="title">{singleBlog?.title}</h3>
                {singleBlog?.images?.url && (
                  <img
                    src={singleBlog?.images?.url}
                    alt=""
                    className="img-fluid w-100 my-4"
                  />
                )}

                <p
                  className="singlePra"
                  dangerouslySetInnerHTML={{ __html: singleBlog?.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
