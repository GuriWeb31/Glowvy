import React from 'react'
import fb from '../../assets/images/fb.svg'
import insta from '../../assets/images/insta.svg'
import ld from '../../assets/images/ld.svg'

const Footer = () => {
  return (
    <section className='px-5 border-t-1 rounded-r-2xl rounded-l-2xl mt-18'>
      <div className='max-w-7xl m-auto py-15'>
         <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-10'>
            <div>
              <h2 className='text-[32px] font-semibold pb-3'>GLOWVY</h2>
              <p className='text-[18px]'>Experience the next generation</p>
              <div className='flex gap-3 pt-4'>
                <div> <img src={fb} alt='facebook' className='w-[30px]'/></div>
                <div> <img src={insta} alt='instagram' className='w-[30px]'/></div>
                <div> <img src={ld} alt='linkedin' className='w-[30px]'/></div>
                
              </div>

            </div>
            <div className='pl-20'>
              <h3 className='text-[20px] font-semibold pb-4 '>Sitemap</h3>
              <p className='text-[16px] pb-3 text-[#424242]'>Home</p>
              <p className='text-[16px] pb-3 text-[#424242]'>About</p>
              <p className='text-[16px] pb-3 text-[#424242]'>All Product</p>
              <p className='text-[16px] text-[#424242]'>How to use</p>
            </div>
            <div>
              <h3 className='text-[20px] font-semibold pb-4'>Legal</h3>
              <p className='text-[16px] pb-3 text-[#424242]'>Terms of Services</p>
              <p className='text-[16px] text-[#424242]'>Privacy Policy</p>
            </div>
            <div>
              <h3 className='text-[38px] font-semibold pb-3'>Lets's Talk Us</h3>
             <form className='flex gap-2 '>
              <input type='text' className='border p-3 w-[100%] rounded-[6px]' placeholder='Email Address' id='email' required/>
              <button type='submit' className='bg-[#28AF58] text-white px-5 p-3 text-[18px] rounded-[6px]'>Sent</button>
             </form>
            </div>
         </div>
      </div>
         <div className='max-w-7xl m-auto  border-t-1 border-gray-300 pb-4 pt-4'>
          <p>2024 All Copyright reserve Smart grower</p>
         </div>
    </section>
  )
}

export default Footer