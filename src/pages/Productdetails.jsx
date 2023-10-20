import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AiFillStar } from 'react-icons/ai';
import { BsFacebook, BsFillHeartFill, BsInstagram, BsTwitter } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';

const Productdetails = () => {
    const handleAddToCart = () => {
        toast.success("Added to cart successfully!");
      };
    return (
        <div>
            <Helmet>
                <title>See Details</title>
            </Helmet>
            <section>
        <div className="container px-5 pt-10 pb-10 md:pb-5 lg:pt-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="" className="lg:w-1/2 w-full object-cover object-center rounded-lg border border-gray-200" src="https://i.ibb.co/PwKnBXq/th-9.jpg" />
            <div className="lg:w-1/2 w-full lg:pl-14 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-xl lg:text-2xl font-semibold md:mt-3 mb-1 lg:mb-2 text-[#FB9333] dark:text-[#289944] tracking-widest">Soft Drinks</h2>
              <h2 className="text-base lg:text-lg font-semibold mb-2 lg:mb-3 text-[#289944] dark:text-[#FB9333] tracking-widest">Drinks</h2>
              <h1 className="text-2xl md:text-3xl title-font font-medium mb-3">Coca Cola</h1>
              <div className="flex mb-4">
                <div className="flex items-center">
                  <div className='text-lg md:text-xl text-yellow-800'>
                  <AiFillStar />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 ml-3">4 Reviews</p>
                </div>
                <span className="flex items-center gap-3 ml-3 pl-3 pt-1 border-l-2 border-gray-200 text-2xl text-gray-700 dark:text-gray-200">
                  <a href=''>
                    <BsFacebook/>
                  </a>
                  <a href=''>
                    <BsTwitter/>
                  </a>
                  <a href=''>
                    <BsInstagram/>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">description</p>
              <div className="flex items-center mt-3 lg:mt-5">
                <span className="title-font font-medium text-2xl lg:text-3xl">price</span>
                <button
                  onClick={handleAddToCart}
                  className="ml-auto text-white  border-0 py-2 px-6 focus:outline-none bg-[#289944] hover:bg-[#248a3e] dark:bg-[#FB9333] dark:hover:bg-[#dd7614] rounded-lg lg:text-lg"
                >
                  Add to Cart
                </button>
                <button className="rounded-full text-xl w-10 h-10 bg-gray-200 dark:bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                 <BsFillHeartFill/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={3000}/>
        </div>
    );
};

export default Productdetails;