import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
import CardItems from './Card/CardItems';
import { addDb, itemCollected } from './LocalStroge/FakeDb';
import { CartContext, ProductsContext } from '../App';

const Shop = () => {

    // const productsData = useLoaderData();
    const productsData = useContext(ProductsContext)
    console.log(productsData)
   
    const [cart, SetCart] = useContext(CartContext)
    const addDbLocal = product =>{
      let newCartData = {};
      const exits = cart.find(exitsProduct=> exitsProduct.id === product.id)
      if(!exits){
        product.quantity = 1;
        newCartData = [...cart, product]
      }else{
        const rest = cart.filter(restProduct=> restProduct.id !== product.id)
        product.quantity = product.quantity + 1;
        newCartData = [...rest, exits]
      }
    
      SetCart(newCartData)
      // itemCollected(id)
      addDb(product.id)
    }


    return (
        <div className='grid grid-cols-3 gap-10 box'>
          {
            productsData.map(product => <CardItems key={product.id} product={product} addDbLocal={addDbLocal}></CardItems>)
          }
        </div>
    );
};

export default Shop;