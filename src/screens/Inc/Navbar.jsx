import React from 'react'
import cart from '../../assets/images/cart.svg'
import heart from '../../assets/images/heart.svg'

const Navbar = () => {
  return (
   

<nav class="px-5 py-5 xl:py-0 lg:py-0 md:py-0 sm:py-5">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  xl:grid xl:grid-cols-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 sm:block sm:block">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse  xl:order-2 md:order-2 lg:order-2 sm:order-1 justify-center text-[32px] font-semibold">GLOWVY</a>
  <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse w-fit ml-auto">
    
        <img src={heart} alt='heart' className='hidden xl:block lg:block md:block  xl:w-[32px] lg:w-[32px] md:w-[32px] sm:w-[20px] xl:mr-6 lg:mr-6 md:mr-6 sm:mr-3 sm:hidden'/>
        <img src={cart} alt='cart' className=' xl:w-[32px] lg:w-[32px] md:w-[32px] sm:w-[20px] xl:mr-10 lg:mr-10 md:mr-10 sm:mr-3'/>
    
      <button type="button" class="text-white bg-[#011e10] px-3 py-0  xl:px-8 xl:py-3 md:px-8 md:py-3 lg:px-8 lg:py-3 sm:px-3 sm:py-0 rounded-[10px] mr-0 ml-auto sign-up xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 text-[14px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px]">Sign Up</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary bg-[#28AF58] text-[#fff] ml-1 rounded-[8px]" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
    </button>
  </div>
  <div class="items-center justify-start hidden w-full md:flex md:w-auto md:order-1 py-5" id="navbar-cta">
    <ul class="flex space-x-10">
      <li>
        <a href="#" class="block py-2 text-[#222222] hover:text-[#000] duration-300" aria-current="page">Category</a>
      </li>
      <li>
        <a href="#" class="block py-2 text-[#222222] hover:text-[#000] duration-300">Lifestyle</a>
      </li>
      <li>
        <a href="#" class="block py-2 text-[#222222] hover:text-[#000] duration-300">Brands</a>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar