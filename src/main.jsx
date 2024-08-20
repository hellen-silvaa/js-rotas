import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'
import Sobre from './pages/Sobre.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Servico from './pages/Servico.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ConteudoPrincipal /> },
      { path: "sobre", element: <Sobre /> },
      { path: "*", element: <PageNotFound /> },
      { path: "servico", element: <Servico /> }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '/admin/dashboard', element: <AdminHome /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
