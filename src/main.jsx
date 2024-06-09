import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Maindiv from './Components/Maindiv/Maindiv.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import AddCoffee from './Components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Maindiv></Maindiv>,



    children: [
      {
        path: "/",
        element: <Navbar></Navbar>,
           loader:()=>fetch("http://localhost:5000/coffee"),
      },

      {
        path:"addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"updateCoffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
