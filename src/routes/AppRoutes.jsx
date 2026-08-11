import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProjectsPage from '../pages/ProjectsPage'
import ContactPage from '../pages/ContactPage';


const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout/>,
            children:[
                {
                    path:"",
                    element:<HomePage/>
                },
                 {
                    path:"about",
                    element:<AboutPage/>
                },
                 {
                    path:"work",
                    element:<ProjectsPage/>
                },
                {
                    path:"contact",
                    element:<ContactPage/>
                }
            ]
        }
    ])

    return <RouterProvider router={router}/>
}

export default AppRoutes
