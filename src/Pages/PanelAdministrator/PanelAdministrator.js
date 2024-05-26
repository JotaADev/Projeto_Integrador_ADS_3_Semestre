import React from "react";
import './PanelAdministrator.css';
import { useNavigate } from 'react-router-dom';

// =========== Componentes importados ===========
import AddProductForm from '../../components/AddProductForm/AddProductForm';

const PanelAdministrator = () => {

    const navigate = useNavigate();

    React.useEffect(()=> {
        if (!localStorage.getItem("TokenAdmin")) {
            navigate('/admin')
        }
    },[navigate])

    const Logout = () => {
        localStorage.removeItem("TokenAdmin");
        window.location.reload()
    }

    return (
        <>
            <section id="area1">
                <AddProductForm/>
                <button onClick={Logout}>Logout</button>
            </section>
            
        </>
    );
}

export default PanelAdministrator;