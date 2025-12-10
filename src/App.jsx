import { useEffect, useState } from 'react'
// import HelloWorldTailwind from './components/HelloWorldTailwind'
import ProductList from './components/ProductList'
import {productService} from './services/productService'

function App() {

  const [products,setProducts]=useState([])

  useEffect(()=>{
    loadProducts()

  },[])


  const loadProducts= async () => {
    try {
      const productsResponse = await productService.getAll()
      setProducts(productsResponse)
      printProducts(productsResponse)

    } catch(error){
      console.log(`Error from main: ${error}`)
    }
  }

  function printProducts(list){
    list.forEach((product) => {
      console.log(`${product.name} cuesta: $${product.price}`)
    })
  }


  return <><ProductList products={products}/>
  
  </>



}

export default App
