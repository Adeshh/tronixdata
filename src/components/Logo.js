import React from 'react'
import Image from 'next/image'
import TronixLogo from '../assets/logo.svg'
const Logo = () => {
    return (
        <>
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                    <span className="sr-only">Workflow</span>
                    <Image
                    className="h-8 w-auto sm:h-10"
                    src={TronixLogo}
                    alt=""
                    />
                </a>
            </div>
            
        </>
    )
}

export default Logo
