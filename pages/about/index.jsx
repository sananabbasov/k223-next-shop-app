import Sidebar from '@/layout/Sidebar'
import React from 'react'

function test() {
    return (
        <div>about</div>
    )
}
test.getLayout = function getLayout(page) {
    return (
        <Sidebar>
           {page}
        </Sidebar>
    )
}
export default test

