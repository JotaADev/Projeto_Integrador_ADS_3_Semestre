import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <a href='/'>Presentes</a>
            <a href='/'>Cestas</a>
            <a href='/'>Buquês</a>
            <a href='/'>Arranjos</a>
            <a href='/'>Tipos de Flores</a>
            <a href='/'>Datas Especiais</a>
            <a className='promotions' href='/'>Ofertas 24H</a>
        </nav>
    );
}

export default NavBar;