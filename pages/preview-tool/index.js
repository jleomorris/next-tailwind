import React, { useState, useRef, useEffect } from 'react';
import {
  backgroundClasses,
  borderRadiusClasses,
  boxShadowClasses,
  fontColorClasses,
  fontSizeClasses,
  fontWeightClasses,
  letterSpacingClasses,
  paddingClasses,
} from './tailwindProperties';
import head from 'next/head';
import defaultTheme from 'tailwindcss/defaultTheme';
import ReturnHome from '../../components/ReturnHome';

const tool = () => {
  const [elementBackground, setElementBackground] = useState('bg-blue-500');
  const [containerBackground, setContainerBackground] = useState('bg-gray-200');
  const [fontColor, setFontColor] = useState('text-black');
  const [boxShadow, setBoxShadow] = useState('shadow-none');
  const [borderRadius, setBorderRadius] = useState('rounded-xl');
  const [padding, setPadding] = useState('p-3');
  const [fontSize, setFontSize] = useState('text-base');
  const [fontWeight, setFontWeight] = useState('font-normal');
  const [letterSpacing, setLetterSpacing] = useState('tracking-normal');
  const codeRef = useRef();

  useEffect(() => {
    console.log('preview-tool.defaultTheme', defaultTheme);
  }, []);

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
                {`${padding} ${elementBackground} ${borderRadius} ${fontSize} ${fontWeight} ${fontColor} ${letterSpacing} ${boxShadow}`}
              </code>
              <button
                className='flex justify-center items-center w-16 p3 bg-gray-200 rounded-xl ml-5 mb-5'
                onClick={() => copyToClipboardHandler()}
              >
                <ClipboardIcon />
              </button>
            </div>
            <div
              className={`demo-element-container ${containerBackground} h-96 rounded-xl flex justify-center items-center`}
            >
              <button
                className={`${elementBackground} ${borderRadius} ${fontSize} ${fontWeight} ${fontColor} ${letterSpacing} ${boxShadow} p-3 m-6`}
              >
                Example btn
              </button>
            </div>
          </div>
          <div className='property-container p-3 rounded-xl w-1/2 flex flex-wrap'>
            <h2 className='w-full text-2xl pb-5'>Container Background</h2>
            {backgroundClasses.map((option) => (
              <div
                className={`${option.value} border-2 border-gray-400 h-10 w-10 m-1 rounded-xl cursor-pointer`}
                onClick={() => setContainerBackground(option.value)}
                key={option.value}
              ></div>
            ))}
            <h2 className='w-full text-2xl py-5'>Element Background</h2>
            {backgroundClasses.map((option) => (
              <div
                className={`${option.value} border-2 border-gray-400 h-10 w-10 m-1 rounded-xl cursor-pointer`}
                onClick={() => setElementBackground(option.value)}
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
            <h2 className='w-full text-2xl py-5'>Box Shadow</h2>
            <div className='bg-gradient-to-r from-indigo-50 to-indigo-100 flex flex-wrap rounded-xl'>
              {boxShadowClasses.map((option) => (
                <div
                  className={`${option} w-20 h-20 m-5 rounded-xl cursor-pointer bg-white flex items-center justify-center p-5 text-center`}
                  onClick={() => setBoxShadow(option)}
                  key={option}
                >
                  {`.${option}`}
                </div>
              ))}
            </div>
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
            <h2 className='w-full text-2xl py-5'>Letter Spacing</h2>
            {letterSpacingClasses.map((option) => (
              <p
                className={`flex items-center m-1 ${option} cursor-pointer`}
                onClick={() => setLetterSpacing(option)}
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
        <ReturnHome />
      </div>
    </>
  );
};

export default tool;
