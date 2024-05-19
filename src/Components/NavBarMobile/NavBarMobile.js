import React from 'react';
import './NavBarMobile.css';
import NavBarButton from '../NavBarButton/NavBarButton';

//Icons:
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
            />
            <NavBarButton
                icon={<CiGift size={'1.5rem'}/>}
                text={'Presentes'}
            />
            <NavBarButton
                icon={<TbBasketStar size={'1.5rem'}/>}
                text={'Cestas'}
            />
            <NavBarButton
                icon={<LuFlower2 size={'1.5rem'}/>}
                text={'Buquês'}
            />
            <NavBarButton
                icon={<GiFlowerPot size={'1.5rem'}/>}
                text={'Arranjos'}
            />
            <NavBarButton
                icon={<GiFlowers size={'1.5rem'}/>}
                text={'Tipo de flores'}
            />
            <NavBarButton
                icon={<FaRegCalendarAlt size={'1.5rem'}/>}
                text={'Datas especiais'}
            />
        </aside>
    );
}

export default NavBarMobile;