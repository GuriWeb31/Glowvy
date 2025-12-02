import React from 'react'
import close from '../../assets/images/close.png'
import eyes from '../../assets/images/eyes.png'
import bottle from '../../assets/images/bottle.png'
import happywomen from '../../assets/images/happywomen.jpg'
import Accordion from '../Accordion'

const Banner = () => {
  return (
    <section className='py-0 px-5 xl:py-15 xl:px-5 lg:py-15 lg:px-5 md:py-15 md:px-5 sm:py-0 sm:px-5'>
      <div className='max-w-screen-xl m-auto'>
        <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3'>
          <div className='pt-0 xl:pt-10 lg:pt-10 md:pt-10 sm:pt-0 animate-slideLeft'>
            <h1 className='text-[68px] leading-20 font-semibold'>Indulge in Pure<span className='inline-flex'><img src={eyes} alt='' className='w-full ml-5' /></span> </h1>
            <h1 className='elegance text-[68px] text-[#60AD44]'>Elegance</h1>

            <h2 className='text-[38px] xl:mt-17 md:mt-17 lg:mt-17 sm:mt-8 mt-8'>$39.00  </h2>
            <p className='text-[#222222] text-[20px] xl:mt-10 lg:mt-10 md:mt-10 sm:mt-0 mt-0  xl:mr-4 lg:mr-4 md:mr-4 sm:mr-0 mr-0' >Fresh energy and healthy time with refreshing minty moods</p>
            <button className='bg-[#28AF58] text-white px-10 py-4 text-[18px] rounded-[8px] mt-8 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-8 mb-8'>Add to cart</button>
          </div>
          <div className=''>
            <div className='relative animate-fadeUp '>
              <div className='absolute top-80 left-[-190px]'>
                <div className='flex gap-3 items-center backdrop-blur-xl bg-white/30 p-3 pr-8 rounded-2xl shadow-2xl'>
                  <div>
                     <img src={happywomen} alt='' className='w-15 h-15 rounded-full object-cover '/>
                  </div>
                  <div>
                    <p className='text-[18px]'>Lucifer Jens</p>
                    <p className='text-[10px]'>Fashions Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={close} alt='' className='w-full rounded-t-[300px] '/>
          </div>
          <div className='pt-12'>
            <div className=''>
              <img src={bottle} alt='' className='w-80 m-auto animate-slideRight'/>

              <div className='coll'>
                 <Accordion />
              </div>
            </div>
          </div>
        </div>

      </div>
      </section>
  )
}

export default Banner