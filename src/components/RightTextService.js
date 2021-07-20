import React from 'react'
import Image from 'next/image'
const RightTextService = ({src, title, text}) => {
    return (
        <>
           <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 p-6 mt-6">
                  <Image src={src}/>
                </div>
                <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-8">
                        {text}
                        <br />
                        <br />
                        Images from:

                        <a className="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                    </p>
                    </div>
                </div>
            </div>                 
        </>
    )
}

export default RightTextService
