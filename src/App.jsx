import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';



export const CartContext = createContext([])
export const ProductsContext = createContext([])

const App = () => {
  const { saveCart, mainDataLoad } = useLoaderData()

  const [cart, SetCart] = useState(saveCart)
  // console.log(mainDataLoad)

  return (


    <ProductsContext.Provider value={mainDataLoad}>

      <CartContext.Provider value={[cart, SetCart]}>

        <Header></Header>
        <div className='min-h-[calc(100vh-66px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>

      </CartContext.Provider>

    </ProductsContext.Provider>


  );
};

export default App;