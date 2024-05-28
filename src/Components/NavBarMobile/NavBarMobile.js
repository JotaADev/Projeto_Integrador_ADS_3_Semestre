import React from 'react';
import './NavBarMobile.css';
import NavBarButton from '../NavBarButton/NavBarButton';

// =========== Icones importados ===========
import { FiUser } from "react-icons/fi";
import { CiGift } from "react-icons/ci";
import { TbBasketStar } from "react-icons/tb";
import { LuFlower2 } from "react-icons/lu";
import { GiFlowerPot } from "react-icons/gi";
import { GiFlowers } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";

const NavBarMobile = ({classToggle}) => {

    return (
        <aside className={classToggle}>
            <NavBarButton
                icon={<FiUser size={'1.5rem'}/>}
                text={'Entre ou cadastre-se'}
                link={'/'}
            />
            <NavBarButton
                icon={<CiGift size={'1.5rem'}/>}
                text={'Presentes'}
                link={'/produtos/presente'}
            />
            <NavBarButton
                icon={<TbBasketStar size={'1.5rem'}/>}
                text={'Cestas'}
                link={'/produtos/cesta'}
            />
            <NavBarButton
                icon={<LuFlower2 size={'1.5rem'}/>}
                text={'Buquês'}
                link={'/produtos/buque'}
            />
            <NavBarButton
                icon={<GiFlowerPot size={'1.5rem'}/>}
                text={'Arranjos'}
                link={'/produtos/arranjo'}
            />
            <NavBarButton
                icon={<GiFlowers size={'1.5rem'}/>}
                text={'Tipo de flores'}
                link={'/'}
            />
            <NavBarButton
                icon={<FaRegCalendarAlt size={'1.5rem'}/>}
                text={'Datas especiais'}
                link={'/'}
            />
        </aside>
    );
}

export default NavBarMobile;