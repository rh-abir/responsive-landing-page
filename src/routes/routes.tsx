import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddService from "@/pages/admin/AddService";
import Dashbord from "@/pages/admin/Dashbord";
import ServiceList from "@/pages/admin/ServiceList";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashbord />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },

  {
    path: "*",
    element: <h2>Some Thing is worng</h2>,
  },
]);

export default router;
