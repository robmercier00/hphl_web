import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Boostrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components imports
import App from "./components/App.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main-body">
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)
