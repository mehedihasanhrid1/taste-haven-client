import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Cards() {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/brands");
      if (response.ok) {
        const data = await response.json();
        setBrands(data);
      }
    } catch (error) {
      console.error("Error fetching brand data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSeeDetails = (brand) => {
    navigate(`/details/${brand.brandname}`);
  };

  return (
    <div className="mt-10 lg:mt-14 px-5 lg:px-10">
      <div>
        <h3 className="mb-8 lg:mb-10 text-center text-3xl lg:text-5xl font-bold dark:text-neutral-200">
          Our<span className='text-[#FB9333] dark:text-[#289944] ml-2 lg:ml-4'>Brands</span>
        </h3>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Card
            onClick={() => handleSeeDetails(brand)}
              className="cursor-pointer w-80 lg:w-96 bg-gray-200 dark:bg-[#253246] hover:scale-105 duration-500"
              key={index}
            >
              <CardHeader floated={false}>
                <img
                  className="w-80 lg:w-96 h-60 object-cover"
                  src={brand.image_url} 
                  alt="brand-logo"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white">
                  {brand.brandname} 
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
