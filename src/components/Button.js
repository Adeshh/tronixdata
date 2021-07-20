import React from 'react'

const Button = ({color,bgColor, text, bColor}) => {
    return (
        <>
            <a href="#" style={{borderColor: bColor, color:color, backgroundColor:bgColor}} className="border-2  rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-blue-600 hover:text-white-200">
                {text}
            </a>
        </>
    )
}

export default Button
