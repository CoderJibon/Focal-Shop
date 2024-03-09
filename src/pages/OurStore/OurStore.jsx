import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import BreadCum from "../../components/BreadCum/BreadCum.jsx";
import MetaData from "../../components/MetaData/MetaData.jsx";
import ProductFilter from "../../components/ProductFilter/ProductFilter.jsx";
import ProductSort from "../../components/ProductSort/ProductSort.jsx";
import toastify from "../../utils/toastify.jsx";
import { useEffect, useState } from "react";
import { setMessageEmpty } from "../../features/auth/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
const OurStore = () => {
  const meta_title = "Our Store - Focal";
  const [grid, setGird] = useState(4);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { isError, message, wishlist } = useSelector((state) => state.auth);
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
      <MetaData title={meta_title} />
      <BreadCum title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-3 col-12">
              <div className="mobile-hidden">
                <ProductFilter />
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10 desktop-hidden">
                    <button
                      className="button"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample2"
                      aria-controls="offcanvasExample2"
                    >
                      Filter And Sort
                    </button>
                  </div>
                  <div className="d-flex align-items-center gap-10 ">
                    <ProductSort />
                  </div>
                  <div className="d-flex align-items-center gap-10 mobile-hidden">
                    <p className="total_products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid_img">
                      <img
                        onClick={() => setGird(3)}
                        src="/images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGird(4)}
                        src="/images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGird(6)}
                        src="/images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />

                      <img
                        onClick={() => setGird(12)}
                        src="/images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-list pb-5">
                <div className="row">
                  {products &&
                    products?.map((pd, index) => {
                      return <ProductCard key={index} data={pd} grid={grid} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* filter by mobile view */}
      <div
        className="offcanvas offcanvas-start offcanvas2"
        tabIndex="-1"
        id="offcanvasExample2"
        aria-labelledby="offcanvasExampleLabel2"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Filter BY Products
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ProductFilter />
        </div>
      </div>
    </>
  );
};

export default OurStore;
