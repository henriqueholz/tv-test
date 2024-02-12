import 'core-js';
import 'regenerator-runtime/runtime';
import 'vite/modulepreload-polyfill';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.tsx';
import { Fallback } from './components/Fallback.tsx';
import { NoMatch } from './Pages/NoMatch.tsx';

const News = React.lazy(() => import('./components/News.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/news',
        element: (
          <Suspense fallback={<Fallback />}>
            <News />
          </Suspense>
        ),
      },
      {
        path: '/*',
        element: <NoMatch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </React.StrictMode>
);
