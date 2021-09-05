import ReturnHome from '../../components/ReturnHome';
import SkillCard from '../../components/skill-cards/SkillCard';
import SkillCard2 from '../../components/skill-cards/SkillCard2.js';
import SkillCard3 from '../../components/skill-cards/SkillCard3.js';
import SkillCardTemplate from '../../components/skill-cards/SkillCardTemplate';
import NewMessage from '../../components/ChitChat/NewMessage';
import JobCard1 from '../../components/Job-cards/JobCard1';

const examples = () => {
  return (
    <div className='p-20 bg-white'>
      <h1 className='text-6xl mb-10'>Example components</h1>
      <h2 className='my-10 text-4xl'>Skill Cards</h2>
      <div className='flex flex-wrap justify-center items-center'>
        <SkillCard />
        <SkillCard2 />
        <SkillCard3 />
        {/* <SkillCardTemplate /> */}
      </div>
      <h2 className='my-10 text-4xl'>Social App Cards</h2>
      <div className='flex flex-wrap justify-center items-center'>
        <NewMessage />
      </div>
      <h2 className='my-10 text-4xl'>Job Cards</h2>
      <div className='flex flex-wrap justify-center items-center'>
        <JobCard1 />
      </div>
      <ReturnHome />
    </div>
  );
};

export default examples;
