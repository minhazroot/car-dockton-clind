import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Login from "../pages/Login/Login";
import Regestation from "../pages/Regestation/Regestation";
import CheckOut from "../pages/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, {
                path: "/about",
                element: <About></About>
            }, {
                path: "/login",
                element: <Login></Login>

            }, {
                path: "/Regestation",
                element: <Regestation></Regestation>

            },
            {
                path: "/CheckOut/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
]);
export default router;