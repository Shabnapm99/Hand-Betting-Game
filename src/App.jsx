import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Root from './root/Root';
import { PulseLoader } from 'react-spinners'
import GameInterface from './pages/GameInterface';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500)
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [{
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/game',
        element: <GameInterface />
      }]
    }
  ])

  return (
    <>
      {
        loading ? <div className='flex justify-center items-center h-screen bg-[#132418]'><PulseLoader loading={loading} color='#006400' /> </div> : <RouterProvider router={router}></RouterProvider>
      }
    </>

  )
}

export default App
