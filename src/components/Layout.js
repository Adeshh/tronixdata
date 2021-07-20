import React from 'react'
import NavBar from  '../components/header/NavBar'
const Layout = ({children}) => {
    return (
        <div className="">
            
            <NavBar className=""/>
            {children}
        </div>
    )
}

export default Layout
