import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProjectCard = ({ children, addClass, bgColor, title, webLink, gitFrontendLink, gitBackendLink, stacks, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`relative card-container cursor-pointer ${isFlipped ? 'flipped' : ''} ${addClass}`}>
            {/* Front Side */}
            <div className={`absolute card-front p-4 rounded-xl h-full ${bgColor}`}>
                <div>
                    <div className="flex justify-between">
                        <div className="text-xl font-bold">{title}</div>
                        <div className="text-4xl hover:text-gray-500">
                            <MdArrowOutward />
                        </div>
                    </div>
                    <div className="text-md py-3 text-gray-400">{children}</div>
                    <div className="py-3 font-bold text-gray-400">TECH STACKS USED:</div>
                    <div className="grid grid-cols-3 gap-2 pb-6">
                        {stacks.map((data, index) => (
                            <div
                                key={index}
                                className={`border border-gray-300 px-3 py-1 text-sm rounded-full text-center`}
                            >
                                {data}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back Side */}
            <div className={`absolute card-back rounded-xl h-full ${bgColor} ${isFlipped ? 'flipped' : ''}`}>
                <div className="flex flex-col justify-between items-start h-full p-4">
                    <h3 className="text-lg font-bold">Challenges Faced In This Project</h3>
                    <p className="">
                        {backContent}
                    </p>
                    <div className="flex justify-center w-full items-center gap-2 text-sm py-3">
                        <Link to={webLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center border h-full border-neutral-500 text-neutral-500 p-2 px-4 cursor-pointer hover:bg-neutral-500 hover:text-white ${!webLink ? "hidden" : ""}`}>
                            App Link
                        </Link>
                        <Link
                            to={gitFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`border border-neutral-500 text-neutral-500 p-2 px-4 cursor-pointer hover:bg-neutral-500 hover:text-white w-[120px] text-center ${!gitFrontendLink ? "hidden" : ""}`}>
                            Frontend Github
                        </Link>
                        <Link
                            to={gitBackendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`border border-neutral-500 text-neutral-500 p-2 px-4 cursor-pointer hover:bg-neutral-500 hover:text-white w-[120px] text-center ${!gitBackendLink ? "hidden" : ""}`}>
                            Backend Github
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const posStacks = ["ReactJS", "Redux", "NodeJS", "ExpressJS", "MongoDB", "TypeScript"]
    const ethStacks = ["ReactJS", "Redux", "Ruby", "Rails", "PostgreSQL", "TypeScript"]
    const realEstate = ["ReactJS", "Context API", "React-Scroll"]
    const school = ["ReactJS", "Context API", "NodeJS", "ExpressJS", "MySQL"]
    const gmailClone = ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"]

    return (
        <div className='sticky bg-white z-50 px-6 py-6'>
            <div className='flex lg:flex-row flex-col justify-between gap-6'>
                <div className='flex flex-col gap-6 w-full'>
                    <span className='text-5xl font-bold text-neutral-600'>Projects.</span>
                    <ProjectCard
                        addClass="text-white h-[400px] md:h-full"
                        bgColor="bg-neutral-800 shadow-xl"
                        title="Restaurant POS System"
                        stacks={posStacks}
                        webLink="https://dinepos.netlify.app/"
                        gitFrontendLink="https://github.com/techcorpian/dineposFrontend"
                        gitBackendLink="https://github.com/techcorpian/dineposBackend"
                        backContent={<div className='flex flex-col gap-2 text-md text-gray-400'>
                            <li>
                                Centralised CRUD operation management for billing system.
                            </li>
                            <li>
                                Razorpay Integration in Typescript was a tedious work and had only minimal docs but handled it.
                            </li>
                        </div>}>
                        Point Of Sales System for restaurants to handle their consumers in a quick and efficient way. This application includes orders handling, payment gateway integration with Razorpay.
                    </ProjectCard>

                    <ProjectCard
                        addClass="h-[400px] md:h-full"
                        bgColor="bg-neutral-100 shadow-xl border"
                        title="Real Estate Website"
                        stacks={realEstate}
                        webLink="https://royals28.in/"
                        backContent={<div className='flex flex-col gap-2 text-md text-gray-400'>
                            <li>
                                Optimising the performance of the website for the faster scroll.
                            </li>
                            <li>
                                Connected the backend to fetch the customer's details with a form.
                            </li>
                        </div>}>
                        Website for a Construction Company to market their new apartment project.
                    </ProjectCard>
                </div>
                <div className='flex flex-col gap-6 w-full'>
                    {/* <ProjectCard
                        addClass="h-[400px] md:h-1/2"
                        bgColor="bg-neutral-100 shadow-xl border"
                        title="Gmail Clone"
                        stacks={gmailClone}
                        backContent={<div className='flex flex-col gap-2 text-md text-gray-400'>
                            <li>
                                Compose email modal had several features, maximise mode, minimise mode which was difficult to build.
                            </li>
                            <li>
                                Integrated Node mailer to send emails to external recipients.
                            </li>
                        </div>}>
                        Gmail Clone with all features available such as composing and sending emails. Also includes inbox, CRUD operations for email management, spams, sent mails, searching mails and much more.
                    </ProjectCard> */}

                    <ProjectCard
                        addClass="h-[400px] md:h-1/2 text-neutral-800"
                        bgColor="bg-neutral-100 shadow-xl border"
                        title="Storage System App"
                        stacks={posStacks}
                        webLink="https://storexx.netlify.app/"
                        gitFrontendLink="https://github.com/techcorpian/storexFrontend"
                        gitBackendLink="https://github.com/techcorpian/storexBackend"
                        backContent={<div className='flex flex-col gap-2 text-md text-gray-400'>
                            <li>
                                Bulk delete feature for the deletion of folders and files in a single click.
                            </li>
                            <li>
                                Handled multiple redirection to navigate into folders.
                            </li>
                            <li>
                                Followed unique architecture to store folders into folders and files into folders in an hierarchy.
                            </li>
                        </div>}>
                        Centralised Storage system to handle files and folders in the cloud. it also handles creating and deleting a folder or file.
                    </ProjectCard>
                </div>
                <div className='flex flex-col gap-6 w-full'>
                    <ProjectCard
                        addClass="h-[450px] text-white"
                        bgColor="bg-neutral-800 shadow-xl"
                        title="School Management System"
                        gitFrontendLink="https://github.com/techcorpian/crescent-frontend"
                        gitBackendLink="https://github.com/techcorpian/crescent-backend"
                        stacks={school}
                        backContent={<div className='flex flex-col gap-2 text-md text-gray-400'>
                            <li>
                                One time updation feature to update only one time and when the user updates it another time, it shows a warning.
                            </li>
                        </div>}>
                        A Landing website and an application for managing both students and teachers. The application is user-group based, where each user is assigned specific permissions according to their designated user group.
                    </ProjectCard>

                    <ProjectCard
                        addClass="h-[450px]"
                        bgColor="bg-neutral-100 shadow-xl border"
                        title="Ethereum Staking App"
                        webLink="https://goldsand.fi/"
                        stacks={ethStacks}
                        backContent={<div className='flex flex-col gap-2 text-md text-gray-400'>
                            <li>
                                Explored books about Etherium and bitcoins to understand the depth of the application.
                            </li>
                            <li>
                                Read and Implemented docs about new react libraries like Thirdweb, EtherJS, Coinbase.
                            </li>
                        </div>}
                    >
                        An application for investing in a Halal Ethereum platform. Users can log in to their respective wallets and manage their transactions. They can deposit or withdraw Ethereum, specifically catering to individuals involved in Halal transactions.
                    </ProjectCard>
                </div>
            </div>
        </div>
    )
}

export default Projects