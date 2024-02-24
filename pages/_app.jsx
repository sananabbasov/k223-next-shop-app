import Layout from '@/layout/Layout'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <title>Home - Coding with Chris</title>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>

    )
}

export default MyApp