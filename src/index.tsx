import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import './index.css';
import App from './App';
import Frontpage from '@/views/Frontpage';
import Projects from '@/views/Projects';
import TicTacToe from '@/views/TicTacToe';
import State from '@/views/State';
import S3 from './views/S3';
import reportWebVitals from './reportWebVitals';
import { routes } from '@/models/routes';
import Login from './views/Login';
import Alibaba from './views/Alibaba';
import Paypal from './views/Paypal';

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routes.HOME,
        element: <Frontpage/>,
      },
      {
        path: routes.PROJECTS,
        element: <Projects/>,
        children: [
          {
            path: routes.PROJECTS_TICTACTOE,
            element: <TicTacToe/>,
          },
          {
            path: routes.PROJECTS_STATE,
            element: <State/>,
          },
          {
            path: routes.PROJECTS_S3,
            element: <S3/>,
          },
          {
            path: routes.PROJECTS_ALIBABA,
            element: <Alibaba/>,
          },
          {
            path: routes.PROJECTS_PAYPAL,
            element: <Paypal/>,
          },
        ]
      },
      {
        path: routes.CONTACT,
        element: <div>Contact me</div>,
      },
      {
        path: routes.LOGIN,
        element: <Login/>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
