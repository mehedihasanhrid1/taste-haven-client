import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './pages/Home';
import Errorpage from './pages/Errorpage';
import Addproduct from './pages/Addproduct';
import Cart from './pages/Cart';
import AuthProvider from './AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import Signup from './pages/Signup';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/addproduct",
        element: <Addproduct/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element:<Login/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
