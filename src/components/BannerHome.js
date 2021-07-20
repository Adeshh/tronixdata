import React from 'react'
import RightHalf from '../assets/RightHalf.svg'
import Image from 'next/image'
import Button from '../components/Button'

const BannerHome = () => {
    return (
        <section>
            <div className="pt-24">
                <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                {/* <!--Left Col--> */}
                    <div className="flex flex-col w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left">
                        
                        <h1 className="my-4 text-5xl font-bold leading-tight">
                        Reliable solutions on a converged platform
                        </h1>
                        <p className="leading-normal text-2xl mb-8">
                        With TronixData, you can manage all your backup and archival on a unified platform, in a cloud location of your choice, giving you the power to store, access, and protect the information you need. TronixData is engineered to reverse sprawl.
                        </p>
                        <Button color="#04c3f2" bColor="#048ac8" bgColor=""   text="Get in Touch"/>
                    </div>
                    {/* <!--Right Col--> */}
                    <div className="w-full md:w-3/5 py-6 text-center">
                        <Image className="w-full md:w-4/5 z-10" src={RightHalf} />
                    </div>
                </div>
             </div>
        </section>
    )
}

export default BannerHome
