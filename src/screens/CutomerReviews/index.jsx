import React from 'react'
import stars from '../../assets/images/stars.svg'
import profileadmin from '../../assets/images/profileadmin.jpg'

const CustomerReviews = () => {
  return (
    <section className='px-5 py-8 pt-10'>
        <div className='max-w-7xl m-auto'>
                <h2 class="text-[52px] text-center  font-bold mb-16">Our Customer <span class="elegance text-[52px] text-[#60AD44] font-medium">Reviews</span></h2>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-6' >
              <div>
                <div className='border border-[#c5c2bc] p-5 rounded-[12px] hover:bg-[#f4f1e9] duration-300'>
                    <div className='flex gap-1'>
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                    </div>
                   <p className='text-[#707070] text-[18px] mt-2'>Teamollo of owrk, our brand now has the image we were looking for - playful yet professionals. We have recived Learn More...</p>
                   <div className='flex items-center gap-3 mt-6'>
                    <div> <img src={profileadmin} alt='' className='h-18 w-18 object-cover rounded-full object-bottom-right' /> </div>
                    <div> 
                        <h3 className='text-[20px] font-medium'>Ashley Cooper</h3> 
                        <p className='text-[12px] text-[#8b8b8b]'>Business Manager</p>
                    </div>
                   </div>
                </div>
              </div>
              <div>
                <div className='border border-[#c5c2bc] p-5 rounded-[12px] hover:bg-[#f4f1e9] duration-300'>
                    <div className='flex gap-1'>
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                    </div>
                   <p className='text-[#707070] text-[18px] mt-2'>Teamollo of owrk, our brand now has the image we were looking for - playful yet professionals. We have recived Learn More...</p>
                   <div className='flex items-center gap-3 mt-6'>
                    <div> <img src={profileadmin} alt='' className='h-18 w-18 object-cover rounded-full object-bottom-right' /> </div>
                    <div> 
                        <h3 className='text-[20px] font-medium'>Ashley Cooper</h3> 
                        <p className='text-[12px] text-[#8b8b8b]'>Business Manager</p>
                    </div>
                   </div>
                </div>
              </div>
              <div>
                <div className='border border-[#c5c2bc] p-5 rounded-[12px] hover:bg-[#f4f1e9] duration-300'>
                    <div className='flex gap-1'>
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                       <img src={stars} alt='' className='yellow-star' />
                    </div>
                   <p className='text-[#707070] text-[18px] mt-2'>Teamollo of owrk, our brand now has the image we were looking for - playful yet professionals. We have recived Learn More...</p>
                   <div className='flex items-center gap-3 mt-6'>
                    <div> <img src={profileadmin} alt='' className='h-18 w-18 object-cover rounded-full object-bottom-right' /> </div>
                    <div> 
                        <h3 className='text-[20px] font-medium'>Ashley Cooper</h3> 
                        <p className='text-[12px] text-[#8b8b8b]'>Business Manager</p>
                    </div>
                   </div>
                </div>
              </div>
            </div>
            <button className="bg-[#63ad44] text-white px-10 py-3 text-[18px] rounded-[8px] mt-10 hover:bg-[#011e10] duration-300 m-auto block">
              See All Reviews
            </button>
        </div>
    </section>
  )
}

export default CustomerReviews