'use client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import ReactLenis from 'lenis/react'

import './styles/index.css'

import App from './pages/index/App'
import Layout from './components/layout/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
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
