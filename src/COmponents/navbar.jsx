import React, { useState } from 'react';
 

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="backdrop-blur-[7px] ">
      <div className="max-w--10xl   mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className='absolute cursor-pointer  text-black font-bold text-md md:text-2xl top-4'>

            Hubnex Educate
        </div>
        <div className="flex items-center justify-end h-16 ">
          <div className="flex items-center ">
            
            <div className="hidden md:block">
              <div className="ml-16 flex items-baseline space-x-8">
        
                <a href="#" className="text-black px-1   py-2 rounded-md text-sm md:text-lg font-medium">Home</a>
                <a href="#" className="text-black px-1   py-2 rounded-md text-sm md:text-lg font-medium">Workshops</a>
                <a href="#" className="text-black px-1 py-2 rounded-md text-sm md:text-lg font-medium">Services</a>
                <a href="#" className="text-black px-1   py-2 rounded-md text-sm md:text-lg font-medium">Sign In</a>
                
                <div className="justify-center self-stretch px-4 py-2.5 font-medium tracking-tight text-white bg-blue-500 cursor-pointer   rounded-xl">
          Get started
        </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:bg-black focus:text-white transition duration-150 ease-in-out">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Workshops</a>
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-black block px-3 py-2 rounded-md text-base font-medium">Sign In</a>
           <div className="justify-center text-center  w-40 px-4 py-2.5 font-medium tracking-tight text-white bg-blue-500 rounded-xl">
          Get Started
        </div>
        </div>
      </div>
    </nav>
  );
};

export default MyComponent;
