import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
  const [formData, setFormData] = useState({
    product_name: '',
    image: '',
    brand_name: '',
    product_category: '',
    price: '',
    rating: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://taste-haven-server-bu5qk0l5a-mehedi-hasans-hrid.vercel.app/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        
        if (data.insertedId) {
          toast.success("Product added successfully");

          setTimeout(() => {
                
        setFormData({
          product_name: '',
          image: '',
          brand_name: '',
          product_category: '',
          price: '',
          rating: '',
          description: '',
        });

          }, 3000);

        } 
        else {
          console.error('Invalid response from the server');
        }
      } 
      else {
        console.error('Request failed with status', response.status);
      }
    } 
    catch (error) {
      console.error('Error adding product:', error);
    }

  };

  return (
    <section>
      <Helmet>
        <title>Add a product on your Product Library</title>
      </Helmet>
      <div className="py-10 px-6 lg:px-0 mx-auto max-w-2xl lg:pt-16 lg:pb-10">
        <h3 className="mb-6 lg:mb-8 text-center text-2xl lg:text-4xl font-bold dark:text-neutral-200">
          Add a new<span className='text-[#FB9333] dark:text-[#289944]'>{" "}Product</span>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="product_name" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white">Product Name</label>
              <input
                type="text"
                name="product_name" 
                id="product_name"
                value={formData.product_name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
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
                value={formData.image}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
                placeholder="Type image url"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="brand_name" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Brand</label>
              <select
                id="brand_name"
                name='brand_name' 
                value={formData.brand_name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
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
                value={formData.price}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
                placeholder="$10"
                required
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="product_category" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Category</label>
              <select
                id="product_category"
                name='product_category' 
                value={formData.product_category}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
              >
                <option defaultValue="Select Category">Select category</option>
                <option value="Soda">Soda</option>
                <option value="Coffee">Coffee</option>
                <option value="First Food">First Food</option>
                <option value="Snacks">Snacks</option>
                <option value="Beverage">Beverage</option>
                <option value="Frozen Food">Frozen Food</option>
                <option value="Tea">Tea</option>
                <option value="Cocolate">Cocolate</option>
              </select>
            </div>
            <div>
              <label htmlFor="rating" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Rating</label>
              <input
                type="number"
                name="rating" 
                id="rating"
                value={formData.rating}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
                placeholder="5"
                required
                min={1}
                max={5}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                id="description"
                name='description' 
                value={formData.description}
                onChange={handleChange}
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center mt-4 sm:mt-6 font-medium py-3 px-5 lg:px-8 text-center rounded-lg bg-[#289944] sm:w-fit hover-bg-[#248a3e] focus-ring-2 focus-outline-none focus-ring-[#36cd5c] dark-focus-ring-[#f99e48] text-white dark-bg-[#FB9333] dark-hover-bg-[#dd7614]"
          >
            Add product
          </button>
        </form>
      </div>
      <ToastContainer position='top-left' autoClose={2000}/>
    </section>
  );
}

export default AddProduct;
