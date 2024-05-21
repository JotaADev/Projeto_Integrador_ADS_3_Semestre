import React from 'react';
import './Home.css';

//Components:
import { IoLogoWhatsapp } from "react-icons/io";
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import SwiperCampaign from '../../Components/SwiperCampaign/SwiperCampaign';
import ProductCard from '../../Components/ProductCard/ProductCard';

//Functions:
import { getBanners, getBannersMobile } from '../../Firebase/config';

const Home = () => {

    const [imgs, setImgs] = React.useState([]);

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
    };

    React.useEffect(() => {
        updateBanners();

        const handleResize = () => {
            updateBanners();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
                <div className='flowersgroup'>
                    <ProductCard/>
                </div>
            </main>
        </>
        
    );
}

export default Home;