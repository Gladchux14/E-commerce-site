import React from 'react'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'

const Rootpage = () => {
  return (
    <div>
    <Header/>

    <main className='bg-[#F7F7F7] border border-solid border-red-600'>
        <div className='container w-[100%] max-w-[90%] mx-auto'>

        <Outlet/>
        </div>
    </main>
    <Footer/>
    </div>
  )
}

export default Rootpage