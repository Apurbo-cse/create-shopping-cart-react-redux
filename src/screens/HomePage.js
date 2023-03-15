import React from 'react'
import { useSelector } from 'react-redux'
import Create from '../components/Create'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
    const products  = useSelector((state) => state.products)
   

  return (
    <div className='row my-4'>
    <Create/>
    {products.map((product) => (
        <ProductCard  product={product} key={product.id}  />
    ))}
    </div>
  )
}

export default HomePage