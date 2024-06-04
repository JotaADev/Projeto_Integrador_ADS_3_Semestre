import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

// =========== Icones importados ===========
import { IoLogoWhatsapp } from "react-icons/io";

// =========== Componentes importados ===========
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import SwiperCampaign from '../../Components/SwiperCampaign/SwiperCampaign';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Footer from "../../Components/Footer/Footer";
import ProductModal from "../../Components/ProductModal/ProductModal";

// =========== Funções importadas ===========
import getBanners from '../../firebase/getBanners';
import getBannersMobile from '../../firebase/getBannersMobile';
import getProducts from '../../firebase/getProducts';

const Home = () => {

    const [imgs, setImgs] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [product, setProduct] = React.useState([]);
    const [toggle, setToggle] = React.useState(false);

    const updateBanners = () => {
        if (window.innerWidth >= 860) {
            getBanners().then((urls) => {
                setImgs(urls);
            }).catch((error) => {
                console.error("Failed to fetch banners:", error);
            });
        } else {
            getBannersMobile().then((urls) => {
                setImgs(urls);
            }).catch((error) => {
                console.error("Failed to fetch banners:", error);
            });
        }
    }

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
            const querySnapshot = await getProducts();
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
        updateBanners();

        const handleResize = () => {
            updateBanners();
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <Header/>
            <NavBar/>
            <button onClick={() => {window.open('https://wa.me/5511977087265', '_blank')}} className='whatsappicon'>
                <IoLogoWhatsapp size={'60px'}/>
            </button>
            <main>
                <SwiperCampaign campaign={imgs}/>
                <div className="infoarea">
                    <div className="infodelivery">
                        <p>Entrega em até 3 horas</p>
                    </div>
                    <div className="infoprice">
                        <p>Escolha por valores</p>
                        <Link to='/produtos-por-preco/99'>Até R$ <span>99</span></Link>
                        <Link to='/produtos-por-preco/150'>Até R$ <span>150</span></Link>
                        <Link to='/produtos-por-preco/200'>Até R$ <span>200</span></Link>
                        <Link to='/produtos-por-preco/201'>Acima de R$ <span>200</span></Link>
                    </div>
                </div>
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

export default Home;