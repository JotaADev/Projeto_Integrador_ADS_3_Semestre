import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages:
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import PanelAdministrator from './Pages/PanelAdministrator/PanelAdministrator';
import PanelAdministratorLogin from './Pages/PanelAdministrator/PanelAdministratorLogin';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "blog",
        element: <Blog/>,
    },
    {
        path: "admin",
        element: <PanelAdministratorLogin/>,
    },
    {
        path: "panel-admin",
        element: <PanelAdministrator/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);