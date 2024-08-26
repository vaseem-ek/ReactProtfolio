import React from 'react'

function Contact() {
  return (
    <>
    <div className='container-fluid'> 
        <h1 className='text-center mb-5'>Contact</h1>
        <textarea name="" className='form-control mb-3' placeholder='Enter your message..' id=""></textarea>
        <input type="email" className='form-control mb-3' placeholder='Enter your email' />
        <button className='btn btn-success mb-3'>Submit</button>
    </div>
    </>
  )
}

export default Contact
