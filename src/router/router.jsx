import { Route, createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layouts.jsx";
import publicRouter from "./publicRouter.jsx";
import privateRouter from "./privateRouter.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";

//create app router
const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      ...publicRouter,
      ...privateRouter, // Add a route for 404 page
      <Route path="*" element={<NotFoundPage />} />,
    ],
  },
]);

//export router
export default router;
