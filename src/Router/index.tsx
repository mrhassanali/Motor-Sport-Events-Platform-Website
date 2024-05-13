import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { LOGIN_IN, SIGN_UP, ROOT } from "../constants/constants";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Home />,
  },
  {
    path: LOGIN_IN,
    element: <Login />,
  },
  {
    path: SIGN_UP,
    element: <SignUp />,
  },
]);

export default router;
