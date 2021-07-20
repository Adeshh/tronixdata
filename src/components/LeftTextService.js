import React from 'react'
import Image from 'next/image'
const LeftTextService = ({src, title, text}) => {
    return (
        <>
            
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-wrap">
               <div className="w-5/6 sm:w-1/2 p-6">
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
                <div className="w-full sm:w-1/2 p-6">
                    <Image src={src}/>
                </div>
            </div>  
        </>
    )
}

export default LeftTextService
