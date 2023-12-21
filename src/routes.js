import Services from "./Pages/Home/Services/Services";

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
            }
        ]
    }
])