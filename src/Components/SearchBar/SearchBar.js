import React from 'react';
import './SearchBar.css';

// =========== Icones importados ===========
import { CiSearch } from "react-icons/ci";

// =========== Componentes importados ===========
import ProductModal from '../ProductModal/ProductModal';

// =========== Funções importadas ===========
import getProducts from '../../firebase/getProducts';

const SearchBar = () => {

    const [inputValue, setInputValue] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const [product, setProduct] = React.useState([]);
    const [toggle, setToggle] = React.useState(false);

    React.useEffect(() => {
        const searchProducts = async () => {
            if(inputValue) {
            
                const queryWait = await getProducts('nome_produto');

                const productInfo = queryWait.docs.map(doc => ({
                    id: doc.id,
                    img: doc.data().imagem_produto,
                    product: doc.data().nome_produto,
                    old_price: doc.data().preco_anterior,
                    price: doc.data().preco_atual
                }));
        
                const filteredResults = productInfo.filter(product => 
                    product.product.includes(inputValue)
                );
        
                setProducts(filteredResults);
            } else {
                setProducts([]);
            }
        }

        searchProducts();
    }, [inputValue]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const fetchProductInfo = async (productName) => {
        const queryWait = await getProducts('nome_produto', '==', productName);
        const productInfo = queryWait.docs.map(doc => ({
            id: doc.id,
            img: doc.data().imagem_produto,
            product: doc.data().nome_produto,
            old_price: doc.data().preco_anterior,
            price: doc.data().preco_atual
        }));

        setProduct(productInfo);
        setToggle(!toggle);
    }

    return (
        <>
            <div className='containersearchbar'>
                <div className='searchbar'>
                    <input className='searchinput'
                        placeholder='Qual produto você está procurando?'
                        name='searchbar'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <CiSearch size={'20px'} fontWeight={'bold'}/>
                </div>
                <div className='results'>
                    {products.map((product) => (
                        <div key={product.id} onClick={() => {fetchProductInfo(product.product)}}>
                            <img src={product.img}/>
                            <p>{product.product}</p>
                        </div>
                    ))}
                </div>
            </div>
            {
                product.map((product) => (
                    <ProductModal
                        key={product.id}
                        img={product.img}
                        productName={product.product}
                        oldPrice={product.old_price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        price={product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        payment={(product.price / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        classStyle={toggle ? 'show' : 'close'}
                        manipToggle={() => setToggle(!toggle)}
                    />
                ))
            }
        </>
    );
}

export default SearchBar;