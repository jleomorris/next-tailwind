import Head from 'next/head';
import homeStyles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <Head>
          <title>Tailwind CSS World</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <h1 className='text-6xl font-bold'>
            Explore{' '}
            <a className={homeStyles.error} href='https://tailwindcss.com/'>
              Tailwind CSS
            </a>
          </h1>

          <p className='mt-3 text-2xl'>
            A gallery of Tailwind CSS features
            {/* <code className='p-3 font-mono text-lg bg-gray-100 rounded-md'>
            pages/index.js
          </code> */}
          </p>

          <div className='flex flex-wrap justify-center mt-6 max-w-6xl sm:w-full'>
            <a
              href='https://tailwindcss.com/docs'
              className={`${homeStyles.card} bg-purple-200`}
            >
              <h3 className='text-2xl font-bold'>Documentation &rarr;</h3>
              <p className='mt-4 text-xl'>
                In-depth information for Tailwind CSS features and API.
              </p>
            </a>

            <a
              href='https://play.tailwindcss.com/'
              className={`${homeStyles.card} bg-pink-200`}
            >
              <h3 className='text-2xl font-bold'>Learn the basics &rarr;</h3>
              <p className='mt-4 text-xl'>
                Learn the basics in Tailwinds online playground!
              </p>
            </a>

            <a
              href='https://blog.tailwindcss.com/'
              className={`${homeStyles.card} bg-green-200 `}
            >
              <h3 className='text-2xl font-bold'>Tailwind News &rarr;</h3>
              <p className='mt-4 text-xl'>
                All the latest Tailwind CSS news, straight from the team.
              </p>
            </a>

            <a
              href='https://tailwindui.com/'
              className={`${homeStyles.card} bg-blue-200`}
            >
              <h3 className='text-2xl font-bold'>Tailwind UI &rarr;</h3>
              <p className='mt-4 text-xl'>
                Speed up development with pre-built, fully responsive official
                Tailwind CSS Components.{' '}
              </p>
            </a>

            <a href='/examples' className={`${homeStyles.card} bg-purple-300`}>
              <h3 className='text-2xl font-bold'>
                Self developed custom components &rarr;
              </h3>
              <p className='mt-4 text-xl'>
                See a range of prebuilt custom components
              </p>
            </a>

            <a
              href='/preview-tool'
              className={`${homeStyles.card} bg-yellow-200`}
            >
              <h3 className='text-2xl font-bold'>Preview tool &rarr;</h3>
              <p className='mt-4 text-xl'>See the preview tool</p>
            </a>
          </div>
        </main>

        <footer className='flex items-center justify-center w-full h-24 border-t'>
          <a
            className='flex items-center justify-center'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
            <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
          </a>
        </footer>
      </div>
    </>
  );
}
