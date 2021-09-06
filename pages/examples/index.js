import ReturnHome from '../../components/ReturnHome';
import SkillCard from '../../components/skill-cards/SkillCard';
import SkillCard2 from '../../components/skill-cards/SkillCard2.js';
import SkillCard3 from '../../components/skill-cards/SkillCard3.js';
import SkillCardTemplate from '../../components/skill-cards/SkillCardTemplate';
import NewMessage from '../../components/ChitChat/NewMessage';
import JobCard1 from '../../components/Job-cards/JobCard1';
import MarketingCard from '../../components/Marketing-cards/MarketingCard';
import MessageNotification from '../../components/Whatsapp/MessageNotification';
import MessageNotification2 from '../../components/Whatsapp/MessageNotification2';
import MessageNotification3 from '../../components/Whatsapp/MessageNotification3';

const examples = () => {
  return (
    <div className='p-20 bg-white'>
      <h1 className='text-6xl mb-10'>Example components</h1>
      <h2 className='my-10 text-4xl'>Skill Cards</h2>
      <div className='p-5 flex flex-wrap justify-center items-center bg-gray-300 rounded-xl'>
        <SkillCard />
        <SkillCard2 />
        <SkillCard3 />
        {/* <SkillCardTemplate /> */}
      </div>
      <h2 className='my-10 text-4xl'>Social App Cards</h2>
      <div className='p-5 flex flex-wrap justify-center items-center bg-blue-300 rounded-xl'>
        <NewMessage />
      </div>
      <h2 className='my-10 text-4xl'>Job Cards</h2>
      <div className='p-5 flex flex-wrap justify-center items-center bg-purple-300 rounded-xl'>
        <JobCard1 />
      </div>
      <h2 className='my-10 text-4xl'>Marketing Cards</h2>
      <div className='p-5 flex flex-wrap justify-center items-center bg-blue-300 rounded-xl'>
        <MarketingCard />
      </div>
      <h2 className='my-10 text-4xl'>Whatsapp</h2>
      <div className='p-5 flex flex-wrap justify-center items-center bg-green-300 rounded-xl'>
        <MessageNotification />
        <MessageNotification2 />
        <MessageNotification3 />
      </div>
      <ReturnHome />
    </div>
  );
};

export default examples;
