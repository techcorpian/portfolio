import React from 'react'
import Timeline from '../UIElements/Timeline'

const Journey = () => {
    return (
        <div className='sticky w-full bg-neutral-900 z-50 rounded-3xl p-4'>
            <div className='text-center md:text-6xl text-3xl z-0 text-white font-bold md:pb-0 py-6'>My Journey.</div>
            <hr className='md:hidden mx-6 border border-white/10' />
            <Timeline />
        </div>
    )
}

export default Journey