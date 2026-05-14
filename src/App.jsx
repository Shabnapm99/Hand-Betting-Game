import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Root from './root/Root'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [{
        path: '/',
        element: <LandingPage />
      }]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
