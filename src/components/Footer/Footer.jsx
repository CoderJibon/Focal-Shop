import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4 footer footer-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 col-12 mb-2">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="/public/images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 footer footer-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <h4 className="text-white">Contact us</h4>
              <div className="">
                <address className="text-white fs-6">
                  Demo Store <br />
                  No. 1259 Freedom, New York, 11111 <br /> United State
                </address>
                <a
                  href="tel:+91-987654321"
                  className="mt-0 text-white fs-8 d-block mb-2"
                >
                  +91-987654321
                </a>

                <a
                  href="mailto:demo@exampledemo.com"
                  className="mt-3 text-white fs-8 d-block mb-0"
                >
                  demo@exampledemo.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="" target="_blank">
                    <BsLinkedin className=" fs-4" />
                  </a>
                  <a className="text-white" href="" target="_blank">
                    <BsGithub className=" fs-4" />
                  </a>
                  <a className="text-white" href="" target="_blank">
                    <BsYoutube className=" fs-4" />
                  </a>
                  <a className="text-white" href="" target="_blank">
                    <BsInstagram className=" fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-12">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> Accessories</Link>
                <Link className="text-white py-2 mb-1">laptops</Link>
                <Link className="text-white py-2 mb-1">headphones</Link>
                <Link className="text-white py-2 mb-1">smart watches</Link>
                <Link className="text-white py-2 mb-1">tablets</Link>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-12">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> Accessories</Link>
                <Link className="text-white py-2 mb-1">laptops</Link>
                <Link className="text-white py-2 mb-1">headphones</Link>
                <Link className="text-white py-2 mb-1">smart watches</Link>
                <Link className="text-white py-2 mb-1">tablets</Link>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-12">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1"> Accessories</Link>
                <Link className="text-white py-2 mb-1">laptops</Link>
                <Link className="text-white py-2 mb-1">headphones</Link>
                <Link className="text-white py-2 mb-1">smart watches</Link>
                <Link className="text-white py-2 mb-1">tablets</Link>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h4 className="text-white mb-4">Our App</h4>
              <div className="">
                <address className="text-white fs-6">
                  Download our App and get extra 15% <br />
                  Discount on your first Order..!
                </address>
                <img
                  className="mb-2 d-block "
                  src="/public/images/google.webp"
                  alt="google"
                />
                <img src="/public/images/app-icon-02.webp" alt="app" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 footer footer-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white mb-0">
                &copy; {new Date().getFullYear()} Powered by developer's
                coderjibon
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
