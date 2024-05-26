import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// =========== Páginas importadas ===========
import Home from "./Pages/Home/Home";
import PanelAdministratorLogin from "./Pages/PanelAdministratorLogin/PanelAdministratorLogin";
import PanelAdministrator from "./Pages/PanelAdministrator/PanelAdministrator";

//// =========== Componente de rotas ===========
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: 'admin',
        element: <PanelAdministratorLogin/>,
    },
    {
        path: 'panel-admin',
        element: <PanelAdministrator/>,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)