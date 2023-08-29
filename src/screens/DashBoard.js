import React from 'react';
import Welcome from '../assets/image/Welcome.png';
import logo from '../assets/image/titash_gas.png';
const DashBoard = () => {
  return (
    <div
      className='h-screen'
      style={{
        backgroundImage: `url(${Welcome})`, // Assuming Welcome is a variable holding the image URL
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: '100% 50%',
        // backgroundAttachment: 'fixed',
      }}
    >
      <div className='flex items-center justify-center h-screen'>
        <div className='mt-48'>
          <div className=' flex justify-center items-center '>
            <img
              className='md:w-[15%] w-[40%] md:max-h-5/6 '
              src={logo}
              alt=''
            />
          </div>

          <div className=' flex justify-center items-center '>
            <h1 className='text-2xl font-semibold '>
              তিতাস গ্যাস টি এন্ড ডি কোং লিঃ এ আপনাকে স্বাগতম
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
