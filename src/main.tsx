import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import ReactLenis from 'lenis/react'
import App from './pages/index/App'

import './styles/index.css'
import './styles/customFonts.css'

import ErrorPage from './pages/ErrorPage'
import Contact from './pages/Contact'
import Layout from './components/shared/layout/Layout'
import LoadingScreen from './components/loading/LoadingScreen'

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
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/404",
    element: <ErrorPage />,
  }
  // Add more routes here if needed
]);

const Root = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      {loading && <LoadingScreen />}
      <BrowserRouter>
        <ReactLenis root>
          <ParallaxProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </ParallaxProvider>
        </ReactLenis>
      </BrowserRouter>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
