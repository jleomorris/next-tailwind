const SkillCardTemplate = () => {
  const skills = ['Skill 1', 'Skill 2', 'Skill 3'];

  return (
    <div>
      <div class='m-5 border-2 border-red-600 max-w-md md:max-w-2xl mx-auto h-full bg-white rounded-xl shadow-md overflow-hidden'>
        <div class='md:flex border-2 border-blue-600'>
          <div class='md:flex-shrink-0 border-2 border-green-600'>
            <img
              class='h-48 w-full object-cover md:h-full md:w-48'
              src='https://images.freeimages.com/images/large-previews/f65/typing-1242387.jpg'
              alt='Man looking at item at a store'
            />
          </div>
          <div class='p-8 border-2 border-yellow-600'>
            <div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Project Title
            </div>
            <a
              href='#'
              class='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
            >
              Project Description.
            </a>
            <div className='my-3'>
              {skills.map((skill) => (
                <p className='bg-white shadow-md py-2 px-4 rounded-full m-1 inline-block'>
                  {skill}
                </p>
              ))}
            </div>
            {/* <p class='mt-2 text-gray-500'>
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCardTemplate;
