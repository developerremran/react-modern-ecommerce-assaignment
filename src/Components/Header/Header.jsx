import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { CartContext } from '../../App';

const Header = () => {
    const [open, setOpen] = useState(false);
    //    const ClickOpenIcon = () =>{
    //     setOpen(!open)
    //    }
 const [cart, SetCart] = useContext(CartContext)
 console.log(cart.length)
//  console.log(cartValueData)

    return (
        <>
            <div className='flex justify-between p-5 shadow-lg mb-10'>
                <NavLink to='/' className='topHeading'>Job Hunter</NavLink>

                <ul className={`md:flex hidden gap-5 menuItem md:relative md:top-0   sm:absolute  ${open ? 'sm:top-6 block' : 'sm:-top-36 '}`}>

                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <div>
                    <sup className='flex top-0 left-7'>{cart.length}</sup>
                    <NavLink to='/cart'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      
                    </svg>
                    
                    </NavLink>
                   
                    </div>
                    <NavLink to='/about-us'>About Us</NavLink>
                </ul>

                <NavLink to='/start-applied'>
                    <button className='menuItem btn md:block hidden'>Start Applying</button>
                </NavLink>

                <span className='md:hidden block' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <XMarkIcon className="h-6 w-6 text-blue-500" />
                            :
                            <Bars3Icon className="h-6 w-6 text-blue-500" />
                    }

                </span>

                <div className={` w-10/12 p-5 bg-red-300  md:hidden  absolute ${open ? 'top-16 ' : 'hidden '}`}>
                    <ul className='overflow-hidden flex flex-col gap-4  w-full'>

                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/shop'>Shop</NavLink>
                        <NavLink to='/cart'>Cart</NavLink>
                        <NavLink to='/about-us'>About Us</NavLink>

                    </ul>
                </div>

            </div>
        </>
    );
};

export default Header;