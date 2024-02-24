import Header from '@/components/Header'
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

function Layout({ children }) {
    return (
        <Provider store={store}>
            <Header />
            <main>{children}</main>
        </Provider>
    )
}


export default Layout