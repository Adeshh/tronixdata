import React from 'react'
import NavBar from  '../components/header/NavBar'
const Layout = ({children}) => {
    return (
        <div className="">
            
            <NavBar className="fixed overflow-hidden"/>
            {children}
        </div>
    )
}

export default Layout
