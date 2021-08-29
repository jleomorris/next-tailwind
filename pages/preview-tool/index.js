import React, { useState } from 'react';
import {
  backgroundClasses,
  borderRadiusClasses,
  fontSizeClasses,
  fontWeightClasses,
  paddingClasses,
} from './tailwindProperties';

const tool = () => {
  const [background, setBackground] = useState('bg-blue-500');
  const [borderRadius, setBorderRadius] = useState('rounded-xl');
  const [padding, setPadding] = useState('p-3');
  const [fontSize, setFontSize] = useState('text-base');
  const [fontWeight, setFontWeight] = useState('font-normal');

  // const backgroundHandler = (e) => {
  //   setBackground(e.value);
  // };

  return (
    <>
      <div className='tool-container p-20'>
        <div className='header'>
          <h1 className='text-8xl pb-9'>Preview tool</h1>
          <code className='p-3 font-mono text-lg bg-gray-100 rounded-md'>
            {`${padding} ${background} ${borderRadius} ${fontSize} ${fontWeight}`}
          </code>
        </div>
        <div className='body flex justify-center items-start py-10'>
          <div className='demo-element-container bg-gray-200 w-1/2 h-96 rounded-xl flex justify-center items-center mr-24'>
            <button
              className={`${background} ${borderRadius} ${fontSize} ${fontWeight} p-3 m-6`}
            >
              Example btn
            </button>
          </div>
          <div className='property-container p-3 rounded-xl w-1/2 flex flex-wrap'>
            <h2 className='w-full text-2xl pb-5'>Background</h2>
            {backgroundClasses.map((option) => (
              <div
                className={`${option.value} border-2 border-gray-400 h-10 w-10 m-1 rounded-xl cursor-pointer`}
                onClick={() => setBackground(option.value)}
              ></div>
            ))}
            <h2 className='w-full text-2xl py-5'>Border Radius</h2>
            {borderRadiusClasses.map((option) => (
              <div
                className={`bg-200-grey border-2 border-gray-400 h-10 w-10 m-1 ${option} cursor-pointer`}
                onClick={() => setBorderRadius(option)}
              ></div>
            ))}
            <h2 className='w-full text-2xl py-5'>Font Sizes</h2>
            {fontSizeClasses.map((option) => (
              <p
                className={`flex items-center m-1 ${option} cursor-pointer`}
                onClick={() => setFontSize(option)}
              >
                Content
              </p>
            ))}
            <h2 className='w-full text-2xl py-5'>Font weight</h2>
            {fontWeightClasses.map((option) => (
              <p
                className={`flex items-center m-1 text-2xl ${option} cursor-pointer`}
                onClick={() => setFontWeight(option)}
              >
                Content
              </p>
            ))}
            {/* <h2 className='w-full text-2xl py-5'>Padding</h2>
            {paddingClasses.values.map((value) => (
              <div
                className={`${paddingClasses.prepends[0]}${value} bg-200-grey border-2 border-gray-400 w-40 m-1 cursor-pointer`}
                // onClick={() => setPadding(value)}
              >
                Content
              </div>
            ))} */}
          </div>
        </div>
        <a href='/' className='text-2xl'>
          <span className='pr-2'>&#8592;</span>Return to home
        </a>
      </div>
    </>
  );
};

export default tool;
