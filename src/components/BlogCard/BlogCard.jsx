import React from "react";
import { Link } from "react-router-dom";
import formatToDate from "../../utils/formatToData.js";
const BlogCard = ({ data = null }) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <Link to={`/blog/${data?.slug}`}>
          <img
            src={data?.images?.url}
            className=" img-fluid "
            alt={data?.slug}
          />
        </Link>
      </div>
      <div className="blog-content">
        <p className="date">{formatToDate(data?.createdAt)}</p>
        <h5 className="title">{data?.title}</h5>
        <p className="desc">{data?.shortDesc}</p>
        <Link className="button" to={`/blog/${data?.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
