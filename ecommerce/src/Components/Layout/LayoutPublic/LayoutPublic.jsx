import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const LayoutPublic = ( props ) => {
    const { children } = props
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default LayoutPublic