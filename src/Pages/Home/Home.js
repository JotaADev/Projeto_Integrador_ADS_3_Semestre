import React from 'react';
import './Home.css';

//Components:
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import { IoLogoWhatsapp } from "react-icons/io";


//Functions:
import { getBanners } from '../../Firebase/config';
import SwiperCampaign from '../../Components/SwiperCampaign/SwiperCampaign';

const Home = () => {

    const [imgs, setImgs] = React.useState([]);

    React.useEffect(() => {
        getBanners().then((urls) => {
            setImgs(urls);
        }).catch((error) => {
            console.error("Failed to fetch banners:", error);
        });
    }, []);

    return (
        <>
            <Header/>
            <NavBar/>
            <button onClick={() => {window.open('https://wa.me/551150613036', '_blank')}} className='whatsappicon'>
                <IoLogoWhatsapp size={'60px'}/>
            </button>
            <main>
                <SwiperCampaign campaign={imgs}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et lacus magna. Nullam tempor, tortor non bibendum facilisis, nunc tellus blandit augue, ac imperdiet elit ex et tellus. In hac habitasse platea dictumst. Praesent ante arcu, vehicula ut bibendum eu, sagittis eget libero. Sed laoreet pulvinar pharetra. Duis eget pellentesque risus. Sed varius erat ac mi imperdiet fringilla. Nunc in sapien lacinia, tempor tortor non, dapibus nunc.
                    Sed rhoncus lectus id mauris ornare faucibus. Sed gravida tellus id ligula maximus, et aliquet metus finibus. Aenean neque nunc, gravida et egestas malesuada, condimentum vitae nunc. Nulla vel consectetur velit. Suspendisse lacus leo, semper non tortor a, accumsan molestie eros. Donec lacinia aliquet turpis ut fringilla. Nam dictum vel ex et molestie. Vivamus dapibus orci vehicula sapien mattis, nec convallis diam viverra. Cras in erat quis magna vehicula fringilla a at tellus.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in felis ultricies, suscipit dui eget, convallis nibh. Sed at erat eu erat viverra eleifend. Nam in ligula mauris. Mauris nibh ipsum, finibus condimentum mauris non, vehicula scelerisque urna. Nulla ac venenatis ex, sed faucibus ante. In hac habitasse platea dictumst. Sed venenatis vehicula lorem, nec imperdiet odio pulvinar ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae erat nec diam porttitor molestie non vitae nibh. Donec libero mi, viverra vulputate risus vitae, hendrerit cursus sem. Cras elit massa, ultrices sed tortor non, egestas porttitor augue. Mauris at augue accumsan, consequat felis quis, convallis sem. Suspendisse luctus mauris pharetra purus scelerisque, in cursus ligula hendrerit.
                    Aliquam varius scelerisque porttitor. In hac habitasse platea dictumst. Aliquam scelerisque laoreet dui elementum ornare. Pellentesque varius, arcu sed elementum vestibulum, elit mi tincidunt urna, ut varius justo sapien at est. Vestibulum porttitor augue non mauris porttitor volutpat. Nunc at congue lectus. Ut elit nisi, gravida in tincidunt ac, cursus non nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Nunc rutrum ut nisl hendrerit eleifend. Phasellus blandit euismod orci. In venenatis elit dui, sit amet tincidunt velit lacinia et. Integer id arcu pellentesque nibh lacinia tempus at ac sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer dictum porttitor lectus. Aliquam eleifend feugiat venenatis. Curabitur bibendum non neque ut tempus. Integer vel accumsan est, sed condimentum ligula. In non enim libero. Quisque egestas mauris lorem, nec tempor odio dignissim sed.
                    Sed ullamcorper sodales dui, nec sollicitudin augue molestie ut. Nullam fermentum maximus neque et malesuada. Proin tempor rhoncus mollis. Proin at dui leo. Nam euismod blandit bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vel molestie erat. Donec tincidunt, mi sed rhoncus feugiat, ipsum turpis blandit arcu, at dictum ex nisi ut justo. Praesent cursus quis metus ac consectetur. Phasellus purus dui, sodales eget mattis et, varius sed ex. Praesent dictum, tortor sit amet accumsan congue, dolor urna congue turpis, eget viverra turpis dolor a erat. Donec rhoncus quam magna, et suscipit libero malesuada et. Nullam a vehicula orci.
                    Ut sem nibh, venenatis finibus nisl quis, ultricies porta mauris. Sed tempus sit amet felis sed elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras tincidunt est ac velit vehicula, aliquam facilisis ipsum laoreet. Vivamus cursus, metus non cursus rutrum, nunc purus laoreet urna, sit amet congue tortor orci vel lorem. Morbi nulla justo, sagittis sed cursus eu, bibendum ac nisi. In in ullamcorper elit. Pellentesque quis pretium leo. Morbi cursus varius sapien non convallis. Mauris elementum, ex quis blandit sollicitudin, mauris diam luctus odio, a varius nisl ipsum eget turpis. Quisque tincidunt magna ut molestie pellentesque. Sed vestibulum metus ligula, tincidunt imperdiet turpis molestie et. Nunc vitae nunc at leo placerat auctor.
                    Aenean malesuada neque turpis, et posuere nulla bibendum nec. Phasellus vitae dignissim nisi. Nunc scelerisque dui quam, non pharetra dui molestie non. Pellentesque vel nulla magna. Praesent tempor, leo vitae cursus vestibulum, ipsum tortor sodales erat, ut iaculis ante tortor a justo. Nunc lobortis erat tortor, non efficitur metus consectetur sit amet. Integer dictum mauris sem, et facilisis diam sodales varius. Suspendisse eu consequat risus, ac euismod libero. Donec pretium elit lacus, in semper sem sodales quis. Sed tincidunt nulla lorem. Donec eu eros quis mi dictum eleifend. Quisque ac metus viverra, consectetur odio non, viverra enim. Duis tincidunt, risus sed dapibus hendrerit, metus quam rhoncus sem, ac volutpat nisl lacus id felis. Nulla dolor tellus, venenatis vitae magna ut, malesuada rutrum neque. Vivamus id mi a tellus sodales accumsan.
                    Vivamus sed velit laoreet, vulputate velit id, sagittis nulla. Etiam porttitor dolor in lobortis ullamcorper. Ut suscipit nec elit nec porttitor. Nullam rutrum ac turpis pharetra scelerisque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed massa porttitor, vestibulum orci non, molestie leo. Nam eu tortor arcu. Duis velit lacus, pretium at tempus nec, porttitor porttitor lacus. Nullam vitae lacus sed magna porttitor rutrum. Proin placerat bibendum ipsum id pulvinar. Vestibulum tincidunt eros vitae lorem malesuada pellentesque. Donec mollis, lorem a euismod cursus, dolor ipsum suscipit justo, sit amet scelerisque tortor diam nec leo. Morbi et lorem nulla. Praesent eu varius dolor.
                    Phasellus sollicitudin rhoncus orci, eget commodo risus eleifend a. Sed in nisl rhoncus, aliquam nisl eget, maximus turpis. Vestibulum quis eros libero. Duis eu viverra tellus. Proin mi dolor, consectetur nec laoreet et, blandit nec tellus. Sed convallis tincidunt dolor a tempor. Aliquam a sem ligula.
                </p>
            </main>
        </>
        
    );
}

export default Home;