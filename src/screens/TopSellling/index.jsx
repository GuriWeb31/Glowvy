import React from 'react'
import topproone from '../../assets/images/topproone.png'
import cart from '../../assets/images/cart.svg'

const TopSelling = () => {
  return (
    <section className='px-5'>
        <div className='max-w-7xl m-auto'>
                     <h2 className='text-[52px] text-center  font-bold '>
              Top <span className='elegance text-[52px] text-[#60AD44] font-medium'>Selling</span>
            </h2>
             <p className='text-[#222222] text-[20px] mt-3 mr-4 mb-20 text-center'>
              This also improves soil structure and root growth (overall healthier plants.)
            </p>
            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 gap-6'>
                <div>
                    <div className='border border-[#011e10] p-5 rounded-[12px]'>
                        <img src={topproone} alt='prod1'></img>
                        <h4 className='text-[24px] font-medium mb-4'>Mycorrhizal Fungi with Beneficial Bacteria</h4>
                        <div className='flex justify-between items-center'>
                            <div><p className='text-[22px] font-medium'><span className='text-gray-400 text-[16px]'>$</span>14.95</p></div>
                            <div className='bg-[#011e10] px-5 py-[6px] rounded-[10px]'>
                                <img src={cart} alt='' className='filter invert w-6'/>
                                </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-[#011e10] p-5 rounded-[12px]'>
                        <img src={topproone} alt='prod1'></img>
                        <h4 className='text-[24px] font-medium mb-4'>Mycorrhizal Fungi with Beneficial Bacteria</h4>
                        <div className='flex justify-between items-center'>
                            <div><p className='text-[22px] font-medium'><span className='text-gray-400 text-[16px]'>$</span>14.95</p></div>
                            <div className='bg-[#011e10] px-5 py-[6px] rounded-[10px]'>
                                <img src={cart} alt='' className='filter invert w-6'/>
                                </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-[#011e10] p-5 rounded-[12px]'>
                        <img src={topproone} alt='prod1'></img>
                        <h4 className='text-[24px] font-medium mb-4'>Mycorrhizal Fungi with Beneficial Bacteria</h4>
                        <div className='flex justify-between items-center'>
                            <div><p className='text-[22px] font-medium'><span className='text-gray-400 text-[16px]'>$</span>14.95</p></div>
                            <div className='bg-[#011e10] px-5 py-[6px] rounded-[10px]'>
                                <img src={cart} alt='' className='filter invert w-6'/>
                                </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border border-[#011e10] p-5 rounded-[12px]'>
                        <img src={topproone} alt='prod1'></img>
                        <h4 className='text-[24px] font-medium mb-4'>Mycorrhizal Fungi with Beneficial Bacteria</h4>
                        <div className='flex justify-between items-center'>
                            <div><p className='text-[22px] font-medium'><span className='text-gray-400 text-[16px]'>$</span>14.95</p></div>
                            <div className='bg-[#011e10] px-5 py-[6px] rounded-[10px]'>
                                <img src={cart} alt='' className='filter invert w-6'/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default TopSelling