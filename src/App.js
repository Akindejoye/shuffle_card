import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { auth } from "./firebase-config";
import Home from "./pages/home";
import Login from "./pages/login";
import Layout from "./layout";
import Error from "./pages/error";

// Protected Route functionality
const ProtectedRoute = ({ element }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // User is not logged in, redirect to login
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return user ? element : null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <ProtectedRoute element={<Home />} />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
