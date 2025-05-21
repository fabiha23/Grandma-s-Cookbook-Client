import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/Router.jsx'
import AuthDataProvider from './Contexts/AuthDataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthDataProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthDataProvider>
  </StrictMode>,
)
