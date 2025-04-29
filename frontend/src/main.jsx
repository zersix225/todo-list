import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from "~react-pages";
import { useRoutes, BrowserRouter } from 'react-router-dom';

const App = () => {
  return useRoutes(routes)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
