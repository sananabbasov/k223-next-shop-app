import Layout from '@/layout/Layout'
import React from 'react'

function MyApp({ Component, pageProps }) {
    return (
        <>
        
        <title>About - Coding with Chris</title>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </>
       
    )
}

export default MyApp