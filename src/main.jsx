import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayouts from './Main/MainLayout.jsx';
import LoginPage from './AllPages/LoginPage/LoginPage.jsx';
import HomePage from './AllPages/HomePage/HomePage.jsx';
import SignUpPage from './AllPages/SignUpPage/SignUpPage.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './AllPages/Error/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>

      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/register',
        element: <SignUpPage></SignUpPage>
      }
    ]
  },
]);
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster></Toaster>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
