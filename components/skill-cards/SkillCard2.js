const SkillCard2 = () => {
  const skills = ['React', 'Redux', 'Node'];

  return (
    <div className='skill-card w-96 bg-white rounded-2xl overflow-hidden shadow-2xl'>
      <div className='h-44 overflow-hidden relative '>
        <div className='bg-gradient-to-r from-black absolute top-0 left-0 h-full w-full'></div>
        <img
          className='h-full w-full object-cover'
          src='https://images.freeimages.com/images/large-previews/f65/typing-1242387.jpg'
          alt='skill'
        />
        <h2 className='text-3xl font-bold mb-3 absolute bottom-3 left-5 text-white'>
          Blog
        </h2>
      </div>
      <div className='bg-gray-200 p-5 h-full'>
        <p className=''>
          A simple blog project developed to increase my knowledge of ReactJS.
        </p>
        <div className='my-3'>
          {skills.map((skill) => (
            <p className='bg-white shadow-md py-2 px-4 rounded-full m-1 inline-block'>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard2;
