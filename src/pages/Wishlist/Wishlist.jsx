import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import MetaData from "../../components/MetaData/MetaData.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addWIshList } from "../../features/auth/authApiSlice.js";
import toastify from "../../utils/toastify.jsx";
import { setMessageEmpty } from "../../features/auth/authSlice.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Wishlist = () => {
  const title = "Wishlist - Digitic";
  const dispatch = useDispatch();
  const { isError, message, wishlist } = useSelector((state) => state.auth);

  //add wishlist item
  const handleChangeWishList = (e, id) => {
    e.preventDefault();
    if (id) {
      dispatch(addWIshList(id));
    }
  };
  //message
  useEffect(() => {
    if (isError) {
      toastify("error", isError);
      dispatch(setMessageEmpty());
    }
    if (message) {
      toastify("success", message);
      dispatch(setMessageEmpty());
    }
  }, [isError, message]);
  return (
    <>
      <MetaData title={title} />
      <BreadCum title="Wishlist" />

      {/* Wishlist Start*/}

      <div className="wishlist_wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            {wishlist &&
              wishlist?.map((item, index) => {
                return (
                  <div key={index} className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className="wishlist_card position-relative">
                      <img
                        onClick={(e) => handleChangeWishList(e, item._id)}
                        src="../../public/images/cross.svg"
                        className="position-absolute cross img-fluid"
                        alt="cross"
                      />
                      <div className="wishlist_card_image">
                        <Link to={`/product/${item?.slug}`}>
                          <img
                            src={item?.productThumbnails?.url}
                            className="img-fluid w-100"
                            alt="watch"
                          />
                        </Link>
                      </div>
                      <div className="px-3 py-3">
                        <Link to={`/product/${item?.slug}`}>
                          <h5 className="title">{item.title}</h5>
                        </Link>
                        <h6 className="price">$ {item.price}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            {wishlist && !wishlist.length && (
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body text-center">
                    Wishlist Not Found
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
