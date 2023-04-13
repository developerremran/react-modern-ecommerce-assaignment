import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';



export const CartContext = createContext([])
export const ProductsContext = createContext([])

const App = () => {
  const { saveCart, mainDataLoad } = useLoaderData()

  const [cart, SetCart] = useState(saveCart)
  // console.log(mainDataLoad)
  let [isOpen, setIsOpen] = useState(false)

  const cartAlert = sessionStorage.getItem('alert')
  if(cart.length>0 && cartAlert !== 'true'){
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }

  return (


    <ProductsContext.Provider value={mainDataLoad}>

      <CartContext.Provider value={[cart, SetCart]}>

        <Header></Header>
        <div className='min-h-[calc(100vh-66px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>

      </CartContext.Provider>

    </ProductsContext.Provider>


  );
};

export default App;