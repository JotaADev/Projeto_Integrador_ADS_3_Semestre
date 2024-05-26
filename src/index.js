import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// =========== Páginas importadas ===========
import Home from "./pages/Home/Home";
import PanelAdministratorLogin from "./pages/PanelAdministratorLogin/PanelAdministratorLogin";
import PanelAdministrator from "./pages/PanelAdministrator/PanelAdministrator";

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