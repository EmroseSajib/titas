import React from 'react';

import schedul01 from '../assets/image/schedul01.png';
import schedul02 from '../assets/image/schedul02.png';
import logo from '../assets/image/titash_gas.png';
import '../style/routineanimatedtext.css';
const RoutineScreen = () => {
  return (
    <>
      <div
        className='absolute inset-0 h-screen'
        style={{
          backgroundImage: `url(${schedul01}), url(${schedul02})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top, bottom',
          backgroundSize: '100% 30%',
          backgroundAttachment: 'fixed',
        }}
      >
        <div>
          <div className=''>
            <img
              className='w-[10%] h-auto ml-5 mt-5'
              src={logo}
              alt=''
            />
          </div>
          <div className='flex justify-center '>
            <h2 className='text-2xl py-5 font-semibold text-cyan-500 '>
              সভা সময়সূচী
            </h2>
          </div>
          <div className='flex items-center justify-center relative overflow-x-auto sm:rounded-lg w-full'>
            <table className='table-auto text-center w-3/4 overflow-x-auto  '>
              <thead className=' bg-gradient-to-r from-white to-cyan-400 bg-opacity-25 border-gray-600 border-2 '>
                <tr className=''>
                  <th className='p-1'>ক্রমিক</th>
                  <th>তারিখ</th>
                  <th>সময়</th>
                  <th>স্থান</th>
                  <th>বিষয়</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td className='p-1'>১</td>
                  <td>১ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
                <tr className='bg-cyan-100'>
                  <td className='p-1'>২</td>
                  <td>২ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
                <tr className=''>
                  <td className='p-1'>৩</td>
                  <td>৩ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
                <tr className='bg-cyan-100'>
                  <td className='p-1'>৪</td>
                  <td>৪ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
                <tr className=''>
                  <td className='p-1'>৫</td>
                  <td>৫ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
                <tr className='bg-cyan-100'>
                  <td className='p-1'>৬</td>
                  <td>৬ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
                <tr className=''>
                  <td className='p-1'>৭</td>
                  <td>৭ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
                <tr className='bg-cyan-100'>
                  <td className='p-1'>৮</td>
                  <td>৮ জুলাই, ২০২৩</td>
                  <td>সকাল ১০.০০ - ১১.০০</td>
                  <td>কনফারেন্স রুম (৩য় তলা)</td>
                  <td>-----------</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-center py-10'>
            <div class=' text-container border border-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 overflow-hidden  w-[60%]'>
              <p class='animated-text '>
                অবৈধ গ্যাস সংযোগ ও ব্যাবহার সংক্রান্ত সতর্কীকরণ বিজ্ঞপ্তি । যে
                কোন প্রয়োজনে তিতাস হট লাইন ১৬৯৬ নম্বরে কল করুন ।
              </p>
            </div>
            {/* <div class='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
              <p className='animated-text'>
                Something not ideal might be happening.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoutineScreen;
