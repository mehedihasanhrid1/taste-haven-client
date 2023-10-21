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
import Cart from './components/Cart';
import AuthProvider from './AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contactus from './components/Contactus';
import PrivateRoute from './routes/PrivateRoute';
import { ThemeProvider } from '@material-tailwind/react';
import Updateproduct from './pages/Updateproduct';
import Branddetails from './pages/Branddetails';
import Productdetails from './pages/Productdetails';

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
        element:<PrivateRoute><Addproduct/></PrivateRoute>,
      },
      {
        path: "update-product/:product_id",
        element:<PrivateRoute><Updateproduct/></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch('http://localhost:5000/products');
          const data = await response.json();
          const updateProductData = data.find((item) => item._id === params.product_id);
          return { data: updateProductData };
        }
      },
      {
        path: "/cart",
        element:<PrivateRoute><Cart/></PrivateRoute>,
      },
      {
        path: "/details/:brandName",
        element: <Branddetails/>,
      },
      {
        path: '/product-details/:product_id',
        element: <PrivateRoute><Productdetails/></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch('http://localhost:5000/products');
          const data = await response.json();
          const productData = data.find((item) => item._id === params.product_id);
          return { data: productData };
        }
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/contactus",
        element:<Contactus/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
      <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
