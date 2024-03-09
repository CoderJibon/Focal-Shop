import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import SpecialProduct from "../../components/SpecialProduct/SpecialProduct.jsx";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);
  return (
    <>
      <section className="home-wrapper-1 py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3 "
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute ">
                  <h4>Supercharged for pros.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 or $41.62/mo. <br />
                    for 24 mo. Footnote*
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="row ">
                <div className="col-sm-6 col-12 mb-4">
                  <div className="small-banner position-relative ">
                    <img
                      src="../../../public/images/catbanner-01.jpg"
                      className="img-fluid rounded-3 "
                      alt="main-banner"
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>Best sale</h4>
                      <h5>Laptops max</h5>
                      <p>
                        rom $1699.00 or <br /> $64.62/mo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-4">
                  <div className="small-banner position-relative ">
                    <img
                      src="../../../public/images/catbanner-02.jpg"
                      className="img-fluid rounded-3 "
                      alt="main-banner"
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>New arrival</h4>
                      <h5>Buy iPad air</h5>
                      <p>
                        From $599 or <br /> $49.91/mo. for 12 mo. *
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-4">
                  <div className="small-banner position-relative ">
                    <img
                      src="../../../public/images/catbanner-03.jpg"
                      className="img-fluid rounded-3 "
                      alt="main-banner"
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>15% off</h4>
                      <h5>smartwatch 7</h5>
                      <p>
                        Shop the latest band <br /> styles and colors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="small-banner position-relative ">
                    <img
                      src="../../../public/images/catbanner-04.jpg"
                      className="img-fluid rounded-3 "
                      alt="main-banner"
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>Free engraving</h4>
                      <h5>AirPods max</h5>
                      <p>
                        High-fidelity playback & <br /> ultra-low distortion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Services-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="Services">
                <div className="row">
                  <div className="col-sm-6 col-lg-3 col-12 mb-3">
                    <div className="d-flex align-items-center gap-15 ">
                      <img src="images/service.png" alt="Services" />
                      <div className="">
                        <h6>Free Shipping</h6>
                        <p>From all orders over $100</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-12 mb-3">
                    <div className="d-flex align-items-center gap-15 ">
                      <img src="images/service-02.png" alt="Services" />
                      <div className="">
                        <h6>Daily Surprise Offers</h6>
                        <p>Save up to 25% off</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-12 mb-3">
                    <div className="d-flex align-items-center gap-15 ">
                      <img
                        src="../../../public/images/service-03.png"
                        alt="Services"
                      />
                      <div className="">
                        <h6>Support 24/7</h6>
                        <p>Shop with an expert</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-12">
                    <div className="d-flex align-items-center gap-15 ">
                      <img
                        src="../../../public/images/service-04.png"
                        alt="Services"
                      />
                      <div className="">
                        <h6>Affordable Prices</h6>
                        <p>Get Factory direct price</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="categories justify-content-center align-items-center ">
                <Link>
                  <div className="d-flex align-items-center justify-content-between p-2 ">
                    <div className="category-data">
                      <h6>Computers & Laptop</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
                <Link>
                  <div className=" d-flex align-items-center justify-content-between p-2 ">
                    <div className="category-data">
                      <h6>Headphones</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
                <Link>
                  <div className=" d-flex align-items-center justify-content-between p-2 ">
                    <div className="category-data">
                      <h6>Smart Television</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
                <Link>
                  <div className=" d-flex align-items-center justify-content-between p-2 ">
                    <div className="category-data">
                      <h6>Accessories</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
                <Link>
                  <div className="  d-flex align-items-center justify-content-between p-2 ">
                    <div className="category-data">
                      <h6>Smartwatches</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
                <Link>
                  <div className=" d-flex align-items-center justify-content-between p-2 ">
                    <div className="category-data">
                      <h6>Portable Speakers</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
                <Link>
                  <div className=" d-flex align-items-center justify-content-between p-2  ">
                    <div className="category-data">
                      <h6>Music & Gaming</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
                <Link>
                  <div className=" d-flex align-items-center justify-content-between p-2  ">
                    <div className="category-data">
                      <h6>Home Appliances</h6>
                      <p>10 items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-4 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading">Featured Collection</h2>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12 mb-4">
              <div className="famous-card position-relative">
                <img
                  src="/public/images/subbanner-01.jpg"
                  alt="subbanner-01"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5>big screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12 mb-4">
              <div className="famous-card position-relative">
                <img
                  src="/public/images/subbanner-02.jpg"
                  alt="subbanner-01"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="white-image-h5">Studio Display</h5>
                  <h6 className="white-image-h6">600 nits of brightness.</h6>
                  <p className="white-image-p">27-inch 5K Retina display</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12 mb-4">
              <div className="famous-card position-relative">
                <img
                  src="/public/images/subbanner-03.jpg"
                  alt="subbanner-01"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="white-image-h5">smartphones</h5>
                  <h6 className="white-image-h6">Smartphone 13 Pro.</h6>
                  <p className="white-image-p">
                    Now in Green. From $999.00 or $41.62/mo. for 24 mo.
                    Footnote*
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-12">
              <div className="famous-card position-relative">
                <img
                  src="/public/images/subbanner-04.jpg"
                  alt="subbanner-01"
                  className="img-fluid"
                />
                <div className="famous-content position-absolute">
                  <h5 className="white-image-h">home speakers</h5>
                  <h6 className="white-image-h6">Room-filling sound.</h6>
                  <p className="white-image-p">
                    From $699 or $116.58/mo. for 12 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special_wrapper py-5 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-01.png" alt="brand logo" />
                  </div>
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-02.png" alt="brand logo" />
                  </div>
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-03.png" alt="brand logo" />
                  </div>
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-04.png" alt="brand logo" />
                  </div>
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-05.png" alt="brand logo" />
                  </div>
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-06.png" alt="brand logo" />
                  </div>
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-07.png" alt="brand logo" />
                  </div>
                  <div className="ms-5  w-50">
                    <img src="/public/images/brand-08.png" alt="brand logo" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 ">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading">Our Latest News</h2>
            </div>
            {blog &&
              blog.map((item, index) => {
                return (
                  <div key={index} className="col-md-3 col-sm-6 col-12 mb-4">
                    <BlogCard data={item} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
