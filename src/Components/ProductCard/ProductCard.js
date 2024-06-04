import React from 'react';
import './ProductCard.css';

const ProductCard = ({img, productName, oldPrice, price, payment, propFunction}) => {
    return (
        <div className='productcard' onClick={propFunction}>
            <img src={img}/>
            <p>{productName}</p>
            <div>
                <p className='oldprice'>De {oldPrice}</p>
                <p>R$ {price}</p>
                <p className='payment'>3x de R$ {payment}</p>
            </div>
            <button>Comprar</button>
        </div>
    );
}

export default ProductCard;