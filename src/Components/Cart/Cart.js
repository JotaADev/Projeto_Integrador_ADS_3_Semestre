import React from 'react';
import './Cart.css';
import { AppContext } from '../../context';
import { Link } from 'react-router-dom';

// =========== Icones importados ===========
import { FaTrashAlt } from "react-icons/fa";

const Cart = React.forwardRef(({showCart}, ref) => {

    const { cartItems, removeFromCart } = React.useContext(AppContext);

    const totalValue = cartItems.reduce((total, item) => {
        return total + (parseFloat(item.price.replace(',', '.')) * item.qtd);
    }, 0);

    return (
        <div id='cart' className={showCart} ref={ref}>
            {
                cartItems.length > 0 ? (
                    <>
                        {
                            cartItems.map((item, index) => (
                                    <div key={index}>
                                        <div>
                                            <p>{item.productName}</p>
                                            <div>
                                                <p>Preço: R$ {item.price}</p>
                                                <p>Quantia: x{item.qtd}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>R$ {(item.qtd * (parseFloat(item.price.replace(',', '.')))).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                                        </div>
                                        <div>
                                            <FaTrashAlt cursor='pointer' size={'20px'} fill='#C08497' onClick={() => removeFromCart(item.productName)}/>
                                        </div>
                                    </div>
                            ))
                        }
                        <div className='checkout'>
                            <p>Valor final : R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            <Link to="/checkout"><button>Finalizar compra</button></Link>
                        </div>
                    </>
                ) : (
                    <div className='cart-empty'>O carrinho está vazio</div>
                )
            }
        </div>
    );
});

export default Cart;