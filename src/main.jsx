import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css'; // Import the AOS CSS
import AOS from 'aos'; // Import the AOS library

import './index.css'

AOS.init(); // Initialize AOS
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
