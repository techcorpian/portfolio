import React from 'react';
import LandingSummary from '../UIElements/LandingSummary';
import { FaLinkedinIn, FaInstagram, FaGithub, FaReact, FaNodeJs, FaArrowRightArrowLeft, FaDatabase } from "react-icons/fa6";
import { SiRedux, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";
import { Link } from 'react-router-dom'


import { CiMobile3 } from "react-icons/ci";

const Card = ({ addClass, children }) => {
    return (
        <div
            className={`rounded-lg p-4 py-3 w-[350px] h-[150px] opacity-0 transform translate-x-10 animate-slide-in ${addClass}`}
        >
            {children}
        </div>
    );
};

const Landing = () => {
    const links = [
        {
            logo: <FaLinkedinIn />,
            link: 'www.linkedin.com/in/mushthaq-n-a0b16127b'
        },
        {
            logo: <FaInstagram />,
            link: 'https://www.instagram.com/mushthaq_dev/'
        },
        {
            logo: <FaGithub />,
            link: 'https://github.com/techcorpian/'
        },
    ]
    return (
        <div className="fixed flex lg:flex-row flex-col justify-between lg:text-left text-center lg:items-center h-screen md:px-12 py-20 gap-9">
            <LandingSummary whiteText='lg:text-white' sumWidth="lg:w-2/3" />
            <div className="flex flex-col justify-center items-center gap-9 md:block hidden">
                <div className="lg:relative lg:right-60">
                    <Card addClass="bg-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out">
                        Frontend
                        <div className='flex items-start justify-center gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col text-center items-center py-1 '><span className='text-6xl text-blue-300'><FaReact /></span>ReactJS</div>
                                <div className='text-3xl py-1 text-black'>+</div>
                                <div className='flex flex-col text-center items-center py-1 '><span className='text-6xl text-gray-700'><SiRedux /></span>Redux</div>
                                <div className='text-3xl py-1 text-black'>+</div>
                                <div className='flex flex-col text-center items-center py-1 '><span className='text-7xl text-sky-700'><BiLogoTypescript /></span></div>
                            </div>
                            {/* <div className='flex flex-col text-center items-center'><span className='text-8xl'><CiMobile3 /></span>Responsive</div> */}
                        </div>
                    </Card>
                </div>
                <div>
                    <Card addClass="border border-gray-200 shadow-lg hover:shadow-none hover:border-none transition-all duration-300 ease-in-out">
                        Backend
                        <div className='flex items-center justify-between gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col text-center py-1 '><span className='text-7xl text-yellow-500'><FaNodeJs /></span>NodeJS</div>
                            </div>
                            <div className='text-3xl text-gray-400'><FaArrowRightArrowLeft /></div>
                            <div className='flex flex-col text-center py-1 '><span className='text-7xl text-gray-700'><FaDatabase /></span>Database</div>
                        </div>
                    </Card>
                </div>
                <div className="lg:relative lg:right-40">
                    <Card addClass="bg-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out">
                        Databases
                        <div className='flex items-start justify-center gap-4'>
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col text-center py-1 '><span className='text-7xl text-gray-700'><SiMongodb /></span>MongoDB</div>
                                <div className='text-3xl py-1 text-black'>+</div>
                                <div className='flex flex-col text-center py-1 '><span className='text-7xl text-gray-700'><GrMysql /></span>MySQL</div>
                            </div>
                            {/* <div className='flex flex-col text-center items-center'><span className='text-8xl'><CiMobile3 /></span>Responsive</div> */}
                        </div>
                    </Card>
                </div>
            </div>
            <div className='flex absolute bottom-10 md:left-15 md:justify-start justify-center w-full text-3xl gap-4'>
                {
                    links.map((link) => (
                        <Link
                        target="_blank"
                        rel="noopener noreferrer" 
                        to={link.link} className='bg-white border rounded-full p-3 shadow-lg'>{link.logo}</Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Landing;
