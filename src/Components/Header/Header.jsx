import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Header = () => {
   const [open, setOpen] = useState(false);
//    const ClickOpenIcon = () =>{
//     setOpen(!open)
//    }

    return (
        <>
        <div className='flex justify-between p-5 shadow-lg mb-10'> 
            <NavLink to='/' className='topHeading'>Job Hunter</NavLink>

            <ul className={`md:flex hidden gap-5 menuItem md:relative md:top-0   sm:absolute  ${open ? 'sm:top-6 block' : 'sm:-top-36 '}`}>
             
                <NavLink to='/Statistics'>Statistics</NavLink>
                <NavLink to='/Applied-jobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </ul>

            <NavLink to='/start-applied'> 
                <button className='menuItem btn md:block hidden'>Start Applying</button>
            </NavLink>

            <span className='md:hidden block' onClick={()=>setOpen(!open)}>
             {
                open ?
                <XMarkIcon className="h-6 w-6 text-blue-500" />
                 :
                <Bars3Icon className="h-6 w-6 text-blue-500" />  
             }
             
            </span>

            <div className={` w-10/12 p-5 bg-red-300  md:hidden  absolute ${open ? 'top-16 ' : 'hidden '}`}>
                <ul className= 'overflow-hidden flex flex-col gap-4  w-full'> 
                <NavLink to='/Statistics' className='hover:bg-slate-400'>Statistics</NavLink>
                <NavLink to='/Applied-jobs'>Applied Jobs</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/start-applied'>
                <button className='menuItem btn '>Start Applying</button>
                </NavLink>
                </ul>
            </div>
            
        </div>
        </>
    );
};

export default Header;