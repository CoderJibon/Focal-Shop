import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "./features/product/productApiSlice.js";
import { getAllWishlist } from "./features/auth/authApiSlice.js";
import { getAllBlog } from "./features/blog/blogApiSlice.js";
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllBlog());
    if (user) {
      dispatch(getAllWishlist());
    }
  }, [dispatch, user]);
  return (
    <>
      {/* router init */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
