import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BilleM7 from './pages/BilleM7/BilleM7.tsx'
import BilleM5 from './pages/BilleM5/BilleM5.tsx'
import BilleM3 from './pages/BilleM3/BilleM3.tsx'
import BilleM2 from './pages/BilleM2/BilleM2.tsx'

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
      path: "/billeM3",
      element: <BilleM3 />
      },
      {
      path: "/billeM2",
      element: <BilleM2 />
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
