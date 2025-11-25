import React from 'react'
import close from '../../../assets/images/close.png'

const Banner = () => {
  return (
    <section className='py-15 px-5'>
      <div className='max-w-screen-xl m-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
          <div className=''>
            <h1 className='text-[48px]'>Indulge in Pure </h1>
          </div>
          <div className=''>
            <img src={close} alt='' className='w-full rounded-t-[300px]'/>
          </div>
          <div className=''>
            <div className=''>fhkjdshdsjkfhkds</div>
          </div>
        </div>

      </div>
      </section>
  )
}

export default Banner