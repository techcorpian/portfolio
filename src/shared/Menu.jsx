import React, { useState } from 'react';
import BlackButton from '../UIElements/BlackButton';
import { Link } from 'react-scroll';
import { CgMenuGridO } from "react-icons/cg";

const Menu = () => {
    const [dropdown, setDropdown] = useState(false);

    // Define menu items with scroll targets
    const menuTitle = [
        {
            title: "Home",
            target: "home", // Section ID
        },
        {
            title: "Journey",
            target: "journey", // Section ID
        },
        {
            title: "Skills",
            target: "skills", // Section ID
        },
        {
            title: "Projects",
            target: "projects", // Section ID
        },
    ];

    const handleOpenDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <>
            <div className="flex justify-between items-center p-3 px-6 fixed w-full z-40 bg-white">
                <div className="font-bold text-xl">MUSHTHAQ.</div>
                {/* Desktop menu */}
                <ul className="md:flex gap-6 hidden">
                    {menuTitle.map((menu, index) => (
                        <Link
                            key={index}
                            to={menu.target}
                            spy={true}
                            smooth={true}
                            offset={-70} // Adjust for header height
                            duration={500}
                            className="cursor-pointer hover:border-b hover:border-black pb-2"
                            activeClass="border-b border-black"
                        >
                            {menu.title}
                        </Link>
                    ))}
                </ul>
                <Link
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust for header height
                    duration={500}
                    // activeClass="border-b border-black"
                    className="cursor-pointer md:flex hidden">
                    <BlackButton />
                </Link>

                {/* Mobile menu icon */}
                <div
                    onClick={handleOpenDropdown}
                    className="flex text-black text-3xl md:hidden"
                >
                    <CgMenuGridO />
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <ul
                className={`absolute flex flex-col px-2 py-2 pt-16 z-30 w-full bg-white ${
                    !dropdown ? "hidden" : ""
                }`}
            >
                {menuTitle.map((menu, index) => (
                    <Link
                        key={index}
                        to={menu.target}
                        spy={true}
                        smooth={true}
                        offset={-70} // Adjust for header height
                        duration={500}
                        className="cursor-pointer hover:bg-gray-100 py-2 px-2"
                        activeClass="bg-gray-100"
                        onClick={() => setDropdown(false)} // Close dropdown after selecting
                    >
                        {menu.title}
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default Menu;
