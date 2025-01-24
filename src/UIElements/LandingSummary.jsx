import React from 'react'

const summary = "Highly skilled MERN stack developer with 2.3 years of experience in designing & developing full-stack applications. Proficient in building scalable applications with TypeScript using S.O.L.I.D principles for the code quality. Experienced in state management with redux. Adept at working in agile teams, maintaining clean and reusable code, and meeting project deadlines.";

const LandingSummary = ({addClass, whiteText, sumWidth}) => {
    return (
        <div className={`animate-slide-in-left opacity-0 transform translate-x-10 ${addClass}`}>
            <div className={`text-xl ${whiteText}`}>Hello, I'm</div>
            <div className={`md:text-6xl text-5xl font-extrabold ${whiteText}`}>MUSHTHAQ AMEEN.</div>
            <div className={`mt-5 ${sumWidth} break-words text-gray-500 px-6 md:px-0 ${whiteText} md:block hidden`}>
                {summary}
            </div>
        </div>
    )
}

export default LandingSummary