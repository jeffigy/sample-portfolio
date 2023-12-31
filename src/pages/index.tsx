import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from 'next/image'
import Deved from '../../public/dev-ed-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import Web1 from '../../public/web1.png'
import Web2 from '../../public/web2.png'
import Web3 from '../../public/web3.png'
import Web4 from '../../public/web4.png'
import Web5 from '../../public/web5.png'
import Web6 from '../../public/web6.png'
import { useState } from 'react';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>John Doe Portfolio</title>
        <meta name='description' content='auto generated' />
        <link rel="stylesheet" href="/public/favicon.ico" />
      </Head>
      <main className='bg-white px-10 md:px-40 dark:bg-gray-900'>
        <section className=' min-h-screen'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>JD</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" /></li>
              <li> <a href="" className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>Resume</a></li>

            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>John Doe</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Freelancer providing services for programming and design content
              hn me down below and let's get cracking!</p>

          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 overflow-hidden rounded-full w-80 h-80 mt-20 md:h-96 md:w-96'>
            <Image src={Deved} alt='avatar' layout='fill' objectFit='cover' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> startups </span>
              and collaborated with talented people to create digital products for both
              business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'>I offer from a range of services, including brand design, programming and teaching.</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} alt='' width={100} height={100} />
              <h3 className='text-large font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs follow core design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>

            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} alt='' width={100} height={100} />
              <h3 className='text-large font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs follow core design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>

            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} alt='' width={100} height={100} />
              <h3 className='text-large font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs follow core design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Illustrator</p>

            </div>
          </div>
        </section>
        <section>

          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> startups </span>
              and collaborated with talented people to create digital products for both
              business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-80'>I offer from a range of services, including brand design, programming and teaching.</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg: flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={Web1} alt='' className='rounded-lg object-cover' objectFit='contain' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web2} alt='' className='rounded-lg object-cover' objectFit='contain' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web3} alt='' className='rounded-lg object-cover' objectFit='contain' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web4} alt='' className='rounded-lg object-cover' objectFit='contain' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web5} alt='' className='rounded-lg object-cover' objectFit='contain' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Web6} alt='' className='rounded-lg object-cover' objectFit='contain' />
            </div>
          </div>
        </section>
      </main>
    </div >
  )
}
