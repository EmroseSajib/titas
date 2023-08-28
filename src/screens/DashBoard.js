import React from 'react';
import Welcome from '../assets/image/Welcome.png';
import logo from '../assets/image/titash_gas.png';
const DashBoard = () => {
  return (
    <div className='h-screen'>
      <div className='bg-contain  bg-no-repeat'>
        <img
          src={Welcome}
          alt=''
        />
      </div>
      <div className=' flex justify-center items-center my-5 '>
        <img
          className='md:w-[15%] w-[40%] md:max-h-5/6'
          src={logo}
          alt=''
        />
      </div>

      <div className=' flex justify-center items-center '>
        <h1 className='text-2xl font-semibold'>
          তিতাস গ্যাস টি এন্ড ডি কোং লিঃ এ আপনাকে স্বাগতম
        </h1>
      </div>
    </div>
  );
};

export default DashBoard;
