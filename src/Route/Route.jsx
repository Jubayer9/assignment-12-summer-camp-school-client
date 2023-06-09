import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Page/404/NotFound";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SingUp from "../SingUp/SingUp";
import Dashboard from "../Page/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllClasses from "../Page/AllClasses/AllClasses";
import AllInstructors from "../Page/AllInstructors/AllInstructors";
import MyClass from "../Page/Dashboard/MyClass/MyClass";

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
                path:'/signup',
                element:<SingUp></SingUp>

            },
            {
                path:"/allClasses",
                element:<AllClasses></AllClasses>
            },
            {
                path:"/instructor",
                element:<AllInstructors></AllInstructors>
            }
        ]
    },
    {
        path:'/dashboard/myClass',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'/dashboard/myClass',
                element:<MyClass></MyClass>
            }
        ]
    },
    
    

    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);