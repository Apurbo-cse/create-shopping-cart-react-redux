import React from 'react'
import Create from './Create'
import ProductCard from './ProductCard'

const Home = () => {
  return (
    <div className='row mt-4'>
        <Create/>
       <ProductCard/>
    
    </div>
  )
}

export default Home