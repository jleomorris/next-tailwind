import ReturnHome from '../../components/ReturnHome';
import SkillCard from '../../components/SkillCard';

const examples = () => {
  return (
    <div className='p-20 bg-white'>
      <h1 className='text-8xl mb-10'>Example components</h1>
      <h2 className='mt-20 mb-10 text-4xl'>Skill Cards</h2>
      <SkillCard />
      <ReturnHome />
    </div>
  );
};

export default examples;
