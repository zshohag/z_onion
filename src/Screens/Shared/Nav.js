import React, { useState } from 'react';
import logo from '../../Assets/logo2.png'
import person from '../../Assets/icons/Group 2.png'
import { BsCart2 } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';

const Nav = () => {
    
    const [ user ,setUser]  = React.useState(true)
    const [cart , setCart] =  useState(0)

    return (
        <div >
            <nav className="flex items-center max-w-screen-xl mx-auto px-4 py-3" >
                <div className="flex flex-grow   "  >
                    <img className="w-36 md:w-25  
                      cursor-pointer  " src={logo}  alt="" />
                </div>
                

                {
                    user ? 
        
                     <div className='flex items-center justify-end space-x-4 ' >

                     { 
                     cart ? 
                       <div className="relative flex cursor-pointer" >
                        <span className='  bg-red-600 w-7 h-7 text-white rounded-full flex  items-center  justify-center absolute -right-2 -top-2  ' >1</span>
                        <BsCart2 className="cursor-pointer w-8 h-8 text-gray-700  " />
                      </div>
                     :
                     <div className="relative flex cursor-pointer" >
                         <span className='  bg-red-500 w-7 h-7 text-white rounded-full flex  items-center  justify-center absolute -right-2 -top-2  ' >0</span> 
                        <BsCart2 className="cursor-pointer w-8 h-8 text-gray-700  " />
                      </div>
                     }
                        

                        <div className="w-10 h-10 rounded-full" >
                        <img src={person} alt="" />
                        </div>
                        <div>
                        <p className=" font-bold " >ZAHI HAQUE </p>
                        </div>
                        <div   >
                        <FiLogOut className="cursor-pointer w-6 h-6 text-gray-700"  />
                        </div>

                    </div>
                    
                    :

                    
                    <div className='flex  items-center justify-end space-x-6  ' >
                    <button className=" font-medium text-lg  " >Sign In</button>
                    <button className=" bg-red-500 px-6 py-3 text-white  poppins  rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" >Sign Up</button>
                    </div>


                }
               





            </nav>
        </div>
    );
};

export default Nav;