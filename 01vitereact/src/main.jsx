import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import NewFile from './newfile.jsx'
import "./newfile.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <NewFile></NewFile> */}
  </StrictMode>,
)
