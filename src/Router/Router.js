import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main/Main"
import AboutMe from "../Page/AboutMe/AboutMe"
import Contact from "../Page/Contact/Contact"
import Home from "../Page/Home/Home"
import BookWorld from "../ProjectDetailed/BookWorld"
import HappySmile from "../ProjectDetailed/HappySmile"
import DeveloperProgram from "../ProjectDetailed/DeveloperProgram"
import Blog from "../Page/Blog"
import MainAnimation from "../NavbarBackground/MainAnimation"

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
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>,
            },
            {
                path: '/bookworld',
                element: <BookWorld></BookWorld>,
            },
            {
                path: '/happysmile',
                element: <HappySmile></HappySmile>,
            },
            {
                path: '/developerprogram',
                element: <DeveloperProgram></DeveloperProgram>,
            },
            {
                path: '/blog',
                element: <MainAnimation></MainAnimation>,
            },
            // {
            //     path: '/blog',
            //     element: <Blog></Blog>,
            // },


        ]

    },




])

export default router