import React from 'react'

const BlackButton = () => {
    return (
        <button className="relative group inline-block px-4 py-2 text-white font-medium text-sm rounded-lg bg-black overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
            <span className="relative z-10">LET'S TALK</span>
        </button>
    )
}

export default BlackButton