import React from 'react'
import LandingSummary from '../UIElements/LandingSummary';

const summary = "Highly skilled MERN stack developer with 2.3 years of experience in designing & developing full-stack applications. Proficient in building scalable applications with TypeScript using S.O.L.I.D principles for the code quality. Experienced in state management with redux. Adept at working in agile teams, maintaining clean and reusable code, and meeting project deadlines.";

const LandingOL = () => {
    return (
        <div className = 'lg:h-screen h-[1000px] w-1/4 lg:w-1/2 flex items-center lg:px-12' >
            <LandingSummary addClass="hidden lg:block"/>
        </div >
    )
}

export default LandingOL