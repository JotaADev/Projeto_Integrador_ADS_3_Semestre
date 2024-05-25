import React from 'react';
import './PanelAdministrator.css';
import { useNavigate } from 'react-router-dom';

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
            <button onClick={Logout}>Logout</button>
        </>
    );
}

export default PanelAdministrator;