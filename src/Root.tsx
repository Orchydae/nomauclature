import { ParallaxProvider } from 'react-scroll-parallax';
import ReactLenis from 'lenis/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/rootLayout/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Index from './pages/index/Index';
import Member from './pages/member/Member';

const Root = () => {

    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <RootLayout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        path: "/",
                        element: <Index />,
                    },
                    {
                        path: "/membre/:id", // Dynamic route with 'id' parameter
                        element: <Member />,
                    },
                    // {
                    //   path: "/portfolio",
                    //   // element: <Portfolio />,
                    // },
                    // {
                    //   path: "/approche",
                    //   // element: <Approche />,
                    // },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                    // Add more children routes here if needed
                ]
            },
            {
                path: "/404",
                element: <ErrorPage />,
            }
            // Add more routes here if needed
        ],
        {
            basename: '/nomauclature/', // Set the base URL for the router
        }
    );

    return (
        <ReactLenis root>
            <ParallaxProvider>
                <RouterProvider router={router}>
                    {/*
                     Child elements are controlled by the RouterProvider
                     */}
                </RouterProvider>
            </ParallaxProvider>
        </ReactLenis>
    )
}

export default Root;