import React from 'react'
import blogone from '../../assets/images/blogone.png';
import blogtwo from '../../assets/images/blogtwo.png';
import blogthree from '../../assets/images/blogthree.png';
import arrowright from '../../assets/images/arrowright.svg';

const BestSelling = () => {
  return (
    <section className='px-5 py-9'>
       <div className='max-w-7xl m-auto '>
        <h2 class="text-[52px] text-start font-bold">Our Best <span class="elegance text-[52px] text-[#60AD44] font-medium">Selling</span> Items</h2>
        <p class="text-[#222222] text-[20px] mt-3 mr-4 mb-16 text-start">Tool and strategies modern teams need to help their companies grow.</p>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-16'>
            <div>
              <img src={blogone} alt=''/>
              <h4 className='text-[20px] text-[#60AD44] font-medium'>Orange Serum</h4>
              <div className='flex justify-between items-center'>
                 <div>
                    <h3 className='text-[24px] font-medium'>Hyaluronic Acid Serum</h3>
                 </div>
                 <div>
                    <img src={arrowright} alt='' className='w-10' />
                 </div>
              </div>
              <p class="text-[#707070] text-[20px] mt-3 mr-4">The Ordinary Hyaluronic Acid 2% + B5, Neutrogena Hydro Boost Hydrating Serum.</p>
            </div>
            <div>
              <img src={blogtwo} alt=''/>
              <h4 className='text-[20px] text-[#60AD44] font-medium'>Orange Serum</h4>
              <div className='flex justify-between items-center'>
                 <div>
                    <h3 className='text-[24px] font-medium'>Hyaluronic Acid Serum</h3>
                 </div>
                 <div>
                    <img src={arrowright} alt='' className='w-10' />
                 </div>
              </div>
              <p class="text-[#707070] text-[20px] mt-3 mr-4">The Ordinary Hyaluronic Acid 2% + B5, Neutrogena Hydro Boost Hydrating Serum.</p>
            </div>
            <div>
              <img src={blogthree} alt=''/>
              <h4 className='text-[20px] text-[#60AD44] font-medium'>Orange Serum</h4>
              <div className='flex justify-between items-center'>
                 <div>
                    <h3 className='text-[24px] font-medium'>Hyaluronic Acid Serum</h3>
                 </div>
                 <div>
                    <img src={arrowright} alt='' className='w-10' />
                 </div>
              </div>
              <p class="text-[#707070] text-[20px] mt-3 mr-4">The Ordinary Hyaluronic Acid 2% + B5, Neutrogena Hydro Boost Hydrating Serum.</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default BestSelling