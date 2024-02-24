import { useRouter } from 'next/router'
import React from 'react'

function Detail({product}) {

  return (
    <div className='my-5'>
      <h1>{product.title}</h1>
    </div>
  )
}

export async function getServerSideProps(router) {
  const res = await fetch(`http://localhost:4000/products/${router.query.id}`) 
  const product = await res.json()
  console.log(product);
  return { props: { product } }
}

export default Detail

