import { itemCollected } from "../LocalStroge/FakeDb";


const getLocalCartData= async ()=>{
   const getLocalData = itemCollected();     

    const mainData = await fetch ('/public/data/products.json')
    const mainDataLoad = await mainData.json() ;
    let saveCart = [];
    for(const id in getLocalData){
        const foundData = mainDataLoad.find(product => product.id === id)
        if(foundData){
            foundData.quantity = getLocalData[id]
            saveCart.push(foundData);
        }
    }
    return {saveCart, mainDataLoad  }
}
export default getLocalCartData;

