import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import CartSelectItem from './Card/CartSelectItem';
import { removeAll, removeItemDb } from './LocalStroge/FakeDb';
import { CartContext } from '../App';
import { toast } from 'react-hot-toast';


const Cart = () => {
    // const { cart, mainDataLoad } = useLoaderData()
    const [cart, SetCart] = useContext(CartContext)

  let total = 0;
  if(cart.length>0){
    for(const product of cart){
        total = total + product.price * product.quantity
    }
  }

  const removeDbItem =(id)=>{

    const remaining =  cart.filter(product => product.id !== id)
    SetCart(remaining)
    removeItemDb(id)
  }


  const removeLocalDb =()=>{
    
    removeAll()
    SetCart([])
  }

  const orderComplete =()=>{
    if(cart.length>0){
        SetCart([])
        removeAll()
        return toast.success('Order Done')
    }else{
        toast.error('Cart Empty')
    }
   
  }


    return (
        <>
            <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
                <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
                    <h2 className='text-xl font-semibold'>
                        {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
                    </h2>
                    <ul className='flex flex-col divide-y divide-gray-700'>
                        {cart.map(product => (
                            <CartSelectItem
                                key={product.id}
                                product={product}
                                removeDbItem={removeDbItem }
                               
                            />
                        ))}
                        <div className='flex flex-col items-end'>

                        <h2>Total Amount : {total}</h2>
                        <p>Not including taxes and shipping costs</p>

                        </div>
                        <div className='flex justify-between mt-5 py-5'>
                            {cart.length>0 ?
                          <button onClick={ removeLocalDb} className='btn'>Clear Cart</button> 
                         :
                        
                         <button className='btn'><NavLink to='/shop'>Back To Shop</NavLink></button>
                         
                         }
                            
                           
                            <button className='btn' onClick={orderComplete}>Place Order</button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Cart;