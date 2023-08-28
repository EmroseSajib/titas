import React from 'react';
import background from '../assets/image/background.png';
import '../style/photoFrame.css';
const ManagingDirectorScreen = () => {
  return (
    <>
      <div className='grid md:grid-cols-12'>
        <div className='md:col-span-7 h-screen flex items-center justify-center bg-gradient-to-b from-white to-cyan-300 bg-opacity-25'>
          <div>
            <div className='hexaton shape-outer heptagon bg-cyan-500 mx-auto'>
              <div
                className=' shape-inner heptagon bg-cover  bg-no-repeat '
                style={{
                  backgroundImage: `url(https://titasgas.portal.gov.bd/sites/default/files/files/titasgas.portal.gov.bd/page/3b24980f_9187_442c_a2f5_560cc98853da/2023-01-17-07-56-a93914b07818df2562fd399b4f5c2476.jpeg)`,
                }}
              ></div>
            </div>
            <div className='text-center py-5'>
              <h1 className='text-lg font-semibold'>
                প্রকৌ. মো. হারুনুর রশীদ মোল্লাহ
              </h1>

              <p>ব্যবস্থাপনা পরিচালক</p>
            </div>
          </div>
        </div>
        <div
          className='md:col-span-5 h-screen bg-cover  bg-no-repeat '
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className='h-screen flex flex-col justify-center items-center '>
            <h1 className='text-lg font-semibold w-full  bg-gradient-to-r from-white to-cyan-400 bg-opacity-25 py-14 text-center'>
              গ্যাস বিতরন ব্যবস্থা ডিজিটালাইজেশন করা হচ্ছে
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagingDirectorScreen;
