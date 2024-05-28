import React from "react";
import './Home.css';

// =========== Icones importados ===========
import { IoLogoWhatsapp } from "react-icons/io";

// =========== Componentes importados ===========
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import SwiperCampaign from '../../Components/SwiperCampaign/SwiperCampaign';
import ProductCard from '../../Components/ProductCard/ProductCard';

// =========== Funções importadas ===========
import getBanners from '../../firebase/getBanners';
import getBannersMobile from '../../firebase/getBannersMobile';
import getProducts from '../../firebase/getProducts';

const Home = () => {

    const [imgs, setImgs] = React.useState([]);
    const [products, setProducts] = React.useState([]);

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
                        <a href="/">Até R$ <span>99</span></a>
                        <a href="/">Até R$ <span>150</span></a>
                        <a href="/">Até R$ <span>200</span></a>
                        <a href="/">Acima de R$ <span>200</span></a>
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
                            />
                        ))
                    }
                </div>
            </main>
        </>
    );
}

export default Home;