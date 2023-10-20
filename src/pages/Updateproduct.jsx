import React from 'react';

function Updateproduct() {
  return (
    <section>
      <div className="py-8 px-5 lg:px-0 mx-auto max-w-2xl lg:pt-16 lg:pb-10">
      <h3 className="mb-6 lg:mb-8 text-center text-2xl lg:text-4xl font-bold dark:text-neutral-200">
          Update<span className='text-[#FB9333] dark:text-[#289944]'>{" "}Product</span>
        </h3>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white">Product Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="image" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white">Image</label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type image url"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="brand" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Brand</label>
              <select
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option defaultValue="Select Category">Select Brand</option>
                <option value="Coca Cola">Coca Cola</option>
                <option value="McDonald's">McDonald's</option>
                <option value="Starbucks">Starbucks</option>
                <option value="PepsiCo">PepsiCo</option>
                <option value="Nestle">Nestle</option>
                <option value="Kellogg's">Kellogg's</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$10"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Category</label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option defaultValue="Select Category">Select category</option>
                <option value="Food">Food</option>
                <option value="Coffee">Coffee</option>
                <option value="Grocery">Grocery</option>
                <option value="Milk">Milk</option>
                <option value="Noodles">Noodles</option>
                <option value="Soft Drinks">Soft Drinks</option>
                <option value="Burger">Burger</option>
                <option value="Cocolate">Cocolate</option>
              </select>
            </div>
            <div>
              <label htmlFor="rating" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Rating</label>
              <input
                type="number"
                name="rating"
                id="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="5"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center mt-4 sm:mt-6 font-medium py-3 px-5 lg:px-8  text-center rounded-lg bg-[#289944] sm:w-fit hover:bg-[#248a3e] focus:ring-2 focus:outline-none focus:ring-[#36cd5c]  dark:focus:ring-[#f99e48] text-white dark:bg-[#FB9333] dark:hover:bg-[#dd7614]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Updateproduct;
