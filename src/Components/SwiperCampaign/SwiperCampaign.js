import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperCampaign.css';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperCampaign = ({campaign}) => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            {campaign.map((img, index) => (
                <SwiperSlide key={index}>
                    <img className='stylecampaing' src={img}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperCampaign;