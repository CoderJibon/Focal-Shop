import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addWIshList } from "../../features/auth/authApiSlice.js";

const ProductCard = ({ grid = 4, data = null }) => {
  const location = useLocation();
  const isLocation = location.pathname === "/product" && grid == 1;
  const dispatch = useDispatch();
  const [isWishlist, setIsWishlist] = useState(false);
  const { wishlist } = useSelector((state) => state.auth);

  //add wishlist item
  const handleChangeWishList = (e, id) => {
    e.preventDefault();
    if (id) {
      dispatch(addWIshList(id));
    }
  };
  // Update useEffect to reflect changes in wishlist state
  useEffect(() => {
    // Check if the product is in the wishlist
    if (wishlist) {
      const isInWishlist = wishlist.some((item) => item?._id === data?._id);
      setIsWishlist(isInWishlist);
    }
  }, [wishlist, data]);

  return (
    <>
      <div
        className={`${
          location.pathname === "/product"
            ? `col-lg-${grid} col-md-4 col-6 mb-3`
            : "col-lg-3 col-md-4 col-6 mb-3"
        }`}
      >
        <Link
          to={`/product/${data?.slug}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link
              className="wishlistIcon"
              to="#"
              onClick={(e) => handleChangeWishList(e, data._id)}
            >
              {isWishlist ? (
                <img width={18} src="/public/images/wish-black.svg" alt="" />
              ) : (
                <img src="/public/images/wish.svg" alt="" />
              )}
            </Link>
          </div>
          <div className="row">
            <div
              className={`${
                location.pathname === "/product" && grid == 12
                  ? "col-4"
                  : "col-12"
              }`}
            >
              <div className="product-image">
                <img
                  src={data?.productThumbnails?.url}
                  alt="product image"
                  className="img-fluid"
                />
                <img
                  src={data?.images[0]?.url}
                  alt="product image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div
              className={`${
                location.pathname === "/product" && grid == 12
                  ? "col-8"
                  : "col-12"
              }`}
            >
              <div className="product-details">
                <h6 className="brand">{data?.brand?.name}</h6>
                <h5 className="product-title">{data?.title}</h5>
                <ReactStars
                  count={5}
                  //   onChange={ratingChanged}
                  size={24}
                  value={data?.totalRating}
                  edit={false}
                  activeColor="#ffd700"
                />

                {location.pathname === "/product" && grid == 12 && (
                  <p className="d-block product-desc">{data?.shortDesc}</p>
                )}

                <p className="price">$ {data?.price}</p>
              </div>
            </div>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-10">
              <Link>
                <img
                  src="/public/images/prodcompare.svg"
                  alt="product compare"
                />
              </Link>
              <Link>
                <img src="/public/images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="/public/images/add-cart.svg" alt="add Cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
