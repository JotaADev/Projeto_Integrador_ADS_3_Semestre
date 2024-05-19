import React from 'react';
import './NavBarButton.css';

const NavBarButton = ({icon, text}) => {
    return (
        <button className='navbarbtn'>
            {icon}
            <span>{text}</span>
        </button>
    );
}

export default NavBarButton;