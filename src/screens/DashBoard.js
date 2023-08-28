import React from 'react';
import Welcome from '../assets/image/Welcome.png';
import logo from '../assets/image/titash_gas.png';
const DashBoard = () => {
  return (
    <>
      <div className='bg-contain  bg-no-repeat'>
        <img
          src={Welcome}
          alt=''
        />
      </div>
      <div className='flex justify-center items-center '>
        <img
          className='w-[15%] h-auto'
          src={logo}
          alt=''
        />
      </div>
    </>
  );
};

export default DashBoard;
