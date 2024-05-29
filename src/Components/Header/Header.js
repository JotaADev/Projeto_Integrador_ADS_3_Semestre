import React from 'react';
import './Header.css';
import logo from './logo.png';
import { useParams } from 'react-router-dom';

// =========== Icones importados ===========
import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";


// =========== Componentes importados ===========
import SearchBar from '../SearchBar/SearchBar';
import NavBarMobile from '../NavBarMobile/NavBarMobile';
import AuthModal from '../AuthModal/AuthModal';

const Header = () => {

    const { categoria } = useParams();

    const [toggle, setToggle] = React.useState(false);
    const [loginToggle, setLoginToggle] = React.useState(false);

    function toggleHamburguer (e) {
        e.preventDefault();
        setToggle(!toggle);
    }

    function toggleAuth (e) {
        e.preventDefault();
        setLoginToggle(!loginToggle);
    }

    React.useEffect(() => {
        const reloadPage = async () => {
            setToggle(false)
        }

        reloadPage();
    },[categoria]);

    return (
        <>
            <header>
                <div className='mobile'>
                    <button id='bars' onClick={toggleHamburguer}>
                        {toggle ? <IoCloseSharp size={'30px'}/> : <FaBars size={'30px'}/>}
                    </button>
                    <a href='/'><img id='logo' src={logo}/></a>
                    <button><BsBag size={'30px'}/></button>
                </div>
                <SearchBar/>
                <div className='teleshoppinginfo'>
                    <FiPhone size={'30px'}/>
                    <div>
                        <p>TELEVENDAS</p>
                        <p>(11) 5061-3036</p>
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={toggleAuth}>
                        <FiUser style={{cursor: 'pointer'}} size={'30px'}/>
                    </button>
                    <BsBag style={{cursor: 'pointer'}} size={'30px'}/>
                </div>
            </header>
            <NavBarMobile classToggle={toggle ? 'show' : 'close'}/>
            <AuthModal authToggle={loginToggle ? 'show' : 'close'}/>
        </>
    );
}

export default Header;