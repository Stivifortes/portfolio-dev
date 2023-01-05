import React from "react";

export type Project = {
  title: string,
  imgUrl: string,
  stack: string[],
  link: string,
};
export default function PortfolioItem({imgUrl, link, stack, title}: Project) {
  return <a 
  href={link != null ? link : undefined}
  target='"_blank"' 
  className="border-2 rounded-md border-primary-orange overflow-hidden hover:scale-105 duration-300 gap-2">
    <img 
    src={imgUrl} 
    className='w-full h-36 md:h-48 object-cover cursor-pointer' 
    />
    <div className="w-full p-4">
      <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
      <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
        {stack.map(item => (
          <span className="inline-block px-2 py-1 font-semibold border-2 border-primary-orange rounded-md"
          key={item}>
            {item}
          </span>
        ))}
      </p>
    </div>
  </a>;
}
