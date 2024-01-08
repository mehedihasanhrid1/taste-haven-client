import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider';

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cart/items/${user.email}`);
        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
          calculateTotal(data);
        } else {
          console.error('Error fetching cart items');
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [user.email]);

  const handleRemoveFromCart = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/cart/remove?userEmail=${user.email}&itemId=${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
        setCartItems(updatedCartItems);
        calculateTotal(updatedCartItems);
      } else {
        console.error('Error removing item from the cart');
      }
    } catch (error) {
      console.error('Error removing item from the cart:', error);
    }
  };
  

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => {
      const price = parseFloat(item.productData.price);
      return acc + price;
    }, 0);
  
    setTotalPrice(total.toFixed(2));
  };
  

  return (
    <div className="p-4 px-5 md:px-12 lg:px-24 mx-auto my-8 md:py-12 lg:mt-16">
      <Helmet>
        <title>{user.displayName}: Proceed to Checkout - Taste Haven</title>
      </Helmet>

      <div className="bg-white dark:bg-gray-950 shadow-lg rounded-lg">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-6 bg-gray-300 dark:bg-[#293e5f] rounded-t-lg">
          <h1 className="text-lg md:text-xl lg:text-3xl font-bold">Shopping Cart</h1>
          <span className="text-gray-700 dark:text-gray-100 lg:text-xl font-semibold">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-5 dark:bg-gray-200 dark:text-gray-900 text-lg md:text-xl font-semibold">
            Your cart is empty.
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="py-5 pl-4 md:py-6 lg:py-8 md:pl-6 lg:pl-8 md:pr-4 bg-gray-100 dark:bg-[#45597d]">
                <div className="flex items-center mb-4">
                  <img className="h-28 w-28 lg:h-40 lg:w-40 object-contain rounded-lg mr-4 lg:mr-6" src={item.productData.image} alt={item.productData.product_name} />
                  <div className="flex-1">
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">{item.productData.product_name}</h2>
                    <h3 className="text-base md:text-lg lg:text-2xl font-semibold mb-1 lg:mb-2">Brand: {item.productData.brand_name}</h3>
                    <h3 className="text-sm md:text-base lg:text-xl mb-1 lg:mb-2">Category: {item.productData.product_category}</h3>
                    <span className="text-lg lg:text-xl lg:mb-2 font-semibold">Price: ${item.productData.price}</span>
                  </div>
                  <button
                    className="hover:text-red-500 text-xl lg:text-3xl font-bold p-3 mr-2 lg:mr-4 rounded-lg"
                    onClick={() => handleRemoveFromCart(item._id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))}

            <div className="px-4 md:px-6 py-6 md:py-8 bg-gray-200 dark:bg-[#364f77] rounded-b-lg">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg md:text-xl xl:text-2xl">Total:</span>
                <span className="font-bold text-lg md:text-xl xl:text-2xl lg:pr-5">${totalPrice}</span>
              </div>
              <button className="block w-full mt-4 bg-[#289944] hover:bg-[#248a3e] dark:bg-[#FB9333] dark:hover-bg-[#dd7614] md:text-lg lg:text-xl text-white font-bold py-2.5 lg:py-3.5 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
