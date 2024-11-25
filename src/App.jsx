import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@/styles/default.scss'

// Pages
import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import TagCloud from "@/pages/tagcloud";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/tagcloud",
    element: <TagCloud />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
