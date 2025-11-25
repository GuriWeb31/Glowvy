import React from 'react'
import cart from '../../assets/images/cart.svg'
import heart from '../../assets/images/heart.svg'

const Navbar = () => {
  return (
   

<nav class="px-5">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto grid grid-cols-3">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse  xl:order-2 md:order-2 lg:order-2 sm:order-1 justify-center text-[32px] font-semibold">GLOWVY</a>
  <div class="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse w-fit ml-auto">
    
        <img src={heart} alt='heart' className=' w-[32px] mr-6'/>
        <img src={cart} alt='cart' className=' w-[32px] mr-10'/>
    
      <button type="button" class="text-white bg-[#011e10] px-8 py-3 rounded-[10px] ml-auto">Sign Up</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-cta" aria-expanded="false">
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