import ChatIcon from '../Icons/ChatIcon';

const NewMessage = () => {
  return (
    <div class='max-w-sm m-5 flex p-6 bg-white rounded-lg shadow-xl'>
      <div class='flex-shrink-0'>
        {/* <img class='h-12 w-12' src='/img/logo.svg' alt='ChitChat Logo' /> */}
        <ChatIcon />
      </div>
      <div class='ml-6 pt-1'>
        <h4 class='text-xl text-gray-900 leading-tight'>ChitChat</h4>
        <p class='text-base text-gray-600 leading-normal'>
          You have a new message!
        </p>
      </div>
    </div>
  );
};

export default NewMessage;
