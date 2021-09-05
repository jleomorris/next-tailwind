const JobCard1 = () => {
  return (
    <div class='max-w-sm m-5 bg-white shadow-lg rounded-lg overflow-hidden'>
      <div class='sm:flex sm:items-center px-6 py-4'>
        <img
          class='block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full'
          src='https://v1.tailwindcss.com/img/erin-lindford.jpg'
          alt="Woman's Face"
        />
        <div class='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
          <p class='text-xl leading-tight'>Erin Lindford</p>
          <p class='text-sm leading-tight text-gray-600'>Product Engineer</p>
          <div class='mt-4'>
            <button class='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'>
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard1;
