import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null);

  //close menu when click outside
  useEffect(() => {
    function handleClickOutside(event){
      if(menuRef.current && !menuRef.current.contains(event.target) && 
        buttonRef.current && !buttonRef.current.contains(event.target)){
        setIsOpen(false)
      }
    }
      window.addEventListener("click", handleClickOutside)
      return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <>
   <div className='relative z-50'>
    <nav className='bg-gray-900 p-4 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold font-heading'>Fine Dine</h1>

            {/* desktop Menu */}
            <div className='hidden md:flex space-x-6'>
                <Link to="/" className='hover:text-gray-300 font-body text-xl'>Home</Link>
                <Link to="/menu" className='hover:text-gray-300 font-body text-xl'>Menu</Link>
                <Link to="/contact" className='hover:text-gray-300 font-body text-xl'>Contact</Link>
                <Link to="/about" className='hover:text-gray-300 font-body text-xl'>About</Link>
            </div>

             {/* mobile menu */}
            <button
            ref={buttonRef} 
            className='md:hidden focus:outline-none cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
            >
              <GiHamburgerMenu />
            </button>
        </div>

        {/* Mobile menu */}
        <motion.div
        ref={menuRef}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen? 1 : 0, y: isOpen? 0 : -10 }}
        transition={{duration:0.3, ease:"easeInOut"}}
        className={`absolute top-15 left-0 w-full bg-gray-900 text-center transition-all ${isOpen ? "block" : "hidden" }`}
        >

          <div className='md:hidden flex flex-col  space-y-4 py-4'>
            <Link to="/" className='text-xl font-bold hover:text-gray-300 font-body' onClick={()=>setIsOpen(false)}>Home</Link>
            <Link to="/about" className='text-xl font-bold hover:text-gray-300 font-body' onClick={()=>setIsOpen(false)}>About</Link>
            <Link to="/menu" className='text-xl font-bold hover:text-gray-300 font-body' onClick={()=>setIsOpen(false)}>Menu</Link>
            <Link to="/contact" className='text-xl font-bold hover:text-gray-300 font-body' onClick={()=>setIsOpen(false)}>Contact</Link>
          </div>

        </motion.div>
        
         
        
        

       
        
    </nav>
    </div> 
    </>
  )
}

export default Navbar