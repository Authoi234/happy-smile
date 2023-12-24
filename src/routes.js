import Services from "./Pages/Home/Services/Services";
import SingleServiceDetails from "./Pages/Home/Services/SingleServiceDetails";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("./layout/Main");
const { default: Home } = require("./Pages/Home/Home/Home");

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
            }
        ]
    }
])