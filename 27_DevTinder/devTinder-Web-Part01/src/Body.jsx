import React from 'react'
import NavBar from './NavBar'
import {Outlet} from 'react-router-dom'
import Footer from "./Footer"

const Body = () => {
  return (
   <>
    <NavBar/>
    {/*Any children Route of Body or parent route will render in outlet. */}
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Body