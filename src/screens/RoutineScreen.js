import React from 'react';
import schedul01 from '../assets/image/schedul01.png';
import logo from '../assets/image/titash_gas.png';
const RoutineScreen = () => {
  return (
    <div
      className='bg-contain  bg-no-repeat h-screen'
      style={{ backgroundImage: `url(${schedul01})` }}
    >
      <div className=''>
        <div>
          <img
            className='w-[15%] h-auto'
            src={logo}
            alt=''
          />
        </div>
        <div className='flex items-center justify-center h-full relative overflow-x-auto sm:rounded-lg w-full'>
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
                <td>১ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
              <tr className='bg-cyan-100'>
                <td className='p-1'>২</td>
                <td>২ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
              <tr className=''>
                <td className='p-1'>৩</td>
                <td>৩ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
              <tr className='bg-cyan-100'>
                <td className='p-1'>৪</td>
                <td>৪ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
              <tr className=''>
                <td className='p-1'>৫</td>
                <td>৫ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
              <tr className='bg-cyan-100'>
                <td className='p-1'>৬</td>
                <td>৬ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
              <tr className=''>
                <td className='p-1'>৭</td>
                <td>৭ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
              <tr className='bg-cyan-100'>
                <td className='p-1'>৮</td>
                <td>৮ জুলাই,২০২৩</td>
                <td>সকাল ১০.০০-১১.০০</td>
                <td>কনফারেন্স রুম(৩য় তলা)</td>
                <td>-----------</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoutineScreen;
