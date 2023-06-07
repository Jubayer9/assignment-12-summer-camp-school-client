import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Page/404/NotFound";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SingUp from "../SingUp/SingUp";
import Dashboard from "../Page/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'signup',
                element:<SingUp></SingUp>

            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    

    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);