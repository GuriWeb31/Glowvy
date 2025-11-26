import React from 'react'
import bottleone from '../../assets/images/bottleone.png'
import bottletwo from '../../assets/images/bottletwo.png'

const Benifits = () => {
    return (
        <section className='px-5 py-32'>
            <div className='max-w-screen-xl m-auto'>
                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-10'>
                    <div>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <img src={bottleone} alt='' className='protransform w-[200px] border border-[#b9b9b9] p-3 rounded-[8px]'/>
                            </div>
                            <div>
                               <p className='text-[#707070] text-[20px] mt-3 mr-4'>Rich in vitamins A, C, E, and minerals like calcium <br></br>and iron</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center mt-10'>
                            <div>
                                <img src={bottletwo} alt='' className='protransform w-[200px] border border-[#b9b9b9] p-3 rounded-[8px]'/>
                            </div>
                            <div>
                               <p className='text-[#707070] text-[20px] mt-3 mr-4'>Rich in vitamins A, C, E, and minerals like calcium <br></br>and iron</p>
                            </div>
                        </div>
                    </div>
                    <div>
                       <div className='flex gap-4 items-center'>
                            <div>
                                <img src={bottletwo} alt='' className='protransform w-[200px] border border-[#b9b9b9] p-3 rounded-[8px]'/>
                            </div>
                            <div>
                               <p className='text-[#707070] text-[20px] mt-3 mr-4'>Rich in vitamins A, C, E, and minerals like calcium <br></br>and iron</p>
                            </div>
                        </div>
                        <div className='flex gap-4 items-center mt-10'>
                            <div>
                                <img src={bottleone} alt='' className='protransform w-[200px] border border-[#b9b9b9] p-3 rounded-[8px]'/>
                            </div>
                            <div>
                               <p className='text-[#707070] text-[20px] mt-3 mr-4'>Rich in vitamins A, C, E, and minerals like calcium <br></br>and iron</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-[52px] leading-16 font-bold'>The Benifit of <br></br>This <span className='elegance text-[52px] text-[#60AD44] font-medium'>Product</span></h1>
                        <p className='text-[#222222] text-[20px] mt-3 mr-4'>This powders are typically used as supplements in, smoothies, teas, or as ingredients in natural remedies</p>
                    <button className='bg-[#63ad44] text-white px-10 py-3 text-[18px] rounded-[8px] mt-8 hover:bg-[#011e10] duration-300'>Explore Us</button>
                    </div>
                    
                </div>

            </div>
        </section>

    )
}

export default Benifits