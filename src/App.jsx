import React from 'react'
import Hero from './components/Hero'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const router=createBrowserRouter([

    {
      path:'/',
      element:<Hero/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
  ]
    
  );
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App