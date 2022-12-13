import  { useEffect, useRef } from 'react'
import {Location} from '../App'
import { AcademicCapIcon,LanguageIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
interface Props {
  onRefChange: (ref:any, location: Location) => void
  executeScroll: () => void

}

export default function About({onRefChange, executeScroll}: Props) {
  const aboutRef = useRef(null);

  useEffect(() => {
    onRefChange(aboutRef, Location.ABOUT)
  })
  
  return (
    <div id='about' className='m-8 p-8' ref={aboutRef}>
      <h3 className='text-center font-bold text-3xl text-primary-orange mt-3'>About Me</h3>
      <h4 className='text-center text-third-gray mb-7'>My Intro</h4>
      <div className='flex items-center justify-center max-md:flex-wrap gap-5'>
        {/* <div className='w-3/4'>
          <div className='w-fit bg-primary-orange rounded-2xl shadow-xl'>
            <img src="public/assets/about-image.png" alt="stiven-avatar" />
          </div>
        </div> */}
        <div className=''>
          <p className='max-md:text-center max-md:p-4'>
          Experienced Software Developer with expertise in design, installation, testing and maintenance of software systems. Equipped with a diverse and promising skill-set. With more than 2 years' experience developing a wide range of tools for Web and Mobile. Proficient in various platforms like Microsoft (Certified Microsoft Teams Application Developer), and programming languages not limited to Java, Kotlin, JavaScript, SQL, NodeJs, C#.
          </p>
            <div className='flex justify-around mt-16 max-sm:flex-wrap max-sm:justify-center max-sm:items-center gap-4 my-8'>
              <div className='inline-block max-sm:my-2 bg-secondary-gray p-4 rounded-lg'>
                <BriefcaseIcon width={24} color={"#FFA97A"}/>
                <span className='text-white-bg'>Completed</span>
                <p className='text-slate-400 dark:text-third-gray'>10+ Projects</p>
              </div>
              <div className='inline-block max-sm:my-2 bg-secondary-gray p-4 rounded-lg'>
                <AcademicCapIcon width={24} color={"#FFA97A"}/>
                <span className='text-white-bg'>Degree</span>
                <p className='text-slate-400 dark:text-third-gray'>Computer Science</p>
              </div>
              <div className='inline-block max-sm:my-2 bg-secondary-gray p-4 rounded-lg'>
                <LanguageIcon width={24} color={"#FFA97A"}/>
                <span className='text-white-bg'>Languages</span>
                <p className='text-slate-400 dark:text-third-gray'>English - French</p>
              </div>
            </div>
          <div className='flex justify-center'>
          <button onClick={() => executeScroll()} className='bg-primary-orange py-1 max-md:m-auto max-md:block px-4 rounded-md text-center text-white-bg mt-10 dark:text-black font-bold shadow'>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}