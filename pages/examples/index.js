import ReturnHome from '../../components/ReturnHome';
import SkillCard from '../../components/skill-cards/SkillCard';
import SkillCard2 from '../../components/skill-cards/SkillCard2.js';
import SkillCard3 from '../../components/skill-cards/SkillCard3.js';

const examples = () => {
  return (
    <div className='p-20 bg-white'>
      <h1 className='text-8xl mb-10'>Example components</h1>
      <h2 className='mt-20 mb-10 text-4xl'>Skill Cards</h2>
      <div className='space-x-4 flex flex-wrap'>
        <SkillCard />
        <SkillCard2 />
        <SkillCard3 />
      </div>
      <ReturnHome />
    </div>
  );
};

export default examples;
