import React, { useState, useEffect } from 'react'
import { HiMiniChartBar } from "react-icons/hi2";
import { IoWifi } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoBatteryHalf } from "react-icons/io5";
import { IoIosCall, IoIosMail, IoIosMap, IoLogoLinkedin } from "react-icons/io";
import { LuLoaderCircle } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Contacts = () => {
  const [dynamic, setDynamic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contents, setContents] = useState('')
  const [logo, setLogo] = useState('')

  const dynamicIsland = [
    {
      contentTitle: "+918012603733",
      logo: <IoIosCall />,
      title: "mobile"
    },
    {
      contentTitle: "mushthaq.n.dev@gmail.com",
      logo: <IoIosMail />,
      title: "email"
    },
    {
      contentTitle: "Royapettah, Chennai",
      logo: <IoIosMap />,
      title: "location"
    },
    // {
    //   contentTitle: "+918012603733",
    //   logo: <IoLogoLinkedin />,
    //   title: "linkedin"
    // }
  ]

  const handleOpenDynamic = (content, logo) => {
    setDynamic(true);
    setLoading(true);
    setTimeout(() => {
      setContents(content);
      setLogo(logo)
      setLoading(false);
    }, 400);


  };


  const handleCloseDynamic = () => {
    setDynamic(false);
    setContents("");
    setLogo("")
    setLoading("");
  }

  const now = new Date();
  // Get current time in HH:MM:SS format
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const time = `${hours}:${minutes}`;
  // console.log(time);


  return (
    <div className=' flex justify-center items-end sticky bg-white '>
      <div className='flex flex-col justify-start items-center xl:border-t-4 xl:border-x-4 xl:border-black/60 h-[700px] xl:w-1/3 w-full xl:rounded-t-[80px] z-10 bg-gray-300'>
        <div className='flex md:justify-between justify-center items-start w-full px-6 py-6'>
          <div className='py-2 w-[100px] md:block hidden'>{time}</div>
          <div onClick={handleCloseDynamic} className={`flex flex-col justify-center items-center gap-2 bg-black md:w-1/3 w-2/3 h-10 z-10 ${dynamic ? "md:w-2/3 w-2/3 h-[120px] rounded-3xl transition-all duration-300 ease-in-out" : "rounded-3xl transition-all duration-300 ease-in-out"} text-yellow-400`}>
            {loading ? (
              <>
                <LuLoaderCircle className="animate-spin text-7xl text-yellow-400" />
                <div className='text-black'>ddddd</div>
              </>
            ) : (
              <>
                <div className={`text-3xl ${logo ? "border-4 border-yellow-400 p-3 rounded-full" : ""}`}>{logo}</div>
                <div>{contents}</div>
              </>
            )}
          </div>
          <div className='md:flex justify-end items-center py-2 gap-2 w-[100px] hidden'><HiMiniChartBar /><IoWifi className='text-xl' /><IoBatteryHalf className='text-xl' /></div>
        </div>

        <div className='flex flex-col pt-6 w-full h-full'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <div className='border rounded-full py-3 px-6 text-6xl bg-gray-400 text-white'>M</div>
            <div>MUSHTHAQ AMEEN</div>
          </div>
          <div className='flex justify-evenly py-6 px-4 gap-4 w-full'>
            {
              dynamicIsland.map((data) => (
                <div onClick={() => handleOpenDynamic(data.contentTitle, data.logo)} className='flex flex-col items-center p-4 bg-gray-400 rounded-lg text-white w-full cursor-pointer'>
                  <div className='text-3xl'>
                    {data.logo}
                  </div>
                  <div className='text-xs'>
                    {data.title}
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex flex-col bg-gray-100 h-full'>
            <div className='text-center w-full text-xs py-2'>Click on the buttons to see Dynamic Island</div>
            <div className='flex flex-col bg-gray-100 h-full p-4 gap-2'>
              <Link to="https://www.linkedin.com/in/mushthaq-n-a0b16127b"
                target="_blank"
                rel="noopener noreferrer"
                className='flex gap-4 items-center border p-3 bg-white rounded-lg cursor-pointer'><span className='text-3xl text-sky-700'><FaLinkedin /></span>LinkedIn Profile</Link>
              <Link to="https://github.com/techcorpian"
                target="_blank"
                rel="noopener noreferrer"
                className='flex gap-4 items-center border p-3 bg-white rounded-lg cursor-pointer'><span className='text-3xl text-neutral-800'><FaGithub /></span>Github Profile</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contacts