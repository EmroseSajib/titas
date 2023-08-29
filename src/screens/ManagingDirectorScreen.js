import React from 'react';
import md from '../assets/image/md.png';
import '../style/director.css';
import '../style/photoFrame.css';
const ManagingDirectorScreen = () => {
  return (
    <>
      <div className='grid md:grid-cols-12'>
        <div className='md:col-span-7 h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-300 bg-opacity-25'>
          <div>
            <div className=' flex items-center justify-center'>
              <img
                className='w-1/2'
                src={md}
                alt=''
              />
            </div>
            <div className='text-center py-5'>
              <h1 className='text-lg font-semibold'>
                প্রকৌ. মো. হারুনুর রশীদ মোল্লাহ্
              </h1>

              <p>ব্যবস্থাপনা পরিচালক</p>
            </div>
          </div>
        </div>
        <div
          className='overflow-x-hidden md:col-span-5 h-screen bg-cover  bg-no-repeat bg-gradient-to-b from-white to-cyan-300 bg-opacity-25 '
          // style={{ backgroundImage: `url(${background})` }}
        >
          <div
            className='h-screen flex flex-col justify-center items-center animated-div'
            style={{ direction: 'rtl' }}
          >
            <h1 className='rounded-l-full text-lg font-semibold w-full  bg-gradient-to-r from-white to-cyan-400 bg-opacity-25 py-14 text-center'>
              গ্যাস বিতরন ব্যবস্থা ডিজিটালাইজেশন করা হচ্ছে
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagingDirectorScreen;
