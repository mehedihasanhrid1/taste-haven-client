import React from 'react'
import Logo from '../assets/logo.png';
import { SlSocialFacebook , SlSocialLinkedin , SlSocialYoutube , SlSocialTwitter , SlSocialInstagram , SlSocialReddit , SlSocialSkype } from "react-icons/sl";

export default function Footer() {
  return (
    <div className='md:mt-8 lg:mt-10'>
         <footer className="w-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 shadow">
         <div className="flex flex-col items-center justify-center gap-8 pt-12 md:pt-20 pb-5 md:pb-10">
         <div className='flex items-center justify-center gap-2 md:gap-3'>
                <img className='h-10 md:h-12 lg:h-14' src={Logo} alt="" />
                <h2 className='text-[#289944] dark:text-white text-3xl md:text-5xl  font-bold'>Taste<span className='text-[#FB9333]'>{" "}Haven</span></h2>
            </div>
            <div>
            <ul className="flex flex-wrap items-center  font-medium  justify-center gap-8 md:gap-10 lg:gap-14 text-xl md:text-3xl grid-flow-col mx-4">
              <li>
                <a href="">
                <SlSocialFacebook/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialLinkedin/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialYoutube/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialTwitter/>
                </a>
              </li>
              <li>
                <a href="">
                  <SlSocialInstagram/>
                </a>
              </li>
              <li>
                <a href="">
                 <SlSocialReddit/>
                </a>
              </li>
            </ul>
          </div>
          <div> 
          <div className='mx-5 lg:mx-0'>
          <hr className="h-[1px] bg-gray-400 border-none w-full" />
            </div>         
        <div>
      <div className="grid grid-cols-2 gap-8 lg:gap-28 px-4 pt-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <a href="" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Brand Center</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <a href="" className="hover:underline">Discord Server</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <a href="" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul className="text-gray-600 dark:text-gray-100 font-medium">
                <li className="mb-4">
                    <a href="" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
          </div>
            </div>
            <div className=' bg-gray-200 dark:bg-gray-700 border-t border-gray-300'>
            <p className="text-center md:text-lg py-4 md:py-6 lg:py-8">
            © 2023 Taste Haven. All Rights Reserved.
          </p>
            </div>
    </footer>
    </div>
  )
}
