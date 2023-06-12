import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter,  } from 'react-router-dom'
import NotFound from "../Page/404/NotFound";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import SingUp from "../SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import AllClasses from "../Page/AllClasses/AllClasses";
import AllInstructors from "../Page/AllInstructors/AllInstructors";
import MyClass from "../Page/Dashboard/MyClass/MyClass";
import AllStudent from "../Page/Dashboard/AllStudent/AllStudent";
import Dashboard from "../Page/Dashboard/Dashboard";
import AddClass from "../Page/AddClass/AddClass";
import ManageClass from "../Page/Dashboard/ManageClass/ManageClass";
import Payment from "../Page/Dashboard/Payment/Payment";
import Main from "../Layout/Main";
import EnrolClasses from "../Page/EnrolClasses/EnrolClasses";
import UpdateClass from "../Page/Dashboard/UpdateClass/UpdateClass";


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
                path: '/signup',
                element: <SingUp></SingUp>

            },
            {
                path: "/allClasses",
                element: <AllClasses></AllClasses>
            },
            {
                path: "/instructor",
                element: <AllInstructors></AllInstructors>
            }

        ]
    },
    {
        path: '/',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            {
                path: 'myClasses',
                element: <MyClass></MyClass>
            },
            {
                path: 'allStudent',
                element: <AllStudent></AllStudent>
            },
            {
                path: 'addClasses',
                element: <AddClass></AddClass>
            },
            {
                path: 'ManageClass',
                element: <ManageClass></ManageClass>,
                loader: () => fetch('https://summer-camp-school-server-jubayer9.vercel.app/addClass')
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path:'updateClass/:id',
                element:<UpdateClass></UpdateClass>,
                loader:({params})=>fetch(`https://summer-camp-school-server-jubayer9.vercel.app/addClass/${params.id}`)
            },
            {
                path:'enrolClasses',
                element:<EnrolClasses></EnrolClasses>
            }
        ]
    },




    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);