import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProvider } from "./context";

// =========== Páginas importadas ===========
import Home from "./Pages/Home/Home";
import PanelAdministratorLogin from "./Pages/PanelAdministratorLogin/PanelAdministratorLogin";
import PanelAdministrator from "./Pages/PanelAdministrator/PanelAdministrator";
import ProductsByCategory from "./Pages/ProductsByCategory/ProductsByCategory";
import ClientArea from "./Pages/ClientArea/ClientArea";
import ProductsByPrice from "./Pages/ProductsByPrice/ProductsByPrice";

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
    {
        path: 'produtos/:categoria',
        element: <ProductsByCategory/>,
    },
    {
        path: 'area-do-usuario',
        element: <ClientArea/>,
    },
    {
        path: 'produtos-por-preco/:preco',
        element: <ProductsByPrice/>,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LoginProvider>
            <RouterProvider router={router}/>
        </LoginProvider>
    </React.StrictMode>
)