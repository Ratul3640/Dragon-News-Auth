import React from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto my-10' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>Sunday, November 27, 2022</p>
            <p className='text-xl'>{moment().format("dddd,MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;