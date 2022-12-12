import React from "react";

type Props = {
  executeScroll: () => void
}
export default function Intro({executeScroll}: Props) {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h2>Hello, I'm</h2>
      <h1 className="text-4xl md:text-7x1 dark:text-white-bg mb-1 md:mb-3 font-bold">Stiven Fortes</h1>
      <h3 className="text-primary-orange font-bold">Software Engineer</h3>
      <div className="m-4 w-56 flex justify-between">
        <a href="https://drive.google.com/file/d/1bAicHihr47k8jjRA4rDdKDskicIV9S1b/view?usp=sharing" target='_blank'>
        <button className="dark:bg-black text-black dark:text-white outline-none text-sm border border-primary-orange rounded py-1 px-3 shadow">Download CV</button>
        </a>
        <button onClick={() => executeScroll()} className="bg-primary-orange text-white dark:text-black font-bold outline-none text-sm border border-primary-orange rounded py-1 px-3 shadow">About me</button>
      </div>
      <div className="w-56 max-sm:w-44 m-8 bg-primary-orange rounded-t-custom srounded-b-lg shadow-xl mb-8 rounded-b-md">
        <img src="src/assets/intro-image.png" alt="stiven-avatar" />
      </div>
    </div>
  );
}
