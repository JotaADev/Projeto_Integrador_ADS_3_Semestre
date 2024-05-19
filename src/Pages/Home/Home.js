import React from 'react';
import './Home.css';

//Components:
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <button onClick={() => {window.open('https://wa.me/551150613036', '_blank')}} className='whatsappicon'>
                <IoLogoWhatsapp size={'60px'}/>
            </button>
            <main>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non viverra orci. In eget quam a erat bibendum pharetra at a mauris. Ut quis orci id nisi semper bibendum. Duis pellentesque tincidunt laoreet. Vivamus ornare sit amet arcu at fringilla. Etiam posuere vel sapien nec vulputate. Integer magna tellus, fermentum sed pellentesque vel, posuere eget lacus. Nullam euismod pellentesque orci eget consectetur. Nullam sit amet lectus pellentesque, ultricies purus nec, mattis elit. Aliquam vel tortor sit amet sem semper gravida eu ut justo. Aenean ac justo tincidunt, eleifend ligula sit amet, malesuada ex. Vestibulum ullamcorper sollicitudin risus, venenatis commodo velit maximus et. Nam in urna in elit venenatis suscipit eu ac ex. Maecenas non elit fringilla, luctus felis nec, ultrices justo. Nunc viverra nibh in turpis mollis, id tempus ante faucibus. Sed fermentum mi lectus, nec maximus quam euismod eu.
                    Curabitur non nulla mi. Cras quam massa, sodales quis dui id, imperdiet elementum lorem. Pellentesque fermentum lectus quis cursus rutrum. Vivamus aliquet rhoncus nibh. Fusce mattis finibus viverra. Ut cursus consequat urna eu volutpat. Pellentesque posuere est non felis ultricies rhoncus eget id ante.
                    Donec nec viverra ante. Morbi ac scelerisque nisi. Nullam gravida, ipsum at bibendum fermentum, felis justo placerat nibh, ut lobortis urna odio nec ipsum. Donec quis urna sit amet dui finibus convallis. Integer vitae hendrerit orci. Praesent rutrum nunc nisl, non pulvinar enim blandit nec. Aliquam porttitor, sapien posuere interdum elementum, quam magna auctor enim, et scelerisque quam sapien eu augue. Suspendisse laoreet quis augue vitae laoreet. Etiam at lacus sit amet massa imperdiet feugiat. Duis eget pellentesque massa, at luctus magna.
                    Nam malesuada diam eget molestie feugiat. Vestibulum nec consequat lacus, nec finibus lectus. Ut tincidunt, diam a hendrerit varius, orci magna ultrices nulla, vel accumsan erat nibh at ligula. Sed tristique, risus eu condimentum venenatis, felis lectus tempor eros, eu auctor tellus erat eu neque. Nullam sollicitudin fringilla purus ut sollicitudin. Cras vitae vehicula urna. Nullam sed mauris euismod, imperdiet tortor vitae, commodo augue. Quisque convallis congue turpis. Suspendisse tempus libero dolor, ac pretium tortor fermentum nec. Sed cursus lacus a hendrerit aliquam. Mauris in erat arcu. Curabitur elementum tellus sed tristique iaculis. Nullam sed vehicula nisl, nec porta velit. Cras convallis id orci id egestas. Maecenas cursus turpis libero, sed fermentum purus bibendum ultricies.
                    Nam non sollicitudin metus. Proin in consequat dui. Morbi bibendum tincidunt faucibus. Aenean justo mauris, porta ac eros et, blandit sagittis ligula. Curabitur quis dui elit. Duis blandit dictum purus, accumsan vehicula quam ullamcorper quis. Quisque eu urna convallis sapien tempor pharetra.
                    Mauris lobortis malesuada magna. Phasellus ut tellus et massa efficitur viverra. Donec fermentum imperdiet felis at posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt dictum odio eu ornare. Quisque a consequat nisi. Ut id congue urna. Donec tempus ac lectus vitae porta. Nam aliquet gravida turpis. Nullam ac est faucibus, maximus neque a, ornare tortor. Cras id sem dignissim, rhoncus arcu nec, finibus nunc. Ut convallis blandit sapien ut hendrerit. Nam eros elit, porttitor in eros eget, pretium aliquam justo. Donec eget pharetra turpis.
                    Quisque vitae velit felis. Cras ac odio molestie, eleifend diam a, dapibus metus. Fusce quis mi sit amet tellus auctor scelerisque in sed justo. Nulla ut mi quam. Mauris lacinia quam nec tellus ultricies, at tempus lectus interdum. Mauris sit amet nisi risus. Aenean fringilla, arcu quis elementum posuere, nibh purus dapibus erat, et mollis orci turpis a ante.
                    Fusce pharetra ipsum sit amet faucibus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan dui a molestie fringilla. Etiam vulputate eleifend tempor. Morbi finibus eget velit sed iaculis. Nulla nec lorem ut massa pulvinar aliquet. Praesent bibendum efficitur leo at cursus. In fermentum ultrices tortor, ac egestas tortor facilisis sed. Morbi accumsan turpis quis convallis luctus. Vivamus feugiat malesuada felis. Integer varius ultrices nisl sit amet ullamcorper. Suspendisse dignissim ante ante, vitae eleifend enim lacinia nec.
                    Sed malesuada vestibulum finibus. Suspendisse ac massa erat. Sed interdum accumsan quam. Nulla nisi turpis, sagittis non fermentum eu, suscipit luctus tellus. In hac habitasse platea dictumst. Morbi nunc est, auctor id mollis ac, gravida vel tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dui lectus, elementum quis eleifend vel, laoreet sed massa.
                    Proin sit amet venenatis urna, vitae volutpat lacus. Nulla luctus convallis porttitor. Aenean vitae tempus nisl, nec ornare nisl. Praesent et erat tincidunt, cursus erat vitae, aliquam ante. Cras tellus augue, volutpat a accumsan eu, fringilla id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed sollicitudin justo, sed imperdiet libero. Nam quis velit enim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non viverra orci. In eget quam a erat bibendum pharetra at a mauris. Ut quis orci id nisi semper bibendum. Duis pellentesque tincidunt laoreet. Vivamus ornare sit amet arcu at fringilla. Etiam posuere vel sapien nec vulputate. Integer magna tellus, fermentum sed pellentesque vel, posuere eget lacus. Nullam euismod pellentesque orci eget consectetur. Nullam sit amet lectus pellentesque, ultricies purus nec, mattis elit. Aliquam vel tortor sit amet sem semper gravida eu ut justo. Aenean ac justo tincidunt, eleifend ligula sit amet, malesuada ex. Vestibulum ullamcorper sollicitudin risus, venenatis commodo velit maximus et. Nam in urna in elit venenatis suscipit eu ac ex. Maecenas non elit fringilla, luctus felis nec, ultrices justo. Nunc viverra nibh in turpis mollis, id tempus ante faucibus. Sed fermentum mi lectus, nec maximus quam euismod eu.
                    Curabitur non nulla mi. Cras quam massa, sodales quis dui id, imperdiet elementum lorem. Pellentesque fermentum lectus quis cursus rutrum. Vivamus aliquet rhoncus nibh. Fusce mattis finibus viverra. Ut cursus consequat urna eu volutpat. Pellentesque posuere est non felis ultricies rhoncus eget id ante.
                    Donec nec viverra ante. Morbi ac scelerisque nisi. Nullam gravida, ipsum at bibendum fermentum, felis justo placerat nibh, ut lobortis urna odio nec ipsum. Donec quis urna sit amet dui finibus convallis. Integer vitae hendrerit orci. Praesent rutrum nunc nisl, non pulvinar enim blandit nec. Aliquam porttitor, sapien posuere interdum elementum, quam magna auctor enim, et scelerisque quam sapien eu augue. Suspendisse laoreet quis augue vitae laoreet. Etiam at lacus sit amet massa imperdiet feugiat. Duis eget pellentesque massa, at luctus magna.
                    Nam malesuada diam eget molestie feugiat. Vestibulum nec consequat lacus, nec finibus lectus. Ut tincidunt, diam a hendrerit varius, orci magna ultrices nulla, vel accumsan erat nibh at ligula. Sed tristique, risus eu condimentum venenatis, felis lectus tempor eros, eu auctor tellus erat eu neque. Nullam sollicitudin fringilla purus ut sollicitudin. Cras vitae vehicula urna. Nullam sed mauris euismod, imperdiet tortor vitae, commodo augue. Quisque convallis congue turpis. Suspendisse tempus libero dolor, ac pretium tortor fermentum nec. Sed cursus lacus a hendrerit aliquam. Mauris in erat arcu. Curabitur elementum tellus sed tristique iaculis. Nullam sed vehicula nisl, nec porta velit. Cras convallis id orci id egestas. Maecenas cursus turpis libero, sed fermentum purus bibendum ultricies.
                    Nam non sollicitudin metus. Proin in consequat dui. Morbi bibendum tincidunt faucibus. Aenean justo mauris, porta ac eros et, blandit sagittis ligula. Curabitur quis dui elit. Duis blandit dictum purus, accumsan vehicula quam ullamcorper quis. Quisque eu urna convallis sapien tempor pharetra.
                    Mauris lobortis malesuada magna. Phasellus ut tellus et massa efficitur viverra. Donec fermentum imperdiet felis at posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt dictum odio eu ornare. Quisque a consequat nisi. Ut id congue urna. Donec tempus ac lectus vitae porta. Nam aliquet gravida turpis. Nullam ac est faucibus, maximus neque a, ornare tortor. Cras id sem dignissim, rhoncus arcu nec, finibus nunc. Ut convallis blandit sapien ut hendrerit. Nam eros elit, porttitor in eros eget, pretium aliquam justo. Donec eget pharetra turpis.
                    Quisque vitae velit felis. Cras ac odio molestie, eleifend diam a, dapibus metus. Fusce quis mi sit amet tellus auctor scelerisque in sed justo. Nulla ut mi quam. Mauris lacinia quam nec tellus ultricies, at tempus lectus interdum. Mauris sit amet nisi risus. Aenean fringilla, arcu quis elementum posuere, nibh purus dapibus erat, et mollis orci turpis a ante.
                    Fusce pharetra ipsum sit amet faucibus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan dui a molestie fringilla. Etiam vulputate eleifend tempor. Morbi finibus eget velit sed iaculis. Nulla nec lorem ut massa pulvinar aliquet. Praesent bibendum efficitur leo at cursus. In fermentum ultrices tortor, ac egestas tortor facilisis sed. Morbi accumsan turpis quis convallis luctus. Vivamus feugiat malesuada felis. Integer varius ultrices nisl sit amet ullamcorper. Suspendisse dignissim ante ante, vitae eleifend enim lacinia nec.
                    Sed malesuada vestibulum finibus. Suspendisse ac massa erat. Sed interdum accumsan quam. Nulla nisi turpis, sagittis non fermentum eu, suscipit luctus tellus. In hac habitasse platea dictumst. Morbi nunc est, auctor id mollis ac, gravida vel tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dui lectus, elementum quis eleifend vel, laoreet sed massa.
                    Proin sit amet venenatis urna, vitae volutpat lacus. Nulla luctus convallis porttitor. Aenean vitae tempus nisl, nec ornare nisl. Praesent et erat tincidunt, cursus erat vitae, aliquam ante. Cras tellus augue, volutpat a accumsan eu, fringilla id lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed sollicitudin justo, sed imperdiet libero. Nam quis velit enim.
                </p>
            </main>
        </>
        
    );
}

export default Home;