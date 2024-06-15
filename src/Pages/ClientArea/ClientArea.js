import React from 'react';
import './ClientArea.css';
import { useNavigate } from 'react-router-dom';

// =========== Componentes importados ===========
import Header from '../../Components/Header/Header';

// =========== Icones importados ===========
import { IoLogoWhatsapp } from "react-icons/io";

const ClientArea = () => {

    const navigate = useNavigate();

    React.useEffect(()=> {
        if (!localStorage.getItem("TokenUser")) {
            navigate('/')
        }
    },[navigate])

    const logout = () => {
        localStorage.removeItem("Email");
        localStorage.removeItem("TokenUser");
        window.location.reload();
    }

    return (
        <>
            <Header/>
            <button onClick={() => {window.open('https://wa.me/5511977087265', '_blank')}} className='whatsappicon'>
                <IoLogoWhatsapp size={'60px'}/>
            </button>
            <main>
                <p className='noFinalized'>Area do cliente em desenvolvimento</p>
                <div className='logout'>
                    <button onClick={() => {logout()}}>Logout</button>
                </div>
            </main>
        </>
    );
}

export default ClientArea;