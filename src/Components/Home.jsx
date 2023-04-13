import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className='w-full bg-gray-300 bannerH text-center flex flex-col items-center justify-center gap-8' >

            <h2 className='bannerHeading'>Welcome To Job Hunter</h2>
            <p className=''>Best JOb platform for buying high quality Smart Work <br /> Home Appliances at extremely affordable Price.</p>
            <div>
                <Link to='/shop'>
                <button className='btn'>Shop Now</button>
                </Link>
               <Link to='/about-us'>
               <button className='btn'>Learn More</button>
               </Link>
            </div>
        </div>
         <div className='flex items-center justify-center -mt-32'>
            <img  src="./../../public/hero-bf3d5e6d.jpg" alt="" />
         </div>
        </>
    );
};

export default Home;
