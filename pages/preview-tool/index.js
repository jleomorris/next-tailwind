import React, { useState } from 'react';
import { backgroundClasses } from './tailwindProperties';

const tool = () => {
  const [background, setBackground] = useState('bg-blue-500');
  const [rounded, setRounded] = useState('rounded-xl');

  // const backgroundHandler = (e) => {
  //   setBackground(e.value);
  // };

  return (
    <>
      <div className='tool-container p-20'>
        <div className='header'>
          <h1 className='text-8xl pb-9'>Preview tool</h1>
          <code className='p-3 font-mono text-lg bg-gray-100 rounded-md'>
            {`${background}`}
          </code>
        </div>
        <div className='body flex justify-center items-start py-10'>
          <div className='demo-element-container bg-gray-200 w-2/5 h-96 rounded-xl flex justify-center items-center mr-24'>
            <button className={`${background} ${rounded}  p-3 m-6`}>
              Example
            </button>
          </div>
          <div className='property-container p-3 rounded-xl w-full flex flex-wrap'>
            <h2 className='w-full text-2xl pb-5'>Background</h2>
            {backgroundClasses.map((option) => (
              <div
                className={`${option.value} border-2 border-gray-400 h-10 w-10 m-1 rounded-xl cursor-pointer`}
                onClick={() => setBackground(option.value)}
              ></div>
            ))}
          </div>
        </div>
        <a href='/'>
          <span className='pr-2'>&#8592;</span>Return to home
        </a>
      </div>
    </>
  );
};

export default tool;
