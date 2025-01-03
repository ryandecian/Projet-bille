import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BilleM7 from './components/BilleM7.tsx'
import BilleM5 from './components/BilleM5.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
      path: "/",
      element: <BilleM7 />
      },
      {
      path: "/billeM7",
      element: <BilleM7 />
      },
      {
      path: "/billeM5",
      element: <BilleM5 />
      },
      {
      path: "/billeM4",
      element: <BilleM5 />
      },
      {
      path: "/billeM3",
      element: <BilleM5 />
      },
      {
      path: "/billeM2",
      element: <BilleM5 />
      },
      {
      path: "/billeM1",
      element: <BilleM5 />
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
