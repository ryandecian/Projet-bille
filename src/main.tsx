import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import "./index.css"
import App from "./App.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


/* Importation des pages */
import PageBilleM7 from "./pages/PageBilleM7.tsx"
import PageBilleM5 from "./pages/PageBilleM5.tsx"
import PageBilleM3 from "./pages/PageBilleM3.tsx"
import PageBilleM2 from "./pages/PageBilleM2.tsx"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
      path: "/",
      element: <PageBilleM7 />
      },
      {
      path: "/billeM5",
      element: <PageBilleM5 />
      },
      {
      path: "/billeM3",
      element: <PageBilleM3 />
      },
      {
      path: "/billeM2",
      element: <PageBilleM2 />
      },
    ]
  },
]);

createRoot(document.getElementById("root")!).render(
   <HelmetProvider>
     <RouterProvider router={router} />
   </HelmetProvider>
)
