import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactLenis from 'lenis/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/rootLayout/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import App from './pages/index/App';

const Root = () => {
    const [loading, setLoading] = useState(true);

    const router = createBrowserRouter([
        {
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <App />,
                },
                // {
                //   path: "/nous",
                //   // element: <Nous />,
                // },
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
    ]);

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