import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Main from "../components/Main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: "Home"
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "contactUs",
                element: <ContactUs></ContactUs>
            }
        ]
    },


]);