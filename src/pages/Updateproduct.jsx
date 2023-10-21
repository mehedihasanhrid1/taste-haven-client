import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Updateproduct() {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const product_name = e.target.name.value;
    const image = e.target.image.value;
    const brand_name = e.target.brand.value;
    const price = e.target.price.value;
    const product_category = e.target.category.value;
    const rating = e.target.rating.value;
    const description = e.target.description.value;

    const updatedProductData = {
      _id: data._id, 
      product_name,
      image,
      brand_name,
      price,
      product_category,
      rating,
      description,
    };

    try {
      const response = await fetch(`https://taste-haven-server-bu5qk0l5a-mehedi-hasans-hrid.vercel.app/products/update/${data._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductData),
      });

      if (response.ok) {
          toast.success("Product updated successfully");
          setTimeout(() => {
            navigate(`/product-details/${data._id}`);
          }, 3000);
        console.log('Product updated successfully');
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <section>
      <Helmet>
        <title>Update product - {data.product_name}</title>
      </Helmet>
      <div className="py-10 px-6 lg:px-0 mx-auto max-w-2xl lg:pt-16 lg:pb-10">
      <h3 className="mb-6 lg:mb-8 text-center text-2xl lg:text-4xl font-bold dark:text-neutral-200">
          Update<span className='text-[#FB9333] dark:text-[#289944]'>{" "}{data.product_name}</span>
        </h3>
        <form onSubmit={handleUpdateProduct}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-white">Product Name</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={data.product_name}
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
                defaultValue={data.image}
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
                <option defaultValue={data.brand_name}>{data.brand_name}</option>
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
                defaultValue={data.price}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$10"
                required
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Category</label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option defaultValue={data.product_category}>{data.product_category}</option>
                <option value="Coffee">Coffee</option>
                <option value="Soda">Soda</option>
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
                defaultValue={data.rating}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="5"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm lg:text-base font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                id="description"
                defaultValue={data.description}
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
      <ToastContainer position='top-left' autoClose={2000}/>
    </section>
  );
}

export default Updateproduct;
