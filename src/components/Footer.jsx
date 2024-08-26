import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='bg-primary row container-fluid'>
        <div className='col mt-2'>
            <h1>Protfoilio</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed suscipit voluptates dolore obcaecati, nostrum aliquam, officia porro at soluta odit voluptatum, aspernatur aliquid eveniet sint nobis blanditiis in sapiente quae.</p>
        </div>
        <div className='col mt-5'>
            <p>it is a link 1  <a href=""> read more...</a></p>
            <p>it is a link 2   <a href=""> read more...</a></p>
            <p>it is a link 3  <a href=""> read more...</a></p>
          
        </div>
        <div className='col mt-2'>
            <h3 style={{textAlign:'center'}}>Information</h3>
            <textarea name="" className='form-control'  placeholder='enter your information' id=""></textarea>
            <button className='btn btn-success mt-2'> submit</button>
        </div>
        <h3 className='text-center'>protfolio in &copy; in ltd</h3>
       

    </div>
    
    
    </>
  )
}

export default Footer
