import About from "../pages/About/About.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import CheckOut from "../pages/CheckOut/CheckOut.jsx";
import CompareProducts from "../pages/CompareProducts/CompareProducts.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword.jsx";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import OurStore from "../pages/OurStore/OurStore.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy.jsx";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy.jsx";
import ShippingPolicy from "../pages/ShippingPolicy/ShippingPolicy.jsx";
import SignUp from "../pages/SignUp/SignUp.jsx";
import SingleBlog from "../pages/SingleBlog/SingleBlog.jsx";
import SingleProduct from "../pages/SingleProduct/SingleProduct.jsx";
import TermsOfService from "../pages/TermsOfService/TermsOfService.jsx";
import Wishlist from "../pages/Wishlist/Wishlist.jsx";

//public router
const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product",
    element: <OurStore />,
  },
  {
    path: "/product/:slug",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:slug",
    element: <SingleBlog />,
  },
  {
    path: "/compare-product",
    element: <CompareProducts />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Sign-Up",
    element: <SignUp />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/refund-policy",
    element: <RefundPolicy />,
  },
  {
    path: "/shipping-policy",
    element: <ShippingPolicy />,
  },
  {
    path: "/terms-Of-service",
    element: <TermsOfService />,
  },
];

//export public router
export default publicRouter;
