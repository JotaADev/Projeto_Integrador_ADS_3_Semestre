import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
    return (
        <div className='productcard'>
            <img src='./19924gg.png'/>
            <p>Buquê de 7 Girassóis Te Adoro</p>
            <div>
                <p className='oldprice'>De R$ 229,90</p>
                <p>R$ 160,93</p>
                <p className='payment'>3x de R$ 53,30</p>
            </div>
            <button>Comprar</button>
        </div>
    );
}

export default ProductCard;