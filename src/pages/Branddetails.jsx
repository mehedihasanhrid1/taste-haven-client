import React from 'react';
import { Carousel , 
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button } from "@material-tailwind/react";
import { AiFillStar } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';


const Branddetails = () => {
    const navigate = useNavigate();
    const handleSeePrductDetails = () => {
      navigate(`/product-details`);
    };
    const handleUpdatePrductDetails = () => {
        navigate(`/update`);
      };

    return (
        <div>
            <Helmet>
                <title>Coca Cola - Ultimate Taste</title>
            </Helmet>
            <Carousel autoplay={true} loop={true} navigation={()=> null} prevArrow={()=> null} nextArrow={()=> null} className="h-72 md:h-96 lg:h-[32rem] w-full">
      <img
        src="https://i.ibb.co/6sTcGyL/th-11.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.ibb.co/xjLbmYV/th-10.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.ibb.co/hRKcGnk/th-7.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
       <div className='flex items-center justify-center flex-col py-10 lg:pt-16 px-6 md:px-10'>
       <h3 className="mb-8 lg:mb-10 text-center text-3xl lg:text-5xl font-bold dark:text-neutral-200">
        Avialable<span className='text-[#FB9333] dark:text-[#289944] ml-2 lg:ml-4'>Products</span>
        </h3>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        <Card className="w-full max-w-[26rem] shadow-lg bg-gray-200 dark:bg-[#253246] hover:scale-105 duration-500">
      <CardHeader floated={false}>
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h4" className="font-bold text-gray-900 dark:text-white">
            Soft Drinks
          </Typography>
          <Typography
            className="flex items-center gap-1.5 font-normal text-gray-900 dark:text-white text-lg"
          >
            <AiFillStar className='text-yellow-800 text-xl' />
            5.0
          </Typography>
        </div>
        <div className='flex items-start flex-col gap-2'>
        <Typography className='text-gray-900 font-semibold dark:text-white text-lg'>
            Brand: <span className='text-gray-700 dark:text-gray-400'>Coca Cola</span>
        </Typography>    
        <Typography className='text-gray-900 font-semibold dark:text-white text-lg'>
            Category: <span className='text-gray-700 dark:text-gray-400'>Soft Drinks</span>
        </Typography>
        </div>
        <Typography className='text-gray-900 font-bold dark:text-white text-2xl mt-4'>
            Price: <span className='text-red-500'>$5</span>
        </Typography>
      </CardBody>
      <CardFooter className="pt-3 flex items-center justify-center gap-4">
        <Button size="lg" fullWidth={true} className='capitalize text-base dark:bg-[#289944] dark:hover:bg-[#248a3e] bg-[#FB9333] hover:bg-[#dd7614]' onClick={handleUpdatePrductDetails}>
          Update
        </Button>
        <Button size="lg" fullWidth={true} className='capitalize text-base bg-[#289944] hover:bg-[#248a3e] dark:bg-[#FB9333] dark:hover:bg-[#dd7614]' onClick={handleSeePrductDetails}>
          Details
        </Button>
      </CardFooter>
    </Card>

        </div>
       </div>
        </div>
    );
};

export default Branddetails;