import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Page/404/NotFound";
import Home from "../Page/Home/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>
        }
      ]
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
  ]);