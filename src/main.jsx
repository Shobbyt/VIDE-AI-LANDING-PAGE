import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import lastica from './public/fonts/Lastica.ttf'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

const style = document.createElement("style")
style.innerHTML = `
  @font-face {
    font-family: "Lastica";
    src: url("${lastica}") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`
document.head.appendChild(style)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)