import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Cards() {
    return (
      <div className="mt-10 lg:mt-14 px-5 lg:px-10">
        <div>
        <h3 className="mb-4 md:mb-6 text-center text-3xl lg:text-5xl font-bold dark:text-neutral-200">
        Our<span className='text-[#FB9333] dark:text-[#289944] ml-2 lg:ml-4'>Brands</span>
        </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        <Card className="w-96 dark:bg-[#253246]">
        <CardHeader floated={false}>
          <img className="w-96 object-cover" src="https://i.ibb.co/PwKnBXq/th-9.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white">
            Coca Cola
          </Typography>
        </CardBody>
      </Card>
        </div>
      </div>
      
    );
  }