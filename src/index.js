import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Component/App';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import Contacts from './Component/Contacts';
import Login from './Component/Login';
import Register from './Component/Register';
import Product from './Component/Product';
import Error from './Component/Error';
import './index.css';
import ThemeProvider from './Context/ThemeContext';
import Productdet from './Component/Productdet';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contacts',
        element: <Contacts />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'proddet/:pid',
        element: <Productdet />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <RouterProvider router={Router} > 

    </RouterProvider>
  </ThemeProvider>

);

reportWebVitals();
