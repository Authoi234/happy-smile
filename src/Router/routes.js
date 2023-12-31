import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Home/Blog/Blog";
import Services from "../Pages/Home/Services/Services";
import SingleServiceDetails from "../Pages/Home/Services/SingleServiceDetails";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/Shared/PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <SingleServiceDetails></SingleServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])