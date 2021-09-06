import Whatsapp from '../Icons/Whatsapp';

const MessageNotification = () => {
  return (
    <div className='m-5 rounded-xl bg-white px-5 py-2 w-full md:w-3/4 lg:w-1/3 shadow-md'>
      <div className='flex justify-between'>
        <div className='flex'>
          <div className='bg-green-400 rounded-md p-1'>
            <Whatsapp />
          </div>
          <p className='ml-3 my-auto'>WHATSAPP</p>
        </div>
        <p className='my-auto'>13m ago</p>
      </div>
      <p className='mt-2 font-bold'>The default notification message.</p>
    </div>
  );
};

export default MessageNotification;
