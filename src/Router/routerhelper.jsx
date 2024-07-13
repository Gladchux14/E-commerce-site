import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./routes";
import PageNotFound from "../components/notFound";

function generateRoutes(routes) {
    return routes.map((element) => {
      if (element.children && element.children.length > 0) {
        return (
          <Route key={element.path} path={element.path} element={element.element}>
            {generateRoutes(element.children)}
          </Route>
        );
      } else {
        return (
          <Route
            key={element.path}
            path={element.path}
            element={element.element}
          />
        );
      }
    });
  }
  
  const AdminDashboardRoutes = generateRoutes(routes);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {AdminDashboardRoutes}
        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );
  
  const MainRouter = () => {
    return <RouterProvider router={router} />;
  };
  
  export default MainRouter;
  