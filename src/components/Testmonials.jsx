import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <div className="mx-5 flex items-center justify-center flex-col">
        <h3 className="mb-6 text-2xl lg:text-4xl font-bold dark:text-neutral-200">
          Customer <span className='text-[#FB9333] dark:text-[#289944]'>Testimonials</span>
        </h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-sm md:text-base max-w-screen-lg text-center">
          At our food and beverage shop, we take pride in offering a wide range of products, including favorites from Coca Cola, McDonald's, Starbucks, PepsiCo, and many more. But don't just take our word for it – hear what our customers have to say!
        </p>
      </div>
      <div className="grid gap-3 md:gap-8 text-center md:grid-cols-3 lg:gap-12 mx-8 lg:mx-16">
        {/* First Testimonial */}
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Customer Avatar"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Web Developer
          </h6>
          <p className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
              />
            </svg>
            I can't get enough of the amazing food at Taste Haven! The flavors are simply out of this world. The artisanal coffee is a delight, and the pastries are to die for. The atmosphere is cozy and welcoming, making it the perfect spot to relax and enjoy delicious food. I highly recommend the handcrafted dishes; they're a true culinary experience!
          </p>
        </div>

        {/* Second Testimonial */}
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Customer Avatar"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Graphic Designer
          </h6>
          <p className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
              />
            </svg>
            Taste Haven is my go-to place for a quick bite or a leisurely meal. The quality and variety of food and beverages are exceptional. Their friendly staff always makes me feel at home. Don't miss their signature coffee blends and the delectable pastries. It's a little piece of food paradise right in our neighborhood.
          </p>
        </div>

        {/* Third Testimonial */}
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
              alt="Customer Avatar"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">John Doe</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Marketing Manager
          </h6>
          <p className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24"
            >
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
              />
            </svg>
            Taste Haven never disappoints! Whether I'm looking for a great cup of coffee, a healthy meal, or some sweet treats, this place has it all. The gallery of food options is diverse, and everything is beautifully presented. Plus, the ambiance is so inviting, making it a perfect spot to unwind and enjoy some quality time with friends. I'm a regular customer and plan to stay that way!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
