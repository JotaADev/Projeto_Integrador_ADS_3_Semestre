import React from 'react';
import './SearchBar.css';
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <input className='searchinput' placeholder='Qual produto você está procurando?' name='searchbar'/>
            <CiSearch size={'20px'} fontWeight={'bold'}/>
        </div>
    );
}

export default SearchBar;