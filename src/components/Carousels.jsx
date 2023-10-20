import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function Carousels() {
  const slides = [
    "https://i.ibb.co/n1DvLH0/ts-6.jpg",
    "https://i.ibb.co/6Wgp4zx/ts-5.jpg",
    "https://i.ibb.co/vh205BS/ts-4.jpg",
    "https://i.ibb.co/MkvrwHb/ts-3.jpg",
    "https://i.ibb.co/Cmz8YgB/ts-2.jpg",
    "https://i.ibb.co/mJJcTMH/th-1.jpg",
  ];

  return (
    <Carousel autoplay={true} loop={true}>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[36rem] w-full">
          <img
            src={slide}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Savor the Flavor at Taste Haven
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 lg:mb-12 opacity-80"
              >
                Indulge your taste buds in a world of culinary delights at Taste Haven. From artisanal coffee to delectable pastries, and a curated selection of handcrafted dishes, our shop is a haven for food and beverage enthusiasts.
              </Typography>
              <div className="flex justify-center gap-4">
                <Button size="lg" className='bg-[#289944] text-white px-4 md:px-6 py-2 hover:bg-[#248a3e] dark:bg-[#ec7a0f] dark:hover:bg-[#dd7614] rounded-lg'>
                  Explore
                </Button>
                <Button size="lg" color="white" className="border border-[#FB9333] dark:border-[#289944]" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
