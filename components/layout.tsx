import { VscTwitter } from 'react-icons/vsc';
import {
  ImAddressBook,
  ImBriefcase,
  ImCalendar,
  ImDownload,
  ImEnvelop, ImFacebook2, ImLinkedin, ImLocation2, ImMobile, ImProfile, ImUser,
} from 'react-icons/im';

import Image from 'next/image';

import Link from 'next/link';
import Avatar from '../public/images/avatar.webp';
import Footer from './footer';
import Logo from '../public/images/logo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div className="section-bg">
        <div className="w-full flex justify-between px-4">
          <Link href="/">
            <Image className="h-[26px] lg:h-[32px] object-contain" src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center">
            <button id="theme-toggle" type="button" className="dark-light-btn">
              <i id="theme-toggle-dark-icon" className="fa-solid text-xl fa-moon hidden" />
              <i id="theme-toggle-light-icon" className="fa-solid fa-sun text-xl hidden" />
            </button>
            <button id="menu-toggle" type="button" className="menu-toggle-btn">
              <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl " />
              <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  " />
            </button>
          </div>
        </div>
      </div>
      {/* <Nav /> */}
      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div
          id="personal-info"
          className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44"
        >
          <div
            className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0"
          >
            <Image
              src={Avatar}
              className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] object-contain "
              alt="about avatar"
            />
            <div className="pt-[100px] pb-8">
              <h1 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">Tobias Wust</h1>
              <h3
                className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"
              >
                Full Stack Developer
              </h3>
              <div className="flex justify-center space-x-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <ImFacebook2 className="socialbtn text-[#1773EA]" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <VscTwitter className="socialbtn text-[#1C9CEA]" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <ImLinkedin className="socialbtn text-[#0072b1]" />
                </a>
              </div>

              <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                  <ImMobile className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md" />
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Phone</p>
                    <p className="dark:text-white">+49 176 44417878</p>
                  </div>
                </div>
                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <ImEnvelop className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md" />
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Email</p>
                    <p className="dark:text-white">contact@wust.simplelogin.com</p>
                  </div>
                </div>
                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <ImLocation2 className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md" />
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Location</p>
                    <p className="dark:text-white">Europe</p>
                  </div>
                </div>
                <div className="flex py-2.5">
                  <ImCalendar className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md" />
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">Birthday</p>
                    <p className="dark:text-white">December 19, 1988</p>
                  </div>
                </div>
              </div>

              <button type="button" className="dowanload-btn">
                <ImDownload className="m-1" />
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <header
            className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]"
          >
            <nav className="hidden lg:block">
              <ul className="flex">
                <li>
                  <a className="menu-item" href="./aboutOne.html">
                    <ImUser className="text-xl mb-1" />
                    About
                  </a>
                </li>
                <li>
                  <a className="menu-item" href="./resumeOne.html">
                    <ImProfile className="text-xl mb-1" />
                    Resume
                  </a>
                </li>
                <li>
                  <a className="menu-active" href="./portfiloOne.html">
                    <ImBriefcase className="text-xl mb-1" />
                    Works
                  </a>
                </li>

                <li>
                  <a className="menu-item" href="./contactOne.html">
                    <ImAddressBook className="text-xl mb-1" />
                    Contact
                  </a>

                </li>
              </ul>
            </nav>
          </header>

          {children}

        </div>
      </div>
      <Footer />
    </div>
  );
}
