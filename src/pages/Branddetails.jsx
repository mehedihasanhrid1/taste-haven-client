import React, { useEffect, useState } from 'react';
import { Carousel, Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { AiFillStar } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';
import { useNavigate , useParams } from 'react-router-dom';

const Branddetails = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [sliderData, setSliderData] = useState([]);
  const { brandName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        
        const response = await fetch(`http://localhost:5000/sliders/${brandName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSliderData(data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
      }
    };
  
    fetchSliderData();
  }, [brandName]);
  

  const handleSeeProductDetails = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  const handleUpdateProductDetails = (productId) => {
    navigate(`/update-product/${productId}`);
  };

  const filteredProducts = products.filter((product) => product.brand_name === brandName);


  return (
    <div>
      <Helmet>
        <title>See the details of Brand - Ultimate Taste</title>
      </Helmet>
      <Carousel autoplay={true} loop={true} navigation={() => null} prevArrow={() => null} nextArrow={() => null} className="h-72 md:h-96 lg:h-[32rem] w-full">
      {sliderData.map((slider, index) => (
          <img
            key={index}
            src={slider}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
      <div className='flex items-center justify-center flex-col py-10 lg:pt-16 px-6 md:px-10'>
        <h3 className="mb-8 lg:mb-10 text-center text-3xl lg:text-5xl font-bold dark:text-neutral-200">
          Available<span className='text-[#FB9333] dark:text-[#289944] ml-2 lg:ml-4'>Products</span>
        </h3>
        {
          filteredProducts.length === 0 ? (<div className='flex items-center justify-center h-60'><h2 className='text-4xl text-center lg:text-6xl font-bold'>No product aviable for {brandName}</h2></div>):(<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {filteredProducts.map((product) => (
            <Card key={product._id} className="w-full max-w-[26rem] shadow-lg bg-gray-200 dark:bg-[#253246] hover:scale-105 duration-500">
              <CardHeader floated={false}>
                <img className='h-56'
                  src={product.image}
                  alt={product.product_name}
                />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between h-20 gap-3">
                  <Typography variant="h4" className="font-bold text-gray-900 dark:text-white">
                    {product.product_name}
                  </Typography>
                  <Typography className="flex items-center gap-1.5 font-normal text-gray-900 dark:text-white text-lg">
                    <AiFillStar className='text-yellow-800 text-xl' />
                    {product.rating}
                  </Typography>
                </div>
                <div className='flex items-start flex-col gap-2'>
                  <Typography className='text-gray-900 font-semibold dark:text-white text-lg'>
                    Brand: <span className='text-gray-700 dark:text-gray-400'>{product.brand_name}</span>
                  </Typography>
                  <Typography className='text-gray-900 font-semibold dark:text-white text-lg'>
                    Category: <span className='text-gray-700 dark:text-gray-400'>{product.product_category}</span>
                  </Typography>
                </div>
                <Typography className='text-gray-900 font-bold dark:text-white text-2xl mt-4'>
                  Price: <span className='text-red-500'>{`$${product.price}`}</span>
                </Typography>
              </CardBody>
              <CardFooter className="pt-3 flex items-center justify-center gap-4">
                <Button size="lg" fullWidth={true} className='capitalize text-base dark:bg-[#289944] dark:hover-bg-[#248a3e] bg-[#FB9333] hover-bg-[#dd7614]' onClick={() => handleUpdateProductDetails(product._id)}>
                  Update
                </Button>
                <Button size="lg" fullWidth={true} className='capitalize text-base bg-[#289944] hover-bg-[#248a3e] dark:bg-[#FB9333] dark:hover-bg-[#dd7614]' onClick={() => handleSeeProductDetails(product._id)}>
                  Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>)
        }
      </div>
    </div>
  );
};

export default Branddetails;
