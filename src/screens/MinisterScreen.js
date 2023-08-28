import React from 'react';
import background from '../assets/image/background.png';
import '../style/photoFrame.css';
const MinisterScreen = () => {
  return (
    <>
      <div className='md:grid md:grid-cols-12'>
        <div className='md:col-span-7 h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-300 bg-opacity-25'>
          <div>
            <div className='hexaton shape-outer heptagon bg-cyan-500 mx-auto'>
              <div
                className=' shape-inner heptagon bg-cover  bg-no-repeat '
                style={{
                  backgroundImage: `url(https://powerdivision.portal.gov.bd/sites/default/files/files/powerdivision.portal.gov.bd/page/8ab6ee4f_c510_4aae_8ecb_1d569532517d/IMG-20211116-WA0000.jpg)`,
                }}
              ></div>
            </div>
            <div className='text-center py-5'>
              <h1 className='text-lg font-semibold'>নসরুল হামিদ, এম,পি</h1>

              <p> মাননীয় প্রতিমন্ত্রী</p>
              <p>বিদ্যুৎ, জালানি ও খনিজ সম্পদ মন্ত্রণালয় </p>
            </div>
          </div>
        </div>
        <div
          className='md:col-span-5 h-screen bg-cover  bg-no-repeat  '
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className='h-screen flex flex-col justify-center items-center '>
            <h1 className='text-lg font-semibold w-full  bg-gradient-to-r from-white to-cyan-400 bg-opacity-25 py-14 text-center'>
              মাননীয় প্রতিমন্ত্রী মহোদয়ের তিতাস গ্যাস টি এন্ড ডি কোং লিঃ এ আগমন
              উপলক্ষ্যে শুভেচ্ছা
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinisterScreen;
