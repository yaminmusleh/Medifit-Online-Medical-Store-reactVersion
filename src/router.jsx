import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Home2 from "./pages/home2/Home2";
import Login from "./pages/auth/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/shop/Shop";
import Register from "./pages/auth/register/Register";
import Cart from "./pages/cart/Cart";
import MainHomeLayout from "./layout/MainHomeLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home2 />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/",
    element: <MainHomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default router;
