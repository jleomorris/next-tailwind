import Whatsapp from '../Icons/Whatsapp';
import Camera from '../Icons/Camera';
import Mic from '../Icons/Mic';

const MessageNotification2 = () => {
  return (
    <div className='m-5 rounded-xl bg-white px-5 py-2 w-full md:w-3/4 lg:w-1/3 shadow-md'>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='flex bg-green-400 rounded-md p-1'>
            <Whatsapp />
          </div>
          {/* <p className='ml-3 my-auto'>WHATSAPP</p> */}
        </div>
        <div className='flex'>
          <div className='flex rounded-md p-1'>
            <Camera />
          </div>
          <div className='flex rounded-md p-1'>
            <Mic />
          </div>
        </div>
        <p className='my-auto'>13m ago</p>
      </div>
      <p className='mt-2 uppercase'>James Morris</p>
      <p className='font-bold'>
        Default notification message with photo & audio indicators.
      </p>
    </div>
  );
};

export default MessageNotification2;
