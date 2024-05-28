import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductsByCategory.css';

// =========== Componentes importados ===========
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import ProductCard from '../../Components/ProductCard/ProductCard';

// =========== Funções importadas ===========
import getProducts from '../../firebase/getProducts';

const ProductsByCategory = () => {

    const { categoria } = useParams();

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getProducts(categoria);
            const productsArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                img: doc.data().imagem_produto,
                product: doc.data().nome_produto,
                old_price: doc.data().preco_anterior,
                price: doc.data().preco_atual
            }));
            setProducts(productsArray);
        }

        fetchProducts();
    },[categoria]);


    return (
        <>
            <Header/>
            <NavBar/>
            <h1 className='title'>{categoria + 's'}</h1>
            <div className='flowersgroup'>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            img={product.img}
                            productName={product.product}
                            oldPrice={product.old_price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            price={product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            payment={(product.price / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        />
                    ))
                }
            </div> 
        </>
    );
}

export default ProductsByCategory;