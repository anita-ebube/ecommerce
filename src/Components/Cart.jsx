import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list"
        ); // Example URL
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json(); 
        console.log(data); 
        setLoading(false); 
      } catch (error) {
        setError(error.message); 
        setLoading(false); 
      }
    };

    fetchCartData();
  }, []);

  // Step 3: Display loading or error states
  if (loading) {
    return <div>Loading cart data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Step 4: Display cart data once it's fetched
  return (
    <div>
      <h1>Cart Details</h1>
      {cartData && (
        <div>
          <p>Cart ID: {cartData.id}</p>
          <p>User ID: {cartData.userId}</p>
          <h2>Products:</h2>
          <ul>
            {cartData.products.map((product) => (
              <li key={product.id}>
                <p>Product Name: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
