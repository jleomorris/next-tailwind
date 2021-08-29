import React, { useState, useRef } from 'react';
import {
  backgroundClasses,
  borderRadiusClasses,
  fontColorClasses,
  fontSizeClasses,
  fontWeightClasses,
  paddingClasses,
} from './tailwindProperties';

const tool = () => {
  const [background, setBackground] = useState('bg-blue-500');
  const [fontColor, setFontColor] = useState('text-black');
  const [borderRadius, setBorderRadius] = useState('rounded-xl');
  const [padding, setPadding] = useState('p-3');
  const [fontSize, setFontSize] = useState('text-base');
  const [fontWeight, setFontWeight] = useState('font-normal');
  const codeRef = useRef();

  const ClipboardIcon = () => (
    <svg
      className='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
      ></path>
    </svg>
  );

  const copyToClipboardHandler = () => {
    console.log('codeRef.current', codeRef.current);

    const toCopy = codeRef.current.innerText;
    navigator.clipboard.writeText(toCopy);
  };

  return (
    <>
      <div className='tool-container p-20'>
        <div className='header'>
          <h1 className='text-8xl pb-9'>Preview tool</h1>
        </div>
        <div className='body flex justify-center items-start py-10'>
          <div className='sticky top-14 left-0 flex flex-col w-1/2 mr-24'>
            <div className='flex'>
              <code
                className='mb-5 p-3 font-mono text-lg bg-gray-200 rounded-xl'
                ref={codeRef}
              >
                {`${padding} ${background} ${borderRadius} ${fontSize} ${fontWeight} ${fontColor}`}
              </code>
              <button
                className='flex justify-center items-center w-16 p3 bg-gray-200 rounded-xl ml-5 mb-5'
                onClick={() => copyToClipboardHandler()}
              >
                <ClipboardIcon />
              </button>
            </div>
            <div className='demo-element-container bg-gray-200 h-96 rounded-xl flex justify-center items-center'>
              <button
                className={`${background} ${borderRadius} ${fontSize} ${fontWeight} ${fontColor} p-3 m-6`}
              >
                Example btn
              </button>
            </div>
          </div>
          <div className='property-container p-3 rounded-xl w-1/2 flex flex-wrap'>
            <h2 className='w-full text-2xl pb-5'>Background</h2>
            {backgroundClasses.map((option) => (
              <div
                className={`${option.value} border-2 border-gray-400 h-10 w-10 m-1 rounded-xl cursor-pointer`}
                onClick={() => setBackground(option.value)}
                key={option.value}
              ></div>
            ))}
            <h2 className='w-full text-2xl py-5'>Font color</h2>
            {fontColorClasses.map((option) => (
              <p
                className={`${option.value} h-10 m-1 rounded-xl cursor-pointer`}
                onClick={() => setFontColor(option.value)}
                key={option.value}
              >
                Content
              </p>
            ))}
            <h2 className='w-full text-2xl py-5'>Border Radius</h2>
            {borderRadiusClasses.map((option) => (
              <div
                className={`bg-200-grey border-2 border-gray-400 h-10 w-10 m-1 ${option} cursor-pointer`}
                onClick={() => setBorderRadius(option)}
                key={option}
              ></div>
            ))}
            <h2 className='w-full text-2xl py-5'>Font Size</h2>
            {fontSizeClasses.map((option) => (
              <p
                className={`flex items-center m-1 ${option} cursor-pointer`}
                onClick={() => setFontSize(option)}
                key={option}
              >
                Content
              </p>
            ))}
            <h2 className='w-full text-2xl py-5'>Font weight</h2>
            {fontWeightClasses.map((option) => (
              <p
                className={`flex items-center m-1 text-2xl ${option} cursor-pointer`}
                onClick={() => setFontWeight(option)}
                key={option}
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
