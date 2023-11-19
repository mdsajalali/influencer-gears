import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Root from "./Root/Root";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <ProductDetail />
          </PrivateRoutes>
        ),
        loader: () => fetch("/productsData.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
