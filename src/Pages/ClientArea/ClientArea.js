import React from 'react';
import './ClientArea.css';
import { useNavigate } from 'react-router-dom';

const ClientArea = () => {

    const navigate = useNavigate();

    React.useEffect(()=> {
        if (!localStorage.getItem("TokenUser")) {
            navigate('/')
        }
    },[navigate])

    return (
        <div>Área do cliente em desenvolvimento...</div>
    );
}

export default ClientArea;