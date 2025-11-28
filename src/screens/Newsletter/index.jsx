import React from 'react'
import newsletterimage from '../../assets/images/newsletterimage.png'

const Newsletter = () => {
    return (
        <section className='px-5 py-5 pt-12'>
            <div className='max-w-7xl m-auto'>
                <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 bg-[#db744d] rounded-[10px] px-12 items-center'>
                    <div>
                        <h2 class="text-[24px] text-start font-bold text-white">Stay Us For Latest Updates</h2>
                        <div className="flex justify-start mt-5">
                            <div className="bg-[#f4ffe8] rounded-[14px] flex items-center w-[70%] max-w-2xl p-2 shadow-sm">

                                {/* Input */}
                                <input
                                    type="text"
                                    placeholder="Enter Your Mail"
                                    className="bg-[#f4ffe8] w-full px-4 py-3 text-gray-600 rounded-[10px] outline-none"
                                />

                                {/* Button */}
                                <button className="bg-[#60AD44] text-white font-medium px-10 py-3 rounded-[10px] hover:bg-[#4a9436] transition">
                                    Sent
                                </button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={newsletterimage} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter