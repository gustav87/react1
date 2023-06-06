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
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Frontpage/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
        children: [
          {
            path: "/projects/tictactoe",
            element: <TicTacToe/>,
          },
          {
            path: "/projects/state",
            element: <State/>,
          },
        ]
      },
      {
        path: "/contact",
        element: <div>Contact me</div>,
      },
      {
        path: "/hi",
        element: <div>Hi there!</div>,
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
