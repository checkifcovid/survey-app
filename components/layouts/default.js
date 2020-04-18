import React from 'react'
import Menu from './menu'
import Footer from './footer'

const Layout = ({ children }) => (
  <>
    <Menu />
    {children}
    <Footer />
  </>
)
export default Layout
