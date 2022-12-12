import React from 'react'

type Props = {
  id: string,
  children: any
};

export default function Title({ children, id } : Props) {
  return (
    <h1
    id={id && id}
    className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white"
    >
      {children}
    </h1>
  )
}
