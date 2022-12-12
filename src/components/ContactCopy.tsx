import React, { useEffect, useRef, useState } from "react";
import { Location } from "../App";
import Title from "./Title";

interface Props {
  onRefChange: (ref:any,location?: Location) => void
}

interface IFormState {
  name: string,
  email: string,
  message: string
}


export default function Contact({onRefChange}: Props) {

  const initialState = {
    name: '',
    email: '',
    message: ''
  }
  const [formState, setFormState] = useState<IFormState>(initialState)
  const contactRef = useRef(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) {
    const name = e.target.name
    const value = e.target.value

    setFormState(values => ({...values, [name]: value}))
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    
    const { email, message, name } = formState

    if(!email || !message || !name) {
      alert('All fields are required')
      return
    }

    console.log(formState)
    setFormState(initialState)
    alert('Message was succeful sent. I will contact you soon!')
  }
  useEffect(() => {
    onRefChange(contactRef,Location.CONTACT)
  })
  
  return (
    <div id="contact" className="" ref={contactRef}>
      <h2 className='text-center font-bold text-3xl text-primary-orange mt-3'>Contact Me</h2>
      <h4 className='text-center text-third-gray mb-10'>Get in touch</h4>
      <div className="flex flex-col mx-6 mb-10">
      <div className="flex justify-center items-center">
          <form 
          action="" 
          method="get"
          className="flex flex-col w-full md:w-7/12">
            <input 
              type="text" 
              name="name"
              value={formState.name}
              required 
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounnded-md focus:outline-none" 
              onChange={(e) => handleChange(e)}
            />
            <input 
              type="email" 
              name="email"
              required
              value={formState.email}
              placeholder="Email"
              className="my-2 p-2 bg-transparent border-2 rounnded-md focus:outline-none" 
              onChange={(e) => handleChange(e)}
            />
            <textarea 
            name="message" 
            placeholder="Message"
            required
            value={formState.message}
            rows={10}
            className="p-2 mb-4 bg-transparent border-2 rounnded-md focus:outline-none"
            onChange={(e) => handleChange(e)}
            />
            <button 
            type="submit" 
            onClick={(e)=>handleSubmit(e)}
            className="items-center text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white-bg bg-primary-orange drop-shadow-md hover:stroke-white">
              Work With Me
            </button>
          </form>
      </div>
      </div>
    </div>
    
  );
}
