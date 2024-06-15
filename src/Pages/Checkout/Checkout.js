import React from 'react';
import './Checkout.css';
import { AppContext } from '../../context';
import { Link, useNavigate } from 'react-router-dom';
import { getUserName } from '../../firebase/loginUser';

// =========== Icones importados ===========
import { FaTrashAlt } from "react-icons/fa";

const Checkout = () => {

    const { cartItems, removeFromCart } = React.useContext(AppContext);
    const [user, setUser] = React.useState([]);
    const emailUser = localStorage.getItem("Email");

    const totalValue = cartItems.reduce((total, item) => {
        return total + (parseFloat(item.price.replace(',', '.')) * item.qtd);
    }, 0);

    const navigate = useNavigate();

    React.useEffect(()=> {
        if (!localStorage.getItem("TokenUser")) {
            alert("Faça login para finalizar a compra!")
            navigate('/')
        }

        const fetchUserInfo = async () => {
            const queryWait = await getUserName(emailUser);
            const UserInfo = queryWait.docs.map(doc => ({
                id: doc.id,
                endereco: doc.data().endereço,
                estado: doc.data().estado,
                cidade: doc.data().cidade,
                cep: doc.data().cep,
            }));
            UserInfo && Array.isArray(UserInfo) && UserInfo.length > 0 ? setUser(UserInfo) : setUser(false);
        }

        fetchUserInfo();
    },[navigate])

    return (
        <>
            <main id='checkout'>
                <h1>Checkout</h1>
                <p>Dados de entrega</p>
                {user.map((user) => (
                    <div className='checkout-adress' key={user.id}>
                        <p><span>Endereço: </span>{user.endereco}</p>
                        <p><span>Estado: </span>{user.estado}</p>
                        <p><span>Cidade: </span>{user.cidade}</p>
                        <p><span>CEP: </span>{user.cep}</p>
                    </div>
                ))}
                <p>Produtos</p>
                {cartItems.length > 0 ? (
                    <>
                        {
                            cartItems.map((item, index) => (
                                <div className='checkout-products' key={index}>
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
                    </>
                ) : (
                    <>
                        <div></div>
                    </>
                )}
                
                <div className='checkout-resume'>
                    <div>
                        <p>Frete</p>
                        <p>R$ 08,00</p>
                    </div>
                    <div>
                        <p>Valor final</p>
                        <p>R$ {(8 + totalValue).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                </div>
                <p className='checkout-method'>Forma de pagamento</p>
                <p>Projeto para fins estudantis, portanto, a API de pagamento não foi integrada para evitar inserção de dados sensiveis.</p>
                <div className='button-checkout'>
                    <button>Finalizar compra</button>
                </div>
                <Link to='/'>Clique aqui para continuar comprando</Link>
            </main>
        </>
    );
}

export default Checkout;