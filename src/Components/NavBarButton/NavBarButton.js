import React from 'react';
import './NavBarButton.css';
import { Link } from 'react-router-dom';

const NavBarButton = ({icon, text, link}) => {
    return (
        <Link to={link} className='containernavbarbtn'>
            <button className='navbarbtn'>
                {icon}
                <span>{text}</span>
            </button>
        </Link>
    );
}

export default NavBarButton;