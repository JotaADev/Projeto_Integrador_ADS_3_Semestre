import React from 'react';
import './Header.css';
import logo from './logo.png';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context';
import { getUserName } from '../../firebase/loginUser';

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
import Cart from '../Cart/Cart';

const Header = () => {

    const { categoria } = useParams();

    const [toggle, setToggle] = React.useState(false);
    const [toggleCart, setToggleCart] = React.useState(false);
    const [userName, setUserName] = React.useState(false);
    const { loginToggle, setLoginToggle } = React.useContext(AppContext);
    const tokenUser = localStorage.getItem("TokenUser") ? false : true;
    const emailUser = localStorage.getItem("Email");
    const cartRef = React.useRef(null);

    function toggleHamburguer (e) {
        e.preventDefault();
        setToggle(!toggle);
    }

    function toggleAuth (e) {
        e.preventDefault();
        setLoginToggle(!loginToggle);
    }

    function showCart (e) {
        e.preventDefault();
        setToggleCart(!toggleCart);
    }

    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setToggleCart(false);
        }
    };

    React.useEffect(() => {
        const reloadPage = async () => {
            setToggle(false)
        }

        reloadPage();

        const fetchUserName = async () => {
            const queryWait = await getUserName(emailUser);
            const UserInfo = queryWait.docs.map(doc => ({
                id: doc.id,
                nome: doc.data().nome_usuario,
            }));
            UserInfo && Array.isArray(UserInfo) && UserInfo.length > 0 ? setUserName(UserInfo) : setUserName(false);
        }

        fetchUserName();

        if (toggleCart) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    },[categoria, toggleCart]);

    return (
        <>
            <header>
                <div className='mobile'>
                    <button id='bars' onClick={toggleHamburguer}>
                        {toggle ? <IoCloseSharp size={'30px'}/> : <FaBars size={'30px'}/>}
                    </button>
                    <a href='/'><img id='logo' src={logo}/></a>
                    <button onClick={showCart}>
                        {toggleCart ? <IoCloseSharp size={'30px'}/> : <BsBag size={'30px'}/>}
                    </button>
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
                    {userName ? userName.map((user) => {
                            const firstName = user.nome.split(' ')[0];
                            return <p key={user.id}>Bem-vindo {firstName}!</p>;
                        }) : <FiUser style={{cursor: 'pointer'}} size={'30px'}/>
                    }
                    </button>
                    <BsBag style={{cursor: 'pointer'}} size={'30px'} onClick={showCart}/>
                </div>
            </header>
            <NavBarMobile classToggle={toggle ? 'show' : 'close'}/>
            <AuthModal authToggle={loginToggle && tokenUser ? 'show' : 'close'}/>
            {toggleCart && <Cart showCart={toggleCart ? 'show-cart' : 'close'} ref={cartRef}/>}
        </>
    );
}

export default Header;