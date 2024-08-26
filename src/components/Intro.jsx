import React from 'react'

function Intro() {
  return (
    <>
      <div className='row container-fluid align-items-center' style={{height:"100vh"}}>
        <div className='col p-4'>
            <h2 className='text-center text-danger'>Protfolio</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque a, ratione sunt beatae eligendi labore blanditiis rerum quibusdam necessitatibus quasi doloribus maiores ea distinctio reiciendis tempore pariatur eius ipsa nemo.</p>
            <a href="" className='btn btn-success'>Visit</a>
        </div>
        <div className='col p-4'>
            <img src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960" alt="" className='img-fluid'/>

        </div>
        
        </div>    
    
    </>
  )
}

export default Intro
