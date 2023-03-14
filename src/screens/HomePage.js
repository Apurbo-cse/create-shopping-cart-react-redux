import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Create from '../components/Create'
import ProductCard from '../components/ProductCard'
import { addToCart } from '../redux/product/actions'

const HomePage = () => {
  const dispatch = useDispatch();
    const products  = useSelector((state) => state.products)
    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    }

  return (
    <div className='row my-4'>
    <Create/>
    {products.map((product) => (
        <ProductCard  product={product} key={product.id}  onClick={() => handleAddToCart(product)}/>
    ))}
    </div>
  )
}

export default HomePage