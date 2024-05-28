import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to='/produtos/presente'>Presentes</Link>
            <Link to='/produtos/cesta'>Cestas</Link>
            <Link to='/produtos/buque'>Buquês</Link>
            <Link to='/produtos/arranjo'>Arranjos</Link>
            <Link to='/'>Tipos de Flores</Link>
            <Link to='/'>Datas Especiais</Link>
            <Link to='/' className='promotions'>Ofertas 24H</Link>
        </nav>
    );
}

export default NavBar;