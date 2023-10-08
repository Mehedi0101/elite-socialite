import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
import Support from "../pages/Support";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: () => fetch('/events.json'),
                element: <Home></Home>
            },
            {
                path: '/services/:serviceTitle',
                loader: () => fetch('/events.json'),
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/blogs',
                loader: () => fetch('/blogs.json'),
                element: <PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>
            },
            {
                path: '/blogs/:blogId',
                loader: () => fetch('/blogs.json'),
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>
            },
            {
                path: '/support',
                element: <PrivateRoute><Support></Support></PrivateRoute>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            }
        ]
    }
])

export default router;