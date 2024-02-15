import ProductCard from '@/components/ProductCard'
import { BASE_URL } from '@/config/apiconfig'
import React, { useEffect, useState } from 'react'

export default  function index({ products }) {
  return (
    <>
      <div className='container flex flex-wrap m-auto'>
        {
          products &&
          products.map((product, index) => (
            <ProductCard productName={product.product_name} key={index} />
          ))
        }
      </div>


      <div>index</div>
    </>
  )
}

export async function getServerSideProps() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  const res = await fetch(`https://localhost:7037/api/v1/Product/getall`)
  const data = await res.json()
  const products = data.products;
  return { props: { products } }
}