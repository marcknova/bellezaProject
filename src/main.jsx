import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HamburgerProvider } from './context/UseHamburger'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HamburgerProvider>
      <App />
    </HamburgerProvider>
  </BrowserRouter>,
)
