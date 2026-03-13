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
import ShopDetails from "./pages/productdetails/ShopDetails";
import AboutLayout from "./layout/AboutLayout";
import ProtectedRouter from "./ProtectedRouter";
import Home2Layout from "./layout/Home2Layout";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/profile/Profile";
import PorfileLayout from "./layout/PorfileLayout";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileSettings from "./pages/profile/ProfileSettings";

const color1 = "#503217";
const font = "poppins";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
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
        element: <Contact MainColor={color1} MainFont={font} />,
      },
      {
        path: "/product/:id",
        element: <ShopDetails />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRouter>
            <Cart MainColor={color1} MainFont={font} />
          </ProtectedRouter>
        ),
      },
     
      {
        path: "/checkout",
        element: (
          <ProtectedRouter>
            <Checkout MainColor={color1} MainFont={font} />
          </ProtectedRouter>
        ),
      },
    ],
  },
  {
    path: "/home",
    element: <Home2Layout MainColor={color1} MainFont={font} />,
    children: [
      {
        index: true,
        element: <Home2 />,
      },
    ],
  },
  {
  path: "/profile",
  element: (
    <ProtectedRouter>
      <PorfileLayout MainColor={color1} MainFont={font} />
    </ProtectedRouter>
  ),
  children: [
      {
        index: true,
        element: <Profile MainColor={color1} MainFont={font} />, 
      },
      {
        path: "profileinfo",
        element: <ProfileInfo />,
      },
      {
        path: "settings",
        element: <ProfileSettings />,
      },
    ],
},
  {
    path: "/about",
    element: <AboutLayout />,
    children: [
      {
        index: true,
        element: <About />,
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
