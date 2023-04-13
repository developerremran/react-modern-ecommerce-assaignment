import React from 'react';

const CardItems = ({product,addDbLocal}) => {
    const {price, picture,name, category,id} = product;



    return (
        <div>
            <div className=' bg-gray-200 p-10'>
                <img className='shadow-lg mb-5' src={picture} alt="" />
                <h2 className='topHeading mb-5'>{name}</h2>

                <p>Category : {category}</p>
                <p className='font-bold'>Price : {price}</p>
                <button className='btn w-full p-3 font-bold mt-5 ' onClick={()=> addDbLocal(product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default CardItems;