import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductsByPrice.css';

// =========== Icones importados ===========
import { IoLogoWhatsapp } from "react-icons/io";

// =========== Componentes importados ===========
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from '../../Components/Footer/Footer';

// =========== Funções importadas ===========
import getProducts from '../../firebase/getProducts';

const ProductsByPrice = () => {

    const { preco } = useParams();
    const precoNumero = Number(preco);

    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getProducts("preco_atual", precoNumero == 201 ? '>' : '<' , precoNumero);
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
    },[precoNumero]);

    return (
        <>
            <Header/>
            <NavBar/>
            <button onClick={() => {window.open('https://wa.me/5511977087265', '_blank')}} className='whatsappicon'>
                <IoLogoWhatsapp size={'60px'}/>
            </button>
            <main>
                <h1 className='title'>{`Produtos ${precoNumero == 201 ? 'acima de' : 'até'} R$ ${precoNumero == 201 ? '200' : precoNumero}`}</h1>
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
                <Footer/>
            </main>
        </>
    );
}

export default ProductsByPrice;