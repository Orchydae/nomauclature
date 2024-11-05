import './styles/index.css'
import './styles/customFonts.css'

import ReactDOM from 'react-dom/client'

import LoadingScreen from './components/loading/LoadingScreen'
import React from 'react'
import Root from './Root'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
