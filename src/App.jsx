import { use, useEffect, useState } from 'react'
// import HelloWorldTailwind from './components/HelloWorldTailwind'
import ProductList from './components/ProductList'
import {productService} from './services/productService'
import Button from './components/Button'
import  ProductForm  from './components/ProductForm'

function App() {

  const [products,setProducts]=useState([])
  const [showForm,setShowForm]=useState(false)

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


  return (
  <>
    {!showForm && (
      <Button
        type="primary"
        text="New Product"
        onClick={() => setShowForm(true)}
        disabled={false}
        
      />
    )}

    {showForm && (
      <ProductForm
        onSubmit={()=> setShowForm(false)}
        onCancel={()=> setShowForm(false)}
      />
    )}

    <ProductList products={products} />
  </>
);


}

export default App

