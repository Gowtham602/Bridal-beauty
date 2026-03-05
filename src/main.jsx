import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter } from "react-router-dom";

import Lenis from "@studio-freight/lenis";
createRoot(document.getElementById('root')).render(
  
  // <StrictMode>
  //   {/* <App /> */}
  //   <Home/>
  // </StrictMode>,
   <BrowserRouter>
    <App />
  </BrowserRouter>
)
