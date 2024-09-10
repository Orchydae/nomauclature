import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import ReactLenis from 'lenis/react'
import App from './pages/index/App'
import './styles/index.css'
import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import Layout from './components/layout/Layout'

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
    path: "/contact/",
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
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </ParallaxProvider>
    </ReactLenis>
  </React.StrictMode>,
)
