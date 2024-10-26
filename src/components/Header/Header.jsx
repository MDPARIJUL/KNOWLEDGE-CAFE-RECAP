import React from 'react';
import cafeImage from '../../assets/images/profile.png';
const Header = () => {
    return (
        <>
            <div className='flex justify-between'>
                <h1 className='text-5xl font-bold text-[#111111]'>Knowledge Cafe</h1>
                <img  src={cafeImage} alt="" />
            </div>
        </>
    );
};

export default Header;