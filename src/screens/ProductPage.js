import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const ProductPage = () => {
    const products  = useSelector((state) => state.products)
  return (
    <div className='row my-4'>
        
    {products.map((product) => (
        <ProductCard  product={product} key={product.id}  />
    ))}
    </div>
  )
}

export default ProductPage