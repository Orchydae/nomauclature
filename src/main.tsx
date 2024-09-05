import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import ReactLenis from 'lenis/react'
import App from './pages/index/App'
import './styles/index.css'
import ErrorPage from './pages/index/ErrorPage'
import Contact from './pages/index/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/nous",
    // element: <Nous />,
  },

  {
    path: "/portfolio",
    // element: <Portfolio />,
  },

  {
    path: "/approche",
    // element: <Approche />,
  },

  {
    path: "/contacts/:contactId",
    element: <Contact />,
  },

  {
    path: "/404",
    element: <ErrorPage />,
  }
  // Add more routes here if needed
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactLenis root>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </ReactLenis>
  </React.StrictMode>,
)
