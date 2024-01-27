import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home-components/home/Home'
import './bootstrap/bootstrap.css'
import './bootstrap/bootstrap-icons.min.css'
import './global.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
