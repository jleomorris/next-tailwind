import Whatsapp from '../Icons/Whatsapp';
import Camera from '../Icons/Camera';
import Mic from '../Icons/Mic';

const MessageNotification3 = () => {
  return (
    <div className='m-5 rounded-xl overflow-hidden md:flex bg-white w-full md:w-3/4 xl:w-1/3 shadow-md'>
      {/* <div className='sm:w-1/4 flex sm:flex-none px-3 py-2 '> */}
      <div className='justify-between md:justify-start md:w-1/3 xl:w-1/4 flex md:flex-col px-3 py-2 '>
        <div className='flex flex-shrink-1 mb-2'>
          <div className='flex bg-green-400 rounded-md p-1'>
            <Whatsapp />
          </div>
          <div className='flex ml-1 rounded-md p-1'>
            <Camera />
          </div>
          <div className='flex rounded-md p-1'>
            <Mic />
          </div>
        </div>
        <div className='flex'>
          <p className='my-auto mx-1'>13m ago</p>
        </div>
      </div>
      <div className='w-full bg-gray-900 text-white xl:w-3/4 p-3'>
        <p className='mt-2 uppercase'>James Morris</p>
        <p className='font-bold'>
          Redesigned dark mode notification message with photo & audio
          indicators.
        </p>
      </div>

      {/* <div className='flex justify-between'>
        <div className='flex'>
        </div>
      </div> */}
    </div>
  );
};

export default MessageNotification3;
