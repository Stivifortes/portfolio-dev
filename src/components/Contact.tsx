import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Location } from "../App";
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from "yup"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'


const schema = object({
  name: string().required("Required field.").min(3,"Name must have more than 3 Characters!"),
  email: string().required("Required field.").email("Email not valid."),
  message: string().required("Required field.").min(30,"Message must have more than 30 Characters!")
})

interface Props {
  onRefChange: (ref:any,location?: Location) => void
}

interface IFormState {
  name: string,
  email: string,
  message: string
}


export default function Contact({onRefChange}: Props) {

  const { register, handleSubmit: onSubmitForm, reset, formState: {errors}} = useForm<IFormState>({resolver: yupResolver(schema)});

  const contactRef = useRef(null);
  useEffect(() => {
    onRefChange(contactRef,Location.CONTACT)
  })

  const form = useRef(null);

  const handleSubmit = (data: any,e:any) => {
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID,
      e.target, 
      import.meta.env.VITE_PUBLIC_KEY)
    .then((result) => {
        reset()
         toast.success(
          "Message sent!", 
          {position: toast.POSITION.TOP_RIGHT})        
    }, (error) => {
        console.log(error.text);
        toast.error(
          error.text, 
          {position: toast.POSITION.TOP_RIGHT})
    });
  }

  return (
    <div id="contact" className="" ref={contactRef}>
      <h2 className='text-center font-bold text-3xl text-primary-orange mt-3'>Contact Me</h2>
      <h4 className='text-center text-third-gray mb-10'>Get in touch</h4>
      <div className="flex flex-col mx-6 mb-10">
      <div className="flex justify-center items-center">
          <form 
          ref={form}
          onSubmit={onSubmitForm(handleSubmit)}
          action="" 
          method="get"
          className="flex flex-col w-full md:w-7/12">
            <div className="flex flex-col my-2 h-16">
              <input 
                type="text" 
                placeholder="Name"
                {...register("name")}
                className="p-2 bg-transparent border-2 rounnded-md focus:outline-none" 
              />
              <span className="text-red-700">{errors?.name?.message}</span>
            </div>
            <div className="flex flex-col my-2 h-16">
              <input 
                type="email" 
                {...register("email")}
                placeholder="Email"
                className="p-2 bg-transparent border-2 rounnded-md focus:outline-none" 
                />
                <span className="text-red-700">{errors?.email?.message}</span>
            </div>
            <div className="flex flex-col my-2">
              <textarea 
              {...register("message")}
              placeholder="Message"
              rows={10}
              className="p-2 bg-transparent border-2 rounnded-md focus:outline-none"
              />
              <span className="mb-4 text-red-700">{errors?.message?.message}</span>
            </div>
            <button 
            type="submit" 
            className="items-center text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white-bg bg-primary-orange drop-shadow-md hover:stroke-white">
              Send message
            </button>
          </form>
      </div>
      </div>
    </div>
    
  );
}
