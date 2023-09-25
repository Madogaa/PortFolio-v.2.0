import React from 'react'
import Divider from '../../Styling/Divider'
import './Contact.css'
function Contact() {

  const handleSubmit = () => {

  }

  return (
    <div className='flex justify-center items-center contact w-full text-white'>
        <form onSubmit={()=> handleSubmit()} className="text-shadow grid grid-cols-12 gap-6 font-semibold ">
            <h1 className='text-shadow text-center col-span-12 font-bold text-7xl mb-16'>Contact me!</h1>
            <p className='col-span-4'>E-mail: </p>
            <input className='col-span-8 w-full  p-2 ' placeholder='example@domain.ext' type="mail" />
            <p className='col-span-4'>Subject: </p>
            <input className='col-span-8 w-full  p-2' placeholder='Subject' type="mail" />
            <p className='col-span-4'>Message: </p>
            <textarea placeholder='Message' className='col-span-8 w-full  p-2' name="" id="" cols="30" rows="5"></textarea>
            <div className='col-span-12 text-center'>
              <button type="submit">Send</button>
            </div>
        </form>
    </div>

  )
}

export default Contact