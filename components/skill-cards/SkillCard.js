const SkillCard = () => {
  const skills = ['React', 'Redux', 'Node'];

  return (
    <div className='skill-card w-96 bg-white rounded-2xl overflow-hidden shadow-2xl'>
      <div className='h-44 overflow-hidden'>
        <img
          className='h-full w-full object-cover'
          src='https://images.freeimages.com/images/large-previews/f65/typing-1242387.jpg'
          alt='skill'
        />
      </div>
      <div className='bg-gray-200 p-5'>
        <h2 className='text-3xl font-bold mb-3'>Blog</h2>
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

export default SkillCard;
