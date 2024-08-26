import React from 'react'

function Works() {
  return (
   <>
   <h1 className='text-center text-danger mb-5'>Works</h1>
      {/* <div className='d-flex justify-content-around flex-wrap p-3'> */}
      <div className='d-flex justify-content-around'>
        <div className='card' style={{width:'18rem'}}>
            <img src="https://carwow-uk-wp-3.imgix.net/04_ss300p_ehra-lessien-1-scaled.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600" alt="" style={{height:'200px'}} className='card-img-top' />
            <div className="card-body">
              <h5 className='card-title'>heading</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
         </div>
         <div className='card' style={{width:'18rem'}}>
            <img src="https://www.usnews.com/cmsmedia/f5/4b/efa92f4c4dcebb2af996dfc4c01f/2023-lucid-air-1.jpg" alt="" style={{height:'200px'}} className='card-img-top' />
            <div className="card-body">
              <h5 className='card-title'>heading</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
         </div>
         <div className='card' style={{width:'18rem'}}>
            <img src="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg?w=768&width=768&q=75&format=webp" alt="" style={{height:'200px'}} className='card-img-top' />
            <div className="card-body">
              <h5 className='card-title'>heading</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
         </div>
         <div className='card' style={{width:'18rem'}}>
            <img src="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" alt="" style={{height:'200px'}} className='card-img-top' />
            <div className="card-body">
              <h5 className='card-title'>heading</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
         </div>
       </div>
   
   </>
  )
}

export default Works
