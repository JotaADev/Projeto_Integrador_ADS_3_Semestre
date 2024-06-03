import React from 'react';
import './Footer.css';

// =========== Icones importados ===========
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// =========== Imagens formas de pagamento importadas ===========
import american from './cartao-american.webp';
import elo from './cartao-elo.webp';
import hiper from './cartao-hiper.webp';
import master from './cartao-master.webp';
import visa from './cartao-visa.webp';

const Footer = () => {
    return (
        <footer>
            <div className='socialmedia'>
                <div>
                    <button onClick={() => {window.open('https://m.facebook.com/viadefloresipiranga', '_blank')}}>
                        <FaFacebookF size={'30px'}/>
                    </button>
                    <button onClick={() => {window.open('https://instagram.com/via_de_flores_ipiranga', '_blank')}}>
                        <FaInstagram size={'30px'}/>
                    </button>
                </div>
                <p onClick={() => {window.open('https://maps.app.goo.gl/2xRTPy94w8d8Y3z17', '_blank')}}>Rua Belas Artes, 36 - Ipiranga, São Paulo - SP, 04276-010</p>
                <div>
                    <img src={american}/>
                    <img src={elo}/>
                    <img src={hiper}/>
                    <img src={master}/>
                    <img src={visa}/>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright © 2024 TODOS OS DIREITOS RESERVADOS. www.viadeflores.vercel.app</p>
            </div>
        </footer>
    );
}

export default Footer;