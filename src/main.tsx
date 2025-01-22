import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


/* Importation des pages */
import BilleM7Page from "./pages/BilleM7Page.tsx"
import BilleM5Page from "./pages/BilleM5Page.tsx"
import BilleM3Page from "./pages/BilleM3Page.tsx"
import BilleM2Page from "./pages/BilleM2Page.tsx"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
      path: "/",
      element: <BilleM7Page />
      },
      {
      path: "/billeM5",
      element: <BilleM5Page />
      },
      {
      path: "/billeM3",
      element: <BilleM3Page />
      },
      {
      path: "/billeM2",
      element: <BilleM2Page />
      },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
   <HelmetProvider>
     <RouterProvider router={router} />
   </HelmetProvider>
)
