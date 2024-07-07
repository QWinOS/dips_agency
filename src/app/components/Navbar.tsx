"use client";
import Image from "next/image";
import Link from "next/link";
// import favicon from "../app/favicon.ico";
import { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
// import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

import "./component.css";
// import { motion, AnimatePresence } from "framer-motion";
// import ThemeModeToggler from "./ThemeModeToggler";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Service", href: "/service" },
  { title: "Contact", href: "/contact" },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const mobileLinkIcon = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    x: 0,
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};
const mobileNavIcon = {
  initial: {
    y: "10vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
};
const desktop = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };
  const MobileNavLink = ({ title, href }: any) => {
    return (
      // <motion.div
      //   variants={mobileLinkVars}
      //   className="text-5xl uppercase"
      //   onClick={handleNav}
      // >
      <Link href={href}>{title}</Link>
      // </motion.div>
    );
  };
  const DesktopNav = ({ title, href }: any) => {
    return (
      // <motion.div className="m-4 text-2xl uppercase">
      <Link className="p-5" href={href}>
        {title}
      </Link>
      // </motion.div>
    );
  };

  return (
    <div className="headerFooterColor fixed top-0 z-20 h-10 w-full shadow-xl sm:h-10">
      {/* Tab Desktop Navbar */}
      <div className=" h-10 w-full items-center justify-between px-4 sm:h-10 2xl:px-16 bg-red-400 flex-row-reverse hidden sm:flex sm:flex-row">
        <div className="hidden sm:flex">
          {navLinks.map((link, index) => {
            return (
              <DesktopNav key={index} title={link.title} href={link.href} />
            );
          })}
          {/* <div className="ml-5 self-center text-xl">
            <ThemeModeToggler />
          </div> */}
        </div>
        <div onClick={handleNav} className="cursor-pointer pl-24 sm:hidden">
          <MdOutlineMenu size={25} />
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="visible sm:hidden h-16 w-full items-center justify-between px-4 flex-row-reverse flex bg-[#E5EDF1] dark:bg-yellow-300">
        <div onClick={handleNav} className="cursor-pointer ">
          <MdOutlineMenu size={30} />
        </div>
        {/* <AnimatePresence> */}
        {menuOpen && (
          <div className="fixed left-0 top-0 h-[100dvh] w-[100dvw] origin-top pl-10 pt-5 pr-3 flex flex-col items-center bg-purple-400">
            {/* // <motion.div
          //   variants={menuVars}
          //   initial="initial"
          //   animate="animate"
          //   exit="exit"
          //   className="fixed left-0 top-0 h-[100dvh] w-[100dvw] origin-top bg-[#E5EDF1] p-10 dark:bg-[#002349]"
          // > */}
            {/* <div className=" flex h-svh flex-col py-10 justify-center items-center bg-purple-400 w-svw"> */}
            {/* <div className="flex w-svw"> */}
            {/* <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="font-lora flex w-full flex-col gap-4 overflow-hidden"
                  > */}
            {/* <div className="flex justify-between "> */}
            {/* <motion.div
                      variants={mobileNavIcon}
                      className="flex justify-between"
                    >
                      <ThemeModeToggler /> */}
            <div
              className="text-md cursor-pointer self-end"
              onClick={handleNav}
            >
              <MdClose size={50} />
            </div>

            {/* </motion.div> */}
            {/* </div> */}
            {/* </motion.div> */}
            {/* </div> */}
            {/* <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="font-lora flex h-full flex-col items-center justify-center gap-4 "
                > */}
            {navLinks.map((link, index) => {
              return (
                <button
                  className="overflow-hidden flex p-5 text-5xl"
                  key={index}
                >
                  <MobileNavLink
                    key={index}
                    title={link.title}
                    href={link.href}
                    onClick={handleNav}
                  />
                </button>
              );
            })}
            <div className="overflow-hidden">
              {/* <motion.div
                      variants={mobileLinkIcon}
                      className="flex gap-x-8"
                    >
                      <MdFacebook
                        className="text-[#0165E1]"
                        size={50}
                        title="FB"
                      />
                      <AiOutlineInstagram
                        className="text-[#C13584]"
                        size={50}
                      />
                      <AiOutlineTwitter className="text-[#1D9BF0]" size={50} />
                    </motion.div> */}
            </div>
            {/* </motion.div> */}
            {/* </div> */}
            {/* </motion.div> */}
          </div>
        )}
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}
