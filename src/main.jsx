import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './Main/MainLayout.jsx';
import LoginPage from './AllPages/LoginPage/LoginPage.jsx';
import HomePage from './AllPages/HomePage/HomePage.jsx';
import SignUpPage from './AllPages/SignUpPage/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <p>Error!</p>,
    children : [
      {
        path : '/',
        element:<HomePage></HomePage>
        
      }, 
      {
        path: '/login',
        element : <LoginPage></LoginPage>
      },
      {
        path :'/register',
        element: <SignUpPage></SignUpPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
