import React from "react";
import { createBrowserRouter } from "react-router-dom";

// =========== Páginas importadas ===========
import Home from "../pages/Home/Home";
import PanelAdministratorLogin from "../pages/PanelAdministratorLogin/PanelAdministratorLogin";
import PanelAdministrator from "../pages/PanelAdministrator/PanelAdministrator";


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

export default router;