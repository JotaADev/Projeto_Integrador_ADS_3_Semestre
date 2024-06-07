import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductsByCategory.css';

// =========== Icones importados ===========
import { IoLogoWhatsapp } from "react-icons/io";

// =========== Componentes importados ===========
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';
import ProductModal from "../../Components/ProductModal/ProductModal";

// =========== Funções importadas ===========
import getProducts from '../../firebase/getProducts';

const ProductsByCategory = () => {

    const { categoria } = useParams();

    const [products, setProducts] = React.useState([]);
    const [product, setProduct] = React.useState([]);
    const [toggle, setToggle] = React.useState(false);

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

    React.useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getProducts("categoria", "==", categoria);
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
            <button onClick={() => {window.open('https://wa.me/5511977087265', '_blank')}} className='whatsappicon'>
                <IoLogoWhatsapp size={'60px'}/>
            </button>
            <main>
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
                                propFunction={() => {fetchProductInfo(product.product)}}
                            />
                        ))
                    }
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
                <Footer/>
            </main>
        </>
    );
}

export default ProductsByCategory;