import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import Contact from "../Page/Contact/Contact"
import Home from "../Page/Home/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: < ErrorPage />,
        children: [

            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },


        ]

    },




])

export default router