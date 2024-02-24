import ProductCard from '@/components/ProductCard'
import { BASE_URL } from '@/config/apiconfig'
import { Pagination } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default  function index({ products }) {

  const  [productList, setProductList] = useState([])
  const [page, setPage] = useState(1);

  const router = useRouter();
  const pageHandler = (event, newPage) =>{
    router.push(`?page=${newPage}`, { scroll: false })
    setPage(newPage)
  }

  return (
    <>
      <div className='container flex flex-wrap m-auto'>
        {
          products &&
          products.map((product, index) => (
            <ProductCard  productId={product.id} productName={product.title} productImage={product.image} key={index} />
          ))
        }
        <Pagination onChange={pageHandler} count={3} page={page} variant="outlined" shape="rounded" />
      </div>


      <div>index</div>
    </>
  )
}

export async function getServerSideProps({query}) {
  // query string 
  let pageNo = query.page ?? 1;
  const res = await fetch(`http://localhost:4000/products?_page=${pageNo}&_per_page=8`)
  const response = await res.json()
  const products = response.data
  return { props: { products } }
}