import React from 'react'
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { IoLogoLaravel } from "react-icons/io5";
import { SiGooglecloud } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
    const leftSkillList = [
        {
            name: "HTML",
            img: <IoLogoHtml5 />,
            class: "absolute top-[-40px] left-60",
            logoColor: "text-yellow-600 text-5xl"
        },
        {
            name: "CSS",
            img: <IoLogoCss3 />,
            class: "absolute top-[-125px] left-10",
            logoColor: "text-blue-500 text-5xl"
        },
        {
            name: "React JS",
            img: <FaReact />,
            class: "absolute top-60 left-10",
            logoColor: "text-blue-300 text-8xl"
        },
        {
            name: "Node JS",
            img: <FaNodeJs />,
            class: "absolute top-20 left-[100px]",
            logoColor: "text-yellow-500 text-8xl"
        },
        {
            name: "Redux",
            img: <SiRedux />,
            class: "absolute top-1/4 left-60",
            logoColor: "text-black/80 text-6xl"
        },
        // {
        //     name: "JQuery",
        //     img: <SiJquery />,
        //     class: "absolute top-1/2 left-60",
        //     logoColor: "text-blue-800 text-xl"
        // },
        {
            name: "Bootstrap",
            img: <FaBootstrap />,
            class: "absolute top-[460px] left-10",
            logoColor: "text-blue-800 text-6xl"
        },
        {
            name: "TailwindCSS",
            img: <RiTailwindCssFill />,
            class: "absolute top-[360px] left-40",
            logoColor: "text-pink-200 text-7xl"
        },
        {
            name: "TailwindCSS",
            img: <FaGitAlt />,
            class: "absolute top-[580px] left-[100px]",
            logoColor: "text-green-500 text-7xl"
        },
    ]

    const rightSkillList = [
        {
            name: "JavaScript",
            img: <IoLogoJavascript />,
            class: "absolute top-[-40px] right-60",
            logoColor: "text-yellow-400 text-7xl"
        },
        {
            name: "MySql",
            img: <SiMongodb />,
            class: "absolute top-[-125px] right-10",
            logoColor: "text-sky-700 text-7xl"
        },
        {
            name: "Laravel",
            img: <IoLogoLaravel />,
            class: "absolute top-60 right-10",
            logoColor: "text-red-600 text-8xl"
        },
        {
            name: "TypeScript",
            img: <SiTypescript />,
            class: "absolute top-20 right-20",
            logoColor: "text-sky-700 text-8xl"
        },
        {
            name: "PostgreSQL",
            img: <BiLogoPostgresql />,
            class: "absolute top-1/4 right-60",
            logoColor: "text-sky-800 text-6xl"
        },
        // {
        //     name: "JQuery",
        //     img: <SiJquery />,
        //     class: "absolute top-1/2 right-60",
        //     logoColor: "text-blue-800 text-xl"
        // },
        {
            name: "MongoDB",
            img: <GrMysql />,
            class: "absolute top-[460px] right-10",
            logoColor: "text-blue-800 text-6xl"
        },
        {
            name: "GCloud",
            img: <SiGooglecloud />,
            class: "absolute top-[360px] right-40",
            logoColor: "text-green-500 text-7xl"
        },
        {
            name: "TailwindCSS",
            img: <FaGithub />,
            class: "absolute top-[580px] right-[100px]",
            logoColor: "text-black text-7xl"
        },
    ]

    const frontendSkills = ['ReactJS', 'NextJS', 'Redux','Apollo cache', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Bootstrap', 'jQuery', 'AJAX', 'HTML', 'CSS'];

    const backendSkills = ['NodeJS', 'ExpressJS', 'Springboot', 'TypeScript', 'PHP Laravel', 'Redis', 'Kafka'];

    const databases = ['MySQL', 'MongoDB', 'PostgreSQL'];

    const deployment = ['Gcloud','VPS','Vercel','Netlify','Render', 'Git', 'Github']
    return (
        <div className='sticky md:h-screen bg-white z-50 p-4'>
            <div className='md:text-9xl text-6xl text-center text-gray-200'>Skills.</div>
            <div className='flex justify-between'>
                <div className='xl:block hidden'>
                    {
                        leftSkillList.map((data) => (
                            <div className={`${data.class} flex flex-col items-center`}>
                                <div className={`${data.logoColor} border border-transparent hover:border-gray-100 bg-white rounded-full hover:shadow-lg p-4 transition-all duration-300 ease-in-out`}>{data.img}</div>
                                {/* <div className='text-xl'>{data.name}</div> */}
                            </div>
                        ))
                    }
                </div>
                <div className='pt-3 w-full xl:w-1/2'>

                    <div className='py-2 w-full'>
                        <div className='text-2xl py-3 font-bold'>Frontend Skills</div>
                        <div className='grid md:grid-cols-4 grid-cols-3 gap-2'>
                            {
                                frontendSkills.map((data) => (
                                    <div className='py-2 px-4 hover:bg-neutral-800 hover:text-white hover:border-white hover:shadow-none transition-all duration-300 ease-in-out cursor-pointer border shadow-md text-black/80 text-center rounded-full text-sm'>{data}</div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='py-2'>
                        <div className='text-2xl py-3 font-bold text-right'>Backend Skills</div>
                        <div className='grid md:grid-cols-4 grid-cols-3 gap-2'>
                            {
                                backendSkills.map((data) => (
                                    <div className='py-2 px-4 hover:bg-neutral-800 hover:text-white hover:border-white hover:shadow-none transition-all duration-300 ease-in-out cursor-pointer border shadow-md text-black/80 text-center rounded-full text-sm'>{data}</div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='py-2'>
                        <div className='text-2xl py-3 font-bold '>Databases</div>
                        <div className='grid md:grid-cols-4 grid-cols-3 gap-2'>
                            {
                                databases.map((data) => (
                                    <div className='py-2 px-4 hover:bg-neutral-800 hover:text-white hover:border-white hover:shadow-none transition-all duration-300 ease-in-out cursor-pointer border shadow-md text-black/80 text-center rounded-full text-sm'>{data}</div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='py-2'>
                        <div className='text-2xl py-3 font-bold text-right'>Deployment/Version Controls</div>
                        <div className='grid md:grid-cols-4 grid-cols-3 gap-2'>
                            {
                                deployment.map((data) => (
                                    <div className='py-2 px-4 hover:bg-neutral-800 hover:text-white hover:border-white hover:shadow-none transition-all duration-300 ease-in-out cursor-pointer border shadow-md text-black/80 text-center rounded-full text-sm'>{data}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='xl:block hidden'>
                    {
                        rightSkillList.map((data) => (
                            <div className={`${data.class} flex flex-col items-center`}>
                                <div className={`${data.logoColor} border border-transparent hover:border-gray-100 bg-white rounded-full hover:shadow-lg p-4 transition-all duration-300 ease-in-out`}>{data.img}</div>
                                {/* <div className='text-xl'>{data.name}</div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills